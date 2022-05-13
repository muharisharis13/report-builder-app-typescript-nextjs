import React, { useState, useEffect } from "react";
import { DocumentAddIcon } from "@heroicons/react/solid";
import Input from "./Input";
import DatePicker from "react-datepicker";
import * as Containers from "./index";
import "react-quill/dist/quill.snow.css";
import { connect, useDispatch } from "react-redux";
import { Action } from "../redux";
import {
  ChartBarIcon,
  TrendingUpIcon,
  TableIcon,
  LocationMarkerIcon,
  GlobeAltIcon,
  PhotographIcon,
  NewspaperIcon,
} from "@heroicons/react/solid";

const dataWidget = [
  {
    icon: <ChartBarIcon width={20} />,
    name: "Chart",
  },
  {
    icon: <TrendingUpIcon width={20} />,
    name: "Trend",
  },
  {
    icon: <TableIcon width={20} />,
    name: "Table",
  },
  {
    icon: <LocationMarkerIcon width={20} />,
    name: "GIS",
  },
  {
    icon: <GlobeAltIcon width={20} />,
    name: "Network",
  },
  {
    icon: <PhotographIcon width={20} />,
    name: "Image",
  },
  {
    icon: <NewspaperIcon width={20} />,
    name: "Online News",
  },
];

const arrTypeOfReport = [
  {
    name: "Onetime",
    value: "Onetime",
  },
  {
    name: "Daily",
    value: "Daily",
  },
  {
    name: "Weekly",
    value: "Weekly",
  },
  {
    name: "Monthly",
    value: "Monthly",
  },
];

const arrClient = [
  {
    name: "Client1",
    value: "Client1",
  },
  {
    name: "Client2",
    value: "Client2",
  },
  {
    name: "Client3",
    value: "Client3",
  },
  {
    name: "Client4",
    value: "Client4",
  },
];

type Props = {};

type PropsModal = {
  addSlide: boolean;
  addBackground: boolean;
  addImage: boolean;
};

