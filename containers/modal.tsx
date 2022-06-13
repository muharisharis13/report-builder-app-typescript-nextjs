import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Card from "../public/cardHover.png";
import * as thumbnail from "../public/thumnails";
import Link from "next/link";
import { connect } from "react-redux";
import { Action } from "../redux";

const dataSlide = [
  {
    key: "cover",
    name: "Cover",
    image: thumbnail.ThumbnailCover,
  },
  {
    key: "summary",
    name: "Summary",
    image: thumbnail.ThumbnailSummary,
  },
  {
    key: "content",
    name: "Content",
    image: thumbnail.ThumbnailSummary,
  },
  {
    key: "conten2",
    name: "Content2",
    image: thumbnail.ThumbnailSummary,
  },
  {
    key: "section",
    name: "Section",
    image: thumbnail.ThumbnailSummary,
  },
  {
    key: "closing",
    name: "Closing",
    image: thumbnail.ThumbnailSummary,
  },
];
function MyDialog(props: { isOpen: boolean; setIsOpen: Function }) {
  let {
    isOpen,
    setIsOpen,
    setTypeSlide,
    typeSlide,
    setArrSlideContent,
    arrSlideContent,
  }: any = props;

  let [count, setCount] = useState(0);

  const pushSlideContent = async (key: any) => {
    count = arrSlideContent.length;

    switch (key) {
      case "cover":
        setArrSlideContent([
          ...arrSlideContent,
          {
            title: "Add Title",
            summary: "",
            key: `${key}_${count}`,
            typeOfReport: "",
            date: new Date(),
            mainImage: "",
            image1: "",
            image2: "",
          },
        ]);
        break;
      case "summary":
        setArrSlideContent([
          ...arrSlideContent,
          {
            narasi: "narasi",
            key: `${key}_${count}`,
          },
        ]);
        break;
      case "content":
        setArrSlideContent([
          ...arrSlideContent,
          {
            title: "content title",
            mainImage: "",
            desc: "desc",
            image1: "",
            key: `${key}_${count}`,
          },
        ]);
        break;
      case "conten2":
        setArrSlideContent([
          ...arrSlideContent,
          {
            title: "content title",
            image1: "",
            image2: "",
            desc1: "",
            desc2: "",
            key: `${key}_${count}`,
          },
        ]);
        break;
      case "section":
        setArrSlideContent([
          ...arrSlideContent,
          {
            title: "section title",
            key: `${key}_${count}`,
          },
        ]);
        break;
      case "closing":
        setArrSlideContent([
          ...arrSlideContent,
          {
            title: "closing title",
            key: `${key}_${count}`,
          },
        ]);
        break;

      default:
        key;
        break;
    }
  };

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
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Choose Slide
              </Dialog.Title>

              {/* CONTENT ========== */}
              <div className="text-center flex items-center">
                <div className="wrap-thumbnail mt-10 flex gap-10 justify-center flex-wrap">
                  {dataSlide.map((item: any, idx: number) => (
                    <Link
                      href={{
                        pathname: "/builder/builder",
                      }}
                      key={idx}
                    >
                      <div
                        className="card cursor-pointer"
                        key={idx}
                        onClick={() => {
                          setTypeSlide([...typeSlide, item.key]);
                          setIsOpen();
                          pushSlideContent(item.key);
                        }}
                      >
                        <Image src={item.image} alt="" />
                        <p className="text-content text-sm text-center">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
const mapsStateToProps = (state: any) => {
  return {
    typeSlide: state.typeSlide,
    arrSlideContent: state.arrSlideContent,
  };
};

const mapsDispatchToProps = (dispatch: any) => {
  return {
    setTypeSlide: (payload: string) => dispatch(Action.SET_TYPE_SLIDE(payload)),
    setArrSlideContent: (data: any) =>
      dispatch(Action.SET_ARR_SLIDE_CONTENT(data)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(MyDialog);
