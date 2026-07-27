import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import GalleryTabs, { type GalleryPhoto, type GalleryYearGroup } from "./GalleryTabs";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photos from BTE Fund classes, facilities, and events.",
};

const GRADUATION_DIR = path.join(process.cwd(), "public", "gallery", "graduation");
const SCHOOL_DIR = path.join(process.cwd(), "public", "gallery", "school");

function getGraduationGroups(): GalleryYearGroup[] {
  const files = fs.readdirSync(GRADUATION_DIR).filter((f) => /\.jpe?g$/i.test(f));
  const byYear = new Map<number, GalleryPhoto[]>();

  for (const file of files) {
    const match = file.match(/^graduation-(\d{4})-(\d+)\.jpe?g$/i);
    if (!match) continue;
    const year = Number(match[1]);
    const photo: GalleryPhoto = {
      src: `/gallery/graduation/${file}`,
      alt: `BTE graduation ceremony, ${year}`,
    };
    const existing = byYear.get(year);
    if (existing) {
      existing.push(photo);
    } else {
      byYear.set(year, [photo]);
    }
  }

  return Array.from(byYear.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, photos]) => ({
      year,
      photos: photos.sort((a, b) => a.src.localeCompare(b.src, undefined, { numeric: true })),
    }));
}

function getSchoolPhotos(): GalleryPhoto[] {
  const files = fs.readdirSync(SCHOOL_DIR).filter((f) => /\.jpe?g$/i.test(f));
  return files
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/gallery/school/${file}`,
      alt: "BTE apprentice training and classroom instruction",
    }));
}

export default function GalleryPage() {
  const graduationGroups = getGraduationGroups();
  const schoolPhotos = getSchoolPhotos();

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
        <GalleryTabs graduationGroups={graduationGroups} schoolPhotos={schoolPhotos} />
      </div>
    </>
  );
}
