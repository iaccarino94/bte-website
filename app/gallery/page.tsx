import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photos from BTE Fund classes, facilities, and events.",
};

// Placeholder gallery items — replace src values with real images in /public/gallery/
const placeholderPhotos = [
  { id: 1, caption: "Classroom instruction" },
  { id: 2, caption: "Lab / hands-on training" },
  { id: 3, caption: "Conduit bending exercise" },
  { id: 4, caption: "Safety training session" },
  { id: 5, caption: "Graduation / completion ceremony" },
  { id: 6, caption: "Facility exterior" },
  { id: 7, caption: "Motor controls lab" },
  { id: 8, caption: "Apprentices at work" },
  { id: 9, caption: "Instructor demonstration" },
];

function PlaceholderImage({ caption, index }: { caption: string; index: number }) {
  const bgColors = [
    "bg-navy/80",
    "bg-charcoal/70",
    "bg-navy/60",
    "bg-charcoal/80",
    "bg-navy/70",
    "bg-charcoal/60",
    "bg-navy/90",
    "bg-charcoal/70",
    "bg-navy/75",
  ];
  return (
    <div className={`aspect-square ${bgColors[index % bgColors.length]} rounded-lg flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #F5C518 0px, #F5C518 1px, transparent 1px, transparent 20px)",
      }} />
      <svg
        className="w-12 h-12 text-white/30 mb-3 relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-white/60 text-xs text-center relative z-10 italic">{caption}</p>
      <p className="text-white/30 text-[10px] text-center relative z-10 mt-1">[Photo placeholder]</p>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            A look inside BTE Fund classrooms, training labs, and program events.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-10 text-sm text-amber-800">
          <strong>Photos coming soon.</strong> Real photos will be added once provided.
          Drop image files in <code className="bg-amber-100 px-1 rounded">/public/gallery/</code> and update the gallery data in this page.
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {placeholderPhotos.map((photo, i) => (
            <PlaceholderImage key={photo.id} caption={photo.caption} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
