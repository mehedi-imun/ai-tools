"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
console.log(status)
  const router = useRouter();

  if (status === "loading") {
    return <div >Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }
  
  return (
    <div >
        <button  onClick={() => signIn("google")} class="btn btn-active btn-neutral">Sign in with Google</button>
    </div>
  );
};

export default LoginPage;