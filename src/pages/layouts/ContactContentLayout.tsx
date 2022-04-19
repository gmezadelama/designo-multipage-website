import { MAX_WIDTH_CONTENT_STYLE } from "../../utils/constants";

export interface IContactContentLayoutProps {
  children: JSX.Element[];
}

const ContactContentLayout = ({ children }: IContactContentLayoutProps) => {
  const [contactForm, locations] = children;
  return (
    <div
      className={`grid gap-[120px] mb-[120px] sm:px-10 lg:gap-[160px] lg:px-[164px] lg:mb-[160px] w-full ${MAX_WIDTH_CONTENT_STYLE}`}
    >
      <section className={"p-0 m-0"}>{contactForm}</section>
      <section className={"p-0 m-0"}>{locations}</section>
    </div>
  );
};

export default ContactContentLayout;
