import React from "react";
import Footer from "../../components/footer/footer";
import HeaderLogin from "./components/login/HeaderLogin";
import BodyLogin from "./components/login/BodyLogin";

const LoginPage = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-screen max-h-screen">
        <HeaderLogin></HeaderLogin>
        <BodyLogin></BodyLogin>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LoginPage;
