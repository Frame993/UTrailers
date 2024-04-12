import React from "react";

interface Props {
  text: string;
  icon ?: string;
  children?: React.ReactNode;
}

export default function DetailsDataSection({ text, icon, children }: Props) {
  return (
    <div className="flex flex-col gap-x-2 gap-y-4 mb-4">
      <div className="flex flex-row gap-2 items-center">
        {icon && <img src={icon} alt="icon" />}
        <h3 className="text-white/60 text-[18px]">{text}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}
