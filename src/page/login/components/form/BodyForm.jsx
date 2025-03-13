import React from "react";
import FooterForm from "./FooterForm";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const BodyForm = (props) => {
  return (
    <div>
      {/* Form body */}
      <div className="body-form overflow-hidden max-w-[400px] mx-auto">
        <div>
          {/* Viết form */}
          {props.status ? (
            <FormLogin></FormLogin>
          ) : (
            <FormRegister></FormRegister>
          )}
        </div>
        <div>
          <FooterForm
            setStatus={props.setStatus}
            status={props.status}
          ></FooterForm>
        </div>
      </div>
    </div>
  );
};

export default BodyForm;
