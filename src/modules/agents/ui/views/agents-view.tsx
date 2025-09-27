"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import {useTRPC} from "@/trpc/client"
import { DataTable } from "../components/data-table"
import {columns} from "../components/columns"
import { EmptyState } from "@/components/empty-state"


export const AgentsView = () => {
    const trpc=useTRPC()
    const {data}=useSuspenseQuery(trpc.agents.getMany.queryOptions())

    return (
        <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
           {data.length > 0 ? (
                <DataTable columns={columns} data={data}></DataTable>
            ) : (
                <EmptyState title="Create your first agent" description="Create an agent to join your meetings. Each agent will follow your instructions and can participants during the call"></EmptyState>
            )}
        </div>
    )
}
