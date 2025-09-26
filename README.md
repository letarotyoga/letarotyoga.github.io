# Le Tarot Yoga — Jekyll + Decap CMS

## What changed
- **Navigation** now lives in `_data/navigation.yml`.
- **Collections**: `_events/`, `_services/`, `_testimonials/`.
- **Theme tokens**: edit colors in `_data/theme.yml` (CSS variables are generated into `assets/css/theme.css`).
- **Hero images & tagline**: `_data/site.yml`.
- **Pages**: `/events/` (grid + modal), `/services/` (list + detail pages), `/testimonials/`, `/about/`, `/contact/`.

## Edit content with Decap CMS
1. Deploy to Netlify (connect the GitHub repo).
2. Enable **Identity** and **Git Gateway** in Netlify.
3. Visit `/admin` and log in.
4. Create/edit Events, Services, Testimonials, Pages, Navigation, Theme colors.

## Contact button
The contact page builds a `mailto:` to `letarotyoga@gmail.com` with subject + body from the form.
No backend required.

## Images
Drop images into:
- `img/events/` (4:3 thumbnails recommended, e.g., 1200×900)
- `img/services/` (square or 4:3)
- `img/testimonials/` (headshots ~512×512)
- `img/about/` (any)
- `img/uploads/` (CMS uploads)

## Migration (_posts ➜ _events)
If your old "Portfolio" items were blog posts, copy them to `_events/` and rename front matter fields:
- `image` ➜ `thumbnail`
- `modal-images` ➜ `gallery` (list of image paths)
- `subheading`/`description` ➜ `excerpt`

Each file should have:
```yaml
---
title: "Event Title"
date: 2025-06-01
location: Prague
thumbnail: /img/events/whatever.jpg
gallery:
  - /img/events/1.jpg
  - /img/events/2.jpg
excerpt: "Short blurb"
tags: [tag1, tag2]
---

Long description in Markdown.
```

## Build locally
```bash
bundle install
bundle exec jekyll serve
```

## Netlify
- Add this repo in Netlify (New site from Git).
- It will build with `netlify.toml`.
- Enable Identity + Git Gateway to use `/admin`.
