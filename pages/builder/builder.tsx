import React from "react";
import BuilderContent from "../../containers/BuilderContent";
import SlideThumbnail from "../../containers/SlideThumbnail";
import RightMenu from "../../containers/RightMenu";
import SlideEditor from "../../containers/SlideEditor";
import * as Containers from "../../containers";
import { useRouter } from "next/router";

type Props = {};

export default function builder({}: Props) {
  const Router = useRouter();

  return (
    <Containers.Layout>
      <div className="flex flex-col">
        {/* <Header/> */}
        <BuilderContent>
          <SlideThumbnail />
          <SlideEditor />
          <RightMenu />
        </BuilderContent>
        {/* <Footer/> */}
      </div>
    </Containers.Layout>
  );
}
