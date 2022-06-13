import React from "react";
import styled from "styled-components";
interface PropsItf {
  bg: any;
  title: any;
  mainImage: any;
  desc: any;
  image1: any;
}
const ContentSlider = (props: PropsItf) => {
  const { bg, title, mainImage, desc, image1 } = props;
  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex flex-col"
      bg={bg}
    >
      <div className="title-text text-left mb-5">
        <h5 className=" text-4xl font-bold">{title}</h5>
      </div>
      <div className="wrap-content flex flex-col items-center">
        <div className="image-main mb-5">
          <img
            src={mainImage ? URL.createObjectURL(mainImage) : ""}
            alt=""
            width={250}
            height={250}
            className=" object-cover"
          />
        </div>
        <div className="content-text">
          <div>{desc}</div>
        </div>
      </div>
      <div className="logo-image mt-5">
        <img
          src={image1 ? URL.createObjectURL(image1) : ""}
          width={50}
          height={50}
          className=" object-cover"
          alt=""
        />
      </div>
    </ContainerSlider>
  );
};

export default ContentSlider;

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
