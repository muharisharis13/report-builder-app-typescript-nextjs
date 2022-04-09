import React from "react";
import ModalModule from "./modal.module";
import * as Containers from "../index";

const ModalShare = (props: { isOpen: boolean; onHide: Function }) => {
  const { isOpen, onHide } = props;
  return (
    <ModalModule isOpen={isOpen} onHide={onHide}>
      <div>
        <div className="wrap-header">
          <div className="font-semibold text-cyan-500">Bagikan ke</div>
        </div>
        <div className="wrap-content mt-10">
          <div className="wrap-search mb-5 w-full">
            <Containers.Search />
          </div>

          <div className="warp-list">
            {[2, 2, 2, 2].map((item: any, idx: number) => (
              <div className="mb-3 flex gap-2 items-center" key={idx}>
                <input type="checkbox" name="" id={JSON.stringify(idx)} />
                <label htmlFor={`${idx}`} className="flex items-center gap-1">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    width={30}
                    height={30}
                    className="object-cover rounded-full"
                    alt=""
                  />
                  <div>Muharis</div>
                </label>
              </div>
            ))}
          </div>

          <div className="wrap-button mt-5  border-t">
            <div className="pt-2 gap-2 flex items-center justify-end">
              <button className=" text-sm px-4 py-2 text-gray-300 font-semibold border rounded-sm">
                Cancel
              </button>
              <button className="text-sm px-4 py-2 font-semibold text-white border bg-blue-500 border-blue-500 rounded-sm">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalModule>
  );
};

export default ModalShare;
