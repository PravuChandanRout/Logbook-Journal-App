import Link from "next/link";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function CollectionLayout({ children }) {
  return (
    <div className="px-4 py-8">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="text-sm text-cyan-600 hover:text-cyan-700"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<BarLoader color="cyan" width={"100%"} />}>
        {children}
      </Suspense>
    </div>
  );
}
