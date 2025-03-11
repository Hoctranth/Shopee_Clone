import React from "react";

const HeaderLogin = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="h-21 shadow-amber-50 bg-whit border-b-2 border-gray-200">
        <div className="p-5">
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center gap-5">
              <a href="/">
                <img
                  className="w-[150px] object-contain inline-block cursor-pointer"
                  src="/shopee-seeklogo.png"
                  alt=""
                />
              </a>
              <span className="text-2xl">Đăng Nhập</span>
            </div>
            <div>
              <a className="text-[#ee4d2d] cursor-pointer text-sm" href="">
                Bạn cần giúp đỡ?
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderLogin;
