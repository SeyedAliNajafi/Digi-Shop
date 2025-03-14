"use client";


import { useGetUsers } from "@/hooks/useAuth";
import UsersTable from "./UsersTable";
import Loader from "@/common/Loader";

function UsersPage() {
  const { isLoading, data } = useGetUsers();
  const { users } = data || {};

  if (isLoading) return <Loader/>;
  return (
    <div>
      <h1 className="text-xl font-bold mb-5">اطلاعات کاربران</h1>
      <UsersTable users={users} />
    </div>
  );
}
export default UsersPage;
