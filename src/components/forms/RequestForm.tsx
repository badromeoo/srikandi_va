// src/components/forms/RequestForm.tsx

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { createClient } from "@/lib/supabaseClient";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Skema validasi tetap sama
const formSchema = z.object({
  fullName: z.string().min(3, { message: "Nama lengkap harus diisi (minimal 3 karakter)." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  phoneNumber: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }),
  companyName: z.string().optional(),
  description: z.string().min(10, { message: "Deskripsi harus diisi (minimal 10 karakter)." }),
});

export function RequestForm() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-form", {
        body: values,
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Permintaan Terkirim!", {
        description: "Terima kasih, tim kami akan segera menghubungi Anda.",
        classNames: {
          description: "text-foreground",
        },
      });

      console.log("Response dari server:", data);
      form.reset();
    } catch (error) {
      toast.error("Terjadi Kesalahan", {
        description: error instanceof Error ? error.message : "Gagal mengirim permintaan. Coba lagi nanti.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="">
      <div className="grid lg:grid-cols-2  gap-30 2xl:gap-50 items-center">
        {/* Kolom Kiri: Judul dan Form */}
        <div className="space-y-6">
          <h2 className="text-2xl 2xl:text-5xl mb-[50px] xl:text-[36px] font-normal sm:text-5xl">
            <span className="font-suwargi text-[#F45866]">Hubungi Kami</span>
            <span className="font-bold"> dan Mulai Tingkatkan </span>
            <span className="font-suwargi text-[#F45866]">Produktivitas</span> <span className="font-bold">Kerja</span>
          </h2>
          <Card className="w-full ">
            <CardHeader>
              <CardTitle>
                Formulir <span className="font-suwargi text-[#F45866]">Permintaan</span> VA
              </CardTitle>
              <CardDescription>Isi detail di bawah ini dan tim kami akan segera menghubungi Anda.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="grid gap-4">
                  {/* ... Semua FormField tetap sama ... */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alamat Email</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor Telepon/WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="+62 812 3456 7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Nama Perusahaan <span className="text-xs text-muted-foreground">(Opsional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="PT Incognito Asia" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jelaskan Kebutuhan Anda</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Saya butuh bantuan untuk mengelola jadwal meeting..." className="min-h-[100px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full mt-4" disabled={isLoading}>
                    {isLoading ? "Mengirim..." : "Kirim Permintaan"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>

        {/* Kolom Kanan: Gambar (Disembunyikan di bawah layar lg) */}
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <Image
            src="/images/gambarwanitahero.jpg"
            alt="Virtual Assistant"
            width={550}
            height={950}
            // Tambahkan kelas untuk ukuran XL di sini
            className="rounded-xl object-cover xl:w-[650px] xl:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
