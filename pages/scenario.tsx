import React, { useState } from "react";
import Head from "next/head";
import * as Containers from "../containers";
import {
  StopIcon,
  ShareIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";
type Props = {};

export default function scenario({}: Props) {
  const [modal, setModal] = useState<{ share: boolean; add: boolean }>({
    share: false,
    add: false,
  });

  return (
    <Containers.Layout>
      {/* MODAL =========== */}
      <Containers.ModalShare
        isOpen={modal.share}
        onHide={() => setModal((state) => ({ ...state, share: false }))}
      />
      <Containers.ModalAddScenario
        isOpen={modal.add}
        onHide={() => setModal((state) => ({ ...state, add: false }))}
      />
      {/* MODAL =========== */}
      <div className="w-full  container min-h-screen mb-6 " id="idx-gallery">
        <Head>
          <title>Scenario</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

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
                    <th className=" p-2">Template Name</th>
                    <th>Time</th>
                    <th>Send To</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[2, 2, 2, 2].map((item: any, idx: number) => (
                    <tr className=" border-b" key={idx}>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">The Sliding</td>
                      <td className="p-2">
                        <div className="flex gap-2 items-center justify-center">
                          <StopIcon cursor="pointer" width={20} />
                          <ShareIcon
                            cursor="pointer"
                            width={20}
                            onClick={() =>
                              setModal((state) => ({ ...state, share: true }))
                            }
                          />
                        </div>
                      </td>
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
                  <button
                    className=" hover:bg-blue-500 transition-all rounded-sm bg-blue-600 text-white border-blue-600 px-8 py-1 font-normal cursor-pointer min-w-0"
                    onClick={() =>
                      setModal((state) => ({ ...state, add: true }))
                    }
                  >
                    Add Scenario
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Containers.Layout>
  );
}
