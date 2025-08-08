import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/calmory-hero.jpg";
import { getPosts } from "@/data/blog";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface AbecedaItem {
  category: string;
  title: string;
  summary: string;
  how: string;
  image: string;
  alt: string;
  audioSrc: string;
}

const articleItems: AbecedaItem[] = getPosts()
  .slice(0, 2)
  .map((p) => ({
    category: p.category,
    title: p.title,
    summary: p.excerpt,
    how: p.excerpt,
    image: p.image,
    alt: p.alt,
    audioSrc: "/media/sample-audio.mp3",
  }));

const items: AbecedaItem[] = [
  {
    category: "Regulace emocí",
    title: "Kontakt se studeným předmětem",
    summary: "Práce s teplotou – aktivace pozornosti pomocí chladu.",
    how:
      "Vezmi si kostku ledu, studený kov nebo sklenici s vodou (nebo použij proud studené vody). Dotkni se jejího povrchu a vnímej chlad. Soustřeď pozornost na tělesné vjemy a dech.",
    image: heroImg,
    alt: "Kontakt se studeným předmětem – terapeutický tip",
    audioSrc: "/media/sample-audio.mp3",
  },
  ...articleItems,
];

const TherapyAlphabet = ({ showAllButton = true, mobileMode = 'stack' }: { showAllButton?: boolean; mobileMode?: 'stack' | 'swipe' }) => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Terapeutická abeceda",
    itemListElement: items.map((it, i) => ({
      "@type": "HowTo",
      name: it.title,
      description: it.summary,
      step: [
        {
          "@type": "HowToStep",
          text: it.how,
        },
      ],
      position: i + 1,
    })),
  };

  return (
    <section id="terapeuticka-abeceda" aria-labelledby="abeceda-heading" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 id="abeceda-heading" className="text-3xl md:text-4xl font-bold">
            Terapeutická abeceda
          </h2>
          <p className="mt-4 text-muted-foreground">
            Bonusový seriál krátkých terapeutických tipů pro budoucí uživatele Calmory.
          </p>
        </div>

        {showAllButton && (
          <div className="mb-8 flex justify-center md:justify-end">
            <Button asChild>
              <Link to="/abeceda" aria-label="Zobrazit vše – Terapeutická abeceda">Zobrazit vše</Link>
            </Button>
          </div>
        )}

        {/* Mobile list (stacked) */}
        <div className="md:hidden space-y-4">
          {items.map((it, idx) => (
            <article key={it.title} itemScope itemType="https://schema.org/HowTo">
              <Card className="h-full overflow-hidden">
                <img
                  src={it.image}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 object-cover"
                  itemProp="image"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="capitalize">
                      {it.category}
                    </Badge>
                  </div>
                  <CardTitle className="mt-3" itemProp="name">
                    {it.title}
                  </CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground" itemProp="description">
                    {it.summary}
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Co to je: </span>
                      {it.summary}
                    </p>
                    <p>
                      <span className="font-medium">Jak na to: </span>
                      {it.how}
                    </p>
                  </div>
                  <div className="mt-5">
                    <label className="sr-only" htmlFor={`abeceda-audio-${idx}`}>
                      Audio ukázka: {it.title}
                    </label>
                    <audio
                      id={`abeceda-audio-${idx}`}
                      controls
                      preload="none"
                      className="w-full"
                      aria-label={`Audio ukázka: ${it.title}`}
                    >
                      <source src={it.audioSrc} type="audio/mpeg" />
                      Váš prohlížeč nepodporuje přehrávání audia.
                    </audio>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article key={it.title} itemScope itemType="https://schema.org/HowTo">
              <Card className="h-full overflow-hidden">
                <img
                  src={it.image}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 object-cover"
                  itemProp="image"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="capitalize">
                      {it.category}
                    </Badge>
                  </div>
                  <CardTitle className="mt-3" itemProp="name">
                    {it.title}
                  </CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground" itemProp="description">
                    {it.summary}
                  </p>

                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Co to je: </span>
                      {it.summary}
                    </p>
                    <p>
                      <span className="font-medium">Jak na to: </span>
                      {it.how}
                    </p>
                  </div>

                  <div className="mt-5">
                    <label className="sr-only" htmlFor={`abeceda-audio-${idx}`}>
                      Audio ukázka: {it.title}
                    </label>
                    <audio
                      id={`abeceda-audio-${idx}`}
                      controls
                      preload="none"
                      className="w-full"
                      aria-label={`Audio ukázka: ${it.title}`}
                    >
                      <source src={it.audioSrc} type="audio/mpeg" />
                      Váš prohlížeč nepodporuje přehrávání audia.
                    </audio>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Structured data for the list */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </div>
    </section>
  );
};

export default TherapyAlphabet;
