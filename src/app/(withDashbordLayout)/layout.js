import Sidebar from "@/components/Sidebar/Sidebar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  // const session = await getServerSession(authOptions);

  // if (!session) return redirect("/api/auth/signin");
  return (
    <Sidebar>
      <div>{children}</div>
    </Sidebar>
  );
};

export default DashboardLayout;
