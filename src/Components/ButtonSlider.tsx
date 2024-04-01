interface Props {
  handleClick: () => void;
  src: string;
}

export default function ButtonSlider({ handleClick, src }: Props) {
  return (
    <button
      className="bg-white/10 rounded-lg flex items-center justify-center w-10 h-10"
      onClick={handleClick}
    >
      <img src={src} alt="icon_prev" width={24} height={24}/>
    </button>
  );
}
