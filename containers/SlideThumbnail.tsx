import React from "react";
import Image from "next/image";
import CardImage from "../public/cardHover.png";

type Props = {};

export default function SlideThumbnail({}: Props) {
  return (
    <div
      className="wrap-side-bar bg-white w-60 fixed h-full"
      style={{ paddingBottom: "150px" }}
    >
      <div className="wrap-slide-preview bg-gray-100 border p-2">
        <p className="font-semibold text-slate-900">Slide Preview</p>
      </div>
      <div className="wrap-preview overflow-y-auto p-2 pt-5 flex flex-col gap-5 border h-full">
        {[2, 2, 2, 2, 2, 2, 2, 2].map((item: any, idx: number) => (
          <div key={idx} className="wrap-thumbnail flex items-center gap-3">
            <p className="font-semibold">{idx + 1}</p>
            <div className="card-img">
              <Image src={CardImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
