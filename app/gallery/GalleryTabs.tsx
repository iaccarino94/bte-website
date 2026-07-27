"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type GalleryYearGroup = {
  year: number;
  photos: GalleryPhoto[];
};

function PhotoThumb({
  photo,
  onClick,
}: {
  photo: GalleryPhoto;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative aspect-square rounded-lg overflow-hidden border border-gray-100 group focus:outline-none focus:ring-2 focus:ring-gold"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-200 group-hover:scale-105"
      />
    </button>
  );
}

function Lightbox({ photo, onClose }: { photo: GalleryPhoto; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none z-10"
      >
        &times;
      </button>
      <div
        className="relative w-[90vw] h-[80vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function GalleryTabs({
  graduationGroups,
  schoolPhotos,
}: {
  graduationGroups: GalleryYearGroup[];
  schoolPhotos: GalleryPhoto[];
}) {
  const [tab, setTab] = useState<"graduation" | "school">("graduation");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <div>
      <div className="flex gap-2 mb-10 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setTab("graduation")}
          className={`px-5 py-3 font-semibold text-sm sm:text-base border-b-2 transition-colors ${
            tab === "graduation"
              ? "border-gold text-navy"
              : "border-transparent text-charcoal/60 hover:text-navy"
          }`}
        >
          Graduation
        </button>
        <button
          type="button"
          onClick={() => setTab("school")}
          className={`px-5 py-3 font-semibold text-sm sm:text-base border-b-2 transition-colors ${
            tab === "school"
              ? "border-gold text-navy"
              : "border-transparent text-charcoal/60 hover:text-navy"
          }`}
        >
          Training & Classroom
        </button>
      </div>

      {tab === "graduation" && (
        <div className="space-y-12">
          {graduationGroups.map((group) => (
            <div key={group.year}>
              <h2 className="text-2xl font-bold text-navy mb-5">{group.year}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.photos.map((photo) => (
                  <PhotoThumb
                    key={photo.src}
                    photo={photo}
                    onClick={() => setLightboxPhoto(photo)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "school" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {schoolPhotos.map((photo) => (
            <PhotoThumb
              key={photo.src}
              photo={photo}
              onClick={() => setLightboxPhoto(photo)}
            />
          ))}
        </div>
      )}

      {lightboxPhoto && (
        <Lightbox photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} />
      )}
    </div>
  );
}
