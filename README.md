# Workit Landing Page

Landing page **Workit** hasil slicing dari desain Figma untuk technical test Frontend Internship di PT Daya Rekadigital Indonesia. Halaman terdiri dari lima section: Header, Hero, Features, CTA, dan Footer. Fokus implementasi pada akurasi visual, responsif, semantic HTML, dan aksesibilitas dasar.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [`next/font`](https://nextjs.org/docs/app/api-reference/optimization/fonts) — Fraunces (heading) + Manrope (body)
- [`next/image`](https://nextjs.org/docs/app/api-reference/optimization/images) untuk optimasi gambar

## Installation

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Build

Jalankan lint dan build production:

```bash
npm run lint
npm run build
npm run start
```

## Deployment

- Live URL: https://workit-landing-page-sage.vercel.app/
- Repository: https://github.com/rafisyeghani/workit-landing-page
- Platform: Vercel (import repo, Framework Preset Next.js, tanpa environment variables). Auto-deploy aktif pada setiap push ke `main`.

## Design System

| Token            | Hex       | Penggunaan                         |
| ---------------- | --------- | ---------------------------------- |
| Dark Purple      | `#24053E` | Background Header, Hero, card CTA  |
| Ghost White      | `#FCF8FF` | Background Features                |
| Eucalyptus       | `#44FFA1` | Accent, primary button, underline  |
| Davy's Grey      | `#584D62` | Border nomor Features              |
| White            | `#FFFFFF` | Page background, card CTA          |

Token diimplementasikan via `@theme` Tailwind v4 di `app/globals.css`.

## Issues & Resolutions

Berikut beberapa kendala nyata yang ditemui selama development dan cara penyelesaiannya:

1. **Curve Hero memotong gambar HP.** `overflow-hidden` pada `section` Hero memotong overlap HP yang menjorok ke section Features. Solusi: hapus `overflow-hidden` dari Hero, pindahkan cegah scroll horizontal ke `overflow-x-clip` di `main` `page.tsx`, dan beri `z-10` pada `Image` HP agar tetap di atas curve.

2. **`next/image` wajib `width` & `height`.** Beberapa komponen (`Hero`, `CTA`) awalnya tidak menyertakan props `width`/`height` pada `<Image />`, menyebabkan error saat `npm run build`. Solusi: tambahkan dimensi dari Figma sebagai rasio, lalu kontrol ukuran tampil via `className` (`max-w-*`, `object-cover`).

3. **Lint `react/no-unescaped-entities` di CTA.** Apostrof pada teks copy CTA (`I'm`, `I'll`) memicu error ESLint. Solusi: escape karakter dengan entity (`I&apos;m`, `I&apos;ll`).

4. **Overlap CTA card vs foto founder.** Posisi card ungu terhadap lingkaran foto sulit ditebak. Solusi: ukur jarak overlap langsung di Figma dengan tahan `Alt` + hover antar elemen, lalu terapkan sebagai arbitrary margin (`lg:-ml-[180px]`) dan `lg:items-start` agar `margin-top` bekerja deterministik, bukan diserap `items-center`.

5. **Alignment paragraf Features antar kolom.** Judul kolom 2 (`Data-driven decisions`) turun 2 baris sementara kolom 1 & 3 satu baris, sehingga paragraf tidak sejajar. Solusi: tambah `lg:min-h-[80px]` (= 2× `leading-[40px]`) pada `h3` untuk memesan tinggi 2 baris di desktop, agar awal paragraf sejajar walau jumlah baris judul berbeda.

## Folder Structure

```
app/
  globals.css      # Token design system + curve 
  layout.tsx       # Root layout, font Fraunces + Manrope
  page.tsx         # Susunan section
components/
  layout/
    Header.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Features.tsx
    CTA.tsx
  ui/
    Button.tsx     # Primary + secondary variants
    Container.tsx  # Wrapper max-width konsisten
public/
  founder.png
  logo-dark.svg
  logo-white.svg
  phone.png
  spiral.svg
  icons/
```
