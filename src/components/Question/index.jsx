export default function Question({ question }) {
  return (
    <div className="border-b border-white/40 py-2 flex justify-between">
      <p> {question}</p>
      <p>+</p>
    </div>
  );
}
