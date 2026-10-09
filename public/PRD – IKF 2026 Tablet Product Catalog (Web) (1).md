# PRD – IKF 2026 Tablet Product Catalog (Web)

Prepared by: Fasha · Event: IKF BCA (Selasa) · Deadline production-ready: Senin

## 1. Ringkasan

Katalog produk digital untuk tablet booth IKF BCA, dibangun dari desain Figma. Dipakai sales dan pengunjung langsung di tablet (Samsung Tab A8), fullscreen, tanpa perlu internet saat event.

Kategori solusi: Banking Solutions, Cash Management Solutions, Retail & Digital Signage Solutions.

## 2. Stack

| Area | Keputusan |
| --- | --- |
| Build | Project Vite baru: Vite + React + TypeScript (static SPA) |
| Styling | **Tailwind CSS** (v4 via `@tailwindcss/vite`) untuk layouting dan styling |
| Routing | React Router (`HashRouter`, aman untuk hosting statis) |
| Hosting | Vercel + subdomain kantor (CNAME) |
| Offline | PWA via `vite-plugin-pwa`, semua asset di-precache |
| Slicing | Figma MCP (`get_design_context`, `get_variable_defs`, `download_assets`) |

## 3. Aturan Slicing dari Figma

1. **Tailwind dulu, hardcode kalau perlu.** Layouting dan styling pakai utility class Tailwind. Kalau nilai dari Figma (warna, ukuran, radius, font) punya padanan yang sesuai di Tailwind, pakai class-nya; kalau tidak ada, boleh hardcode sesuai nilai Figma (arbitrary value, misalnya `bg-[#0B5FA5]`). Tidak perlu membuat design token.
2. **Komponen reusable.** Pola yang berulang dibuat satu komponen, bukan disalin per halaman.
3. **Asset.** Foto dan ilustrasi di-download dari Figma, dikonversi ke WebP, disimpan di `src/assets`. Ikon sebagai SVG inline atau komponen. Font di-host sendiri (`@font-face`), bukan CDN.
4. **Hasil dicek ke Figma.** Tiap layar dibandingkan visual dengan frame Figma-nya, di landscape dan portrait, sebelum lanjut ke layar berikutnya.

## 4. Responsif: Landscape dan Portrait

Tiap layar punya dua desain, jadi tidak ada orientation lock. Satu codebase, dua layout:

- Pakai varian bawaan Tailwind `landscape:` dan `portrait:` untuk beda layout (misalnya kartu Solutions: 3 kolom di landscape, 2 kolom + 1 di portrait).
- Ukuran frame Figma jadi acuan. Viewport asli Tab A8 sekitar 1280×800 CSS px (landscape) dan 800×1280 (portrait); verifikasi di tablet asli.
- Gunakan unit fluid (flex, grid, `%`, `rem`), bukan posisi absolut, supaya aman kalau viewport meleset sedikit.
- Layout harus bereaksi saat tablet diputar tanpa reload dan tanpa kehilangan posisi halaman.

## 5. Offline & Fullscreen

- Service worker precache seluruh asset; aplikasi harus jalan penuh di mode pesawat setelah dibuka sekali online.
- `manifest.json`: `display: "fullscreen"` (fallback `standalone`), `orientation: "any"`. Dipasang lewat "Add to Home Screen" agar URL bar hilang.
- Cegah pinch-zoom, text selection, dan context menu long-press yang tidak disengaja.
- `noindex` (meta robots + `robots.txt`).
- Atur tablet: matikan auto-lock, baterai penuh, screen pinning agar pengunjung tidak keluar dari app.

## 6. Acceptance Criteria

- [ ] Home dan Solutions tampil sesuai Figma di landscape dan portrait.
- [ ] Styling memakai Tailwind, tanpa CSS Modules atau library UI lain.
- [ ] Berjalan penuh di mode pesawat setelah dibuka sekali online.
- [ ] Terpasang fullscreen dari Home Screen tanpa URL bar.
- [ ] Diputar landscape ↔ portrait tanpa layout rusak.
- [ ] Live di subdomain kantor dengan HTTPS.

## 7. Urutan Kerja

1. Setup project Vite baru (React, TypeScript, Tailwind, router, PWA); deploy kerangka ke Vercel lebih awal dan tes di tablet asli (cek ukuran viewport sebenarnya).
2. Tarik font dan asset dari Figma.
3. Slice layar satu per satu (landscape dan portrait), cek ke Figma sebelum lanjut.
4. Tes offline dan rotasi di tablet asli.
5. Freeze hari Senin; install ke semua tablet saat ada internet dan pastikan cache terisi.
