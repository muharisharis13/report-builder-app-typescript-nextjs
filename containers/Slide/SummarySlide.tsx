import React from "react";
import styled from "styled-components";

interface PropsItf {
  bg: any;
}
const SummarySlide = (props: PropsItf) => {
  const { bg } = props;

  return (
    <ContainerSlider
      id="wrap-slider-editor"
      className="wrap-silder bg-white p-4 relative flex"
      bg={bg}
    >
      <div style={{ fontSize: "14px", textAlign: "left" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        eligendi ullam esse delectus reiciendis asperiores facere dicta
        reprehenderit quis sunt itaque iste commodi praesentium fugit maxime,
        neque quae distinctio repudiandae? Quas voluptatibus nobis nemo sapiente
        alias aspernatur unde facilis praesentium delectus, qui, itaque deserunt
        beatae explicabo quo reprehenderit totam recusandae ex earum dolores.
        Vel ad repellendus non illo, officiis ab nemo modi quis fugit magni
        saepe, at dolore, id veniam? Eius magnam soluta debitis, rem consequatur
        doloribus veritatis aperiam temporibus tenetur impedit necessitatibus
        officiis magni et, in aliquam ad accusantium ratione, ipsum commodi?
        Quae nesciunt odio quis, quibusdam consequatur quos.
      </div>
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
