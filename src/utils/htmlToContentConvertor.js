import DOMPurify from "dompurify";

const renderBlogContent = (content) => {
  const isHTML = /<\/?[a-z][\s\S]*>/i.test(content); // Check if content contains HTML tags

  if (isHTML) {
    return (
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    );
  } else {
    return <div>{content}</div>;
  }
};

export default renderBlogContent;
