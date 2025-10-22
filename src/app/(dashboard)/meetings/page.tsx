import { MeetingsView, MeetingsViewError, MeetingsViewLoading } from "@/modules/meetings/ui/meetings-view"
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary} from "@tanstack/react-query"
import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import { Suspense } from "react"

const Page = () => {
  const queryClient=getQueryClient()

  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<MeetingsViewLoading></MeetingsViewLoading>}>
        <ErrorBoundary fallback={<MeetingsViewError></MeetingsViewError>}>
          <MeetingsView></MeetingsView>
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  )
}
export default Page