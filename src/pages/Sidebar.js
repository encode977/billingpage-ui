import React from "react";
import profile from "../assets/img/profile.png";
import { Link } from "react-router-dom";
import { links } from "../handlers/sidebarData";

function Sidebar() {
  return (
    <div className="p-8 bg-gray h-fit col-start-1 col-span-3">
      <div className="space-y-10">
        <div className="flex items-center space-x-3">
          <img className="rounded-full" src={profile} alt="" />
          <div>
            <h3 className="font-bold text-base">Ildiko Gaspar</h3>
            <p className="text-sm">@igaspar</p>
          </div>
        </div>
        <div className="space-y-7">
          {links.map((item) => (
            <Link to={item.url} className="flex space-x-2 items-center ">
              <img src={item.icon} alt="" />
              <p className="font-semibold text-sm text-secondary">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
