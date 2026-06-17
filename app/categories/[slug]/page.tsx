import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  // Filter products by occasion matching the category name or category tag
  const categoryProducts = products.filter(
    p => p.occasion.includes(category.name) || p.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-micro text-text-secondary block mb-4">
            CATEGORY
          </span>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] text-dark mb-4 leading-[1.1]">
            {category.name}
          </h1>
          <p className="font-inter text-text-secondary max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-playfair italic text-text-secondary text-xl">
              New creations are being crafted for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
