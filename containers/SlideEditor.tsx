import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import BgIamgeSlide from "../public/bg-mage-slide.png";
import BgWhite from "../public/bgWhite.jpg";
import styled from "styled-components";
import CoverSlider from "./Slide/CoverSlide";
import SummarySlider from "./Slide/SummarySlide";
import ContentSlider from "./Slide/ContentSlider";
import Content2Slider from "./Slide/Content2Slider";
import pptxgen from "pptxgenjs";
import {
  DefineSlideCover,
  DefineSlideSummary,
  DefineSlideContent,
} from "./Slide/defineSlide";

type Props = {};

const dataList = [
  <CoverSlider bg={BgWhite} />,
  <SummarySlider bg={BgWhite} />,
  <ContentSlider bg={BgWhite} />,
  <Content2Slider bg={BgWhite} />,
];

export default function SlideEditor({}: Props) {
  const [arrSlide, setArrSlide] = useState(dataList);

  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";

  pptx.defineSlideMaster(DefineSlideSummary({ title: "SLIDE_SUMMARY" }));
  pptx.defineSlideMaster(DefineSlideCover({ title: "SLIDE_COVER" }));
  pptx.defineSlideMaster(DefineSlideContent({ title: "SLIDE_CONTENT" }));

  const BtnSavePptx = async () => {
    let slideCover = pptx.addSlide({ masterName: "SLIDE_COVER" });

    slideCover.background = { path: BgWhite.src };
    // slideCover.addImage({ path: BgWhite.src, placeholder: "pic2" });
    slideCover.addImage({
      path: "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      placeholder: "logo1",
    });
    slideCover.addText("Main Title", { placeholder: "mainTitle" });
    slideCover.addText("Type Of Report", { placeholder: "typeOfReport" });
    slideCover.addText("22/april/2022", { placeholder: "date" });
    slideCover.addImage({
      path: "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      placeholder: "smallLogo",
    });
    slideCover.addImage({
      path: "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      placeholder: "imageMain",
    });

    let slideSummry = pptx.addSlide({ masterName: "SLIDE_SUMMARY" });

    slideSummry.background = {
      path: BgWhite.src,
    };
    slideSummry.addText(
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, inventore officia quod ad recusandae a aliquam minus quae dolores illo similique assumenda fugit nulla ex autem sed magni omnis quidem harum quasi nihil, eius enim eveniet quaerat. Impedit magnam enim voluptate corrupti aut, ex esse quos dignissimos nihil, architecto asperiores consequuntur optio quibusdam aliquam natus! Sed fuga omnis harum doloremque quos! Numquam quidem, dolor aut animi itaque voluptates corrupti quisquam ducimus ad perferendis perspiciatis voluptatum provident, error eos veritatis molestiae architecto eius consequatur non esse? Quas, nulla saepe! Odit cum, facere molestias excepturi accusantium aut dignissimos consequuntur ipsum animi repellat!",
      { placeholder: "text" }
    );

    let slideContent = pptx.addSlide({ masterName: "SLIDE_CONTENT" });
    slideContent.background = {
      path: BgWhite.src,
    };
    slideContent.addText("Content", { placeholder: "title" });
    slideContent.addImage({
      path: "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      placeholder: "image",
    });
    slideContent.addText(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, beatae laboriosam? Ab beatae numquam, similique deserunt amet nostrum praesentium facere tempora neque nemo doloremque accusantium? Excepturi, quia debitis, dignissimos quaerat aliquid ratione unde ipsum quo quae, velit id temporibus nulla. Aliquam labore dignissimos amet est enim deserunt, obcaecati quod, adipisci consequatur hic aut molestiae facere? Corporis doloribus ipsum facere mollitia asperiores aliquam, voluptatem quam sint blanditiis eligendi! Corporis autem sapiente eaque illo, quas dolorum optio ipsum natus maxime explicabo quisquam inventore dicta veniam. Necessitatibus accusantium sunt maiores, corporis enim natus fuga, veniam eum porro aut voluptatibus, adipisci dolore! Et, dolorum.",
      { placeholder: "content" }
    );
    slideContent.addImage({
      path: "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      placeholder: "smallLogo",
    });

    await pptx.writeFile().then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="flex-grow content-center p-2 text-center ml-60 mr-60 overflow-y-auto">
      <button onClick={BtnSavePptx}>save</button>
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
