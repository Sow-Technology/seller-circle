import { EditorRegister } from "@/container";
import { Suspense } from "react";

const EditorPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <EditorRegister />
      </Suspense>
    </>
  );
};
export default EditorPage;
