import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

const TabsSection = () => {
  return (
    <div>
      <Tabs defaultValue="a+" className="w-auto p-3">
        <TabsList className="flex w-full gap-4 flex-wrap h-auto">
          <Link href="/a+content">
            {" "}
            <TabsTrigger value="a+">A+ - Content</TabsTrigger>
          </Link>
          <Link href="/brand-story-creation">
            <TabsTrigger value="brandStory">Brand Story Creation</TabsTrigger>
          </Link>
          <Link href="/brand-store-design">
            <TabsTrigger value="brandStore">Brand Store Design</TabsTrigger>
          </Link>
          <Link href="/catalog-and-product-display-design">
            <TabsTrigger value="catalog">
              Catalog and Product Display Design
            </TabsTrigger>
          </Link>
          <Link href="/brand-videos-and-ad-videos">
            <TabsTrigger value="brandVideos">
              Brand Videos & Ad Videos
            </TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabsSection;
