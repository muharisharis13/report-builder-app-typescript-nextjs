import React from "react";
import Image from "next/image";
import CardImage from "../public/cardHover.png";
import { connect } from "react-redux";

type Props = {
  btnSave: any;
  arrSlideContent: any;
};

function SlideThumbnail({ btnSave, arrSlideContent }: Props) {
  console.log({ arrSlideContent });

  const checkNameSlide = (item: any) => {
    if (item?.key?.includes("cover")) {
      return "Cover";
    } else if (item?.key?.includes("content")) {
      return "Content";
    } else if (item?.key?.includes("conten2")) {
      return "Content 2";
    } else if (item?.key?.includes("section")) {
      return "Section";
    } else if (item?.key?.includes("closing")) {
      return "Closing";
    } else if (item?.key?.includes("summary")) {
      return "Summary";
    }
  };

  return (
    <div
      className="wrap-side-bar bg-white w-60 fixed h-full"
      style={{ paddingBottom: "150px" }}
    >
      <div className="wrap-slide-preview bg-gray-100 border p-2 flex justify-between">
        <div className="font-semibold text-slate-900">Slide Preview</div>
        <button
          className="btn bg-cyan-500 text-white py-1 w-20 font-semibold"
          onClick={btnSave}
        >
          Save
        </button>
      </div>
      <div className="wrap-preview overflow-y-auto p-2 pt-5 flex flex-col gap-5 border h-full">
        {arrSlideContent.map((item: any, idx: number) => (
          <div key={idx} className="wrap-thumbnail flex items-center gap-3">
            <p className="font-semibold">{idx + 1}</p>
            <div className="card-img">
              <Image src={CardImage} />
              <div>{checkNameSlide(item)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    btnSave: state.btnSave,
    arrSlideContent: state.arrSlideContent,
  };
};

export default connect(mapStateToProps)(SlideThumbnail);
