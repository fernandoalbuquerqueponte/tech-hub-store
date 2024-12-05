import { cn } from "@/app/_lib/utils";
import Image, { ImageProps } from "next/image";

export default function Banner({ alt, src, className, ...props }: ImageProps) {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      className={cn("h-auto w-full", className)}
      alt={alt}
      src={src}
      {...props}
    />
  );
}
