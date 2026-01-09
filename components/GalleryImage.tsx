import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function GalleryImage({ src, alt }: Props) {
  return (
    <div className="relative aspect-square overflow-hidden bg-brand-soft border border-black/10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 90vw, 360px"
      />
    </div>
  );
}
