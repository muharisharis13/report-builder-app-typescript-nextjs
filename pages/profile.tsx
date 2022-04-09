import React from "react";
import * as Containers from "../containers";

const Profile = () => {
  return (
    <Containers.Layout title="Profile">
      <div className="container w-full flex mb-20 items-center flex-col">
        <div className="form bg-white shadow-md w-2/4 flex flex-col flex-wrap rounded-md">
          <div className="header border-b border-b-slate-300">
            <p className="font-bold p-4">Profile Management</p>
          </div>

          {/* content */}
          <div className="content flex pt-10 mb-20">
            <div className="left text-center ml-10" style={{ width: "25%" }}>
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80"
                className="object-cover shadow-sm mb-2 rounded-full border-4 border-slate-300 p-1"
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
              <button className=" font-bold text-gray-400">Edit</button>
            </div>
            <div className="right ml-20" style={{ width: "calc(75% - 5rem)" }}>
              <div className="wrap-info border-b mb-2 border-b-slate-300 flex flex-col w-full">
                <div className="title font-bold mb-2">Name</div>
                <div className="content font-normal mb-2">budi baik</div>
                <button className="button flex mb-2 text-cyan-500 font-bold cursor-pointer">
                  Change Name
                </button>
              </div>
              <div className="wrap-info border-b mb-2 border-b-slate-300 flex flex-col w-full">
                <div className="title font-bold mb-2">Email</div>
                <div className="content font-normal mb-2">budi baik</div>
                <button className="button flex mb-2 text-cyan-500 font-bold cursor-pointer">
                  Change Email Address
                </button>
              </div>
              <div className="wrap-info border-b mb-2 border-b-slate-300 flex flex-col w-full">
                <div className="title font-bold mb-2">Password</div>
                <div className="content font-normal mb-2">******</div>
                <button className="button flex mb-2 text-cyan-500 font-bold cursor-pointer">
                  Change Password
                </button>
              </div>
              <div className="wrap-info mb-2 flex flex-col w-full">
                <div className="title font-bold mb-2">Phone Number</div>
                <div className="content font-normal mb-2">12345567777</div>
                <button className="button flex mb-2 text-cyan-500 font-bold cursor-pointer">
                  Change Phone Number
                </button>
              </div>
            </div>
          </div>

          {/* buttonnnn */}

          <div className="button border-t border-b-slate-300 flex items-center justify-end p-4">
            <button className="button flex mb-2 text-cyan-500 font-bold cursor-pointer">
              Save Change
            </button>
          </div>
        </div>
      </div>
    </Containers.Layout>
  );
};

export default Profile;
