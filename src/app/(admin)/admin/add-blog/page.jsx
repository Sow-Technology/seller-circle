const { Suspense } = require("react");
const { default: AddBlogIndex } = require(".");


const AddblogPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AddBlogIndex />
      </Suspense>
    </>
  );
};
export default AddblogPage;
