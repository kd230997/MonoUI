import React from "react";
import icons from "../../../component/icons/iconsBase";

const MenuBar = ({ className }) => {
  return (
    <div className={`${className} px-2`}>
      <div className="pt-4">
        <h1 className="py-3 px-10 text-gray-300">Main Menu</h1>
        <ul>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Dashboard
          </li>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Car Rent
          </li>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Insight
          </li>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Reimburse
          </li>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Inbox
          </li>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Calendar
          </li>
        </ul>
      </div>
      <div className="pt-4">
        <h1 className="py-3 px-10 text-gray-300">Preferences</h1>
        <ul>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Settings
          </li>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Help & Center
          </li>
          <li className="px-2 py-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <span className="px-1">{icons.homeIcon}</span> Dark Mode
          </li>
        </ul>
      </div>

      <p className="pt-7 pb-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
        <span className="px-1">{icons.homeIcon}</span> Logout
      </p>
    </div>
  );
};

export default MenuBar;
