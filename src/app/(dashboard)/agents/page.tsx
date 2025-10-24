import { ErrorState } from "@/components/error-state"
import { LoadingState } from "@/components/loading-state"
import {AgentsView} from "@/modules/agents/ui/views/agents-view"
import { getQueryClient, trpc } from "@/trpc/server"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { AgentsListHeader } from "@/modules/agents/ui/components/agents-list-header"
import { SearchParams } from "nuqs"
import { loadSearchParams } from "@/modules/agents/params"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

interface Props{
  searchParams:Promise<SearchParams>,
}

const Page = async({searchParams}:Props) => {

  const filters=await loadSearchParams(searchParams)

  const session=await auth.api.getSession({
    headers:await headers()
  })

  if(!session){
    redirect("/sign-in")
  }

  const queryClient=getQueryClient()
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({...filters}))

  return (
    <>
    <AgentsListHeader>
    </AgentsListHeader>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<LoadingState title="Loading Agents..." description="This may take a few seconds."></LoadingState>}>
        <ErrorBoundary fallback={<ErrorState title="Something went wrong" description="Please try again later"></ErrorState>}>
          <AgentsView></AgentsView>
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
    </>
  )
}
export default Page