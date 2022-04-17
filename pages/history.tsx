import React from "react";
import Head from "next/head";
import * as Containers from "../containers";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowUpIcon,
  DocumentIcon,
} from "@heroicons/react/solid";

const History = () => {
  return (
    <Containers.Layout title="History">
      <div className="w-full  container min-h-screen mb-6 " id="idx-gallery">
        <div className="wrap-table-data mt-10">
          {/* table data */}

          <div className="wrap-form bg-white p-10 rounded-md shadow-md">
            <div className="wrap-search flex items-center justify-center">
              <Containers.Search />
            </div>

            <div className="wrap-table-data mt-10">
              <table className=" w-full">
                <thead className=" border-b text-left">
                  <tr>
                    <th className=" cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div className="iconUp">
                          <DocumentIcon width={20} />
                        </div>
                        <div className="text">Template Name</div>
                        <div className="arrow">
                          <ArrowUpIcon width={20} />
                        </div>
                      </div>
                    </th>
                    <th className=" p-2">Client</th>
                    <th>Type</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[2, 2, 2, 2].map((item: any, idx: number) => (
                    <tr className=" border-b" key={idx}>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">The Sliding</td>
                    </tr>
                  ))}
                </tbody>
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
        </div>
      </div>
    </Containers.Layout>
  );
};

export default History;
