import React from "react";
import { Box, Skeleton, Stack, Avatar, Typography } from "@mui/material";

const LatestBlogSkeleton = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="py-12 text-center">
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="text" width={300} height={20} />
      </div>

      <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full">
        {/* Image Skeleton */}
        <div className="md:w-2/5 h-[250px] md:h-[370px]">
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </div>

        {/* Content Skeleton */}
        <div className="md:w-3/5 p-4">
          <Box className="w-[100px] h-[35px] mb-3 flex justify-center items-center">
            <Skeleton variant="rounded" width={100} height={35} />
          </Box>

          <div className="m-4">
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Avatar>
                <Skeleton variant="circular" width={80} height={80} />
              </Avatar>
              <div>
                <Typography>
                  <Skeleton variant="text" width={120} height={20} />
                </Typography>
                <Typography>
                  <Skeleton variant="text" width={100} height={16} />
                </Typography>
              </div>
            </Stack>

            <Skeleton variant="text" width="80%" height={35} />
            <Skeleton variant="text" width="90%" height={20} />
            <Skeleton variant="text" width="85%" height={20} />
            <Skeleton variant="text" width="75%" height={20} />

            <div className="py-3">
              <Skeleton variant="text" width={120} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogSkeleton;
