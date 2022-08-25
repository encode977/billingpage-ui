import React from "react";
import visa from "../assets/img/visa.png";

import { bills } from "../handlers/billData";

function Home() {
  return (
    <div className="col-start-4 col-span-9 p-8">
      <div className="space-y-8">
        <h3 className="text-title font-bold px-4">Billing</h3>
        <div className="px-4">
          <h3 className="text-base font-bold text-primary">Order History</h3>
          <p className="text-sm font-medium text-secondary">
            Manage billing information and view receips
          </p>
        </div>
        <div>
          <div className="flex justify-between font-semibold text-sm p-4">
            <h3 className="text-center">Date</h3>
            <h3 className="text-start ">Type</h3>
            <h3 className="mr-6">Receipt</h3>
          </div>
          <div className="space-y-1">
            {bills.map((item) => (
              <div className="flex justify-between p-4">
                <p>Oct. 21, 2021</p>
                <p className="text-start">Pro Annual</p>
                <div className="text-sm font-medium border-2 border-border rounded-md p-2 px-5">
                  Download
                </div>
              </div>
            ))}

            {/* <div className="flex justify-between bg-white p-4 shadow-lg">
              <p>Aug. 21, 2021</p>
              <p className="text-start">Pro Portfolio</p>
              <div className="text-sm font-medium border-2 border-border rounded-md p-2 px-5">
                Download
              </div>
            </div>
            <div className="flex justify-between p-4">
              <p>July. 21, 2021</p>
              <p className="text-start">Sponsored Post</p>
              <div className="text-sm font-medium border-2 border-border rounded-md p-2 px-5">
                Download
              </div>
            </div>
            <div className="flex justify-between p-4">
              <p>Jun. 21, 2021</p>
              <p className="text-start">Sponsored Post</p>
              <div className="text-sm font-medium border-2 border-border rounded-md p-2 px-5">
                Download
              </div>
            </div> */}
          </div>
          <div className="p-4">
            <h3 className="text-sm font-semibold underline text-orange">
              Load more
            </h3>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-base font-bold text-primary">Payment Method</h3>
            <p className="font-medium text-sm text-secondary">
              Manage billing information and view receips
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <div className="border-2 border-border rounded-md px-5 p-2">
                <img className="h-5" src={visa} alt="" />
              </div>
              <p className="text-sm font-medium">Visa ending in 2255</p>
            </div>
            <button className="text-sm font-medium border-2 border-border rounded-md p-2 px-5">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
