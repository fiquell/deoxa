import { ThemeProvider } from "@material-tailwind/react";
import Lenis from "@studio-freight/lenis";
import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
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
