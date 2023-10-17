import React from "react";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col bg-gray-800 p-2 text-white w-60 top-0 left-0 h-screen md:">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-semibold">My Sidebar</h1>

          <ul className="mt-4">
            <li className="py-2 px-4 hover:bg-gray-600">
              <button onClick={() => navigate("/view-contact")}>
                View Contact
              </button>
            </li>{" "}
            <li className="py-2 px-4 hover:bg-gray-600">
              <button onClick={() => navigate("/create-contact")}>
                Add Contact
              </button>
            </li>{" "}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
