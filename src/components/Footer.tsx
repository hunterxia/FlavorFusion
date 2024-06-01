import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center text-neutral-400">
      Challenge by{" "}
      <Link
        className="font-semibold"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link
        className="font-semibold"
        href="https://www.linkedin.com/in/haiyingliao"
        target="_blank"
      >
        Haiying Liao
      </Link>
      .
    </footer>
  );
};

export default Footer;
