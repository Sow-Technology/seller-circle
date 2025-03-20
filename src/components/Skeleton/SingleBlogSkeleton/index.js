"use client";
import { Skeleton, Box, Grid, Card, CardContent } from "@mui/material";

export default function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      {/* Main Content Skeleton */}
      <Box className="container mx-auto px-4 py-12">
        <Grid container spacing={4}>
          {/* Article Content Skeleton */}
          <Grid item xs={12} lg={8}>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={300} />
              <CardContent>
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width="80%" height={40} />
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="rectangular" width="100%" height={200} />
              </CardContent>
            </Card>
          </Grid>

          {/* Sidebar Skeleton */}
          <Grid item xs={12} lg={4}>
            {/* Recent Posts Skeleton */}
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Skeleton variant="text" width={150} height={25} />
                {[...Array(4)].map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="text"
                    width="80%"
                    height={20}
                    sx={{ my: 1 }}
                  />
                ))}
              </CardContent>
            </Card>

            {/* CTA Card Skeleton */}
            <Card sx={{ bgcolor: "primary.main", color: "white" }}>
              <CardContent>
                <Skeleton
                  variant="text"
                  width={200}
                  height={30}
                  sx={{ bgcolor: "grey.400" }}
                />
                <Skeleton
                  variant="text"
                  width="90%"
                  height={20}
                  sx={{ my: 1, bgcolor: "grey.400" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={120}
                  height={40}
                  sx={{ my: 2, bgcolor: "grey.400" }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
