import React from "react";
import styled from "styled-components";
interface PropsItf {
  bg: any;
}
const ContentSlider = (props: PropsItf) => {
  const { bg } = props;
  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex flex-col"
      bg={bg}
    >
      <div className="title-text text-left mb-5">
        <h5 className=" text-4xl font-bold">Content Title</h5>
      </div>
      <div className="wrap-content flex flex-col items-center">
        <div className="image-main mb-5">
          <img
            src="https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
            width={250}
            height={250}
            className=" object-cover"
          />
        </div>
        <div className="content-text">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            ratione ab, saepe dolorum quibusdam incidunt assumenda atque
            distinctio odit adipisci, officiis voluptate ullam laudantium nihil,
            a dolore culpa nobis dicta deserunt! Temporibus beatae, nemo cumque
            eius natus molestiae laboriosam? Autem dolor fuga doloremque
            dignissimos sint eligendi deleniti, recusandae quasi ipsam!
          </div>
        </div>
      </div>
      <div className="logo-image mt-5">
        <img
          src="https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
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
