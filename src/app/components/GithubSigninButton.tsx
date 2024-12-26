"use client";

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function GithubSigninButton() {
    return (
        <Button
            onClick={() => signIn("github")}
            variant={'outline'}
            size={'icon'}
        >
            <Image
                src={'/github.svg'}
                alt='github logo'
                width={60}
                height={60}
            />
        </Button>
    );
}