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
      width={1200}
      height={1000}
      className="w-full rounded-2xl mb-10"
    />
  </section>
);

export default ImageSection;
