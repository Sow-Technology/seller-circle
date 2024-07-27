import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const TabsSection = () => {
  return (
    <div>
      <Tabs defaultValue="a+" className="w-auto p-3">
        <TabsList className="flex w-full gap-4 flex-wrap h-auto">
          <TabsTrigger value="a+">A+ - Content</TabsTrigger>
          <TabsTrigger value="brandStory">Brand Story Creation</TabsTrigger>
          <TabsTrigger value="brandStore">Brand Store Design</TabsTrigger>
          <TabsTrigger value="catalog">
            Catalog and Product Display Design
          </TabsTrigger>
          <TabsTrigger value="brandVideos">
            Brand Videos & Ad Videos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="a+">A+ - Content </TabsContent>
        <TabsContent value="brandStory">Brand Story Creation</TabsContent>
        <TabsContent value="brandStore">Brand Store Design</TabsContent>
        <TabsContent value="catalog">
          {" "}
          Catalog and Product Display Design
        </TabsContent>
        <TabsContent value="brandVideos"> Brand Videos & Ad Videos</TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsSection;
