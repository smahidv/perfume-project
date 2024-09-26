import { AboutUs, Contacts, Description, Header, Partners, Products,Footer } from "@/components";


export default function Home() {
  return (
    <div id="all-content">
    <Header/>
    <main className="bg-white 
    ">
      <AboutUs/>
      <Partners/>
      <Description/>
      <Products/>
      <Contacts/>
    </main>
    <Footer/>
    </div>
  );
}
