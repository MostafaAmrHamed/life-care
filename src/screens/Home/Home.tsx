import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

// type PatientData = {
//   id: string;
//   name: string;
//   age: string;
//   gender: string;
// }[];
const Home = () => {
  const [patients, setPatients] = useState<any>([]);
  const patientCollectionRef = collection(db, "patient");
  useEffect(() => {
    const getPatients = async () => {
      const data = await getDocs(patientCollectionRef);
      setPatients(
        data.docs.map((doc) => ({ ...doc.data(), patientId: doc.id }))
      );
    };
    getPatients();
  }, []);

  return (
    <div className="mt-5">
      {/* Search */}
      <div>
        <div className="flex justify-center justify-items-center gap-10">
          <input
            type="number"
            placeholder="رقــم الـمريض"
            className="w-[200px] py-1 px-2 text-lg border-primary-1 border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="اســم الـمريض"
            className="w-[300px] py-1 px-2 text-lg border-primary-1 border-2 rounded-md focus:outline-none"
          />
          <button className="bg-primary-1 text-white text-xl font-bold px-8 py-1 rounded-md ">
            بـحـث
          </button>
        </div>
        {/* List of patients */}
        <div className="w-[600px] mx-auto mt-10">
          {/* Header */}
          <div className="grid grid-cols-7 text-xl font-bold bg-primary-1 text-white px-2 py-2 rounded-sm">
            <p className="col-span-2 border-l-[1px]">رقم الـمريض</p>
            <p className="col-span-3 pr-2 border-l-[1px]">الاســم</p>
            <p className="pr-2 border-l-[1px] text-center">السن</p>
            <p className="pr-2 text-center">النوع</p>
          </div>
          {/* Paitients */}
          <div className="mt-5">
            {patients
              .map((patient: any) => {
                return (
                  <Link to="/Profile" key={patient.id}>
                    <div className="grid grid-cols-7 text-lg font-medium  text-slate-800 px-2 py-2 rounded-sm items-center hover:bg-gray-400 hover:text-white transition-all ease-in-out">
                      <p className="col-span-2 border-l-[1px] text-primary-1 hover:text-white">
                        {patient.id}
                      </p>
                      <p className="col-span-3 pr-2 border-l-[1px]">
                        {patient.name}
                      </p>
                      <p className="pr-2 border-l-[1px] text-center">
                        {patient.age}
                      </p>
                      <p className="pr-2 text-center">{patient.gender}</p>
                    </div>
                  </Link>
                );
              })
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
