export default function Iphone({ url }) {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[783px] w-[386px] lg:h-[783px] lg:w-[386px] sm:h-[446px] sm:w-[220px] shadow-[0px_713.95px_200.04px_0px_#00000000]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
        <iframe
          src={url}
          className="w-full h-full overflow-hidden"
          title="Embedded Website"
        ></iframe>
      </div>
    </div>
  );
}
