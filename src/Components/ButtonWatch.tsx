interface Props {
  text: string;
  icon: string;
}

export default function ButtonWatch({ text, icon }: Props) {
  return (
    <button className="btn flex flex-row items-center gap-2 bg-[#E50000] w-fit px-6 py-3 rounded-lg uppercase font-bold">
      <img src={icon} alt="icon" />
      {text}
    </button>
  );
}
