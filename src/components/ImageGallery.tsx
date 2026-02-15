"use client";

import { useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  columns?: 1 | 2 | 3;
}

export default function ImageGallery({ images, columns = 2 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-3 sm:gap-6 my-4 sm:my-6`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg border border-slate-200 shadow-sm bg-white">
              <div className="p-2 sm:p-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain image-zoom max-h-48 sm:max-h-64"
                />
              </div>
              <div className="absolute inset-0 bg-[#003E77]/0 group-hover:bg-[#003E77]/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-[#003E77] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  Vergrößern
                </span>
              </div>
            </div>
            {image.caption && (
              <p className="text-xs sm:text-sm text-slate-500 text-center mt-1.5 sm:mt-2">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-slate-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden p-2 sm:p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain max-h-[75vh] sm:max-h-[80vh]"
              />
              {selectedImage.caption && (
                <p className="text-center py-2 sm:py-4 text-sm sm:text-base text-slate-700 bg-slate-50">
                  {selectedImage.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface SingleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function SingleImage({ src, alt, caption }: SingleImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="my-4 sm:my-6 cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-lg border border-slate-200 shadow-sm bg-white max-w-xs sm:max-w-md">
          <div className="p-2 sm:p-3">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-contain image-zoom max-h-56 sm:max-h-72"
            />
          </div>
          <div className="absolute inset-0 bg-[#003E77]/0 group-hover:bg-[#003E77]/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-[#003E77] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              Vergrößern
            </span>
          </div>
        </div>
        {caption && (
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 sm:mt-2">{caption}</p>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-slate-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden p-2 sm:p-4">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain max-h-[75vh] sm:max-h-[80vh]"
              />
              {caption && (
                <p className="text-center py-2 sm:py-4 text-sm sm:text-base text-slate-700 bg-slate-50">
                  {caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
