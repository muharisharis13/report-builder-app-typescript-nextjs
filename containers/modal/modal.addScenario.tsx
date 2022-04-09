import React from "react";
import ModalModule from "./modal.module";
import * as Containers from "../index";

const ModalAddScenario = (props: { isOpen: boolean; onHide: Function }) => {
  const { isOpen, onHide } = props;
  return (
    <ModalModule isOpen={isOpen} onHide={onHide}>
      <div className="wrap-header text-center border-b">
        <div className="font-bold text-blue-500 pb-2">Add Scenario</div>
      </div>

      <div className="wrap-content mt-5">
        <div className="mb-3 flex flex-col">
          <label
            htmlFor=""
            className=" text-gray-400 text-sm font-semibold mb-1"
          >
            Frequency
          </label>
          <select
            name=""
            id=""
            className=" border p-2 text-gray-300 focus:outline-none"
          >
            <option value="">Choose Frequency</option>
          </select>
        </div>
        <div className="mb-3 flex flex-col">
          <label
            htmlFor=""
            className=" text-gray-400 text-sm font-semibold mb-1"
          >
            Scenario Name
          </label>
          <input
            name=""
            id=""
            className=" border p-2 text-gray-300 focus:outline-none"
            placeholder="Scenario Name"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label
            htmlFor=""
            className=" text-gray-400 text-sm font-semibold mb-1"
          >
            Scope
          </label>
          <select
            name=""
            id=""
            className=" border p-2 text-gray-300 focus:outline-none"
          >
            <option value="">Choose Scope</option>
          </select>
        </div>
        <div className="mb-3 flex flex-col">
          <label
            htmlFor=""
            className=" text-gray-400 text-sm font-semibold mb-1"
          >
            Send To
          </label>
          <select
            name=""
            id=""
            className=" border p-2 text-gray-300 focus:outline-none"
          >
            <option value="" disabled>
              Choose Send To
            </option>
          </select>
        </div>
      </div>

      <div className="wrap-button mt-5  border-t">
        <div className="pt-2 gap-2 flex items-center justify-center">
          <button className=" text-sm px-4 py-2 text-gray-300 font-semibold border rounded-sm">
            Cancel
          </button>
          <button className="text-sm px-4 py-2 font-semibold text-white border bg-blue-500 border-blue-500 rounded-sm">
            Select
          </button>
        </div>
      </div>
    </ModalModule>
  );
};

export default ModalAddScenario;
