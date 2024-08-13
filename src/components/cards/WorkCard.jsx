import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";

const WorkCard = ({ src }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Max zoom level of 3
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom level of 1
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX, startY;

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX - position.x;
      startY = e.clientY - position.y;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      setPosition({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [position]);

  return (
    <div className="shadow-md p-4 px-10 rounded-md border border-gray-200 bg-white object-contain z-0">
      <Dialog>
        <DialogTrigger>
          <Image
            alt=""
            width={1500}
            height={300}
            src={src}
            className="h-[400px] w-auto object-contain cursor-pointer"
          />
        </DialogTrigger>
        <DialogContent className="bg-white/80 backdrop-blur-xl flex items-center w-full min-w-[70vw] justify-center flex-col h-[90vh] font-bold">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>
          <div
            className="relative w-full h-max overflow-auto "
            ref={containerRef}
          >
            <div
              className="transition-transform duration-300"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "0 0",
                width: "max-content",
                height: "max-content",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  alt=""
                  width={1500}
                  height={300}
                  src={src}
                  className="h-full w-max border object-contain cursor-move mx-auto"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleZoomIn}
            className="fixed top-4 left-4 bg-blue-500 text-white p-2 rounded-full"
          >
            <FaSearchPlus />
          </button>
          <button
            onClick={handleZoomOut}
            className="fixed top-4 left-16 bg-blue-500 text-white p-2 rounded-full"
          >
            <FaSearchMinus />
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkCard;
