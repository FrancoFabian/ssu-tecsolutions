import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <UserProfile
          appearance={{
            elements: {
              navbarButton: 'text-blue-600',
              card: 'shadow-md rounded-lg',
            },
          }}
        />
      </div>
    </div>
  );
} 