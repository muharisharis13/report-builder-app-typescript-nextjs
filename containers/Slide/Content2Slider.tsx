import React from "react";
import styled from "styled-components";
interface PropsItf {
  bg: any;
}
const Content2Slider = (props: PropsItf) => {
  const { bg } = props;
  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex flex-col"
      bg={bg}
    >
      <div className="title-text text-left mb-5">
        <h5 className=" text-4xl font-bold">Content Title 2</h5>
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
