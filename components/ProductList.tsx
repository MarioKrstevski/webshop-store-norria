import { Product } from "@/types";
import NoResults from "./ui/NoResults";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  items: Product[];
  title: string;
}
export default function ProductList({
  items,
  title,
}: ProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
}
