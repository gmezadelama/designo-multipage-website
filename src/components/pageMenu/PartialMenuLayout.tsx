export interface IPartialMenuLayoutProps {
  children: JSX.Element[];
}

const PartialMenuLayout = (props: IPartialMenuLayoutProps) => {
  const [MenuButton1, MenuButton2] = props.children;
  return (
    <>
      <div
        className={
          "grid gap-6 lg:gap-[30px] lg:grid-cols-2 h-[524px] sm:h-[424px] lg:h-[308px]"
        }
      >
        {MenuButton1}
        {MenuButton2}
      </div>
    </>
  );
};

export default PartialMenuLayout;