function RightMenu(props: Props) {
  const [modal, setModal] = useState<PropsModal>({
    addSlide: false,
    addBackground: false,
    addImage: false,
  });
  const [dataProps, setDataProps] = useState<any>({});
  const dispatch = useDispatch();
  const { coverContent }: any = props;

  useEffect(() => {
    if (modal.addBackground === false) {
      setDataProps({});
    }
  }, [modal.addBackground]);

  const BtnAddImage = async (e: any, name: string) => {
    const reader = new FileReader();

    switch (name) {
      case "background":
        return await Promise.all([
          setDataProps((state: any) => ({
            ...state,
            image: e.target.files[0],
          })),
          setModal((state: any) => ({ ...state, addBackground: true })),
        ]);
      case "mainImage":
        return await Promise.all([
          dispatch(
            Action.SET_CONTENT_COVER({
              ...coverContent,
              imageMain: URL.createObjectURL(e.target.files[0]),
            })
          ),
          setDataProps(URL.createObjectURL(e.target.files[0])),
          setModal((state: any) => ({ ...state, addImage: true })),
        ]);
      case "image1":
        return await Promise.all([
          dispatch(
            Action.SET_CONTENT_COVER({
              ...coverContent,
              smallLogo: URL.createObjectURL(e.target.files[0]),
            })
          ),
          setDataProps(URL.createObjectURL(e.target.files[0])),
          setModal((state: any) => ({ ...state, addImage: true })),
        ]);

      default:
        break;
    }
  };

  const onChangeDocumentTitle = (e: any) => {
    let data = {
      ...coverContent,
      mainTitle: e.target.value,
    };
    return dispatch(Action.SET_CONTENT_COVER(data));
  };

  const onChangeDate = (e: any) => {
    let data = {
      ...coverContent,
      date: e,
    };
    return dispatch(Action.SET_CONTENT_COVER(data));
  };
  const onChangeTypeOfReport = (e: any) => {
    let data = {
      ...coverContent,
      typeOfReport: e.target.value,
    };
    return dispatch(Action.SET_CONTENT_COVER(data));
  };

  console.log("righ", coverContent);

  return (
    <div
      className="wrap-side-bar bg-white w-60 fixed h-screen right-0"
      style={{ paddingBottom: "150px" }}
    >
      {/* MODAL ===== */}
      <Containers.Modal
        isOpen={modal.addSlide}
        setIsOpen={() => setModal((state) => ({ ...state, addSlide: false }))}
      />
      <Containers.ModalAddImage
        isOpen={modal.addBackground}
        setIsOpen={() =>
          setModal((state) => ({ ...state, addBackground: false }))
        }
        dataProps={dataProps}
      />
      <Containers.ModalReactQuill
        isOpen={modal.addImage}
        setIsOpen={() => setModal((state) => ({ ...state, addImage: false }))}
        dataProps={dataProps}
      />
      {/* MODAL ===== */}

      <div className="wrap-slide-preview flex items-center justify-between bg-gray-100 border p-2">
        <p className="font-semibold text-blue-700">Cover</p>
        <button className="border flex w-auto items-center justify-center border-blue-700 px-2 py-1 rounded-sm">
          <p
            className="font-semibold text-blue-700 text-sm"
            onClick={() => setModal((state) => ({ ...state, addSlide: true }))}
          >
            Add Slide
          </p>
          <DocumentAddIcon width={20} className="text-blue-700" />
        </button>
      </div>
      <div className="wrap-preview pt-5 flex flex-col gap-5 border overflow-y-scroll overflow-x-hidden h-full">
        {/* row 1 */}
        <div className="p-2">
          <div className="mb-3">
            <label htmlFor="Document Title">Document Title</label>
            <Input
              onChange={onChangeDocumentTitle}
              value={coverContent?.mainTitle}
            />
          </div>

          <div className="mb-3 flex flex-col">
            <label htmlFor="Client">Client</label>

            <select className="w-full border h-8 px-2 focus:outline-none rounded-sm text-gray-400">
              <option>--Select--</option>
              {arrClient.map((item: any, idx: number) => (
                <option key={idx} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3 flex flex-col">
            <label htmlFor="Client">Container</label>

            <select className="w-full border h-8 px-2 focus:outline-none rounded-sm text-gray-400">
              <option>--Select--</option>
              {arrClient.map((item: any, idx: number) => (
                <option key={idx} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="Client">Date</label>

            <DatePicker
              onChange={(e) => onChangeDate(e)}
              selected={new Date(coverContent.date)}
              className="border rounded-sm focus:outline-none px-2 h-8 w-full cursor-pointer"
              dateFormat={"d MMMM yyyy"}
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="Client">Type of Report</label>

            <select
              onChange={onChangeTypeOfReport}
              className="w-full border h-8 px-2 focus:outline-none rounded-sm text-gray-400"
            >
              <option disabled>--Select--</option>
              {arrTypeOfReport.map((item: any, idx: number) => (
                <option key={idx} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ROW 2===== */}

        <div className="row-3 border-t p-2">
          <div className="title-text mb-10">
            <p className="font-semibold">Image</p>
          </div>

          <div className=" mb-8">
            <label htmlFor="Document Title">Background</label>
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              className="w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl"
              onChange={(e) => BtnAddImage(e, "background")}
            />
          </div>
          <div className="mb-8 flex flex-col">
            <label htmlFor="Document Title">Main Image</label>
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              className="w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl"
              onChange={(e) => BtnAddImage(e, "mainImage")}
            />
          </div>
          <div className="mb-8 flex-col grid">
            <label htmlFor="Document Title">Image 1</label>
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              className="w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl"
              onChange={(e) => BtnAddImage(e, "image1")}
            />
          </div>
          <div className="mb-8 flex flex-col">
            <label htmlFor="Document Title">Image 2</label>
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              className="w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl"
              onChange={(e) => BtnAddImage(e, "mainImage")}
            />
          </div>
        </div>

        {/* ROW 3 ======= */}

        <div className="row-4 border-t p-2">
          <div className="title-text mb-10">
            <p className="font-semibold">Widget</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="list-widget flex gap-5 flex-wrap">
              {dataWidget?.map((item: any, idx: number) => (
                <div
                  className="widget-container cursor-pointer flex flex-col items-center"
                  key={idx}
                  style={{ width: "50px", overflow: "hidden" }}
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    className="header text-sm font-semibold break-words text-center"
                    style={{ width: "100%" }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapsStateToProps = (state: any) => {
  return {
    coverContent: state.contentCover,
  };
};

export default connect(mapsStateToProps, {})(RightMenu);
