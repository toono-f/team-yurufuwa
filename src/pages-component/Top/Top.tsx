import Image from "next/image";
import { ButtonNormal } from "src/component/Button";
import { Card } from "src/component/Card";
import { Hamburger } from "src/component/Hamburger/Hamburger";
import { HeadlineBorder } from "src/component/Headline";
import { basePath } from "src/hooks/basePath";
import { Container } from "src/pages-layout/Container";
import { Mv } from "src/pages-layout/Mv";

export const Top = () => {
  return (
    <>
      <Mv index>
        <Image
          src={`${basePath}/assets/images/index/index.jpg`}
          priority={true}
          width={1920}
          height={1277}
          sizes="100vw"
          alt="テスト"
          style={{ objectFit: "cover" }}
        />
      </Mv>
      <Container narrow>
        <div className="py-16">
          <section>
            <HeadlineBorder text="カード" />
            <div className="pt-10">
              <Card />
            </div>
          </section>
          <section className="pt-16">
            <HeadlineBorder text="ボタン" />
            <div className="pt-10">
              <ButtonNormal
                text="ボタン"
                href="https://www.google.com/"
                center
              />
            </div>
          </section>
          <section className="pt-16">
            <HeadlineBorder text="ハンバーガーメニュー" />
            <div className="pt-10">
              <Hamburger />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};
