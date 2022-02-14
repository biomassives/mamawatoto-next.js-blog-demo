import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" title="Mamawatoto Eco School">
          <img src="https://www.datocms-assets.com/62560/1643741142-mamawa0.png" alt="Mamawatoto Eco School">
      </Link>
    </h2>
  );
}
