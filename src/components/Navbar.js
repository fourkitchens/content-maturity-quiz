import Link from 'next/link';

export default function Navbar() {
  return (
    <ul>
      <Link href="/">Page 1</Link>
      <Link href="/two">Page 2</Link>
    </ul>
  );
}
