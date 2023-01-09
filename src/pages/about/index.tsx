import { NextSeo } from "next-seo";
import { About } from "src/pages-component/About";

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="ページのタイトル"
        description="ページの説明"
        // openGraph={{
        //   url: "ページのURL",
        //   title: "ページのタイトル",
        //   description: "ページの説明",
        //   images: [
        //     {
        //       url: "https://www.example.ie/og-image-01.jpg",
        //     },
        //   ],
        // }}
      />
      <About />
    </>
  );
};

export default AboutPage;
