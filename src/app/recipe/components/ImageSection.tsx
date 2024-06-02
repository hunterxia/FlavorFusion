import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt }) => (
  <section>
    <Image
      src={src}
      alt={alt}
      width={2000}
      height={1500}
      className="w-full rounded-2xl mb-10"
    />
  </section>
);

export default ImageSection;
