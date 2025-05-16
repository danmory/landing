# Personal Landing Page

A modern, responsive, and bilingual (EN/RU) landing page built with React, TypeScript, and Tailwind CSS.

## Features

- 🌐 Bilingual support (English/Russian)
- 🎨 Modern and clean design
- 📱 Fully responsive
- 🎭 Smooth animations with Framer Motion
- 🖼️ Project showcase with image slider
- 💬 Quote carousel
- 📊 Interactive skills and values visualization
- 📝 Contact form
- 🎯 Easy to customize and extend

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

### Adding Projects

Edit the `projects` array in `src/components/Experience.tsx`:

```typescript
const projects: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: '/projects/your-image.jpg',
    technologies: ['React', 'TypeScript', 'etc'],
  },
  // Add more projects...
];
```

### Adding Quotes

Edit the `quotes` array in `src/components/Values.tsx`:

```typescript
const quotes: Quote[] = [
  {
    text: 'Your quote',
    author: 'Author Name',
    source: 'Source',
  },
  // Add more quotes...
];
```

### Adding Images

1. Place your images in the `public` directory
2. Update image paths in the components
3. For project images: `public/projects/`
4. For interest images: `public/interests/`

### Modifying Content

1. Update translations in `src/i18n/config.ts`
2. Modify component content in respective files
3. Update contact information in `src/components/Contact.tsx`

## Deployment

The site is configured for GitHub Pages deployment. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Run the build command:
   ```bash
   npm run build
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Slick
- i18next
- Vite

## License

MIT
