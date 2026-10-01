import Image from "next/image";
import { assets } from "@/lib/site";

type BrandLogoProps = {
  /** Largura renderizada em pixels. */
  width?: number;
  priority?: boolean;
  className?: string;
};

export default function BrandLogo({
  width = 170,
  priority = false,
  className = "",
}: BrandLogoProps) {
  const ratio = assets.logoHeight / assets.logoWidth;

  return (
    <Image
      src={assets.logo}
      alt="Mechas Rápidas"
      width={width}
      height={Math.round(width * ratio)}
      priority={priority}
      sizes={`${width}px`}
      className={`h-auto w-auto ${className}`}
    />
  );
}