import React, { useState, useEffect, useMemo, useCallback } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import BgWhite from "../public/bgWhite.jpg";
import BgSectionClose from "../public/bgSectionClose.png";
import BgClosing from "../public/BgClosing.png";
import CoverSlider from "./Slide/CoverSlide";
import SummarySlider from "./Slide/SummarySlide";
import ContentSlider from "./Slide/ContentSlider";
import Content2Slider from "./Slide/Content2Slider";
import pptxgen from "pptxgenjs";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Action } from "../redux";
import moment from "moment";
import {
  DefineSlideCover,
  DefineSlideSummary,
  DefineSlideContent,
  DefineSlideContent2,
  DefineSection,
  DefineClosing,
} from "./Slide/defineSlide";

type Props = {
  onChangeMainTitle: Function;
};

// const dataList = [
//   <CoverSlider bg={BgWhite} />,
//   <SummarySlider bg={BgWhite} />,
//   <ContentSlider bg={BgWhite} />,
//   <Content2Slider bg={BgWhite} />,
// ];

function SlideEditor(props: Props) {
  const { typeSlide, contentCover, arrSlide, setArrSlide }: any = props;
  const Router = useRouter();

  const loadSlide = useCallback(
    (type: any) => {
      let Slide: any;
      if (typeSlide) {
        if (typeSlide === "cover") {
          Slide = <CoverSlider bg={BgWhite} />;
        } else if (typeSlide === "summary") {
          Slide = <SummarySlider bg={BgWhite} />;
        }

        return setArrSlide([...arrSlide, Slide]);
      } else {
        return Router.back();
      }
    },
    [typeSlide]
  );

  const loadSlideNew = () => {
    let Slide: any;
    if (typeSlide) {
      if (typeSlide === "cover") {
        Slide = <CoverSlider bg={BgWhite} />;
      } else if (typeSlide === "summary") {
        Slide = <SummarySlider bg={BgWhite} />;
      }

      return setArrSlide([Slide]);
    } else {
      return Router.back();
    }
  };

  useEffect(() => {
    loadSlideNew();
  }, []);
  useEffect(() => {
    loadSlide("");
  }, [typeSlide]);

  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";

  pptx.defineSlideMaster(DefineSlideSummary({ title: "SLIDE_SUMMARY" }));
  pptx.defineSlideMaster(DefineSlideCover({ title: "SLIDE_COVER" }));
  pptx.defineSlideMaster(DefineSlideContent({ title: "SLIDE_CONTENT" }));
  pptx.defineSlideMaster(DefineSlideContent2({ title: "SLIDE_CONTENT2" }));
  pptx.defineSlideMaster(DefineSection({ title: "SLIDE_SECTION" }));
  pptx.defineSlideMaster(DefineClosing({ title: "SLIDE_CLOSING" }));

  const BtnSavePptx = async () => {
    let slideCover = pptx.addSlide({ masterName: "SLIDE_COVER" });

    slideCover.background = { path: BgWhite.src };
    // slideCover.addImage({ path: BgWhite.src, placeholder: "pic2" });
    slideCover.addImage({
      path: contentCover.smallLogo,
      placeholder: "logo1",
    });
    slideCover.addText(contentCover.mainTitle, { placeholder: "mainTitle" });
    slideCover.addText(contentCover.typeOfReport, {
      placeholder: "typeOfReport",
    });
    slideCover.addText(moment(contentCover.date).format("ddd, DD MMMM yyyy"), {
      placeholder: "date",
    });
    slideCover.addImage({
      path: contentCover.smallLogo,
      placeholder: "smallLogo",
    });
    slideCover.addImage({
      path: contentCover.imageMain,
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

    let slideContent2 = pptx.addSlide({ masterName: "SLIDE_CONTENT2" });
    slideContent2.background = {
      path: BgWhite.src,
    };
    slideContent2.addText("Content Title", { placeholder: "title" });
    slideContent2.addImage({
      placeholder: "imageLeft",
      path: "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    });
    slideContent2.addText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, odio officiis, ipsum debitis distinctio velit aperiam dolorem ea aut molestias voluptate, culpa eos. Qui temporibus eveniet eius, amet doloremque sunt. Dicta mollitia cumque voluptate, ipsum repudiandae doloremque distinctio ut asperiores odit hic totam aliquid recusandae perspiciatis, aspernatur sint, quam itaque.",
      { placeholder: "textLeft" }
    );
    slideContent2.addImage({
      placeholder: "imageRight",
      path: "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    });
    slideContent2.addText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, odio officiis, ipsum debitis distinctio velit aperiam dolorem ea aut molestias voluptate, culpa eos. Qui temporibus eveniet eius, amet doloremque sunt. Dicta mollitia cumque voluptate, ipsum repudiandae doloremque distinctio ut asperiores odit hic totam aliquid recusandae perspiciatis, aspernatur sint, quam itaque.",
      { placeholder: "textRight" }
    );

    let slideSection = pptx.addSlide({ masterName: "SLIDE_SECTION" });
    slideSection.background = {
      path: BgSectionClose.src,
    };
    slideSection.addText("SECTION", { placeholder: "title" });

    let slideClosing = pptx.addSlide({ masterName: "SLIDE_CLOSING" });
    slideClosing.background = {
      path: BgClosing.src,
    };
    slideClosing.addText("bla bla bla", { placeholder: "title" });

    await pptx.writeFile().then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  console.log("props array", arrSlide);

  return (
    <div className="flex-grow content-center p-2 text-center ml-60 mr-60 overflow-y-auto">
      <button
        onClick={BtnSavePptx}
        className=" border border-teal-500 px-2 py-1"
      >
        save
      </button>{" "}
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

const mapStateToProps = (state: any) => {
  return {
    contentCover: state.contentCover,
    arrSlide: state.arrSlide,
    typeSlide: state.typeSlide,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeMainTitle: (payload: any) =>
      dispatch(Action.SET_CONTENT_COVER(payload)),
    setArrSlide: (payload: any) => dispatch(Action.SET_ARR_SLIDE(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditor);
