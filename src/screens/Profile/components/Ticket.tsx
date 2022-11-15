import React from "react";

const Ticket = () => {
  const date = new Date();
  const fullDate = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  return (
    <div className="mx-auto mt-5 bg-slate-500 w-[800px] p-5 rounded-md">
      <p className="text-2xl text-white font-medium text-center">
        تــشخـيص بتاريخ{" "}
        <span>
          {fullDate.day}/{fullDate.month}/{fullDate.year}
        </span>
      </p>
      {/* General */}
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-right text-primary-1">عامة</h1>
        <div className="mb-2 flex gap-5">
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              سكر
            </label>
          </div>
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              ضغط
            </label>
          </div>
        </div>
      </div>
      {/* Heart */}
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-right text-primary-1">القلب</h1>
        <div className="mb-2 flex gap-5">
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              تسارّع نبضات القلب
            </label>
          </div>
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              بُطء نبضات القلب
            </label>
          </div>
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              ألم في الصدر
            </label>
          </div>
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              ضيق في التنفس
            </label>
          </div>
        </div>
      </div>
      {/* liver */}
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-right text-primary-1">الكبد</h1>
        <div className="mb-2 flex gap-5">
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              ألمًا وتورُّمًا في البطن
            </label>
          </div>
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              تورُّم الساقين والكاحلين
            </label>
          </div>
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              البول الداكن
            </label>
          </div>
          <div>
            <input className="peer/draft ml-2" type="checkbox" name="status" />
            <label className="peer-checked/draft:text-primary-1 text-lg text-white">
              الإرهاق المزمن
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary-1 text-white text-xl font-medium w-full py-1 rounded-md ml-5 mt-5 hover:scale-105 transition-all ease-in-out"
      >
        انــهـاء الكـشـف
      </button>
    </div>
  );
};

export default Ticket;
