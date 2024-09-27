import { AboutUs, Contacts, Description, Header, Partners, Products,Footer } from "@/components";
import { Suspense } from "react";
import Loading from "./loading";


export default async function Home() {
  await new Promise(resolve => setTimeout(resolve,1000));
  return (
    <Suspense fallback={<Loading/>}>
    <div id="all-content">
    <Header/>
    <main className="bg-white">
      <AboutUs/>
      <Partners/>
      <Description/>
      <Products/>
      <Contacts/>
    </main>
    <Footer/>
    </div>
    </Suspense>
  );
}
