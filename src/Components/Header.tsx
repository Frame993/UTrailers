

type Props = {
    children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <div className="absolute top-0 h-[60px]">
      <div className="md:w-[1200px] flex flex-row items-center justify-between mx-auto">
        <span className="text-xl font-bold">UTraiers</span>
      </div>
    {children}
    </div>
  );
}
