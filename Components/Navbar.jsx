import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/projects" className="mr-4">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;