interface Props {
  className?: string;
}

export default function InputSearch({ className }: Props) {
  return (
    <input
      type="text"
      placeholder="Search"
      className={`search-input h-[38px] md:w-[400px] 
      px-4 py-2 rounded-lg bg-black/60 text-white absolute md:right-[600px] 
      w-[90%] top-[65px] md:top-3 placeholder:text-white/60 ${className}`}
    />
  );
}
