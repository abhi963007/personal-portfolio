# 🚀 Abhiram A K | Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Portfolio-Abhiram%20A%20K-0366d6?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Active-2ea44f?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-red?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Last%20Updated-April%202025-blue?style=for-the-badge"/>
</p>

A modern, responsive personal portfolio website showcasing my skills, projects, and professional experience as a developer. Built with performance and accessibility in mind to create an engaging user experience.

<p align="center">
  <a href="https://abhi963007.github.io/personal-portfolio/" target="_blank"><strong>✨ View Live Demo</strong></a>
</p>

<p align="center">
  <img src="https://placehold.co/800x400?text=Portfolio+Preview&font=montserrat" alt="Portfolio Preview" width="100%"/>
</p>

## 📋 Overview

This portfolio is designed to present my work and skills in a clean, professional format. It features a responsive layout, dark/light mode toggle, optimized performance, and interactive elements to enhance user experience. The design prioritizes both aesthetics and functionality to create a memorable impression for visitors.

## ✨ Features

- **Responsive Design**: Fully optimized for all device sizes from mobile to desktop
- **Dark/Light Mode**: Toggle between visual themes for comfortable viewing
- **Project Showcase**: Filterable gallery of projects with detailed descriptions
- **Performance Optimized**: Fast loading times with optimized assets
- **Interactive UI**: Smooth animations and transitions for enhanced user experience
- **Accessibility Compliant**: Following WCAG guidelines for inclusive design
- **SEO Ready**: Properly structured for search engine visibility
- **Contact Form**: Easy-to-use form for visitor inquiries
- **Skills Visualization**: Interactive display of technical competencies
- **Blog Integration**: Showcasing thoughts and technical articles
- **Resume Download**: One-click access to professional resume

## 🛠️ Tech Stack

- HTML5 & CSS3
- JavaScript (Vanilla)
- CSS Variables for theming
- CSS Grid & Flexbox
- Lazy loading for images
- GitHub Pages for hosting
- Intersection Observer API
- LocalStorage for preferences
- Service Worker for offline capability
- Web Animations API
- Form validation with constraint validation API

## 📁 Project Structure

```
portfolio/
├── index.html            # Main landing page
├── projects.html         # Projects showcase page
├── blog.html             # Blog articles page
├── contact.html          # Contact form page
├── about.html            # About me page
├── css/                  # Stylesheets
│   ├── style.css         # Core styles
│   ├── dark-mode.css     # Dark mode specific styles
│   └── animations.css    # Animation definitions
├── js/                   # JavaScript files
│   ├── main.js           # Core functionality
│   ├── projects.js       # Project filtering logic
│   ├── theme-toggle.js   # Dark/light mode switcher
│   └── form-handler.js   # Contact form validation
├── assets/               # Source assets
│   ├── images/           # Image assets
│   ├── webp/             # WebP format images
│   ├── icons/            # SVG icons
│   ├── fonts/            # Web fonts
│   └── audio/            # Audio files
├── sw.js                 # Service worker for offline support
├── manifest.json         # PWA manifest
└── README.md             # Project documentation
```

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi963007/personal-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd personal-portfolio
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server
   
   # Using Node.js
   npx serve
   
   # Using VS Code Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

4. Make changes to the HTML, CSS, or JavaScript files as needed.

5. Test responsiveness using browser developer tools.

## 🎨 Customization

The portfolio is designed to be easily customizable:

- Edit `index.html` to change content and structure
- Modify CSS files in the `css/` directory to adjust the visual appearance
- Update projects in `projects.html` to showcase your work
- Adjust theme colors using CSS variables in the `:root` selector
- Replace images in the `assets/images/` directory with your own
- Update social media links in the footer
- Modify the contact form in `contact.html`
- Customize animations in `animations.css`
- Add your own blog posts to `blog.html`

## 🚀 Deployment

This portfolio is deployed using GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys the site
3. The site is available at `https://abhi963007.github.io/personal-portfolio/`

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repository for continuous deployment
- **Vercel**: Import your repository for automatic deployments
- **Firebase Hosting**: Use the Firebase CLI to deploy your site
- **AWS Amplify**: Connect your repository for CI/CD pipeline

## ⚡ Performance Optimization

- WebP image format for smaller file sizes
- Minified CSS and JavaScript
- Lazy loading of images
- Efficient CSS selectors
- Optimized font loading with font-display: swap
- Preloading of critical resources
- Code splitting for JavaScript
- Responsive images with srcset
- Service worker for caching and offline support
- Deferred loading of non-critical JavaScript
- HTTP/2 compatible resource loading
- Optimized SVGs for icons

### Performance Metrics

- **Lighthouse Score**: 95+ on all categories
- **PageSpeed Insights**: Fast on mobile and desktop
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s

## 🌐 Browser Support

The portfolio is compatible with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

The site uses progressive enhancement to ensure basic functionality on older browsers while providing enhanced experiences on modern browsers.

## 📬 Contact

- **Portfolio**: [abhi963007.github.io/personal-portfolio](https://abhi963007.github.io/personal-portfolio)
- **Email**: abhiramak963@gmail.com
- **LinkedIn**: [Abhiram A K](https://www.linkedin.com/in/abhiram-a-k)
- **GitHub**: [abhi963007](https://github.com/abhi963007)
- **Twitter**: [@abhiramak963](https://twitter.com/abhiramak963)
- **Dev.to**: [abhi963007](https://dev.to/abhi963007)

## 📝 Accessibility

This portfolio follows WCAG 2.1 AA standards for accessibility:

- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast
- Keyboard navigation support
- ARIA labels where necessary
- Alt text for all images
- Focus indicators for interactive elements
- Responsive design for various devices

## 🔄 Continuous Improvement

This portfolio is continuously being improved. Upcoming features include:

- [ ] Internationalization support
- [ ] Advanced animation effects
- [ ] Integration with headless CMS for blog
- [ ] Improved analytics tracking
- [ ] Enhanced project filtering
- [ ] Testimonials section

## 📊 Analytics

This site uses privacy-friendly analytics to track user engagement:

- Page views and unique visitors
- User flow through the site
- Interaction with project cards
- Form submissions
- Download events

## 📱 PWA Support

The portfolio functions as a Progressive Web App:

- Installable on mobile devices
- Works offline with cached content
- App-like experience on supported devices
- Fast loading even on slow connections

## 🔒 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  <sub>© 2025 Abhiram A K. All rights reserved.</sub>
</p>

<p align="center">
  <a href="https://github.com/abhi963007/personal-portfolio/issues">Report Bug</a> ·
  <a href="https://github.com/abhi963007/personal-portfolio/issues">Request Feature</a>
</p>
