import { ErrorState } from "@/components/error-state"
import { LoadingState } from "@/components/loading-state"
import {AgentsView} from "@/modules/agents/ui/views/agents-view"
import { getQueryClient, trpc } from "@/trpc/server"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

const Page = async() => {

  const queryClient=getQueryClient()
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<LoadingState title="Loading Agents..." description="This may take a few seconds."></LoadingState>}>
        <ErrorBoundary fallback={<ErrorState title="Something went wrong" description="Please try again later"></ErrorState>}>
          <AgentsView></AgentsView>
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  )
}
export default Page