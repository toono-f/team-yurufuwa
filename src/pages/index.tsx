import { NextSeo } from "next-seo";
import { Top } from "src/pages-component/Top";

const IndexPage = () => {
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
      <Top />
    </>
  );
};

export default IndexPage;
