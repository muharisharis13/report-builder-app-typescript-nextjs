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

      <div className="wrap-image flex">
        <div className="wrap-left text-center w-2/4  flex flex-col items-center">
          <div className="wrap-image w-80 h-80">
            <img
              src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt=""
            />
          </div>
          <div className="wrap-text text-left text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            fugiat nostrum dolores laboriosam esse. Similique, ipsam
            reprehenderit? Aperiam, at architecto!
          </div>
        </div>
        <div className="wrap-right text-center w-2/4  flex flex-col items-center">
          <div className="wrap-image w-80 h-80">
            <img
              src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt=""
            />
          </div>
          <div className="wrap-text text-left text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            fugiat nostrum dolores laboriosam esse. Similique, ipsam
            reprehenderit? Aperiam, at architecto!
          </div>
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
