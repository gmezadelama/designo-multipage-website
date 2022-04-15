export interface IDarkButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button";
}

const DarkButton = (props: IDarkButtonProps) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!!props.onClick) {
      props.onClick(event);
    }
  };
  return (
    <>
      <button
        className={
          "bg-peach rounded font-sans tracking-[2px] text-white font-medium text-[15px] leading-[22px] uppercase w-[152px] h-[56px] hover:bg-lightPeach hover:text-white"
        }
        onClick={onClick}
        type={props.type}
      >
        {props.label}
      </button>
    </>
  );
};

export default DarkButton;
