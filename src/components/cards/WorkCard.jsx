import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WorkCard = ({ src }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div
      className="shadow-md p-4 px-10 rounded-md border border-gray-200 bg-white object-contain z-0"
      onClick={handleClick}
    >
      <Dialog>
        <DialogTrigger>
          {" "}
          <Image
            alt=""
            width={1500}
            height={300}
            src={src}
            className="h-[400px] w-auto object-contain"
          />
        </DialogTrigger>
        <DialogContent className="bg-white/80 backdrop-blur-xl flex items-center justify-center flex-col h-[90vh] font-bold">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>
          <Image
            alt=""
            width={1500}
            height={300}
            src={src}
            className="h-[80vh] w-auto object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkCard;
