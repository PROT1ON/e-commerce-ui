"use client";

import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  Plus,
  ShirtIcon,
  User2Icon,
  ShoppingCart,
  Receipt,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";

import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Sheet, SheetTrigger } from "./ui/sheet";

import EditUser from "./EditUser";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
// import AddProduct from "./AddProduct";
// import AddCategory from "./AddCategory";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
                <span>Lama Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {/* Application */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>

                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Products */}
        <SidebarGroup>
          <SidebarGroupLabel>Products</SidebarGroupLabel>

          <SidebarGroupAction>
            <Plus />
            <span className="sr-only">Add Product</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>

              {/* See All Products */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/products">
                    <ShirtIcon />
                    <span>See All Products</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Add Product */}
              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton>
                      <Plus />
                      <span>Add Product</span>
                    </SidebarMenuButton>
                  </SheetTrigger>

                  <AddProduct />
                </Sheet>
              </SidebarMenuItem>

              {/* Add Category */}
              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton>
                      <Plus />
                      <span>Add Category</span>
                    </SidebarMenuButton>
                  </SheetTrigger>

                  <AddCategory />
                </Sheet>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Users */}
        <SidebarGroup>
          <SidebarGroupLabel>Users</SidebarGroupLabel>

          <SidebarGroupAction>
            <Plus />
            <span className="sr-only">Add Users</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>

              {/* See All Users */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/users">
                    <User2Icon />
                    <span>See All Users</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Add User */}
              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton>
                      <Plus />
                      <span>Add User</span>
                    </SidebarMenuButton>
                  </SheetTrigger>

                  <EditUser />
                </Sheet>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
  <SidebarGroupLabel>Orders / Payments</SidebarGroupLabel>

  <SidebarGroupContent>
    <SidebarMenu>
      {/* Payments / Transactions */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/transactions">
            <Receipt />
            <span>See All Transactions</span>
          </Link>
        </SidebarMenuButton>

        <SidebarMenuBadge>24</SidebarMenuBadge>
      </SidebarMenuItem>

    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  <span>John Doe</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;