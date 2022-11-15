import React, { useState } from "react";
import Ticket from "./components/Ticket";
import Update from "./components/Update";
import pfImage from "./profile-2.png";
const Profile = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const [ticket, setTicket] = useState<boolean>(false);
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center gap-20">
        <div className="text-center text-xl space-y-2">
          <p>
            <span className="font-bold">الاســم: </span>
            مصطفى عمرو حامد
          </p>
          <p>
            <span className="font-bold">رقــم الـمـريـض: </span>1
          </p>
          <p>
            <span className="font-bold">النـوع: </span>
            ذكر
          </p>
          <p>
            <span className="font-bold">الـسن: </span>
            23
          </p>
        </div>
        <img src={pfImage} alt="Profile pic" className="h-[200px] w-[200px]" />
      </div>
      <div className="flex justify-center mt-5 gap-5">
        <p
          className="bg-primary-1 text-white text-xl text-center font-medium w-[140px] py-1 rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out"
          onClick={() => {
            setUpdate(false);
            setTicket(!ticket);
          }}
        >
          كـشـف
        </p>
        <p
          className="bg-primary-2 text-white text-xl text-center font-medium w-[140px] py-1 rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out"
          onClick={() => {
            setTicket(false);
            setUpdate(!update);
          }}
        >
          تعديل
        </p>
        <p className="bg-primary-3 text-white text-xl text-center font-medium w-[140px] py-1 rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out">
          مسح
        </p>
      </div>
      {update && <Update />}
      {ticket && <Ticket />}
    </div>
  );
};

export default Profile;
