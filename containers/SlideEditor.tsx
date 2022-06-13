import React, { useEffect, memo } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import BgWhite from "../public/bgWhite.jpg";
import BgSectionClose from "../public/bgSectionClose.png";
import BgClosing from "../public/BgClosing.png";
import CoverSlider from "./Slide/CoverSlide";
import SummarySlider from "./Slide/SummarySlide";
import ContentSlider from "./Slide/ContentSlider";
import Content2Slider from "./Slide/Content2Slider";
import SectionSlider from "./Slide/sectionSlider";
import ClosingSlider from "./Slide/closingSlider";
import pptxgen from "pptxgenjs";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Action } from "../redux";
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

function SlideEditor(props: Props) {
  const {
    typeSlide,
    arrSlideContent,
    changeKey,
    setArrSlideContent,
    setBtnSave,
  }: any = props;
  const Router = useRouter();

  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";

  pptx.defineSlideMaster(DefineSlideSummary({ title: "SLIDE_SUMMARY" }));
  pptx.defineSlideMaster(DefineSlideCover({ title: "SLIDE_COVER" }));
  pptx.defineSlideMaster(DefineSlideContent({ title: "SLIDE_CONTENT" }));
  pptx.defineSlideMaster(DefineSlideContent2({ title: "SLIDE_CONTENT2" }));
  pptx.defineSlideMaster(DefineSection({ title: "SLIDE_SECTION" }));
  pptx.defineSlideMaster(DefineClosing({ title: "SLIDE_CLOSING" }));

  const BtnSavePptx = async () => {
    console.log("berhasil");
    arrSlideContent?.map((item: any, idx: any) => {
      if (item.key.includes("cover")) {
        let slideCover = pptx.addSlide({ masterName: "SLIDE_COVER" });
        slideCover.background = { path: BgWhite.src };
        slideCover.addImage({
          path: arrSlideContent[idx].image1
            ? URL.createObjectURL(arrSlideContent[idx].image1)
            : "-",
          placeholder: "logo1",
        });
        slideCover.addText(
          arrSlideContent[idx].title ? arrSlideContent[idx].title : "-",
          {
            placeholder: "mainTitle",
          }
        );
        slideCover.addText(
          arrSlideContent[idx].typeOfReport
            ? arrSlideContent[idx].typeOfReport
            : "-",
          {
            placeholder: "typeOfReport",
          }
        );
        slideCover.addText(
          // moment(arrSlideContent[idx].date).format('ddd, DD MMMM yyyy'),
          arrSlideContent[idx].date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          {
            placeholder: "date",
          }
        );
        slideCover.addImage({
          path: arrSlideContent[idx].image2
            ? URL.createObjectURL(arrSlideContent[idx].image2)
            : "-",
          placeholder: "smallLogo",
        });
        slideCover.addImage({
          path: arrSlideContent[idx].mainImage
            ? URL.createObjectURL(arrSlideContent[idx].mainImage)
            : "-",
          placeholder: "imageMain",
        });
      } else if (item.key.includes("summary")) {
        let slideSummry = pptx.addSlide({ masterName: "SLIDE_SUMMARY" });

        slideSummry.addText(
          arrSlideContent[idx].narasi ? arrSlideContent[idx].narasi : "-",
          {
            placeholder: "text",
          }
        );

        slideSummry.background = {
          path: BgWhite.src,
        };
      } else if (item.key.includes("content")) {
        let content = pptx.addSlide({ masterName: "SLIDE_CONTENT" });
        content.addText(
          arrSlideContent[idx].title ? arrSlideContent[idx].title : "-",
          {
            placeholder: "title",
          }
        );
        content.addText(
          arrSlideContent[idx].desc ? arrSlideContent[idx].desc : "-",
          {
            placeholder: "content",
          }
        );
        content.addImage({
          path: arrSlideContent[idx].image1
            ? URL.createObjectURL(arrSlideContent[idx].image1)
            : "-",
          placeholder: "smallLogo",
        });
        content.addImage({
          path: arrSlideContent[idx].mainImage
            ? URL.createObjectURL(arrSlideContent[idx].mainImage)
            : "-",
          placeholder: "image",
        });
        content.background = { path: BgWhite.src };
      } else if (item.key.includes("conten2")) {
        let content2 = pptx.addSlide({ masterName: "SLIDE_CONTENT2" });

        content2.addText(
          arrSlideContent[idx].title ? arrSlideContent[idx].title : "-",
          {
            placeholder: "title",
          }
        );
        content2.addText(
          arrSlideContent[idx].desc1 ? arrSlideContent[idx].desc1 : "-",
          {
            placeholder: "textLeft",
          }
        );
        content2.addText(
          arrSlideContent[idx].desc2 ? arrSlideContent[idx].desc2 : "-",
          {
            placeholder: "textRight",
          }
        );
        content2.addImage({
          path: arrSlideContent[idx].image1
            ? URL.createObjectURL(arrSlideContent[idx].image1)
            : "-",
          placeholder: "imageLeft",
        });
        content2.addImage({
          path: arrSlideContent[idx].image2
            ? URL.createObjectURL(arrSlideContent[idx].image2)
            : "-",
          placeholder: "imageRight",
        });
        content2.background = { path: BgWhite.src };
      } else if (item.key.includes("section")) {
        let section = pptx.addSlide({ masterName: "SLIDE_SECTION" });
        section.addText(
          arrSlideContent[idx].title ? arrSlideContent[idx].title : "-",
          {
            placeholder: "title",
          }
        );
        section.background = { path: BgSectionClose.src };
      } else if (item.key.includes("closing")) {
        let closing = pptx.addSlide({ masterName: "SLIDE_CLOSING" });
        closing.addText(
          arrSlideContent[idx].title ? arrSlideContent[idx].title : "-",
          {
            placeholder: "title",
          }
        );
        closing.background = { path: BgClosing.src };
      }
    });
    await pptx.writeFile().then((res) => {
      // if (res) {
      //   location.reload();
      // }
    });
  };

  const setKeySlide = (key: any) => {
    changeKey(key);
  };

  const deleteSlide = async (idx: any) => {
    const filter = arrSlideContent.filter((filter: any) => filter.key !== idx);

    setArrSlideContent(filter);
  };

  useEffect(() => {
    setBtnSave(BtnSavePptx);
    if (arrSlideContent?.length === 0) {
      Router.push("/");
    }
  }, [arrSlideContent]);

  return (
    <div className="flex-grow content-center p-2 text-center ml-60 mr-60 overflow-y-auto">
      {/* <button
        onClick={BtnSavePptx}
        className=" border border-teal-500 px-2 py-1"
      >
        save
      </button>{" "} */}
      {arrSlideContent?.map((item: any, idx: number) => (
        <div
          className="w-full border mt-10"
          style={{ minHeight: "427px" }}
          key={idx}
        >
          <div className="wrap-button flex items-center justify-end">
            <button className=" bg-slate-200 w-6 h-6 flex items-center justify-center">
              <PencilIcon
                width={20}
                className=" text-gray-500"
                onClick={() => setKeySlide(`${item.key}`)}
              />
            </button>
            <button className=" bg-slate-200 w-6 h-6 flex items-center justify-center">
              <TrashIcon
                width={20}
                className=" text-gray-500"
                onClick={() => deleteSlide(`${item.key}`)}
              />
            </button>
          </div>
          {/* slide content */}
          <div className="list-slide mb-5">
            {item.key?.includes("cover") ? (
              <CoverSlider
                bg={BgWhite}
                narasi={item.narasi}
                title={item.title}
                typeOfReport={item.typeOfReport}
                date={item.date}
                mainImage={item.mainImage}
                image1={item.image1}
                image2={item.image2}
              />
            ) : item.key?.includes("summary") ? (
              <SummarySlider
                bg={BgWhite}
                narasi={item.narasi}
                // title={item.title}
                // typeOfReport={item.typeOfReport}
                // date={item.date}
              />
            ) : item.key?.includes("content") ? (
              <ContentSlider
                bg={BgWhite}
                title={item.title}
                mainImage={item.mainImage}
                image1={item.image1}
                desc={item.desc}
              />
            ) : item.key?.includes("conten2") ? (
              <Content2Slider
                bg={BgWhite}
                title={item.title}
                image1={item.image1}
                image2={item.image2}
                desc1={item.desc1}
                desc2={item.desc2}
              />
            ) : item.key?.includes("section") ? (
              <SectionSlider bg={BgSectionClose} title={item.title} />
            ) : item.key?.includes("closing") ? (
              <ClosingSlider bg={BgSectionClose} title={item.title} />
            ) : null}
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
    arrSlideContent: state.arrSlideContent,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeMainTitle: (payload: any) =>
      dispatch(Action.SET_CONTENT_COVER(payload)),
    setArrSlide: (payload: any) => dispatch(Action.SET_ARR_SLIDE(payload)),
    changeKey: (payload: any) => dispatch(Action.SET_KEY_SLIDE(payload)),
    setArrSlideContent: (data: any) =>
      dispatch(Action.SET_ARR_SLIDE_CONTENT(data)),
    setBtnSave: (payload: any) => dispatch(Action.SET_BTN_SAVE(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SlideEditor));
