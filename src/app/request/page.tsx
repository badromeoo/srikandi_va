// src/app/request/page.tsx

import { RequestForm } from "@/components/forms/RequestForm";

export default function RequestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <RequestForm />
    </main>
  );
}