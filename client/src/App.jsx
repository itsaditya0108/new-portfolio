import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBubble from "./components/ChatBubble";
import ChatWindow from "./components/ChatWindow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import WhyHireMe from "./sections/WhyHireMe";
import Contact from "./sections/Contact";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen 
                bg-gradient-to-b 
                from-slate-100 via-slate-200 to-slate-300
                dark:from-neutral-900 dark:via-neutral-850 dark:to-neutral-900
                text-gray-900 dark:text-gray-100">

      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-8 space-y-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhyHireMe />
        <Contact />
      </main>

      <Footer />

      {!isChatOpen && <ChatBubble onClick={() => setIsChatOpen(true)} />}
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}



export default App;
