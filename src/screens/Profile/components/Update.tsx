import React, { useState } from "react";

const Update = () => {
  const [name, setName] = useState<string>("مصطفى عمرو حامد");
  const [age, setAge] = useState<string>("23");
  const [gender, setGender] = useState<string>("ذكر");
  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`name: ${name} > age: ${age} > gender: ${gender}`);
  };
  return (
    <div className="mx-auto mt-5 flex flex-col justify-center items-center">
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
            className="block w-[300px] py-1 px-2 text-lg border-primary-2 border-2 rounded-md focus:outline-none"
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
            className="w-[160px] py-1 px-2 text-lg border-primary-2 border-2 rounded-md focus:outline-none ml-5"
            required
          />
          <select
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="w-[120px] py-1 px-2 text-lg border-primary-2 border-2 rounded-md focus:outline-none"
            required
          >
            <option value="" disabled hidden>
              النوع
            </option>
            <option value="ذكر">ذكر</option>
            <option value="انثى">انثى</option>
          </select>
          <div>
            <button
              type="submit"
              className="bg-primary-2 text-white text-xl font-bold w-full py-1 rounded-md ml-5 hover:scale-105 transition-all ease-in-out"
            >
              حــفـظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
