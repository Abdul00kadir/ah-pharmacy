import Image from "next/image";
import InteractiveHero from "@/components/InteractiveHero";
import StorySection from "@/components/StorySection";
import InteractiveCategories from "@/components/InteractiveCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import VisualBreak from "@/components/VisualBreak";
import Combo from "@/components/Combo";
import { fetchProducts } from "@/lib/fetchProduct";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await fetchProducts();

  const qualityPoints = [
    { name: "Natural Herbs", image: "/icon/mortar.png" },
    { name: "No Added Sugar", image: "/icon/sugar-free.png" },
    { name: "GMP Certified", image: "/icon/stamp.png" },
    { name: "No Extracts Used", image: "/icon/no-oil.png" },
    { name: "No Artificial Colours", image: "/icon/chemical-free.png" },
    { name: "BPA Free Packaging", image: "/icon/bpa-free.png" },
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Cinematic Interactive Hero */}
      <InteractiveHero />

      {/* 2. Philosophy & Healthcare Storyteller Section */}
      <StorySection />

      {/* 3. Interactive Category Explorer */}
      <InteractiveCategories />

      {/* 4. Featured Products Showcase */}
      <FeaturedProducts products={products} />

      {/* 5. Ambient Visual Break */}
      <VisualBreak />

      {/* 6. Combo Products Showcase */}
      <Combo products={products} />

      {/* 7. Quality Commitments */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400">
            Formulation Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Our Quality Commitments
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {qualityPoints.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100/70 dark:bg-emerald-950/70 p-2.5 flex items-center justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Media Features Showroom */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Craftsmanship
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Product Heritage & Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md aspect-video">
            <Image
              src="/fess/feutures.png"
              alt="Product features"
              width={1200}
              height={800}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              priority={false}
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md aspect-video">
            <video
              src="/fess/feutures.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/fess/feutures.png"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
