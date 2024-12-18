"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  search: z
    .string()
    .min(2, {
      message: "O campo deve conter pelo menos 2 letras",
    })
    .trim(),
});

export default function Search() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function handleSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/product?search=${data.search}`);
    form.reset();
  }
  return (
    <div className="flex items-center">
      <Form {...form}>
        <form
          className="flex w-full gap-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="text-xs"
                    placeholder="Pesquisar Produto..."
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="min-w-11 min-h-10"
            variant="outline"
            size="icon"
            type="submit"
          >
            <SearchIcon size={19} />
          </Button>
        </form>
      </Form>
    </div>
  );
}
