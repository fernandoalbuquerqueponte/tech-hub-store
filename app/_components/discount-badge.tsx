import { Badge } from "./ui/badge";

interface DiscountBadgeProps {
  discountPercentage: number;
}

export default function DiscountBadgde({
  discountPercentage,
}: DiscountBadgeProps) {
  return (
    <Badge className="font-bold min-w-[50px] justify-center bg-blue-700/35">
      {discountPercentage} %
    </Badge>
  );
}
