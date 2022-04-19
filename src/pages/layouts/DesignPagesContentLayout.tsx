export interface IDesignPagesContentLayoutProps {
  children: JSX.Element[];
}

const DesignPagesContentLayout = ({
  children,
}: IDesignPagesContentLayoutProps) => {
  const [titleComponent, showCaseList, pagesMenu] = children;
  return (
    <div
      className={
        "grid gap-[96px] mb-[96px] sm:mb-[64px] lg:gap-[160px] lg:mb-[160px]"
      }
    >
      <section className={"p-0 m-0 sm:px-10 lg:px-[164px]"}>
        {titleComponent}
      </section>
      <div className={"grid gap-[96px] px-6 lg:px-[164px] lg:gap-[160px]"}>
        <section className={"p-0 m-0"}>{showCaseList}</section>
        <section className={"p-0 m-0"}>{pagesMenu}</section>
      </div>
    </div>
  );
};

export default DesignPagesContentLayout;
