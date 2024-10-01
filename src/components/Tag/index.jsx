export default function Tag({ tag }) {
  return (
    <div className="bg-white/10 whitespace-nowrap h-12 flex flex-col  px-4   rounded-[24px] border border-white/10 p-2">
      <p className="text-[20px] text-white">{tag}</p>
    </div>
  );
}
