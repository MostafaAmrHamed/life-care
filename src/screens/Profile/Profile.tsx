import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Ticket from "./components/Ticket";
import Update from "./components/Update";
import pfImage from "./profile-2.png";
import wmImage from "./woman.png";
import Swal from "sweetalert2";
const Profile = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const [ticket, setTicket] = useState<boolean>(false);
  let { patientID } = useParams();
  let navigate = useNavigate();
  const [patient, setPatient] = useState<any>([]);

  const deletePatient = (id: any) => {
    Swal.fire({
      title: "هل انت متاكد؟",
      text: "تريم مسح هذا المريض من العيادة!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "لا",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم",
    }).then((result) => {
      const x = async () => {
        const patientDoc = doc(db, "patient", id);
        await deleteDoc(patientDoc);
      };
      if (result.isConfirmed) {
        x();
        Swal.fire("تم المسح!", "هذا المريض تم مسحه من العياده.", "success");
        navigate("/");
      }
    });
  };
  useEffect(() => {
    const getPatients = async () => {
      const patientCollectionRef = doc(db, "patient", `${patientID}`);
      const docSnap: any = await getDoc(patientCollectionRef);
      if (docSnap.exists()) {
        setPatient({ ...docSnap.data() });
      } else {
        navigate("/");
      }
    };
    getPatients();
  }, []);
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center">
        <div className="text-center text-xl space-y-2">
          <div className="grid grid-cols-3">
            <p className="font-bold text-primary-1">الاســم</p>
            <p>{patient.name}</p>
          </div>
          <div className="grid grid-cols-3">
            <p className="font-bold text-primary-1">السن</p>
            <p>{patient.age}</p>
          </div>

          <div className="grid grid-cols-3">
            <p className="font-bold text-primary-1">النـوع</p>
            <p>{patient.gender}</p>
          </div>
          <div className="grid grid-cols-3">
            <p className="font-bold text-primary-1">رقــم الـمـريـض</p>
            <p>{patient.id}</p>
          </div>
        </div>
        <img
          src={patient.gender === "ذكر" ? pfImage : wmImage}
          alt="Profile pic"
          className="h-[200px] w-[200px]"
        />
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
        <p
          className="bg-primary-3 text-white text-xl text-center font-medium w-[140px] py-1 rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out"
          onClick={() => {
            deletePatient(patientID);
          }}
        >
          مسح
        </p>
      </div>
      {update && (
        <Update
          patientName={patient.name}
          patientAge={patient.age}
          patientGender={patient.gender}
        />
      )}
      {ticket && <Ticket />}
    </div>
  );
};

export default Profile;
