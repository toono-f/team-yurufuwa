import Image from "next/image";
import { basePath } from "src/hooks/basePath";
import { Mv } from "src/pages-layout/Mv";

export const About = () => {
  return (
    <>
      <Mv>
        <Image
          src={`${basePath}/assets/images/about/about.jpg`}
          priority={true}
          width={1920}
          height={1280}
          sizes="100vw"
          alt="テスト"
          style={{ objectFit: "cover" }}
        />
      </Mv>
    </>
  );
};
