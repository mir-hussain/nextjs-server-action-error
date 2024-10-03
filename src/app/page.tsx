import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <h1>
        Test project for consuming server actions error in client component
        using TanStack Query
      </h1>
      <div className="flex gap-5">
        <Link href="/success" className="hover:underline">
          Success Page
        </Link>
        <Link href="/error" className="hover:underline">
          Error Page
        </Link>
      </div>
    </div>
  );
}
