import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mt-5 flex justify-between">
      <Link to="/Add">
        <p className="no-underline text-xl font-medium text-primary-1 border-2 border-primary-1 px-5 py-2 rounded-md hover:bg-primary-1 hover:text-white">
          + إضافة مريض
        </p>
      </Link>
      <Link to="/">
        <p className="text-3xl font-medium text-primary-1">Life Care</p>
      </Link>
    </div>
  );
};

export default Navbar;
