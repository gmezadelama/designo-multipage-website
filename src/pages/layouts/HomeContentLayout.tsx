export interface IHomeContentLayoutProps {
  children: JSX.Element[];
}

const HomeContentLayout = ({ children }: IHomeContentLayoutProps) => {
  const [heroComponent, fullMenuList, attributesList] = children;
  return (
    <div
      className={
        "grid gap-[120px] mb-[120px] sm:mb-[64px] lg:gap-[160px] lg:mb-[160px]"
      }
    >
      <section className={"p-0 m-0 sm:px-10 lg:px-[164px]"}>
        {heroComponent}
      </section>
      <div className={"grid gap-[120px] px-6 lg:px-[164px] lg:gap-[160px]"}>
        <section className={"p-0 m-0"}>{fullMenuList}</section>
        <section className={"p-0 m-0"}>{attributesList}</section>
      </div>
    </div>
  );
};

export default HomeContentLayout;
