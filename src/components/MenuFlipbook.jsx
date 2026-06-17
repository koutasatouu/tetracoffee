import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { X, ZoomIn } from "lucide-react"; // Menggunakan icon untuk indikator Zoom dan Close

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MenuFlipbook() {
  // State untuk menyimpan data halaman mana yang sedang di-zoom
  const [zoomedPage, setZoomedPage] = useState(null);

  const makeMenuImgUrl = (pageNumber) => {
    const fileName = `tetra menu_page-${String(pageNumber).padStart(4, "0")}.jpg`;
    return new URL(
      `../assets/img/menus/${fileName}`,
      import.meta.url,
    ).toString();
  };

  // Data halaman menu (ambil semua halaman lokal 0001..0035)
  const pages = Array.from({ length: 35 }, (_, idx) => {
    const pageNumber = idx + 1;
    return {
      id: pageNumber,
      title: `Menu Page ${String(pageNumber).padStart(4, "0")}`,
      img: makeMenuImgUrl(pageNumber),
    };
  });

  return (
    <>
      <div className="w-full max-w-md mx-auto aspect-[3/4] py-8">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="w-full h-full rounded-lg shadow-2xl drop-shadow-2xl"
        >
          {pages.map((page) => (
            <SwiperSlide key={page.id}>
              {/* Container halaman yang bisa di-klik untuk Zoom */}
              <div
                className="w-full h-full relative group cursor-zoom-in rounded-lg overflow-hidden border border-zinc-800"
                onClick={() => setZoomedPage(page)}
              >
                {/* Gambar Halaman Menu */}
                <img
                  src={page.img}
                  alt={page.title}
                  className="w-full h-full object-cover"
                />

                {/* Efek visual garis lipatan buku di tengah */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10"></div>

                {/* Overlay Hover bertuliskan "PERBESAR" */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 text-white font-medium tracking-widest text-sm border border-white/20 shadow-xl scale-95 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4" /> PERBESAR
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-center text-zinc-500 text-xs tracking-[0.2em] mt-8 flex items-center justify-center">
          <span className="hidden md:inline mr-2">CLICK TO ZOOM OR</span> SWIPE
          TO TURN
        </p>
      </div>

      {/* --- KOMPONEN MODAL/LIGHTBOX FULL SCREEN --- */}
      {zoomedPage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setZoomedPage(null)} // Klik di area kosong akan menutup modal
        >
          {/* Tombol Close */}
          <button
            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation(); // Mencegah event klik bocor ke background
              setZoomedPage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Gambar yang diperbesar */}
          <img
            src={zoomedPage.img}
            alt={zoomedPage.title}
            className="max-w-full max-h-full object-contain rounded-md shadow-2xl animate-[scaleUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()} // Gambar diklik tidak akan langsung menutup
          />
        </div>
      )}

      {/* Keyframes untuk transisi mulus saat Zoom */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `,
        }}
      />
    </>
  );
}
