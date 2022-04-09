import React from "react";
import Head from "next/head";
import Image from "next/image";
import * as Containers from "../containers";
import Card from "../public/cardHover.png";
import {
  DotsVerticalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

const Home = () => {
  return (
    <Containers.Layout title="Home">
      <div className="container">
        {/* list template */}

        <div className="wrap-list-template block mt-5">
          <p className="text-black font-semibold mb-5">Last template</p>
          {/* list thumbnail */}
          <div className="flex flex-wrap gap-11">
            {[2, 2, 2, 2, 2, 2].map((item: any, idx: number) => (
              <div className="card" key={idx}>
                <Image src={Card} alt="" />
                <p className="text-content text-sm text-center">
                  Lorem, ipsum.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* table data */}

        <div className="wrap-form bg-white mt-10 mb-20 p-10 rounded-md shadow-md">
          <div className="wrap-search flex items-center justify-center">
            <Containers.Search />
          </div>

          <div className="wrap-table-data mt-10">
            <table className=" w-full">
              <thead className=" border-b text-left">
                <tr>
                  <th className=" p-2">Client</th>
                  <th>File Name</th>
                  <th>Last Opened</th>
                  <th>Account</th>
                </tr>
              </thead>
              {[2, 2, 2, 2, 2].map((item: any, idx: number) => (
                <tbody key={idx}>
                  <tr className=" border-b">
                    <td className="p-2 w-2/4">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="">
                      <div className="border-b p-2">asdads</div>
                      <div className="p-2">asdads</div>
                    </td>
                    <td className="">
                      <div className="border-b p-2">asdads</div>
                      <div className="p-2">asdads</div>
                    </td>
                    <td className="">
                      <div className="border-b p-2">asdads</div>
                      <div className="p-2">asdads</div>
                    </td>
                    <td className="">
                      <div className="border-b p-2">
                        <DotsVerticalIcon width={20} />
                      </div>
                      <div className="p-2">
                        <DotsVerticalIcon width={20} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          {/* pagination======================== */}
          <div className="wrap-pagination gap-10 mt-10 flex items-center justify-end">
            <div className="row text-slate-400 flex items-center">
              Row per page : &nbsp;
              <select className="focus:outline-none cursor-pointer">
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
            </div>
            <div className="pagination gap-4 flex items-center text-slate-400">
              <div>1-8 of 240</div>
              <div className="flex items-center gap-2">
                <ChevronLeftIcon width={20} className=" cursor-pointer" />
                <ChevronRightIcon width={20} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>


        {/* Button create */}
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

export default Home;
