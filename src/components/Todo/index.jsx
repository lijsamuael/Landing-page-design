export default function Todo({ task }) {
  return (
    <div className="bg-black/15 whitespace-nowrap h-24 rounded-[24px] border border-white/10 p-4 pr-8">
      <p className="text-white/60 text-lg">Next To-Do</p>
      <p className="text-[28px] text-white">{task}</p>
    </div>
  );
}
