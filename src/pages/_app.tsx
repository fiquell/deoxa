import { ThemeProvider } from "@material-tailwind/react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.7,
      duration: 1.7,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 0.7,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
