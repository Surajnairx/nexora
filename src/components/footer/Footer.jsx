import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex justify-between p-2">
      <div className="text-xs">@2026 Rinzler. All Rights Reserved</div>
      <div className=" flex gap-2 opacity-40 cursor-pointer">
        <Link href="https://www.facebook.com/">
          <Image src="/1.png" width={15} height={100} alt="site logo" />
        </Link>
        <Link href="https://www.instagram.com">
          <Image src="/2.png" width={15} height={100} alt="site logo" />
        </Link>
        <Link href="https://www.x.com">
          <Image src="/3.png" width={15} height={100} alt="site logo" />
        </Link>
        <Link href="https://www.youtube.com">
          <Image src="/4.png" width={15} height={100} alt="site logo" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
