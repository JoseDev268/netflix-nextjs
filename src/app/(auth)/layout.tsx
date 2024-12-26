import Image from "next/image";
import { ReactNode } from "react";
export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex relative w-h-screen flex-col bg-black md:items-justify-center md:bg-transparent">
            <Image
                src={'/login_background.jpg'}
                alt="backgroundimage"
                fill
                priority
                className="hidden sm:flex sm:object-cover -z-10 brightness-50"
            />
            <Image 
                src={'/netflix_logo.svg'}
                alt="logo"
                className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
                width={120}
                height={120}
                priority
            />
            {children}
        </div>
    );
}