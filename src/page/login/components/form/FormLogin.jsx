import React from "react";

const FormLogin = () => {
  const [errors, setErrors] = React.useState({ username: "", password: "" });
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = React.useState(false);
  const validateField = (field, value) => {
    setErrors((prevErrors) => {
      const newError = value.trim() === "" ? "Vui lòng điền vào mục này" : "";
      return prevErrors[field] === newError
        ? prevErrors
        : { ...prevErrors, [field]: newError };
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
    if (data.username.trim() === "" && data.password.trim() === "") {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  const handleSubmit = () => {
    console.log(data);
    Navigator.push("/");
  };

  const FormCss =
    "border-1 border-solid border-[#e6e6e6] overflow-hidden h-11 p-4 box-border flex items-center ";
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={`${FormCss} form-control`}>
          <input
            type="text"
            className="form-control w-100 border-0 outline-none"
            id="username"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            value={data.username}
            onBlur={() => {
              validateField("username", data.username);
            }}
            onChange={handleChange}
          />
        </div>
        <div className="text-[#ff424f] text-[0.8rem] min-h-4 p-1 px-0 py-0 mb-2 mt-1">
          {errors.username ? "Vui lòng điền vào mục này" : ""}
        </div>
        <div className={`${FormCss} form-control`}>
          <input
            type="password"
            className="form-control w-100 border-0 outline-none"
            id="password"
            placeholder="Mật khẩu"
            value={data.password}
            onBlur={() => {
              validateField("password", data.password);
            }}
            onChange={handleChange}
          />
        </div>
        <div className="text-[#ff424f] text-[0.8rem] min-h-4 p-1 px-0 py-0 mb-2 mt-1">
          {errors.password ? "Vui lòng điền vào mục này" : ""}
        </div>
        <div className="form-group">
          <button
            className={`btn-login border-0 border-none ${
              !isFormValid
                ? "cursor-no-drop opacity-[.7]"
                : "cursor-current opacity-100"
            } bg-[#ee4d2d] text-white flex justify-center items-center w-full h-10 shadow-md uppercase`}
            disabled={!isFormValid}
          >
            Đăng Nhập
          </button>
        </div>
      </form>
      <div className="form-footer text-sm pt-2 text-[#05a]">
        <a href="/login">Quên mật khẩu</a>
      </div>
    </div>
  );
};

export default FormLogin;
