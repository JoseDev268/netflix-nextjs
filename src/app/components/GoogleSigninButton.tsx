"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";


export default function GoogleSigninButton() {
    return (
        <Button onClick={() => signIn("google")} variant="outline" size="icon">
            <Image
                src={'/google.svg'}
                alt="Google icon"
                width={60}
                height={60}
            />
        </Button>
    )
}
