interface Props {
  name?: string | null;
}

export default function DetailsTag({ name }: Props) {
  return (
    <div className="flex items-center gap-2 text-white px-4 py-2 bg-[#101010] rounded-lg">
      <p>{name}</p>
    </div>
  );
}
