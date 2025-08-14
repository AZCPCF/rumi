import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function NextImage({
  src,
  className,
  alt,
}: {
  src: string | StaticImport;
  alt: string;
  className?: string;
}) {
  return <Image src={src} className={className} alt={alt} />;
}
