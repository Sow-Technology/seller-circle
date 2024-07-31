import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

const TabsSection = ({ active }) => {
  return (
    <div className="my-7">
      <Tabs defaultValue={active} className="w-auto p-3">
        <TabsList className="flex w-full gap-4 flex-wrap h-auto">
          <Link href="/a+content">
            {" "}
            <TabsTrigger value={1}>A+ - Content</TabsTrigger>
          </Link>
          <Link href="/brand-story-creation">
            <TabsTrigger value={2}>Brand Story Creation</TabsTrigger>
          </Link>
          <Link href="/brand-store-design">
            <TabsTrigger value={3}>Brand Store Design</TabsTrigger>
          </Link>
          <Link href="/catalog-and-product-display-design">
            <TabsTrigger value={4}>
              Catalog and Product Display Design
            </TabsTrigger>
          </Link>
          <Link href="/brand-videos-and-ad-videos">
            <TabsTrigger value={5}>Brand Videos & Ad Videos</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabsSection;
