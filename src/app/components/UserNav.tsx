"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu"
import { signOut } from "next-auth/react"
import { redirect } from "next/navigation";

export default function UserNav() {
    return (
        <div className="">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="relative h-10 w-10 rounded-sm" >
                        <Avatar className="h-10 w-10 rounded-sm">
                            <AvatarImage src="https://xajzeyeayrfjcmamfmqy.supabase.co/storage/v1/object/public/user%20image/avatar.png" />
                            <AvatarFallback className="rounded-sm"> Jan</AvatarFallback>
                        </Avatar>

                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel>
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">Jan</p>
                            <p className="text-xl leading-none text-muted-foreground">jasda@gmail.com</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}
