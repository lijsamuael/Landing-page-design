export default function SideContent({ title, desc, step }) {
  return (
    <div className="h-[580px] max-w-[400px] flex flex-col text-white justify-between">
      <div>
        <p className="text-[32px]">{title}</p>
        <p className="opacity-50 text-lg pt-12">{desc}</p>
      </div>
      <p className="opacity-50 text-lg">{step}</p>
    </div>
  );
}
