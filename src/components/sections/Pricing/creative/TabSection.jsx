import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";
import Basic from "./Basic";

const TabsSection = ({ active, IN }) => {
  return (
    <div className="my-7">
      <Tabs defaultValue={active} className="w-auto p-3" id="tabs">
        <TabsList className="flex w-full gap-4 flex-wrap h-auto">
          {" "}
          <TabsTrigger value={1}>Basic A+ </TabsTrigger>
          <TabsTrigger value={2}>Premium A+</TabsTrigger>
          <TabsTrigger value={3}>Brand Story</TabsTrigger>
          <TabsTrigger value={4}>Brand Store </TabsTrigger>
          <TabsTrigger value={5}> Videos</TabsTrigger>
          <TabsTrigger value={6}> Listing Image Design</TabsTrigger>
        </TabsList>
        <TabsContent value={1}>
          <Basic IN={IN} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsSection;
