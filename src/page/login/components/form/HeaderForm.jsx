import React from "react";

const HeaderForm = (props) => {
  return (
    <div className="title-form flex justify-between px-7 py-5">
      <div className="px-2 py-2 text-xl">
        {props.status ? "Đăng nhập" : "Đăng ký"}
      </div>
      {props.status && (
        <>
          <div className="bg-[#fefaec] border-2 border-[#ffbf00] border-solid text-[#ffbf00] text-sm font-bold mr-4 rounded-[2px] relative px-3 py-2 after:content-[''] after:border-solid after:border-r-[2px] after:border-t-[2px] after:box-border after:absolute after:-right-2 after:top-1/2 after:w-3 after:h-3 after:-translate-y-1/2 after:transform after:rotate-45 after:bg-[#fefaec]">
            Đăng nhập với mã QR
          </div>

          <div>
            <svg fill="none" className="w-12 h-10">
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                  fill="#EE4D2D"
                ></path>
                <path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path>
                <path
                  d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                  fill="#EE4D2D"
                ></path>
                <path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h40v40H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderForm;
