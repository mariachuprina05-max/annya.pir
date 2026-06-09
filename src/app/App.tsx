import { useEffect, useRef, useState } from "react";
import imgProfile from "../imports/PhotoPlaceholder.jpg";
import imgClip from "../imports/___.png";
import imgReviewCourses from "../imports/review-courses.jpg";
import imgReviewLocalBusiness from "../imports/review-localbusiness.jpg";
import imgReviewInfobiz from "../imports/review_infobiz.jpg";
import svgPaths from "../imports/Wireframes/svg-jglmtjsde";

const WAVY_PATH_TOP = "M20.9971 0C22.9563 4.69776 27.5922 8 33 8C38.4078 8 43.0437 4.69776 45.0029 0H61.5684C63.5275 4.69776 68.1635 8 73.5713 8C78.9791 8 83.615 4.69776 85.5742 0H102.141C104.1 4.69767 108.736 8 114.144 8C119.551 7.9998 124.186 4.69753 126.146 0H142.712C144.671 4.69767 149.307 8 154.715 8C160.122 7.9998 164.758 4.69753 166.717 0H183.283C185.242 4.69767 189.878 8 195.286 8C200.694 7.9998 205.329 4.69753 207.288 0H223.854C225.814 4.69767 230.45 8 235.857 8C241.265 7.9998 245.9 4.69753 247.859 0H264.426C266.385 4.69776 271.021 8 276.429 8C281.837 8 286.472 4.69776 288.432 0H304.997C306.956 4.69776 311.592 8 317 8C322.408 8 327.044 4.69776 329.003 0H351";
const WAVY_PATH_BOTTOM_480 = "V500H329.003C327.044 495.302 322.408 492 317 492C311.592 492 306.956 495.302 304.997 500H288.432C286.472 495.302 281.837 492 276.429 492C271.021 492 266.385 495.302 264.426 500H247.859C245.9 495.302 241.265 492 235.857 492C230.45 492 225.814 495.302 223.854 500H207.288C205.329 495.302 200.694 492 195.286 492C189.878 492 185.242 495.302 183.283 500H166.717C164.758 495.302 160.122 492 154.715 492C149.307 492 144.671 495.302 142.712 500H126.146C124.186 495.302 119.551 492 114.144 492C108.736 492 104.1 495.302 102.141 500H85.5742C83.615 495.302 78.9791 492 73.5713 492C68.1635 492 63.5275 495.302 61.5684 500H45.0029C43.0437 495.302 38.4078 492 33 492C27.5922 492 22.9563 495.302 20.9971 500H0V0H20.9971Z";

const StripePattern = () => (
  <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
    <div className="flex gap-6 h-full opacity-12">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="flex gap-[3px] items-center">
          <div className="bg-[#150c0c] w-[11px] h-full" />
          <div className="bg-[#150c0c] w-[3px] h-full" />
          <div className="bg-[#150c0c] w-[11px] h-full" />
        </div>
      ))}
    </div>
  </div>
);

const WhiteStripePattern = () => (
  <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
    <div className="flex gap-6 h-full opacity-30">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="flex gap-[3px] items-center">
          <div className="bg-white w-[11px] h-full" />
          <div className="bg-white w-[3px] h-full" />
          <div className="bg-white w-[11px] h-full" />
        </div>
      ))}
    </div>
  </div>
);

const DotsRow = ({ color = "#453939" }: { color?: string }) => (
  <div className="absolute h-[10px] left-1/2 -translate-x-1/2 top-[10px] w-[327px]">
    <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 10">
      {[5, 33.8182, 62.6364, 91.4545, 120.273, 149.091, 177.909, 206.727, 235.545, 264.364, 293.182, 322].map((cx) => (
        <circle key={cx} cx={cx} cy="5" r="5" fill={color} />
      ))}
    </svg>
  </div>
);

type CaseData = {
  key: string;
  label: string;
  color: string;
  niche: string;
  location: string;
  locationShort: string;
  duration: string;
  before: string;
  process: string;
  result: string;
  stats: { value: string; label: string }[];
  quote: string;
  author: string;
  url: string;
  screenshot?: string;
};

