"use client";
import { Skeleton, Card, CardContent } from "@mui/material";
import LatestBlogSkeleton from "../LatestBlogSkeleton";

const AdminBlogCardListSkeleton = () => {
  return (
    <div className="py-12">
      {/* Blog Cards Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[...Array(8)].map((_, index) => (
          <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
            <Skeleton variant="rectangular" height={180} width="100%" />
            <CardContent>
              <Skeleton variant="text" width="80%" height={30} />
              <Skeleton variant="text" width="90%" height={20} />
              <Skeleton variant="text" width="60%" height={20} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogCardListSkeleton;
