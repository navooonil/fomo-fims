import { allCaseStudies } from "@/lib/data";
import type { CaseStudy } from "@/lib/types";
import Link from "next/link";

/* Smooth fade-up counter */
const CountUp = ({ value }: { value: string }) => (
  <span className="opacity-0 animate-[fadeUp_1s_ease-out_forwards]">
    {value}
  </span>
);

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const caseStudy: CaseStudy | undefined = allCaseStudies.find(
    (c) => c.id === Number(id)
  );

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center p-10">
        <h1 className="text-4xl font-heading text-brand-red">
          Case Study Not Found
        </h1>
      </div>
    );
  }

  const nextCase =
    allCaseStudies[Number(id) % allCaseStudies.length] || allCaseStudies[0];

  return (
    <div className="bg-white text-gray-900">
      {/* ======================= HERO ======================= */}
      <section className="relative h-[78vh] w-full overflow-hidden">
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        {/* Hero media */}
        {caseStudy.heroVideoUrl ? (
          <video
            src={caseStudy.heroVideoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-[1.15] animate-[heroZoom_22s_linear_infinite]"
          />
        ) : (
          <img
            src={caseStudy.imageUrl}
            className="absolute inset-0 w-full h-full object-cover scale-[1.12] animate-[heroZoom_22s_linear_infinite]"
          />
        )}

        {/* HERO TEXT */}
        <div className="relative z-20 flex h-full flex-col justify-end pb-20 px-8 md:px-16">
          <h1 className="text-5xl md:text-7xl font-heading text-white leading-[1.1] drop-shadow-lg">
            {caseStudy.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl leading-relaxed drop-shadow">
            {caseStudy.subtitle}
          </p>
        </div>
      </section>

      {/* ======================= CONTENT ======================= */}
      <div className="container mx-auto px-6 md:px-16 py-24 space-y-28">
        {/* ------------------ PROBLEM ------------------ */}
        <section className="relative">
          <span className="absolute -left-3 -top-8 text-brand-red font-heading text-6xl opacity-30 select-none">
            01
          </span>

          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            The Problem
          </h2>
          <div className="h-[2px] w-20 bg-brand-red mb-8 opacity-80" />

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {caseStudy.problem}
          </p>
        </section>

        {/* ------------------ APPROACH ------------------ */}
        <section className="relative">
          <span className="absolute -left-3 -top-8 text-brand-red font-heading text-6xl opacity-30 select-none">
            02
          </span>

          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            Our Approach
          </h2>
          <div className="h-[2px] w-20 bg-brand-red mb-8 opacity-80" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
              {caseStudy.approach}
            </p>

            <img
              src={caseStudy.imageUrl}
              className="rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] w-full object-cover h-[360px] md:h-[420px] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </section>

        {/* ------------------ OUTCOME ------------------ */}
        <section className="relative">
          <span className="absolute -left-3 -top-8 text-brand-red font-heading text-6xl opacity-30 select-none">
            03
          </span>

          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            The Outcome
          </h2>
          <div className="h-[2px] w-20 bg-brand-red mb-8 opacity-80" />

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {caseStudy.outcome}
          </p>
        </section>

        {/* ------------------ STATS ------------------ */}
        {caseStudy.stats && (
          <section>
            <h2 className="text-4xl font-heading mb-10">Results</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudy.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-8 rounded-xl bg-gray-50 border shadow-sm hover:shadow-lg transition-shadow"
                >
                  <p className="text-brand-red text-5xl font-heading mb-3">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="text-gray-700 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ------------------ GALLERY ------------------ */}
        <section>
          <h2 className="text-4xl font-heading mb-10">Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {caseStudy.gallery.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-md group"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ======================= NEXT PROJECT ======================= */}
      <section className="bg-black text-white py-24 text-center relative">
        <h3 className="text-gray-500 tracking-widest text-sm mb-3">
          NEXT CASE STUDY
        </h3>

        <Link
          href={`/case-studies/${nextCase.id}`}
          className="text-4xl md:text-5xl font-heading text-brand-red hover:text-brand-red-hover transition-all"
        >
          {nextCase.title} →
        </Link>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </section>

      {/* ======================= ANIMATIONS ======================= */}
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1.15) translateX(0); }
          50% { transform: scale(1.15) translateX(-2%); }
          100% { transform: scale(1.15) translateX(0); }
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