const CASES: CaseData[] = [
  {
    key: "courses",
    label: "Навчання",
    color: "#fbe7f8",
    niche: "Мовна школа з німецької",
    location: "Європа",
    locationShort: "EU",
    duration: "1+ рік",
    before: "2.500 підписників, реклама зливала бюджет без результату",
    process: "проаналізували продуктову лінійку і ЦА, знайшли головний біль аудиторії, побудували воронку і запустили таргетовану рекламу на Meta",
    result: "ріст до 15,8 цільової аудиторії, школа масштабується",
    stats: [
      { value: "15 000€", label: "з реклами" },
      { value: "+13.300", label: "підписників" },
      { value: "~1,35$", label: "ціна заявки" },
    ],
    quote: "«За 2 місяці перейшли від точкових запусків до системних. Продажі ростуть щотижня.»",
    author: "— Марта · власниця",
    url: "https://instagram.com/p/DWHjBArgkTc/?igsh=MXVoYXB0cHp3NWkzZA%3D%3D&img_index=1",
    screenshot: imgReviewCourses,
  },
  {
    key: "flowers",
    label: "Локал бізнес",
    color: "#faf9ec",
    niche: "Квітковий бутік",
    location: "Україна",
    locationShort: "UA",
    duration: "6+ місяців",
    before: "новий акаунт з нуля, реклама не окупалась, стабільного потоку клієнтів не було",
    process: "Спочатку працювали над набором аудиторії, щоб пізніше активовувати їх під покупку квітів",
    result: "стабільні продажі, масштабування (клієнт відкрив ще один бутик в Борисполі)",
    stats: [
      { value: "12 000$", label: "за 5 місяців" },
      { value: "+2 500", label: "підписників" },
      { value: "2 630$", label: "за 4 дні (14.02)" },
    ],
    quote: "«Нарешті розумію, скільки коштує учень і скільки я можу платити за заявку.»",
    author: "— Ірина · засновниця",
    url: "https://www.instagram.com/p/DVf1cn3Am2w/?igsh=MWZzNjJnZm5ibnZ1eA%3D%3D&img_index=1",
    screenshot: imgReviewLocalBusiness,
  },
  {
    key: "beauty",
    label: "Інфобізнес",
    color: "#d5e7fd",
    niche: "Навчання з СММ",
    location: "Європа",
    locationShort: "EU",
    duration: "5 тижнів",
    before: "продажі через особисті прогріви, без системної воронки на холодну аудиторію",
    process: "проаналізували ЦА і конкурентів, вибрали одну воронку через лендінг, створили відео і фото креативи що б'ють у болі аудиторії",
    result: "стабільні продажі через автоворонку без вебів і прогрівів, окупність 702%",
    stats: [
      { value: "7 850€", label: "продажів" },
      { value: "702%", label: "ROAS" },
      { value: "1 118€", label: "вкладено" },
    ],
    quote: "«За 3 місяці перейшли від хаотичних запусків до системних. Тепер я планую виторг наперед.»",
    author: "— Олена · косметолог",
    url: "https://www.instagram.com/p/DZHjtrTggkL/?igsh=MW9kcHkwZWRwYWludQ==",
    screenshot: imgReviewInfobiz,
  },
];

