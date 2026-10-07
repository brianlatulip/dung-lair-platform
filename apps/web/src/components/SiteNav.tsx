import Link from "next/link";

export default function SiteNav() {
  return (
    <nav aria-label="Main navigation">
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/members">Members</Link>
      <Link href="/about">About</Link>  
      <Link href="/apply">Apply</Link>
    </nav>
  );
}