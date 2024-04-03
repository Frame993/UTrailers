import { useEffect, useState } from "react";

interface Props {
  text: string;
  onClink: () => void;
  isActive: boolean;
}

export default function ButtonCategory({ text, onClink, isActive }: Props) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setActive(isActive);
  })


  return (
    <button
     
      className={`btn-category px-6 py-2 rounded-lg 
      ${active ? "bg-[#E50000]" : "text-white/80"}`}
      onClick={() => {
        onClink();
      }}
    >
      {text}
    </button>
  );
}
