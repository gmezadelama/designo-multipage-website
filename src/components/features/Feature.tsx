import React, { useState } from "react";

export interface IFeatureProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Feature = ({ imageSrc, title, description }: IFeatureProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovering(true);
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovering(false);
  };
  const bgColor = isHovering ? "bg-peach" : "bg-[#FDF3F0]";
  const h3Color = isHovering ? "text-white" : "text-peach";
  const descrColor = isHovering ? "text-white" : "text-black";
  return (
    <>
      <div
        className={`grid grid-flow-row w-full max-h-[478px] rounded-[15px] ${bgColor} hover:cursor-pointer sm:max-h-[310px] sm:grid-flow-col md:max-h-[478px] md:grid-flow-row`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          src={imageSrc}
          alt={title}
          className={
            "w-full max-h-[320px] sm:max-h-[310px] md:max-h-[320px] rounded-t-[15px] sm:rounded-t-none sm:rounded-l-[15px] md:rounded-l-none md:rounded-t-[15px]"
          }
        />
        <div
          className={"bg-inherit grid gap-4 text-center justify-center py-8"}
        >
          <h3 className={`${h3Color} mt-auto `}>{title}</h3>
          <div className={`${descrColor} max-w-[268px] inline-block`}>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
