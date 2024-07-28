import { SearchIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Search() {
  return (
    <div className="flex flex-rol gap-3 items-center">
      <Input
        className="text-xs"
        type="text"
        placeholder="Pesquisar Produto..."
      />
      <Button className="min-w-11 min-h-10" variant="outline" size="icon">
        <SearchIcon size={19} />
      </Button>
    </div>
  );
}
