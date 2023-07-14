import MainFull from "@/components/MainFull";
import BodyWrapper from "@/components/BodyWrapper";
import CardKnowHow from "@/components/CardKnowHow";
import CarouselSolution from "@/components/CarouselSolution";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainFull />
      <BodyWrapper>
        <CardKnowHow />
        <CarouselSolution />
        <div className="relative bg-slate-100 sm:bg-sky-100 md:bg-red-100 lg:bg-emerald-200 xl:bg-orange-100 rounded-2xl p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 my-60 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 overflow-hidden">
          <div className="relative flex flex-col md:w-1/2 z-20">
            <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-4 sm:mb-8 md:mb-20">
              높은 보안성과 효율성
            </h3>
            <h1 className="font-bold text-3xl lg:text-4xl tracking-tight mb-4">
              출입통제 시스템
            </h1>
            <p className="md:text-lg md:leading-normal lg:text-xl lg:leading-normal tracking-tight break-keep text-black/70 mb-8 md:mb-16">
              출입통제 시스템은 실시간으로 작업자의 출입 기록을 관리하고,
              비인가자의 출입을 차단함으로써 작업자들의 안전을 보호합니다.
              현장의 보안 관리와 작업자들의 안전까지 예방하고 보호할 수
              있습니다.
            </p>
            <button className="w-fit bg-white hover:bg-red-500 hover:text-white font-medium text-slate-600 hover:ring-0 h-12 px-8 rounded-full drop-shadow-2xl tracking-tight">
              더 알아보기
            </button>
          </div>
          <div className="flex-none flex gap-4 z-20 px-12 sm:px-16 md:px-8 py-16 sm:py-24 md:py-0 order-first md:order-last">
            <IconLabel
              icon={"/icons/face-id.png"}
              iconLabel={"안면인식 시스템"}
              iconCss={""}
            />
            <IconLabel
              icon={"/icons/parking.png"}
              iconLabel={"차량통제 시스템"}
              iconCss={""}
            />
          </div>
          <Image
            src={"/images/focusGreen.png"}
            alt=""
            width={420}
            height={420}
            className="absolute top-2 sm:top-10 md:top-1/2 md:-translate-y-1/2 md:right-4 lg:right-6 xl:right-8 md:mt-3 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px]"
          />
        </div>
        <div className="h-[1000px]" />
      </BodyWrapper>
      {/* <div className="hidden">
          <h1 className="text-3xl tracking-tighter leading-normal">
            건설안전관리 파트너 <br />
            <b>
              아이티로그의
              <strong className="text-red-500">주요 고객사</strong>
            </b>
          </h1>
        </div> */}
    </>
  );
}
// <main className="flex min-h-screen flex-col items-center justify-between p-24">
//   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code className="font-mono font-bold">src/app/page.tsx</code>
//     </p>
//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//       <a
//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{' '}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className="dark:invert"
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>
//   </div>

//   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//     <Image
//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//   </div>
// </main>
