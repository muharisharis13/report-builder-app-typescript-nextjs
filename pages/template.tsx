import React from "react";
import Image from "next/image";
import * as Containers from "../containers";
import Background from "../public/cardHover.png";

const Template = () => {
  return (
    <Containers.Layout title="Template">
      <div className="container">
        <div className="w-full  min-h-screen mt-6 mb-6 " id="idx-gallery">
          <div className="list-card flex flex-wrap gap-11">
            {[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map(
              (item: any, idx: number) => (
                <div key={idx} className="card text-center cursor-pointer">
                  <Image width="200px" height="120px" src={Background} alt="" />
                  <p className=" font-semibold">Judul title</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="wrap-bottom bg-slate-50 items-center justify-end flex fixed bottom-0 w-full p-2 border-t border-b gap-5">
          <button className="border px-8 py-1 font-normal cursor-pointer rounded-sm min-w-0">
            cancel
          </button>
          <button className=" hover:bg-blue-500 mr-24 transition-all rounded-sm bg-blue-600 text-white border-blue-600 px-8 py-1 font-normal cursor-pointer min-w-0">
            open
          </button>
        </div>
      </div>
    </Containers.Layout>
  );
};

export default Template;
