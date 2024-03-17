// const { session } = useSession();

// const userRole = session?.user?.organizationMemberships ?? []; // Add nullish coalescing operator to provide a default empty array value

// const isAdmin = userRole.some(
//   (membership) => membership.role === "org:admin"
// );
import Header from "../_components/Header";
import React from "react";
import UserSidebar from "../_components/user-sidebar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <UserSidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default UserLayout;
