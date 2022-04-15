import React from "react";

export interface IFormControlProps {
  label: string;
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
  label,
  value,
  placeholder,
  name,
  isValid,
  isTextArea,
  errorMessage,
  onChange,
}: IFormControlProps) => {
  return (
    <div className={""}>
      {!isTextArea && (
        <input
          className={""}
          type={"text"}
          value={value}
          placeholder={placeholder}
          name={name}
        />
      )}
      {!!isTextArea && (
        <textarea
          className={""}
          value={value}
          placeholder={placeholder}
          name={name}
        />
      )}
      <label className={""} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default FormControl;
