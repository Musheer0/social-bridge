"use client";

import React from "react";
import { signOut } from "@/lib/auth-client";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useUser } from "@/stores/use-user";

const UserButton = ({ showName }: { showName?: boolean }) => {
  const { themes, setTheme, theme } = useTheme();
  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex items-center p-2 gap-2">
        <Skeleton className="w-7 h-7 rounded-full" />
        {showName && <Skeleton className="flex-1 h-4" />}
      </div>
    );
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="w-fit hover:bg-muted-foreground/5 cursor-pointer p-2 rounded-sm flex items-center justify-center group-data-[collapsible=icon]:p-0">
          <div className="flex items-center w-full gap-2">
            <Avatar>
              <AvatarFallback>
                {user.name?.[0]?.toUpperCase() ?? "?"}
              </AvatarFallback>
              <AvatarImage src={user.image || undefined} />
            </Avatar>
            {showName && (
              <span className="text-sm font-bold group-data-[collapsible=icon]:hidden transition-all group-data-[collapsible=icon]:opacity-0 opacity-100 duration-300">
                {user.name}
              </span>
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => signOut().then(() => window.location.reload())}
              className="text-red-500 flex items-center cursor-pointer"
            >
              <DropdownMenuLabel className="flex items-center justify-between w-full text-red-500 gap-3">
                Logout <LogOutIcon className="text-red-500" />
              </DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setTheme(themes.filter((t) => t !== theme)[0]);
              }}
              className="px-4"
            >
              <p>Switch to {themes.filter((t) => t !== theme)[0]} theme</p>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
};

export default UserButton;
