import { SparklesIcon, HeartIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
          Our Heritage & Passion
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
          About AH Pharmacy
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          Dedicated to bringing authentic Unani medicine and traditional herbal remedies to modern lives. We bridge centuries of holistic wisdom with rigorous quality assurance.
        </p>
      </div>

      {/* Story Sections */}
      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Section 1 */}
        <section className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm">
          <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
              alt="Unani Medicine Heritage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              What We Do
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              AH Pharmacy formulates and provides authentic Unani tablets, majoons, capsules, and therapeutic oils. Every product is developed using traditional compounding principles to restore bodily equilibrium naturally.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We focus on holistic recovery, catering to immunity, digestion, pain relief, skin health, and cardiac wellness without harsh chemical additives.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm">
          <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop"
              alt="Quality Assurance & Purity"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Purity & Quality Commitment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              All ingredients used in AH Pharmacy formulations undergo rigorous purity verification. We employ 100% natural herbs, zero added artificial sugars, and GMP-certified manufacturing processes.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Our products maintain the highest standards of safety and efficacy so you can consume natural medicine with complete peace of mind.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm">
          <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop"
              alt="Unani Medicine Wisdom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <HeartIcon className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Unani: The Healing Tradition
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Unani medicine treats the root cause of health conditions by harmonizing the body's natural temperaments (Akhlat). Through precise herbal formulations, it strengthens immunity and encourages self-healing.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              AH Pharmacy is proud to carry forward this noble healing legacy, serving individuals and families across the region with integrity.
            </p>
          </div>
        </section>

      </div>

    </div>
  );
}
