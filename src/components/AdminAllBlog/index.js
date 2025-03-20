"use client";
import {
  AdminBlogCardListSkeleton,
  BlogCard,
  BlogCardListSkeleton,
  LastestBlog,
  Searchbar,
} from "@/components";
import {
  getAllBlogsAction,
  getLatestBlogAction,
} from "@/store/slices/BlogSlice";
import { dummyPosts } from "@/testingData/cardData";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
const BlogCardList = ({ posts = dummyPosts }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { blogsData, isLoading, latestBlogData, isLoadinglatestBlog } =
    useSelector((state) => state.blog);

  // Fetch data only once on mount if not already present
  useEffect(() => {
    if (!blogsData || blogsData.length === 0) {
      dispatch(getAllBlogsAction());
    }
  }, [dispatch, blogsData, latestBlogData]); // Dependencies ensure we only fetch if data is missing

  // Memoize the filtered and sorted data
  const filterData = useMemo(() => {
    if (!blogsData) return [];

    // Sort blogs by createdAt (or updatedAt) in descending order (latest first)
    const sortedData = [...blogsData].sort(
      (a, b) =>
        new Date(b.createdAt || b.updatedAt) -
        new Date(a.createdAt || a.updatedAt)
    );

    // Filter based on search query
    const refineData = sortedData.filter((data) => {
      const title = (data.title || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();
      const searchQuery = query.trim().replace(/\s+/g, " ").toLowerCase();
      return title.includes(searchQuery);
    });

    return refineData;
  }, [blogsData, query]); // Only recompute when blogsData or query changes

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <AdminBlogCardListSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Blog Cards Grid */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filterData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-4 ">
              {filterData.map((post) => (
                <div key={post._id} className="relative">
                  <BlogCard
                    imgUrl={post?.imageBase64}
                    title={post.title}
                    description={post.content}
                    category={post.category}
                    blog={post.blog}
                    blogData={post}
                    loading="lazy"
                    className="transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
                No Results Found
              </h1>
              <p className="mt-2 text-gray-500">
                Try adjusting your search query to find what you are looking
                for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCardList;
