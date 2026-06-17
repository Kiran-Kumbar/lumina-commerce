import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductGallery from "@/components/product/ProductGallery";
import CustomizerPanel from "@/components/product/CustomizerPanel";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div className="max-w-[1360px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Gallery (55%) */}
          <div className="w-full lg:w-[55%] shrink-0">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Right: Sticky Customizer Panel (45%) */}
          <div className="w-full lg:w-[45%]">
            <div className="sticky top-32">
              <CustomizerPanel product={product} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
