import Image from "next/image";
import { AboutMeOverview } from "./about-me/page";


export default function Home() {
  return (
    <div className="flex  flex-col flex-1 items-center">
      <div className="max-w-6xl card w-full my-12">
        <AboutMeOverview />  
      </div>
    </div>
  );
}
