import React from "react";
import styled from "styled-components";
import pptxgen from "pptxgenjs";
import Image from "next/image";
import moment from "moment";
import { connect } from "react-redux";

interface PropsItf {
  bg: any;
}

interface ProptContentCover {
  mainTitle: string;
  typeOfReport: string;
  date: Date;
  smallLogo: any;
  imageMain: any;
  title: any;
}
const CoverSlide = (props: PropsItf) => {
  const { bg, contentCover, title }: any = props;

  return (
    <ContainerSlider
      id="wrap-slider-editor-cover"
      className="wrap-silder bg-white p-4 relative flex"
      bg={bg}
    >
      <div className="left relative flex flex-col items-start flex-grow">
        <div className="image-logo">
          <img
            id="logo"
            src={contentCover?.smallLogo}
            className=" object-cover"
            // style={{ height: "150px", width: "150px" }}
            width={150}
            height={150}
          />
          <div>Logo I</div>
        </div>

        <div
          className="main-title mt-5"
          style={{ width: "50%", wordBreak: "break-word" }}
        >
          <h4 className=" text-3xl font-bold">{title}</h4>
        </div>

        <div className="typeOfReport mt-5">
          <div className="text-xl font-bold">{contentCover?.typeOfReport}</div>
        </div>

        <div className="date">
          {/* <small>{moment(new Date()).format("ddd, D MMMM yyyy")}</small> */}
        </div>

        <div className="image-logo-2 flex items-center gap-2 mt-10">
          <img
            src={contentCover?.smallLogo}
            alt=""
            // style={{ width: "50px", height: "50px" }}
            width={50}
            height={50}
            className=" object-cover"
          />
          <div> Logo II</div>
        </div>
      </div>
      <div className="right flex-grow flex items-center">
        <div className="image-main">
          <img
            src={contentCover?.imageMain}
            alt=""
            // style={{ width: "250px", height: "250px" }}
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
      </div>
    </ContainerSlider>
  );
};

const mapsStateToProps = (state: any) => {
  return {
    contentCover: state.contentCover,
  };
};

const mapsDispatchToProps = (dispatch: any) => {};

export default connect(mapsStateToProps, mapsDispatchToProps)(CoverSlide);

const ContainerSlider = styled.div<{ bg: any }>`
  background-size: contain;
  height: 472px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: red;
  ${({ bg }) =>
    bg &&
    `
  background-image:url(${bg?.src});
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  `}
`;
