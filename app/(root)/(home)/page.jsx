import { About, Header, Skills, Work } from "@/components/home";
import Contact from "@/components/shared/Contact";
import TopButton from "@/components/shared/TopButton";
import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-sm:flex flex-1 w-full flex-col px-8">
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />

      <div className="w-full flex flex-col py-5">
        <div className="flex gap-5 mb-3 flex-col md:flex-row" id="downloadCv">
          <Link href='Mayokun O.A.doc' className="p-3 px-6 rounded-full bg-secondary-color text-slate-50 hover:bg-blue-700 flex gap-3 justify-center items-center">
            Download My CV
            <Image src='/resume.svg' width={20} height={20}/>
          </Link>
          <Link href='PORTFOLIO_ADENIYI MAYOKUN_JAN. 2023.pdf' className="p-3 px-6 rounded-full bg-secondary-color text-slate-50 hover:bg-blue-700 flex gap-3 justify-center items-center">
            Download My Project Portfolio
            <Image src='/portfolio.svg' width={20} height={20}/>
          </Link>
        </div>

        <div className="flex justify-end items-end flex-col" >
          <p className="p-text uppercase font-bold flex items-center gap-1"><Copyright/>2023 MAYOKUN</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <TopButton />
    </div>
  );
}
