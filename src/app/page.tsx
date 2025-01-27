import Navbar from "@/components/common/Navbar";
import AppStoreDownload from "@/components/specific/AppStoreDownload";
import MoneyCard from "@/components/specific/MoneyCard";
import Image from "next/image";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout title={"main"}>
    <div>
      {/* <Navbar/> */}
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
        <main className="flex flex-row gap-16 justify-between  max-w-[1256px] align-middle mt-8 row-start-2  sm:items-start   w-full mx-auto ">
            <div className="w-[600px]">
                <Image
                      className="dark:invert"
                      src="/SendThrough.png"
                      alt="Next.js logo"
                      width={400}
                      height={50} 
                      priority
                />

                <div className="my-8 text-xl max-w-[450px]">
                  Make international transfers to local bank accounts and mobile money wallets.
                </div>
                <AppStoreDownload/>
            </div>
            <MoneyCard/>
        </main>
      </div>
    </RootLayout>
  );
}
