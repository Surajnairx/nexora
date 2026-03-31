import Link from "next/link";
import styles from "./navbar.module.css";
function Navbar() {
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Portfolio", url: "/portfolio" },
    { id: 4, title: "Contact", url: "/contact" },
    { id: 5, title: "Blog", url: "/blog" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
  ];
  return (
    <nav className="">
      <div className="flex gap-10 justify-between">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {console.log("Hello World")}
      </div>
    </nav>
  );
}

export default Navbar;
