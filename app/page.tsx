import Overview from "@/components/overview";
import Pools from "@/components/Pools";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-content p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center w-full">
        <Pools />
      </main>
    </div>
  );
}
