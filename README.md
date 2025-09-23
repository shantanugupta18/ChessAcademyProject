
# Chess Academy Website

👉 Website URL: [www.vianshchessacademy.com](https://www.vianshchessacademy.com)

This project is a modern, responsive Chess Academy website built with React and Vite.

## Features
- Hero section with demo class booking form
- Notice board and results
- Features, achievements, and success stories
- Courses offered with pricing
- Key features of all courses
- FAQ accordion
- Testimonials and Google reviews
- Contact info and map

---

## Technology Stack
- **React**: UI library for building interactive interfaces
- **Vite**: Fast build tool and development server
- **CSS**: Custom styles for all sections
- **React Icons**: For social and UI icons

---

## Codebase Structure

```text
ChessAcademyProject/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── achivement.jpg
│   │   ├── certificate-placeholder.jpg
│   │   ├── chess-animation.gif
│   │   ├── chess-hero-placeholder.jpg
│   │   ├── chessboard-loading.gif
│   │   ├── fide-rating-champ.jpg
│   │   ├── gallery_eight.jpg
│   │   ├── gallery_five.jpeg
│   │   ├── gallery_four.jpeg
│   │   ├── gallery_nine.jpg
│   │   ├── gallery_one.jpeg
│   │   ├── gallery_seven.jpg
│   │   ├── gallery_six.jpg
│   │   ├── gallery_three.jpeg
│   │   ├── gallery_two.jpeg
│   │   ├── logo-viansh chess.jpeg
│   │   ├── logo.svg
│   │   ├── map-placeholder.jpg
│   │   ├── react.svg
│   │   ├── second-youngest.jpg
│   │   ├── youngest-champ.jpg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AchievementsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── CoursesSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ImageCarousel.jsx
│   │   ├── KeyFeaturesSection.jsx
│   │   ├── NoticeBoard.jsx
│   │   ├── TestimonialsSection.jsx
│   ├── constants/
│   │   └── texts.js
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── styles/
│   │   ├── AboutSection.css
│   │   ├── AchievementsSection.css
│   │   ├── ContactSection.css
│   │   ├── CoursesSection.css
│   │   ├── FAQSection.css
│   │   ├── FeaturesSection.css
│   │   ├── Header.css
│   │   ├── HeroSection.css
│   │   ├── ImageCarousel.css
│   │   ├── KeyFeaturesSection.css
│   │   ├── NoticeBoard.css
│   │   ├── TestimonialsSection.css
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── eslint.config.js
```

### Folder Descriptions

- **public/**: Static files and assets for Vite
- **src/assets/**: Images, icons, certificates, and map placeholders
- **src/components/**: Reusable React components for each section
- **src/constants/**: Static text and configuration
- **src/pages/**: Main pages (e.g., HomePage)
- **src/styles/**: CSS files for styling each section/component

---

## Image Path Formats

- All images are stored in `src/assets/`.
- Use relative imports in components, e.g.:
  ```js
  import logo from "../assets/logo.svg";
  <img src={logo} alt="Logo" />
  ```
- For static references in config/text files, use: `src/assets/filename.ext`

---

## Pre-Deployment Checklist

1. Replace all placeholder images in `src/assets/` with final assets.
2. Update academy details, contact info, and course content in `src/constants/texts.js` and relevant components.
3. Test responsiveness on desktop, tablet, and mobile.
4. Run `npm run build` to verify production build.
5. Check for broken links and missing images.
6. Review SEO tags in `index.html`.

---

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist/` folder to your static hosting provider (e.g., Vercel, Netlify, GitHub Pages).
3. Set up custom domain and HTTPS if required.
4. Monitor deployment and test live site for issues.

---

## Additional Notes

- The codebase is modular and easy to extend.
- All styles are in `src/styles/` and can be customized per section.
- For new sections, create a new component in `src/components/` and import it in the relevant page.
- For questions or contributions, open an issue or pull request.

---
👉 Developed by Shantanu Gupta *<`https://www.github.com/shantanugupta1118`>*