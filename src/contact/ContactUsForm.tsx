import React, { useState, useEffect } from "react";
import LightButton from "../components/buttons/LightButton";
import FormControl from "./FormControl";

interface FormValue {
  value: string;
  isRequired: boolean;
  isValid: boolean;
}
enum FormDataEnum {
  Name = "name",
  Email = "email",
  PhoneNumber = "phoneNumber",
  Message = "message",
}

interface FormData {
  [FormDataEnum.Name]: FormValue;
  [FormDataEnum.Email]: FormValue;
  [FormDataEnum.PhoneNumber]: FormValue;
  [FormDataEnum.Message]: FormValue;
}

const ContactUsForm = () => {
  const getCleanFormValue = (isRequired: boolean) => ({
    value: "",
    isRequired,
    isValid: true,
  });
  const getCleanFormData = () => ({
    name: getCleanFormValue(true),
    email: getCleanFormValue(true),
    phoneNumber: getCleanFormValue(false),
    message: getCleanFormValue(true),
  });
  const [formData, setFormData] = useState<FormData>(getCleanFormData());
  useEffect(() => {
    return () => {
      setFormData(getCleanFormData());
    };
  }, []);
  const isValid = (
    newValue: string,
    formDataKey: FormDataEnum,
    currentFormValue?: FormValue
  ) => {
    if (!currentFormValue) return false;
    if (!newValue && currentFormValue.isRequired) return false;
    if (formDataKey === FormDataEnum.Email) {
      // TODO validate email format
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue);
    }
    return true;
  };
  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const formDataKey = name as FormDataEnum;
    const currentFormValue = formData[formDataKey];
    let newFormValue = {
      ...currentFormValue,
      isValid: isValid(value, formDataKey, currentFormValue),
      value,
    };
    setFormData({
      ...formData,
      [name]: newFormValue,
    });
  };
  const getErrorMessage = (
    formDataValue: FormValue,
    formDataKey: FormDataEnum
  ) => {
    const { value, isRequired, isValid } = formDataValue;
    if (isValid) return "";
    if (!value && isRequired) return "Can't be empty";
    if (formDataKey === FormDataEnum.Email)
      return "Please use a valid email address";
    return "";
  };
  const isFormValid = (): boolean => {
    const formValues = [
      formData[FormDataEnum.Name],
      formData[FormDataEnum.Email],
      formData[FormDataEnum.PhoneNumber],
      formData[FormDataEnum.Message],
    ];
    return formValues
      .map(
        (fv: FormValue) =>
          fv.isValid && (!fv.isRequired || (fv.isRequired && !!fv.value))
      )
      .reduce((previous, current) => previous && current, true);
  };
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      setFormData(getCleanFormData());
    }
  };
  return (
    <>
      <div
        className={
          "bg-pattern-hero-contact-mobile bg-peach bg-[top_left_-92px] py-[72px] px-6 bg-no-repeat sm:bg-pattern-hero-contact-desktop sm:bg-[top_-83px_left_-83px] sm:pl-[61px] sm:pr-[55px] sm:pt-[69px] sm:h-[711px] lg:h-[480px] lg:bg-[bottom_left] w-full h-[764px] grid grid-flow-row gap-12 grid-rows-[auto_auto] lg:grid-cols-[auto_1fr] lg:gap-[0_95px] lg:px-[95px] lg:pt-[55px]"
        }
      >
        <div
          className={
            "grid grid-flow-row gap-6 text-center grid-rows-[auto_auto] max-h-[185px] sm:text-left lg:max-w-[445px] lg:pt-20"
          }
        >
          <h1 className={"text-white text-[32px] leading-9 sm:text-5xl"}>
            {"Contact Us"}
          </h1>
          <div
            className={
              "text-white text-[15px] leading-[25px] sm:text-[1rem] sm:leading-[26px]"
            }
          >
            {
              "Ready to take it to the next level? Lets talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
            }
          </div>
        </div>
        <div className={"h-[387px] w-full"}>
          <form className={"w-full grid gap-6"} autoComplete={"off"}>
            <input
              autoComplete="off"
              name="hidden"
              type="text"
              style={{ display: "none" }}
            />
            <FormControl
              value={formData[FormDataEnum.Name].value}
              placeholder={"Name"}
              name={FormDataEnum.Name as string}
              isValid={formData[FormDataEnum.Name].isValid}
              errorMessage={getErrorMessage(
                formData[FormDataEnum.Name],
                FormDataEnum.Name
              )}
              onChange={onChangeInput}
            />
            <FormControl
              value={formData[FormDataEnum.Email].value}
              placeholder={"Email Address"}
              name={FormDataEnum.Email as string}
              isValid={formData[FormDataEnum.Email].isValid}
              errorMessage={getErrorMessage(
                formData[FormDataEnum.Email],
                FormDataEnum.Email
              )}
              onChange={onChangeInput}
            />
            <FormControl
              value={formData[FormDataEnum.PhoneNumber].value}
              placeholder={"Phone"}
              name={FormDataEnum.PhoneNumber as string}
              isValid={formData[FormDataEnum.PhoneNumber].isValid}
              errorMessage={getErrorMessage(
                formData[FormDataEnum.PhoneNumber],
                FormDataEnum.PhoneNumber
              )}
              onChange={onChangeInput}
            />
            <FormControl
              value={formData[FormDataEnum.Message].value}
              placeholder={"Your Message"}
              name={FormDataEnum.Message as string}
              isValid={formData[FormDataEnum.Message].isValid}
              errorMessage={getErrorMessage(
                formData[FormDataEnum.Message],
                FormDataEnum.Message
              )}
              isTextArea
              onChange={onChangeInput}
            />
            <div className={"text-center pt-4 sm:pt-0 sm:text-right"}>
              <LightButton
                label={"Submit"}
                onClick={onSubmit}
                type={"submit"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
