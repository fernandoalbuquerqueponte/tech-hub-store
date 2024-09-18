"use client";
import { SearchIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearchProduct() {
    router.push(`/product?search=${search}`);
  }
  return (
    <div className="flex flex-rol gap-3 items-center">
      <Input
        className="text-xs"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar Produto..."
      />
      <Button
        className="min-w-11 min-h-10"
        variant="outline"
        size="icon"
        onClick={handleSearchProduct}
      >
        <SearchIcon size={19} />
      </Button>
    </div>
  );
}
