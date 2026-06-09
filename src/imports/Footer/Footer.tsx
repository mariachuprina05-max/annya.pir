function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Cormorant_Garamond:SemiBold_Italic',sans-serif] font-semibold italic leading-none min-w-full relative shrink-0 text-[32px] tracking-[-2px] uppercase w-[min-content]">Anya Pir</p>
      <p className="font-['Inter_Tight:Regular',sans-serif] font-normal leading-[1.2] lowercase relative shrink-0 text-[14px] w-[178px]">{`таргетолог для експертів & бізнесів в Європі та США`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[18px] items-center left-[20px] text-white top-[40px] w-[349px]">
      <Frame1 />
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter_Tight:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] underline uppercase whitespace-nowrap">Impressum</p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#4c3f3f] relative size-full" data-name="Footer">
      <Frame />
    </div>
  );
}