export default function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);
  const [activeCase, setActiveCase] = useState(CASES[0].key);
  const active = CASES.find((c) => c.key === activeCase)!;

  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formAbout, setFormAbout] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzim_5LT6uqQ6xK3wAPvxAApnw-Gt4VNc0FQwuOshEaNNj103X2Iv8LWLaV_O9rQUN4/exec';

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formContact.trim() || !formAbout.trim()) return;
    setFormStatus('sending');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          contact: formContact,
          message: formAbout,
        }),
      });
      setFormStatus('success');
      setFormName('');
      setFormContact('');
      setFormAbout('');
    } catch {
      setFormStatus('error');
    }
  };

  useEffect(() => {
    let servicesVisible = false;
    let casesVisible = false;

    const updateButtonVisibility = () => {
      setShowButton(servicesVisible && !casesVisible);
    };

    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        servicesVisible = entry.isIntersecting;
        updateButtonVisibility();
      },
      { threshold: 0 }
    );

    const casesObserver = new IntersectionObserver(
      ([entry]) => {
        casesVisible = entry.isIntersecting;
        updateButtonVisibility();
      },
      { threshold: 0 }
    );

    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    if (casesRef.current) casesObserver.observe(casesRef.current);

    return () => {
      servicesObserver.disconnect();
      casesObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-[#4c3f3f] relative overflow-hidden pt-5">
        <StripePattern />

        {/* Navigation Bar */}
        <nav className="relative h-14 flex items-center justify-center px-5 z-10">
          <div className="w-full max-w-[400px] flex items-center justify-between">
            <a
              href="https://www.instagram.com/anya.pir_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold text-base font-['Inter',sans-serif] max-[359px]:hidden hover:opacity-70 transition-opacity"
            >
              anya.pir_
            </a>
            <div className="flex items-center gap-[18px]">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-white text-xs font-['Inter',sans-serif] hover:opacity-70 transition-opacity cursor-pointer"
              >
                Послуги
              </button>
              <div className="w-[14px] h-0 border-t border-white rotate-90" />
              <button
                onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-white text-xs font-['Inter',sans-serif] hover:opacity-70 transition-opacity cursor-pointer"
              >
                Кейси
              </button>
              <div className="w-[14px] h-0 border-t border-white rotate-90" />
              <button
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-white text-xs font-['Inter',sans-serif] hover:opacity-70 transition-opacity cursor-pointer"
              >
                Контакти
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative flex justify-center px-5 pt-6 pb-10">
          <div className="w-full max-w-[400px] flex flex-col gap-8 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[124px] h-[124px] z-10">
              <img src={imgClip} alt="" className="w-full h-full object-contain" />
            </div>

            <div className="bg-white rounded-[18px] border border-[#4d4d4d] overflow-hidden mt-[87px] relative">
              <div className="p-4 flex flex-col gap-5 items-center">
                <div className="bg-[#fbf8f8] rounded-[18px] overflow-hidden w-full h-[354px] relative">
                  <img src={imgProfile} alt="Anya" className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex flex-col gap-1 items-center w-full">
                  <h1 className="font-['Cormorant_Garamond',serif] font-semibold italic text-[32px] leading-none text-black text-center uppercase">
                    Привіт, я Аня
                  </h1>
                  <p className="font-['Inter_Tight',sans-serif] font-normal text-base leading-[1.2] text-black text-center max-w-[300px]">
                    таргетолог і маркетолог для експертів, бізнесів і особистих блогів <br />8+ років досвіду в digital marketing в Європі, США і Україні
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 117" fill="none" preserveAspectRatio="none">
                <path d={svgPaths.p10dc7c40} fill="#FAF9EC" />
              </svg>
              <div className="relative z-10 flex flex-col gap-3 items-center justify-center py-6 px-4">
                <p className="font-['Inter_Tight',sans-serif] font-normal text-base leading-[1.2] text-black text-center">
                  Таргетована реклама на Meta, TikTok і контекстна реклама на Google Ads під ключ
                </p>
                <button
                  onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="bg-[#fbe7f8] border border-black rounded-full px-[21px] py-[11px] flex items-center justify-between gap-4 w-full max-w-[300px] hover:bg-[#f8d6f2] transition-colors"
                >
                  <span className="font-['Inter_Tight',sans-serif] font-normal text-base leading-[1.2] text-center flex-1">
                    Обговорити проєкт
                  </span>
                  <span className="w-[22px] h-[22px] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[13px]">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#4c3f3f] relative overflow-hidden py-10 px-5">
        <StripePattern />
        <div className="relative w-full max-w-[400px] mx-auto flex flex-col gap-9">
          <div className="flex flex-col gap-[14px] items-center">
            <div className="flex flex-col items-center min-h-[66px] gap-0">
              <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[32px] leading-none text-white text-center uppercase tracking-[-2px]">
                Коли ти працюєш зі мною
              </p>
              <div className="flex items-center justify-center h-[33.903px] max-w-full w-[302.196px]">
                <div className="rotate-[-0.36deg]">
                  <div className="bg-[#d5e7fd] px-[17px] rounded-[39px] flex items-center justify-center">
                    <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[32px] leading-none text-[#453939] tracking-[-2px] uppercase">
                      ти отримуєш…
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white text-center w-[267px]">
              не просто рекламу, a маркетинг-систему, яка працює на результат
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                num: "( 01 )", color: "#faf9ec", title: "Стратегія",
                text: "План просування, вибір платформи - індивідуально під твій бізнес і продукт, без шаблонних налаштувань кампаній"
              },
              {
                num: "( 02 )", color: "#fbe7f8", title: "Креативи",
                text: "Реклама, яка привертає увагу і конвертує у продажі. Статика та відео у якісній картинці від перевірених мною дизайнерів і монтажерів"
              },
              {
                num: "( 03 )", color: "#d5e7fd", title: "Аналітика та оптимізація",
                text: "Щоденна робота з цифрами, тестами й масштабуванням. Щоб тримати тебе в курсі кожної оптимізації"
              },
              {
                num: "( 04 )", color: "#faf9ec", title: "Занурення в бізнес",
                text: "Я не тільки налаштовую рекламу, а занурююсь в твій бізнес як маркетолог і даю тобі рекомендації та поради на кожному етапі воронки"
              },
            ].map(({ num, color, title, text }) => (
              <div key={title} className="rounded-[14px] relative w-full" style={{ backgroundColor: color }}>
                <DotsRow />
                <div className="flex items-start justify-between pb-3 pt-10 px-3 w-full">
                  <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-[#181818] w-[29px]">
                    {num}
                  </p>
                  <div className="flex flex-col gap-[6px] items-start text-[#181818] w-[290px]">
                    <p className="font-['Inter_Tight',sans-serif] font-medium text-[22px] leading-none tracking-[-1px] uppercase w-full">
                      {title}
                    </p>
                    <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] w-full">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section — no overflow-hidden so sticky works */}
      <div id="services" ref={servicesRef} className="bg-[#4c3f3f] relative">
        <StripePattern />

        <div className="relative w-full max-w-[400px] mx-auto px-5 pt-10">
          <div className="flex flex-col gap-[14px] items-center mb-9">
            <h2 className="font-['Cormorant_Garamond',serif] font-semibold italic text-[32px] leading-none text-[#453939] text-center uppercase tracking-[-2px] bg-[#d5e7fd] px-[17px] rounded-[39px] inline-block max-w-full">
              Як зі мною працювати
            </h2>
            <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white text-center w-[267px]">
              Три формати співпраці, обирай той, що ближче
            </p>
          </div>

          {/* Stacking cards — overlapping wrappers keep each card sticky while the next slides on top */}
          <div>

            {/* Card 1 — sticky for full 300vh */}
            <div style={{ height: '300vh', marginBottom: '-200vh' }}>
              <div className="sticky top-[20px]" style={{ zIndex: 10, transform: 'rotate(-1deg)' }}>
                <div className="relative w-full min-h-[500px]">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 351 500" fill="none" preserveAspectRatio="none">
                    <path d={`${WAVY_PATH_TOP}${WAVY_PATH_BOTTOM_480}`} fill="#faf9ec" />
                  </svg>
                  <div className="relative px-4 py-[30px] flex flex-col min-h-[500px]">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-[#181818]">( 01 )</p>
                      <p className="font-['Inter_Tight',sans-serif] font-medium text-[22px] leading-none tracking-[-1px] uppercase text-[#181818]">Місячне ведення для експертів</p>
                      <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-[#181818]">Рекламна стратегія просування через TikTok, Meta або Google Ads</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                      {["аудит воронки продаж і поточної реклами", "рекламна стратегія просування через таргет (Meta Ads) або Google Ads", "структура кампаній", "креативна концепція та креативи в необмеженій кількості під результат", "запуск та оптимізація реклами", "щоденна аналітика"].map((item, i) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#453939] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[10px] text-white mt-[1px]">{i + 1}</span>
                          <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-[#181818]">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="font-['Inter_Tight',sans-serif] font-medium text-[22px] leading-none tracking-[-1px] uppercase text-[#181818] text-right mt-auto pt-6">від 500€/міс</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — sticky for 200vh, enters at 100vh */}
            <div style={{ height: '200vh', marginBottom: '-100vh' }}>
              <div className="sticky top-[90px]" style={{ zIndex: 20, transform: 'rotate(0.5deg)' }}>
                <div className="relative w-full min-h-[500px]">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 351 500" fill="none" preserveAspectRatio="none">
                    <path d={`${WAVY_PATH_TOP}${WAVY_PATH_BOTTOM_480}`} fill="#fbe7f8" />
                  </svg>
                  <div className="relative px-4 py-[30px] flex flex-col min-h-[500px]">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-[#181818]">( 02 )</p>
                      <p className="font-['Inter_Tight',sans-serif] font-medium text-[22px] leading-none tracking-[-1px] uppercase text-[#181818]">Місячне ведення для бізнесу</p>
                      <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-[#181818]">Рекламна стратегія просування через TikTok, Meta або Google Ads</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                      {["аудит воронки продаж і поточної реклами", "рекламна стратегія просування через таргет (Meta Ads) або Google Ads", "аналіз сайту", "налаштування пікселю на сайт", "структура кампаній", "креативна концепція та креативи в необмеженій кількості під результат", "запуск та оптимізація реклами", "щоденна аналітика"].map((item, i) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#453939] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[10px] text-white mt-[1px]">{i + 1}</span>
                          <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-[#181818]">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="font-['Inter_Tight',sans-serif] font-medium text-[22px] leading-none tracking-[-1px] uppercase text-[#181818] text-right mt-auto pt-6">від 500€/міс</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — last 100vh */}
            <div style={{ height: '100vh' }}>
              <div className="sticky top-[160px]" style={{ zIndex: 30, transform: 'rotate(-0.8deg)' }}>
                <div className="relative w-full min-h-[500px]">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 351 500" fill="none" preserveAspectRatio="none">
                    <path d={`${WAVY_PATH_TOP}${WAVY_PATH_BOTTOM_480}`} fill="#d5e7fd" />
                  </svg>
                  <div className="relative px-4 py-[30px] flex flex-col min-h-[500px]">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-[#181818]">( 03 )</p>
                      <p className="font-['Inter_Tight',sans-serif] font-medium text-[22px] leading-none tracking-[-1px] uppercase text-[#181818]">Стратегія просування в таргеті</p>
                      <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-[#181818]">Одноразова послуга для тих, хто запускає рекламу самостійно, у кого ще немає бюджету на таргетолога або хто вже має таргетолога і хоче покращити результати</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                      {["аудит рекламного кабінету і поточної реклами", "файл з рекомендаціями щодо покращення і розгорнутою стратегією просування через таргет", "приклади креативів", "оцінка KPI (яка ціна ліда окей а яка не окей?)", "30 хвилинний зідзвон після отримання стратегії у форматі Q&A, щоб закрити всі запитання"].map((item, i) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#453939] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[10px] text-white mt-[1px]">{i + 1}</span>
                          <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-[#181818]">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="font-['Inter_Tight',sans-serif] font-medium text-[22px] leading-none tracking-[-1px] uppercase text-[#181818] text-right mt-auto pt-6">300€</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Spacer so last card isn't obscured by fixed button */}
        <div style={{ height: '80px' }} />
      </div>

      {/* Cases Section — folder tabs */}
      <div id="cases" ref={casesRef} className="bg-[#4c3f3f] relative overflow-hidden py-[50px] px-5">
        <StripePattern />
        <div className="relative w-full max-w-[400px] mx-auto flex flex-col gap-7">
          <div className="flex flex-col gap-[14px] items-center">
            <h2 className="font-['Cormorant_Garamond',serif] font-semibold italic text-[32px] leading-none text-white text-center uppercase tracking-[-2px]">
              Результати клієнтів
            </h2>
            <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white text-center w-[280px]">
              Те, що трапляється, коли реклама стає системою
            </p>
          </div>

          {/* Folder with tabs */}
          <div className="relative w-full">
            {/* Tabs row */}
            <div className="flex relative z-10">
              {CASES.map((c) => {
                const isActive = c.key === activeCase;
                return (
                  <button
                    key={c.key}
                    onClick={() => setActiveCase(c.key)}
                    className="flex-1 relative transition-transform"
                    style={{
                      transform: isActive ? "translateY(2px)" : "translateY(0)",
                      zIndex: isActive ? 5 : 1,
                    }}
                  >
                    <svg className="w-full h-[36px] block" viewBox="0 0 114 36" fill="none" preserveAspectRatio="none">
                      <path
                        d="M0 8 Q0 0 8 0 L94 0 Q102 0 106 6 L112 16 Q114 20 114 24 L114 36 L0 36 Z"
                        fill={isActive ? c.color : "rgba(250,249,236,0.55)"}
                      />
                    </svg>
                    <span
                      className="absolute inset-0 flex items-center justify-center font-['Inter_Tight',sans-serif] font-medium text-[11px] uppercase tracking-[0.5px]"
                      style={{ color: isActive ? "#181818" : "#4c3f3f", paddingBottom: "2px" }}
                    >
                      {c.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Card body */}
            <div
              className="rounded-[18px] rounded-tl-none rounded-tr-none -mt-[2px] relative overflow-hidden transition-colors duration-300 min-h-[550px]"
              style={{ backgroundColor: active.color }}
            >
              <div className="pt-8 pb-8 px-6 flex flex-col gap-6">
                {/* Niche & location row */}
                <div className="flex items-center justify-between border-b border-[#0000001a] pb-3">
                  <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] text-[#181818]">{active.niche}</p>
                  <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] text-[#181818]">
                    <span className="hidden min-[360px]:inline">{active.location}</span>
                    <span className="inline min-[360px]:hidden">{active.locationShort}</span>
                  </p>
                  <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] text-[#181818]">{active.duration}</p>
                </div>

                {/* Було / процес / результат */}
                {[
                  { label: "(було)", text: active.before },
                  { label: "(процес)", text: active.process },
                  { label: "(результат)", text: active.result },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 items-start">
                    <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-[#181818] w-[78px] flex-shrink-0">
                      {row.label}
                    </p>
                    <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.4] text-[#181818] flex-1">
                      {row.text}
                    </p>
                  </div>
                ))}

                {/* Stats */}
                <div className="flex gap-[8px]">
                  {active.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex-1 bg-white rounded-[12px] py-4 flex flex-col items-center gap-[4px]"
                    >
                      <p className="font-['Inter_Tight',sans-serif] font-medium text-[20px] leading-none text-[#181818] tracking-[-0.5px]">
                        {s.value}
                      </p>
                      <p className="font-['Inter_Tight',sans-serif] font-normal text-[12px] leading-[1.2] text-[#464646]">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Screenshot container */}
                <div className="bg-white rounded-[12px] w-full overflow-hidden flex items-center justify-center">
                  {active.screenshot ? (
                    <img src={active.screenshot} alt="Скрін відгуку" className="w-full h-auto object-contain" />
                  ) : (
                    <p className="font-['Inter_Tight',sans-serif] font-normal text-[12px] text-[#464646] py-16">
                      Скрін відгуку
                    </p>
                  )}
                </div>

                {/* Case button */}
                {active.url && (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black rounded-full px-5 py-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors w-full"
                  >
                    <span className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2]">
                      дивитися повний кейс
                    </span>
                    <span className="font-['Inter',sans-serif] font-medium text-[13px]">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section — Contact Form */}
      <div id="contacts" className="bg-[#d5e7fd] relative overflow-hidden py-[50px] px-5">
        <WhiteStripePattern />
        <div className="relative w-full max-w-[400px] mx-auto flex flex-col gap-[40px]">
          {/* Header */}
          <div className="flex flex-col gap-1 items-center">
            <h2 className="font-['Cormorant_Garamond',serif] font-semibold italic text-[32px] leading-none text-[#4c3f3f] text-center uppercase tracking-[-2px]">
              Хочеш попрацювати<br />зі мною?
            </h2>
            <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-[#4c3f3f] text-center w-[261px] lowercase">
              Заповнюй форму внизу і я підберу<br />послугу, яка підійде саме під твій запит
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
          {/* Form */}
          <form onSubmit={handleFormSubmit} className="bg-[#4c3f3f] rounded-[14px] relative overflow-hidden">
            {formStatus === 'success' ? (
              <div className="p-4 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-white">
                    ( заявка )
                  </p>
                  <p className="font-['Inter_Tight',sans-serif] font-medium text-[16px] leading-none tracking-[-1px] uppercase text-white">
                    Заявку отримано
                  </p>
                </div>
                <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white opacity-70">
                  Я звʼяжусь з тобою найближчим часом
                </p>
              </div>
            ) : (
              <>
                <DotsRow color="#d5e7fd" />
                <div className="pt-10 pb-5 px-5 flex flex-col gap-8">
                  {/* Name field */}
                  <div className="flex flex-col gap-1">
                    <label className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-white">
                      ( як до тебе звертатись )
                    </label>
                    <input
                      type="text"
                      placeholder="Анна"
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      className="bg-transparent border-b border-white py-[10px] font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white placeholder:text-white placeholder:opacity-70 focus:outline-none"
                    />
                  </div>

                  {/* Contact field */}
                  <div className="flex flex-col gap-1">
                    <label className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-white">
                      ( твій instagram або telegram )
                    </label>
                    <input
                      type="text"
                      placeholder="@nickname"
                      value={formContact}
                      onChange={e => setFormContact(e.target.value)}
                      className="bg-transparent border-b border-white py-[10px] font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white placeholder:text-white placeholder:opacity-70 focus:outline-none"
                    />
                  </div>

                  {/* Product field */}
                  <div className="flex flex-col gap-1">
                    <label className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-white">
                      ( Кілька слів про продукт і де зараз реклама )
                    </label>
                    <input
                      type="text"
                      placeholder="чим займаєшся і як зараз просуваєшся"
                      value={formAbout}
                      onChange={e => setFormAbout(e.target.value)}
                      className="bg-transparent border-b border-white py-[10px] font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white placeholder:text-white placeholder:opacity-70 focus:outline-none"
                    />
                  </div>

                  {/* Submit — status-based */}
                  {formStatus === 'idle' && (
                    <button
                      type="submit"
                      disabled={!formName.trim() || !formContact.trim() || !formAbout.trim()}
                      className="bg-white rounded-full py-[14px] px-5 font-['Inter_Tight',sans-serif] font-normal text-[16px] leading-[1.2] text-black text-center hover:bg-[#fbe7f8] active:bg-[#fbe7f8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white"
                    >
                      Надіслати заявку
                    </button>
                  )}
                  {formStatus === 'sending' && (
                    <button disabled className="bg-white rounded-full py-[14px] px-5 font-['Inter_Tight',sans-serif] font-normal text-[16px] leading-[1.2] text-black text-center opacity-60 cursor-not-allowed">
                      Надсилаємо...
                    </button>
                  )}
                  {formStatus === 'error' && (
                    <div className="flex flex-col gap-2 items-center">
                      <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white text-center opacity-70">
                        Щось пішло не так, спробуй ще раз
                      </p>
                      <button type="button" onClick={() => setFormStatus('idle')} className="bg-white rounded-full py-[14px] px-5 font-['Inter_Tight',sans-serif] font-normal text-[16px] leading-[1.2] text-black text-center hover:bg-[#fbe7f8] transition-colors w-full">
                        Спробувати ще раз
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </form>

          {/* Contact cards */}
          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/anya.pir_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#faf9ec] border border-[#4c3f3f] rounded-[14px] p-4 flex flex-col gap-6 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-[#4c3f3f]">
                  ( контакти )
                </p>
                <p className="font-['Inter_Tight',sans-serif] font-medium text-[16px] leading-none tracking-[-1px] uppercase text-[#181818]">
                  мій Instagram
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] lowercase text-[#4c3f3f]">
                  @anya.pir_
                </p>
                <div className="bg-[rgba(255,255,255,0.15)] rounded-[11px] w-[22px] h-[22px] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[13px] text-black">
                  →
                </div>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/anjaapir95"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#fbe7f8] border border-[#4c3f3f] rounded-[14px] p-4 flex flex-col gap-6 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <p className="font-['Cormorant_Garamond',serif] font-semibold italic text-[14px] leading-[1.2] opacity-70 text-[#4c3f3f]">
                  ( контакти )
                </p>
                <p className="font-['Inter_Tight',sans-serif] font-medium text-[16px] leading-none tracking-[-1px] uppercase text-[#181818]">
                  мій Telegram
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] lowercase text-[#4c3f3f]">
                  @anya.pir
                </p>
                <div className="bg-[rgba(255,255,255,0.15)] rounded-[11px] w-[22px] h-[22px] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[13px] text-black">
                  →
                </div>
              </div>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#4c3f3f]">
        {/* Main footer content */}
        <div className="relative w-full max-w-[400px] mx-auto px-5 py-10 flex flex-col gap-[18px] items-center">
          <div className="flex flex-col gap-[2px] items-center text-center w-full">
            <h3 className="font-['Cormorant_Garamond',serif] font-semibold italic text-[32px] leading-none text-white uppercase tracking-[-2px]">
              Anya Pir
            </h3>
            <p className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white lowercase w-[178px]">
              таргетолог для експертів & бізнесів в європі та сша
            </p>
          </div>
          <a
            href="https://docs.google.com/document/d/1shzOQUIJ0osvPR742dN77JToxwjwxlqOicJ4uPlwyxQ/mobilebasic"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Inter_Tight',sans-serif] font-normal text-[14px] leading-[1.2] text-white uppercase underline hover:opacity-70 transition-opacity"
          >
            Impressum
          </a>
        </div>

        {/* Designer credit bar */}
        <a href="https://www.instagram.com/mariii.ch/" target="_blank" rel="noopener noreferrer" className="bg-[#fbe7f8] w-full py-3 px-5 block hover:opacity-80 transition-opacity cursor-pointer">
          <div className="relative w-full max-w-[400px] mx-auto flex items-center justify-between">
            <p className="font-['Inter_Tight',sans-serif] font-normal text-[12px] leading-[1.2] text-[#4c3f3f]">Дизайн сайту зробила @mariii.ch</p>
            <div className="bg-[rgba(255,255,255,0.15)] rounded-[11px] w-[22px] h-[22px] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[13px] text-[#4c3f3f]">
              →
            </div>
          </div>
        </a>
      </footer>

      {/* Fixed CTA — visible only while services section is in viewport */}
      <div
        className="fixed bottom-0 left-0 right-0 flex justify-center px-5 pb-5 pointer-events-none transition-all duration-300"
        style={{ zIndex: 100, opacity: showButton ? 1 : 0, transform: showButton ? 'translateY(0)' : 'translateY(100%)' }}
      >
        <button
          onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="pointer-events-auto bg-[#fbe7f8] border border-black rounded-full px-[21px] py-[11px] flex items-center justify-between gap-4 w-full max-w-[400px] mx-auto hover:bg-[#f8d6f2] transition-colors shadow-lg"
        >
          <span className="font-['Inter_Tight',sans-serif] font-normal text-base leading-[1.2] text-center flex-1">
            Залишити заявку
          </span>
          <span className="w-[22px] h-[22px] flex items-center justify-center font-['Inter',sans-serif] font-medium text-[13px]">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
