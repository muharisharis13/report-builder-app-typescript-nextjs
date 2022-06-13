import React from "react";
import styled from "styled-components";

interface PropsItf {
  bg: any;
  title: any;
}

const closingSlider = (props: PropsItf) => {
  const { bg, title } = props;

  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder text-white text-left justify-center bg-white p-4 relative flex flex-col"
      bg={bg}
    >
      {title}
    </ContainerSlider>
  );
};

export default closingSlider;

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
