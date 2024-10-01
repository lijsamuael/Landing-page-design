import Question from "../Question";

export default function FQA() {
  return (
    <div className="pt-32 pb-8">
      <div className="px-16 flex gap-64  text-white justify-between">
        <div className="w-5/12">
          <p className="text-[56px]  ">
            What can curiosity, wonder, and awe do for you?
          </p>
          <p className="opacity-50 text-lg pt-12">
            Research shows that experiencing curiosity and awe can immensely
            benefit our mental, physical, and professional health. Here’s a
            brief overview of what curiosity and awe can do for you.
          </p>
        </div>
        <div className="w-7/12 flex flex-col gap-6">
          <Question
            question={"Does Fluid AI increase wellbeing and meaning in life?"}
          />
          <Question
            question={"What can curiosity, wonder, and awe do for you?"}
          />
          <Question
            question={"Does Fluid AI increase wellbeing and meaning in life?"}
          />
          <Question
            question={"What can curiosity, wonder, and awe do for you?"}
          />
          <Question
            question={"Does Fluid AI increase wellbeing and meaning in life?"}
          />
          <Question
            question={"What can curiosity, wonder, and awe do for you?"}
          />
          <Question
            question={"Does Fluid AI increase wellbeing and meaning in life?"}
          />
          <Question
            question={"What can curiosity, wonder, and awe do for you?"}
          />
        </div>
      </div>
    </div>
  );
}
