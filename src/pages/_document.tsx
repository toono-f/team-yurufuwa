import { Head, Html, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <DefaultSeo
        defaultTitle="デフォルトのタイトル"
        description="デフォルトの説明"
        // openGraph={{
        //   type: "website",
        //   title: "デフォルトのタイトル",
        //   description: "デフォルトの説明",
        //   site_name: "サイトの名前",
        //   url: "サイトのURL",
        //   images: [
        //     {
        //       url: "https://www.example.ie/og-image-01.jpg",
        //       width: 800,
        //       height: 600,
        //       alt: "Og Image Alt",
        //       type: "image/jpeg",
        //     },
        //   ],
        // }}
        // twitter={{
        //   handle: "@handle",
        //   site: "@site",
        //   cardType: "summary_large_image",
        // }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
