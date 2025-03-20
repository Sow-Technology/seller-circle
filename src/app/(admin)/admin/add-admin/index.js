import { AdminRegisterForm } from "@/container";
import { Suspense } from "react";
const AdminRegisterIndex = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminRegisterForm />
      </Suspense>
    </>
  );
};
export default AdminRegisterIndex;
