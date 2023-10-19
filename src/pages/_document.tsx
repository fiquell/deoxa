import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-x-hidden bg-background text-text saturate-[.80]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
