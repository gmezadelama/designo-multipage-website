import React from "react";

export interface IFormControlProps {
  value: string;
  placeholder: string;
  name: string;
  isValid?: boolean;
  isTextArea?: boolean;
  errorMessage?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormControl = ({
  value,
  placeholder,
  name,
  isValid,
  isTextArea,
  errorMessage,
  onChange,
}: IFormControlProps) => {
  const underlineClass =
    !!value && value.length > 0 && isValid ? "border-b-[3px]" : "border-b";
  const errorMessageClass = isValid ? "hidden" : "";
  return (
    <div className={"w-full relative"}>
      {!isTextArea && (
        <input
          className={`w-full text-white font-medium outline-none text-[15px] leading-[26px] pl-3 pb-3 ${underlineClass} border-white placeholder:text-white placeholder:opacity-50 placeholder:font-medium`}
          type={"text"}
          value={value}
          placeholder={placeholder}
          name={name}
          id={`${name}-designo-control`}
          onChange={onChange}
          style={{ backgroundColor: "transparent" }}
          autoComplete={`${name}-designo-control`}
        />
      )}
      {!!isTextArea && (
        <textarea
          className={`w-full text-white font-medium outline-none text-[15px] leading-[26px] pl-3 pb-3 ${underlineClass} border-white placeholder:text-white placeholder:opacity-50 placeholder:font-medium`}
          value={value}
          placeholder={placeholder}
          name={name}
          id={`${name}-designo-control`}
          onChange={onChange}
          rows={3}
          style={{ backgroundColor: "transparent" }}
          autoComplete={`${name}-designo-control`}
        />
      )}
      <div
        className={`absolute ${errorMessageClass} top-0 right-0 text-white italic text-[12px] leading-[26px]`}
      >
        <span className={"mr-[9px]"}>{errorMessage}</span>
        <img
          className={"w-[20px] h-[20px] inline-block"}
          src={"/assets/contact/desktop/icon-error.svg"}
          alt={""}
        />
      </div>
    </div>
  );
};

export default FormControl;
