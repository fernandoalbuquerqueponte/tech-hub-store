interface SectionListTitleProps {
  title: string;
}

export default function SectionListTitle({ title }: SectionListTitleProps) {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4 mb-4">
      <h1 className="uppercase text-white font-bold text-lg">{title}</h1>
    </div>
  );
}
