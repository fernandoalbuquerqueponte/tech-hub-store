import Image, { StaticImageData } from "next/image";

interface BannerProps {
  image: StaticImageData;
}

export default function Banner({ image }: BannerProps) {
  return (
    <Image
      style={{
        objectFit: "contain",
      }}
      className="max-w-full max-h-[230px]"
      alt="dfe"
      src={image}
    />
  );
}
