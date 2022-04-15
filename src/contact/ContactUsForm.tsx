import React, { useState } from "react";
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
  const isValid = (
    newValue: string,
    formDataKey: FormDataEnum,
    currentFormValue?: FormValue
  ) => {
    if (!currentFormValue) return false;
    if (!newValue && currentFormValue.isRequired) return false;
    if (formDataKey === FormDataEnum.Email) {
      // TODO validate email format
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
      .map((fv: FormValue) => fv.isValid)
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
          "bg-pattern-hero-contact-mobile bg-peach bg-[top_left_-92px] bg-no-repeat sm:bg-pattern-hero-desktop w-full h-[764px]"
        }
      >
        <div>{"Contact Us"}</div>
        <div>
          {
            "Ready to take it to the next level? Lets talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
          }
        </div>
        <div>
          <form>
            <FormControl
              label={"Name"}
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
              label={"Email Address"}
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
              label={"Phone"}
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
              label={"Your Message"}
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
            <div>
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
