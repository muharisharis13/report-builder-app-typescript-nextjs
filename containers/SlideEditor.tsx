import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import BgIamgeSlide from "../public/bg-mage-slide.png";
import BgWhite from "../public/bgWhite.jpg";
import styled from "styled-components";
import CoverSlider from "./Slide/CoverSlide";
import SummarySlider from "./Slide/SummarySlide";
import ContentSlider from "./Slide/ContentSlider";
import Content2Slider from "./Slide/Content2Slider";

type Props = {};

const dataList = [
  <CoverSlider bg={BgWhite} />,
  <SummarySlider bg={BgWhite} />,
  <ContentSlider bg={BgWhite} />,
  <Content2Slider bg={BgWhite} />,
];

export default function SlideEditor({}: Props) {
  const [arrSlide, setArrSlide] = useState(dataList);

  return (
    <div className="flex-grow content-center p-2 text-center ml-60 mr-60 overflow-y-auto">
      {arrSlide?.map((item: any, idx: number) => (
        <div
          className="w-full border mt-10"
          style={{ minHeight: "427px" }}
          key={idx}
        >
          <div className="wrap-button flex items-center justify-end">
            <button className=" bg-slate-200 w-6 h-6 flex items-center justify-center">
              <PencilIcon width={20} className=" text-gray-500" />
            </button>
            <button className=" bg-slate-200 w-6 h-6 flex items-center justify-center">
              <TrashIcon width={20} className=" text-gray-500" />
            </button>
          </div>

          {/* slide content */}
          <div className="list-slide mb-5">{item}</div>
        </div>
      ))}
    </div>
  );
}
