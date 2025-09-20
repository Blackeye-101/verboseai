"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import {useTRPC} from "@/trpc/client"
import { ResponsiveDialog } from "@/components/responsive-dialog"

export const AgentsView = () => {
    const trpc=useTRPC()
    const {data}=useSuspenseQuery(trpc.agents.getMany.queryOptions())

    return (
        <div>
            <ResponsiveDialog
            title="Responsive test"
            description="Responsive description"
            open={false}
            onOpenChange={()=>{}}>
                <div>
                This is a responsive dialog content
                </div>
            </ResponsiveDialog>
            {JSON.stringify(data, null, 2)}
        </div>
    )
}
