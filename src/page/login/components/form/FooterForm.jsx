import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

const FooterForm = (props) => {
  console.log(props.status);
  return (
    <div>
      <div className="col-span-3 flex items-center gap-3 mt-4 mb-4">
        <div className="flex-1 h-[1px] bg-[#ccc]"></div>
        <div className="uppercase text-center text-[#ccc] text-sm">Hoặc</div>
        <div className="flex-1 h-[1px] bg-[#ccc]"></div>
      </div>
      <div className="flex gap-2.5">
        <button className="cursor-pointer border-1 border-solid border-[#cdcdcd] rounded-sm w-full h-10 p-1 flex justify-center gap-1 mt-2 mb-2">
          <div className="flex items-center gap-1">
            <FaFacebook size={20} color="blue" />
            <span className="text-base">Facebook</span>
          </div>
        </button>

        <button className="cursor-pointer border-1 border-solid border-[#cdcdcd] rounded-sm w-full h-10 p-1 flex justify-center gap-1 mt-2 mb-2">
          <div className="flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="googleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="30%" stopColor="#EA4335" />
                  <stop offset="73%" stopColor="#4285F4" />
                  <stop offset="2%" stopColor="#34A853" />
                  <stop offset="2%" stopColor="#FBBC05" />
                </linearGradient>
              </defs>
              <FaGoogle size={20} style={{ fill: "url(#googleGradient)" }} />
            </svg>
            <span className="text-base">Google</span>
          </div>
        </button>
      </div>
      {props.status ? (
        <div className="flex justify-center items-center gap-2 pt-5 pb-5">
          <div className="text-base text-[#b6b1b1]">
            Bạn mới biết đến Shopee?
          </div>
          <div
            className="text-red-500 text-base cursor-pointer"
            onClick={() => props.setStatus(false)}
          >
            Đăng ký
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center pt-5">
            <div className="text-sm">
              Bằng việc đăng kí, bạn đã đồng ý với Shopee về
            </div>
            <div className="flex justify-center items-center gap-2 text-sm">
              <div className="text-red-500 cursor-pointer">
                Điều khoản dịch vụ
              </div>
              <div>&</div>
              <div className="text-red-500 cursor-pointer">
                Chính sách bảo mật
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 pt-5 pb-5">
            <div className="text-base text-[#b6b1b1]">Bạn đã có tài khoản?</div>
            <div
              className="text-red-500 text-base cursor-pointer"
              onClick={() => props.setStatus(true)}
            >
              Đăng nhập
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterForm;
