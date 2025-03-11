import React from "react";
import LoginForm from "../form/LoginForm";
import HeaderForm from "../form/HeaderForm";

const BodyLogin = () => {
  return (
    <div>
      {/* Body*/}
      <div className="bg-[#ee4d2d]">
        <div className="m-auto w-[1040px] h-[500px] bg-[url(/sg-11134004-7rcdu-m6hs9t6ff10y6b.png)] bg-no-repeat bg-center bg-contain">
          <div className="flex justify-space-between pt-10">
            <div className="w-3/5 "></div>
            <div className="bg-white w-1/2 shadow-md box-border rounded-sm overflow-hidden">
              <HeaderForm></HeaderForm>
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLogin;
