function Container2() {
  return (
    <div className="h-[13px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[-0.01px] not-italic text-[#bbb] text-[9px] top-[-0.76px] tracking-[1.08px] whitespace-nowrap">(01)</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.4px] left-[-0.01px] not-italic text-[#1a1a1a] text-[17px] top-[1.12px] tracking-[-0.4316px] w-[190px]">Ведення для експертів</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[58px] relative shrink-0 w-[189px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.141px] items-start pt-[0.103px] relative size-full">
        <Container2 />
        <Heading />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ccc] border-[0.589px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#1a1a1a] text-[10px] whitespace-nowrap">від 500€/міс</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[58px] items-start justify-between pl-[-0.191px] pr-[-0.01px] pt-[-0.061px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[-0.2px] not-italic text-[#888] text-[12px] top-[0.35px] w-[295px]">Для тих, хто продає консультації, курси або наставництва через Instagram</p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#aaa] left-[-0.21px] rounded-[2.5px] size-[5px] top-[4.79px]" data-name="Text" />;
}

function ListItem() {
  return (
    <div className="h-[17px] relative shrink-0 w-[294px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.4px] left-[14.78px] not-italic text-[#4a4a4a] text-[12px] top-[-0.45px] whitespace-nowrap">Стратегія просування на 3 місяці</p>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#aaa] left-[-0.21px] rounded-[2.5px] size-[5px] top-[4.79px]" data-name="Text" />;
}

function ListItem1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[294px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.4px] left-[14.78px] not-italic text-[#4a4a4a] text-[12px] top-[-0.45px] whitespace-nowrap">6 креативів на місяць від команди</p>
      </div>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#aaa] left-[-0.21px] rounded-[2.5px] size-[5px] top-[4.79px]" data-name="Text" />;
}

function ListItem2() {
  return (
    <div className="h-[17px] relative shrink-0 w-[294px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text2 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.4px] left-[14.78px] not-italic text-[#4a4a4a] text-[12px] top-[-0.45px] whitespace-nowrap">Запуск + ведення IG + Facebook</p>
      </div>
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#aaa] left-[-0.21px] rounded-[2.5px] size-[5px] top-[4.79px]" data-name="Text" />;
}

function ListItem3() {
  return (
    <div className="h-[17px] relative shrink-0 w-[294px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.4px] left-[14.78px] not-italic text-[#4a4a4a] text-[12px] top-[-0.45px] whitespace-nowrap">Щотижневий звіт і місячний стратдзвінок</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[7.396px] h-[91px] items-start pt-[0.407px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[13px] relative shrink-0 w-[98px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-[-0.08px] not-italic text-[#bbb] text-[9px] top-[-0.76px] tracking-[0.72px] whitespace-nowrap">мінімум 3 місяці</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[109.23px] p-[1.179px] rounded-[11px] size-[22px] top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#aaa] border-[1.179px] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#4a4a4a] text-[11px] tracking-[0.0645px] whitespace-nowrap">→</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[131px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[-0.22px] not-italic text-[#4a4a4a] text-[12px] top-[2.34px] whitespace-nowrap">залишити заявку</p>
        <Text6 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[35px] items-center justify-between pl-[-0.121px] pr-[0.021px] pt-[12.589px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t-[0.589px] inset-0 pointer-events-none" />
      <Text4 />
      <Text5 />
    </div>
  );
}

export default function Article() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[19px] relative rounded-[16px] size-full" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.179px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container />
      <Paragraph />
      <List />
      <Container4 />
    </div>
  );
}