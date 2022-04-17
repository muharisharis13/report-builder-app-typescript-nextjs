import React from "react";
import styled from "styled-components";

interface PropsItf {
  bg: any;
}
const CoverSlide = (props: PropsItf) => {
  const { bg } = props;

  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex"
      bg={bg}
    >
      <div className="left relative flex flex-col items-start flex-grow">
        <div className="image-logo">
          <img
            id="logo"
            src="https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            className=" object-cover"
            style={{ height: "150px", width: "150px" }}
          />
          <div>Logo I</div>
        </div>

        <div className="main-title mt-5">
          <h4 className=" text-6xl font-bold">Main Title</h4>
        </div>

        <div className="typeOfReport mt-5">
          <div className="text-xl font-bold">Type Of Report</div>
        </div>

        <div className="date">
          <small>22/april/2022</small>
        </div>

        <div className="image-logo-2 flex items-center gap-2 mt-10">
          <img
            src="https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
            style={{ width: "50px", height: "50px" }}
            className=" object-cover"
          />
          <div> Logo II</div>
        </div>
      </div>
      <div className="right flex-grow flex items-center">
        <div className="image-main">
          <img
            src="https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
            style={{ width: "250px", height: "250px" }}
            className="object-cover"
          />
        </div>
      </div>
    </ContainerSlider>
  );
};

export default CoverSlide;

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
