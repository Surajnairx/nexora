import Link from "next/link";

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
    <nav className="bg-red-500">
      <div className=" flex gap-10  justify-between nexora-container">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
