import Providers from "@/components/Providers/Providers";
import "./globals.css";
import NextBreadcrumb from "@/components/Shared/BreadCrumb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/auth";

export const metadata = {
  title: "AI Tools",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" data-theme="light">
      <body className="">
        <Providers session={session}>
          <main className="min-h-screen   max-w-[1180px] mx-auto">
            <NextBreadcrumb
              homeElement={"Home"}
              separator={<span> {">"} </span>}
              activeClasses="font-bold"
              containerClasses="text-sm breadcrumbs flex"
              listClasses="hover:underline mx-2 "
              capitalizeLinks
            />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
