# Abdelshafi Group - Agricultural Investment & Development

A modern, multilingual website for Abdelshafi Group, featuring comprehensive internationalization support for 6 languages.

## 🌍 Supported Languages

- **Arabic (العربية)** - RTL support
- **English** - Primary language
- **French (Français)**
- **Spanish (Español)**
- **German (Deutsch)**
- **Italian (Italiano)**

## 🚀 Features

- **Complete Multilingual Support**: All content translated to 6 languages
- **RTL Support**: Full right-to-left layout for Arabic
- **Responsive Design**: Modern, mobile-first design with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes
- **Language Persistence**: Remembers user's language preference
- **SEO Optimized**: Dynamic page titles and meta tags per language

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── AboutPage.tsx   # About us page
│   ├── Footer.tsx      # Footer component
│   ├── LanguageToggle.tsx # Language switcher
│   ├── Navbar.tsx      # Navigation bar
│   ├── ProductsPage.tsx # Products page
│   ├── ServicesPage.tsx # Services page
│   └── ThemeToggle.tsx # Theme switcher
├── contexts/           # React contexts
│   ├── LanguageContext.tsx # Language management
│   └── ThemeContext.tsx    # Theme management
├── locales/            # Translation files
│   ├── ar.ts          # Arabic translations
│   ├── en.ts          # English translations
│   ├── fr.ts          # French translations
│   ├── es.ts          # Spanish translations
│   ├── de.ts          # German translations
│   ├── it.ts          # Italian translations
│   └── index.ts       # Main translation index
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🔧 Translation System

### Structure
Each language file follows a consistent structure:

```typescript
export const languageCode = {
  navbar: {
    home: 'Translation',
    products: 'Translation',
    // ... navigation items
  },
  company: {
    name: 'Company Name',
    subtitle: 'Company Subtitle',
    fullName: 'Full Company Name'
  },
  home: {
    heroTitle1: 'Hero Title 1',
    heroTitle2: 'Hero Title 2',
    // ... home page content
  },
  products: {
    title: 'Products Title',
    // ... products page content
  },
  services: {
    title1: 'Services Title 1',
    title2: 'Services Title 2',
    // ... services page content
  },
  about: {
    title: 'About Title',
    // ... about page content
  },
  footer: {
    description: 'Footer Description',
    // ... footer content
  },
  common: {
    loading: 'Loading',
    error: 'Error',
    // ... common UI elements
  }
};
```

### Adding New Languages

1. Create a new file in `src/locales/` (e.g., `pt.ts` for Portuguese)
2. Follow the structure above and translate all content
3. Add the new language to the `translations` object in `src/locales/index.ts`
4. Update the `Language` type
5. Add the language to the `LanguageToggle` component

### Adding New Content

1. Add the new key to all language files
2. Ensure consistent structure across all translations
3. Update the `TranslationKeys` type if needed

## 🎨 UI Components

### Language Toggle
- Dropdown with flag icons and language names
- Remembers user preference in localStorage
- Updates document direction for RTL languages

### Theme Toggle
- Switches between light and dark themes
- Persists user preference
- Smooth transitions between themes

### Navigation
- Responsive design with mobile menu
- RTL support for Arabic
- Active page highlighting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd Abdelshafi

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Preview production build
npm run preview
```

## 🌐 Language Configuration

### RTL Support
Arabic language automatically enables RTL layout:
- Text direction changes to right-to-left
- Layout adjustments for RTL
- Navigation order reversed

### Page Titles
Dynamic page titles per language:
- Arabic: "مجموعة عبد الشافي - الاستثمار والتنمية الزراعية"
- English: "Abdelshafi Group - Agricultural Investment & Development"
- French: "Groupe Abdelshafi - Investissement et Développement Agricole"
- Spanish: "Grupo Abdelshafi - Inversión y Desarrollo Agrícola"
- German: "Abdelshafi Gruppe - Landwirtschaftliche Investitionen und Entwicklung"
- Italian: "Gruppo Abdelshafi - Investimenti e Sviluppo Agricolo"

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized for all device sizes

## 🎯 Best Practices

### Translation Quality
- Professional translations for business content
- Consistent terminology across languages
- Cultural adaptation where appropriate
- Regular review and updates

### Performance
- Lazy loading of components
- Optimized images and assets
- Efficient state management
- Minimal bundle size

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

## 🔄 Updating Translations

### Content Updates
1. Update the English version first (source of truth)
2. Translate to all other languages
3. Maintain consistency in terminology
4. Test all languages after updates

### New Features
1. Add new translation keys to all language files
2. Ensure proper fallbacks for missing translations
3. Update type definitions if needed
4. Test functionality in all languages

## 📊 Analytics & SEO

### SEO Features
- Dynamic meta tags per language
- Structured data markup
- Optimized page titles and descriptions
- Language-specific URLs (future enhancement)

### Analytics
- Language preference tracking
- User engagement metrics
- Performance monitoring
- A/B testing support (future enhancement)

## 🤝 Contributing

### Translation Contributions
1. Fork the repository
2. Create a feature branch
3. Update translations in the appropriate language file
4. Ensure consistency with existing translations
5. Submit a pull request

### Code Contributions
1. Follow existing code style
2. Add proper TypeScript types
3. Include tests for new features
4. Update documentation

## 📄 License

This project is proprietary software owned by Abdelshafi Group.

## 📞 Support

For questions or support regarding translations or the website:
- Contact: [Contact Information]
- Email: [Email Address]
- Phone: [Phone Number]

---

**Built with ❤️ for Abdelshafi Group**
