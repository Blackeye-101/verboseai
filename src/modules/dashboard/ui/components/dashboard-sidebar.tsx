"use client"

import { 
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem

} from "@/components/ui/sidebar"
import { BotIcon, StarIcon, VideoIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { usePathname } from "next/navigation"
import DashboardUserButton from "./dashboard-user-button"

const firstSection=[
    {
        icon:VideoIcon,
        label:"Meetings",
        href:"/meetings"
    },
    {
        icon:BotIcon,
        label:"Agents",
        href:"/agents"
    }
]

const secondSection=[
    {
        icon:StarIcon,
        label:"Upgrade",
        href:"/upgrade"
    },
    
]

const DashboardSidebar = () => {
    const pathname=usePathname()
  return (
    <Sidebar>
        <SidebarHeader>
            <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                <Image src="./logo.svg" alt="Verbose.AI" height={36} width={36}/>
                <p className="text-2xl font-semibold">Verbose.AI</p>
            </Link>
        </SidebarHeader>
        <div className="px-4 py-2">
            <Separator className="opacity-10 text-[#fff]"></Separator>
        </div>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {firstSection.map((item)=>(
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton asChild className="h-10 border-transparent"
                                isActive={pathname===item.href}
                                >
                                    <Link href={item.href}>
                                        <item.icon className="size-5"></item.icon>
                                        <span className="text-sm font-medium tracking-tight">{item.label}</span>           
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <div className="px-4 py-2">
                <Separator className="opacity-10 text-[#fff]"></Separator>
            </div>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {secondSection.map((item)=>(
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton asChild className="h-10 border-transparent"
                                isActive={pathname===item.href}
                                >
                                    <Link href={item.href}>
                                        <item.icon className="size-5"></item.icon>
                                        <span className="text-sm font-medium tracking-tight">{item.label}</span>           
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-white">
            <DashboardUserButton></DashboardUserButton>

        </SidebarFooter>

    </Sidebar>
  )
}
export default DashboardSidebar