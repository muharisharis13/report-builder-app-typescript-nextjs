import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import "react-quill/dist/quill.snow.css";

const ModalReactQuill = (props: {
  isOpen: boolean;
  setIsOpen: Function;
  dataProps: any;
}) => {
  const { isOpen, setIsOpen, dataProps } = props;
  const [value, setValue] = useState<any>(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen()}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-slate-200 shadow-xl rounded-md min-h-full">
              <Dialog.Title
                as="h3"
                className="text-lg flex items-center justify-end text-right font-medium leading-6 text-gray-900"
              >
                <XIcon
                  width={20}
                  cursor="pointer"
                  onClick={() => setIsOpen()}
                />
              </Dialog.Title>

              {/* CONTENT ========== */}
              <div className="text-center flex flex-col mt-11 w-full items-center justify-center">
                <div className="wrap-image text-center w-full justify-center flex">
                  <img
                    src={dataProps}
                    alt=""
                    className=" object-contain w-3/4"
                  />
                </div>
                <div className="text-editor flex items-center w-full gap-2 mt-10">
                  <textarea
                    name=""
                    id=""
                    placeholder="textarea"
                    className=" w-full focus:outline-none border p-2"
                  ></textarea>
                  <button className="flex items-center rounded-full  border-none w-14 h-12 justify-center bg-blue-700 hover:bg-blue-600 text-white">
                    <ArrowCircleRightIcon width={30} height={30} />
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalReactQuill;

ModalReactQuill.defaultProps = {
  dataProps: {},
};
