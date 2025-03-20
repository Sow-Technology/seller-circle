import { AdminProfilePage } from "@/components";
import { Suspense } from "react";

const AdminProfieIndex = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminProfilePage />
      </Suspense>
    </>
  );
};
export default AdminProfieIndex;
