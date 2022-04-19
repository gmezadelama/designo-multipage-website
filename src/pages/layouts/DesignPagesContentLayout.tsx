import { MAX_WIDTH_CONTENT } from "../../utils/constants";

export interface IDesignPagesContentLayoutProps {
  children: JSX.Element[];
}

const DesignPagesContentLayout = ({
  children,
}: IDesignPagesContentLayoutProps) => {
  const [titleComponent, showCaseList, pagesMenu] = children;
  return (
    <div
      className={`grid gap-[96px] mb-[96px] sm:gap-[120sm:px] sm:mb-[120px] lg:gap-[160px] lg:mb-[160px] lg:max-w-[${MAX_WIDTH_CONTENT}px] lg:mx-auto`}
    >
      <section className={"p-0 m-0 sm:px-10 lg:px-[164px]"}>
        {titleComponent}
      </section>
      <div
        className={
          "grid gap-[96px] px-6 sm:gap-[120px] sm:px-10 lg:px-[164px] lg:gap-[160px]"
        }
      >
        <section className={"p-0 m-0"}>{showCaseList}</section>
        <section className={"p-0 m-0"}>{pagesMenu}</section>
      </div>
    </div>
  );
};

export default DesignPagesContentLayout;
