import Avatar from "@/components/Avatar";
import Contact from "@/components/Contact";
import Details from "@/components/Details";
import Name from "@/components/Name";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
    <main className="mx-auto w-full max-w-prose pb-32 pt-8 xl:px-6 xl:text-lg 2xl:max-w-6xl 2xl:text-xl ">
      <section className="hSection flex min-h-screen flex-col justify-center px-6 py-16 text-left">
        <div>
          <Avatar />
          <Name />
          <Details />
        </div>
        <SectionDivider color="text-brand-accent"/>
      </section>
      <section id="section-tech" className="hSection bg-brand-accent pb-24 pt-12 font-bold text-gray-800">
      <TechStack/>
      <SectionDivider color="text-brand" />
      </section>
      <section id="section-project" className="hSection bg-brand pb-24 text-gray-100">
        
      <Projects/>
      <SectionDivider color="text-white dark:text-black" />
      </section>
     
      <section className="hSection mb-24" >
      
      <Contact/>

      </section>
      <footer className="mx-auto max-w-prose border-t-2 border-brand-accent px-6 py-14 2xl:max-w-7xl">
      Designed &amp; built by <span className="font-bold text-brand-accent">Rohit</span> 
      
    </footer>
    </main>
    
  );
}
