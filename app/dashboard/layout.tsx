'use client';
// import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { getSession } from "next-auth/react";
const inter = Inter({ subsets: ['latin'] });

import { signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        return <div>You are not logged in.</div>;
    }
    return (
        <>
            <div className="flex items-center gap-2 justify-between mr-6 p-6 ">
                <Link   href='/dashboard'> <Button>dashboard</Button> </Link>
                <Link  href='/dashboard/alltasks'><Button>all tasks</Button></Link>
                <div className="flex items-center gap-2 justify-end mr-6 p-6 ">
                   <Avatar> <img className="size-full rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" /></Avatar><span className="font-medium">Welcome, {session.user?.name} </span>
                    <button className='inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 ml-8' onClick={() => signOut()}>Sign out</button>
                </div>
            </div>
            <Providers>{children}</Providers>
        </>

    );
}



