// src/app/request/page.tsx

import { RequestForm } from "@/components/forms/RequestForm";
import { Footer } from "@/components/Footer";
export default function RequestPage() {
  return (
    <>
      <main className="flex bg-[#EDF2F7] min-h-screen flex-col items-center justify-center p-4 md:p-24">
        <RequestForm />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}