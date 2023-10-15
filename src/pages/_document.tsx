import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-background text-text saturate-[.80]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
