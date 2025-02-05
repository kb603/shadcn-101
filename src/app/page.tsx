import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ShoppingBag } from "lucide-react";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8">
          <div
            style={{ backgroundImage: `url(/img/hero-1920x1080.jpg)` }}
            className="relative aspect-square overflow-hidden rounded-lg bg-cover md:aspect-[2.4/1]"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
              <div className="max-w-xs rounded-lg bg-secondary/60 p-4 text-3xl font-bold text-black dark:text-white sm:max-w-xl sm:text-5xl lg:text-6xl">
                Featured Products
                <Button size="lg" className="w-full py-6 text-xl">
                  <ShoppingBag className="mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} />
        </div>
      </div>
    </Container>
  );
}
