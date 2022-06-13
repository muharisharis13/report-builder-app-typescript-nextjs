import React from "react";
import styled from "styled-components";

interface PropsItf {
  bg: any;
  title: any;
}

const sectionSlider = (props: PropsItf) => {
  const { bg, title } = props;

  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex flex-col justify-center text-white text-left"
      bg={bg}
    >
      <h4>{title}</h4>
    </ContainerSlider>
  );
};

export default sectionSlider;

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
