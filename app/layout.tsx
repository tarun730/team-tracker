import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { getSession } from "next-auth/react";
const inter = Inter({ subsets: ['latin'] });

import { useRouter } from 'next/router';

// export const getServerSideProps = async (context:any) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth/signin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };

export const metadata = {
  title: 'Task Management System',
  description: 'A comprehensive task management system with time tracking',
};

export default function RootLayout({
  children,
session 
}: {
  children: React.ReactNode,
  session :any
}) {
  
  // console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}



