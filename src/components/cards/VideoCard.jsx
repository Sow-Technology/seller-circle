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
import { Play } from "lucide-react";

const VideoCard = ({ src, thumb }) => {
  return (
    <div className="shadow-md p-4 px-10 rounded-md border border-gray-200 bg-white object-contain z-0">
      <Dialog>
        <DialogTrigger>
          {" "}
          <div className=" w-auto object-contain relative">
            <Image src={thumb} width={500} height={250} alt="" />
            <div className="absolute bg-white/80 top-1/2 left-1/2 -translate-x-1/2 p-4 rounded-full">
              <Play />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white/80 backdrop-blur-xl flex w-full items-center justify-center flex-col h-[90vh] font-bold min-w-[70vw]">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>
          <video
            controls
            autoPlay
            playsInline
            className="w-full h-auto object-contain"
          >
            <source src={src} type="video/mp4" />
          </video>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCard;
