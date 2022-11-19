import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const Add = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const patientCollectionRef = collection(db, "patient");
  let newID;
  let navigate = useNavigate();

  const addPatient = async () => {
    const data = await getDocs(patientCollectionRef);
    newID = data.docs.length + 1;
    // await addDoc(patientCollectionRef, {
    //   id: newID,
    //   name: name,
    //   age: age,
    //   gender: gender,
    // });
    await setDoc(doc(patientCollectionRef, `${newID}`), {
      id: newID,
      name: name,
      age: age,
      gender: gender,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "تم تسجيل المريض بنجاح",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      navigate(0);
    }, 1000);
  };
  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setAge("");
    setGender("");
  };
  return (
    <div className="mx-auto mt-5 flex flex-col justify-center items-center">
      <h1
        className="text-3xl text-primary-1 font-bold border-b-4 border-primary-1 pb-2 w-fit rounded-lg text-center
      "
      >
        إضـافــة مـريــض
      </h1>
      <div className="mt-10">
        <form
          className="space-y-10"
          onSubmit={(e) => {
            register(e);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            placeholder="اســـم المــريــض"
            className="block w-[300px] py-1 px-2 text-lg border-primary-1 border-2 rounded-md focus:outline-none"
            required
          />
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            name="age"
            placeholder="ســن المــريــض"
            className="w-[160px] py-1 px-2 text-lg border-primary-1 border-2 rounded-md focus:outline-none ml-5"
            required
          />
          <select
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="w-[120px] py-1 px-2 text-lg border-primary-1 border-2 rounded-md focus:outline-none"
            required
          >
            <option value="" disabled hidden>
              النوع
            </option>
            <option value="ذكر">ذكر</option>
            <option value="انثى">انثى</option>
          </select>
          <div>
            <Link to="/">
              <button
                type="submit"
                className="bg-primary-1 text-white text-xl font-bold w-[140px] py-1 rounded-md ml-5 hover:scale-105 transition-all ease-in-out"
                onClick={addPatient}
              >
                تـسجــيل
              </button>
            </Link>
            <Link to="/">
              <button className="bg-primary-3 text-white text-xl font-bold w-[140px] py-1 rounded-md  hover:scale-105 transition-all ease-in-out">
                الـغـاء
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
