interface Props {
  className?: string;
  onType: (value: string) => void;
  searchedValues?: { value: string; id: number; isMovie: boolean  }[];
  onSearchedValueClick?: (value: {
    value: string;
    id: number;
    isMovie: boolean;
  }) => void;
}

export default function InputSearch({
  className,
  onType,
  searchedValues,
  onSearchedValueClick,
}: Props) {
  return (
    <div className="absolute md:relative top-[65px] md:top-0 mx-auto w-[90%] md:w-[400px]">
      <input
        placeholder="Search"
        className={`search-input h-[38px] w-full 
      px-4 py-2 rounded-lg bg-black/60 text-white md:justify-beetween 
        placeholder:text-white/60 ${className}`}
        onChange={(e) => onType(e.target.value)}
      />
      {searchedValues && (
        <ul className="absolute top-[50px] bg-[#101010] rounded-lg md:w-[400px] w-full ">
          {searchedValues.slice(0, 10).map((value) => (
            <li className="hover:bg-[#E5000060] cursor-pointer"
              value={value.id}
              key={value.id}
              onClick={() => {
                if (onSearchedValueClick) onSearchedValueClick(value);
              }}
            >
              <p className="text-white px-4 py-2">{value.value}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
