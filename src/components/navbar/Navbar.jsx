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
    <nav className="flex items-center p-3">
      <div className="flex gap-10">
        {links.map((link) => (
          <Link className="flex text-center" key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <button className="px-2 mx-3 border-2 border-cyan-500 cursor-pointer">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
