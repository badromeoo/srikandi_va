// src/components/forms/RequestForm.tsx

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { createClient } from "@/lib/supabaseClient";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import localFont from "next/font/local";

const suwargi = localFont({
  src: "../../app/fonts/Suwargi.ttf",
});

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
    // Mengosongkan nilai default agar form bersih saat pertama kali dimuat
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
      // Memanggil Edge Function
      const { data, error } = await supabase.functions.invoke("submit-form", {
        body: values,
      });

      // PENTING: Selalu periksa error dari pemanggilan function terlebih dahulu
      if (error) {
        throw new Error(error.message);
      }

      // Menampilkan notifikasi sukses dengan pesan yang bersih
      toast.success("Permintaan Terkirim!", {
        description: "Terima kasih, tim kami akan segera menghubungi Anda.",
        classNames: {
          description: "text-foreground", // Menggunakan warna tema yang benar
        },
      });

      console.log("Response dari server:", data);
      form.reset(); // Kosongkan form setelah berhasil
    } catch (error) {
      // Menangani semua jenis error (pemanggilan function, network, dll)
      toast.error("Terjadi Kesalahan", {
        description: error instanceof Error ? error.message : "Gagal mengirim permintaan. Coba lagi nanti.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className={`${suwargi.className}`}>Formulir Permintaan VA</CardTitle>
        <CardDescription>Isi detail di bawah ini dan tim kami akan segera menghubungi Anda.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="grid gap-4">
            {/* ... JSX untuk FormField tetap sama ... */}
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
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Mengirim..." : "Kirim Permintaan"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
