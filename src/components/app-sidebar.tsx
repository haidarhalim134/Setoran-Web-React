"use client"
import Link from "next/link";
import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconDiscount,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconMotorbike,
  IconReport,
  IconSearch,
  IconSettings,
  IconTicket,
  IconTransactionDollar,
  IconTransfer,
  IconUser,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useCurrentUserStore } from "@/lib/stores/current-user";
import { BASE_PATH } from "@/lib/api-client/wrapper";

const data = {
  user: {
    name: "braacellettt",
    email: "braacellettt@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: IconTransactionDollar,
    },
    {
      title: "Motors",
      url: "/motors",
      icon: IconMotorbike,
    },
    {
      title: "Mitra",
      url: "/mitra",
      icon: IconUsers,
    },
    {
      title: "Vouchers",
      url: "/vouchers",
      icon: IconTicket,
    },
    {
      title: "Discounts",
      url: "/discounts",
      icon: IconDiscount,
    },
    {
      title: "Users",
      url: "/users",
      icon: IconUser,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  // navSecondary: [
  //   // {
  //   //   title: "Settings",
  //   //   url: "#",
  //   //   icon: IconSettings,
  //   // },
  //   // {
  //   //   title: "Get Help",
  //   //   url: "#",
  //   //   icon: IconHelp,
  //   // },
  //   // {
  //   //   title: "Search",
  //   //   url: "#",
  //   //   icon: IconSearch,
  //   // },
  // ],
  // documents: [
  //   {
  //     name: "Transsactions",
  //     url: "#",
  //     icon: IconTransactionDollar,
  //   },
  //   {
  //     name: "Reports",
  //     url: "#",
  //     icon: IconReport,
  //   },
  //   {
  //     name: "Word Assistant",
  //     url: "#",
  //     icon: IconFileWord,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const currentUser = useCurrentUserStore((state) => state.currentUser)

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">SETORAN</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{name: currentUser?.nama || "", email: currentUser?.email || "", avatar: (currentUser?.idGambar ? `${BASE_PATH}/storage/fetch/${currentUser?.idGambar}` : `${BASE_PATH}/avatar?name=${currentUser?.nama}`)}} />
      </SidebarFooter>
    </Sidebar>
  )
}