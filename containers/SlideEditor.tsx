import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
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
  const {
    typeSlide,
    contentCover,
    arrSlide,
    setArrSlide,
    contentSummary,
    arrSlideContent,
    changeKey
  }: any = props;
  const Router = useRouter();

  const loadSlideNew = () => {
    let Slide: any;
    if (typeSlide) {
      typeSlide.map((item: any) => {
        if (item === "cover") {
          Slide = <CoverSlider bg={BgWhite} />;
        } else if (item === "summary") {
          Slide = <SummarySlider bg={BgWhite} />;
        }
      });

      return setArrSlide([...arrSlide, Slide]);
    } else {
      return Router.back();
    }
  };

  useEffect(() => {
    loadSlideNew();
  }, []);
  useEffect(() => {
    loadSlideNew();
    console.log("arrSlideContent", arrSlideContent);
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
    typeSlide?.map((item: any) => {
      switch (item) {
        case "cover":
          let slideCover = pptx.addSlide({ masterName: "SLIDE_COVER" });

          slideCover.background = { path: BgWhite.src };
          // slideCover.addImage({ path: BgWhite.src, placeholder: "pic2" });
          slideCover.addImage({
            path: contentCover.smallLogo,
            placeholder: "logo1",
          });
          slideCover.addText(contentCover.mainTitle, {
            placeholder: "mainTitle",
          });
          slideCover.addText(contentCover.typeOfReport, {
            placeholder: "typeOfReport",
          });
          slideCover.addText(
            moment(contentCover.date).format("ddd, DD MMMM yyyy"),
            {
              placeholder: "date",
            }
          );
          slideCover.addImage({
            path: contentCover.smallLogo,
            placeholder: "smallLogo",
          });
          slideCover.addImage({
            path: contentCover.imageMain,
            placeholder: "imageMain",
          });

          break;
        case "summary":
          let slideSummry = pptx.addSlide({ masterName: "SLIDE_SUMMARY" });

          slideSummry.background = {
            path: BgWhite.src,
          };
          slideSummry.addText(contentSummary.narasi, { placeholder: "text" });

          break;

        default:
          break;
      }
    });
    await pptx.writeFile().then((res) => {
      // if (res) {
      //   location.reload();
      // }
    });

    // if (typeSlide === "summary") {
    //   let slideSummry = pptx.addSlide({ masterName: "SLIDE_SUMMARY" });

    //   slideSummry.background = {
    //     path: BgWhite.src,
    //   };
    //   slideSummry.addText(contentSummary.narasi, { placeholder: "text" });

    //   let slideCover = pptx.addSlide({ masterName: "SLIDE_COVER" });

    //   slideCover.background = { path: BgWhite.src };
    //   // slideCover.addImage({ path: BgWhite.src, placeholder: "pic2" });
    //   slideCover.addImage({
    //     path: contentCover.smallLogo,
    //     placeholder: "logo1",
    //   });
    //   slideCover.addText(contentCover.mainTitle, { placeholder: "mainTitle" });
    //   slideCover.addText(contentCover.typeOfReport, {
    //     placeholder: "typeOfReport",
    //   });
    //   slideCover.addText(
    //     moment(contentCover.date).format("ddd, DD MMMM yyyy"),
    //     {
    //       placeholder: "date",
    //     }
    //   );
    //   slideCover.addImage({
    //     path: contentCover.smallLogo,
    //     placeholder: "smallLogo",
    //   });
    //   slideCover.addImage({
    //     path: contentCover.imageMain,
    //     placeholder: "imageMain",
    //   });

    //   await pptx.writeFile().then((res) => {
    //     if (res) {
    //       location.reload();
    //     }
    //   });
    // }
  };

  const setKeySlide = (key:any) => {
    changeKey(key)
    // console.log(key)
  }

  console.log("Content - " , arrSlideContent )

  return (
    <div className="flex-grow content-center p-2 text-center ml-60 mr-60 overflow-y-auto">
      <button
        onClick={BtnSavePptx}
        className=" border border-teal-500 px-2 py-1"
      >
        save
      </button>{" "}
      {arrSlideContent?.map((item: any, idx: number) => (
        <div
          className="w-full border mt-10"
          style={{ minHeight: "427px" }}
          key={idx}
        >
          <div className="wrap-button flex items-center justify-end">
            <button className=" bg-slate-200 w-6 h-6 flex items-center justify-center">
              <PencilIcon width={20} className=" text-gray-500" onClick={()=>setKeySlide(`${item.key}`)} />
            </button>
            <button className=" bg-slate-200 w-6 h-6 flex items-center justify-center">
              <TrashIcon width={20} className=" text-gray-500" />
            </button>
          </div>
          {/* slide content */}
          <div className="list-slide mb-5">
            {
              item.key === `cover_${idx}`?  <CoverSlider bg={BgWhite} title={item.title} />
              : null

            }
          </div>
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
    contentSummary: state.contentSummary,
    arrSlideContent:state.arrSlideContent
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeMainTitle: (payload: any) =>
      dispatch(Action.SET_CONTENT_COVER(payload)),
    setArrSlide: (payload: any) => dispatch(Action.SET_ARR_SLIDE(payload)),
    changeKey : (payload: any) => dispatch(Action.SET_KEY_SLIDE(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SlideEditor));
