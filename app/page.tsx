import { getServerSession } from "next-auth";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default async function  Home() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Task Management System
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Efficiently manage tasks, track time, and collaborate with your team.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}