import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

interface PropsItf {
  bg: any;
}
const SummarySlide = (props: PropsItf) => {
  const { bg } = props;
  const { narasi } = useSelector((state: any) => state.contentSummary);

  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex"
      bg={bg}
    >
      <div style={{ fontSize: "14px", textAlign: "left" }}>{narasi}</div>
    </ContainerSlider>
  );
};

export default SummarySlide;

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
