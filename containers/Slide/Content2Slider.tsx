import React from "react";
import styled from "styled-components";
interface PropsItf {
  bg: any;
  title: any;
  image1: any;
  image2: any;
  desc1: any;
  desc2: any;
}
const Content2Slider = (props: PropsItf) => {
  const { bg, title, image1, image2, desc1, desc2 } = props;
  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex flex-col"
      bg={bg}
    >
      <div className="title-text text-left mb-5">
        <h5 className=" text-4xl font-bold">{title}</h5>
      </div>

      <div className="wrap-image flex">
        <div className="wrap-left text-center w-2/4  flex flex-col items-center">
          <div className="wrap-image w-80 h-80">
            <img src={image1 ? URL.createObjectURL(image1) : ""} alt="" />
          </div>
          <div className="wrap-text text-left text-sm">{desc1}</div>
        </div>
        <div className="wrap-right text-center w-2/4  flex flex-col items-center">
          <div className="wrap-image w-80 h-80">
            <img src={image2 ? URL.createObjectURL(image2) : ""} alt="" />
          </div>
          <div className="wrap-text text-left text-sm">{desc2}</div>
        </div>
      </div>
    </ContainerSlider>
  );
};

export default Content2Slider;

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
