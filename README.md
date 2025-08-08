# DataMug - PL/SQL Data Migration & Validation Tool Website

A modern, responsive React.js website for DataMug, an advanced PL/SQL data migration and validation tool. Built with React, Tailwind CSS, and Framer Motion for smooth animations and excellent user experience.

## 🚀 Features

- **Modern React.js Architecture** - Built with functional components and hooks
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging user interactions
- **SEO Optimized** - React Helmet for meta tags and search engine optimization
- **Form Handling** - React Hook Form with validation
- **Routing** - React Router DOM for seamless navigation
- **Performance** - Optimized for fast loading and smooth interactions

## 📁 Project Structure

```
datamug-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesGrid.jsx
│   │   ├── WorkflowDiagram.jsx
│   │   ├── UseCaseCards.jsx
│   │   ├── PricingTable.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── UseCases.jsx
│   │   ├── Pricing.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Main app component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **React Helmet** - Document head management
- **React Scroll** - Smooth scrolling

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd datamug-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📱 Pages

### Home Page (`/`)
- Hero section with compelling value proposition
- Features overview
- How it works workflow
- Use cases showcase
- Pricing information
- Contact form

### About Page (`/about`)
- Company mission and vision
- Team information
- Statistics and achievements
- Call-to-action sections

### Features Page (`/features`)
- Detailed feature descriptions
- Technical specifications
- Feature categories (Code Analysis, Generation, Testing, Security)

### How It Works Page (`/how-it-works`)
- Step-by-step migration process
- Detailed workflow explanation
- Benefits of the process

### Use Cases Page (`/use-cases`)
- Industry-specific use cases
- Success stories
- Detailed case studies
- Performance metrics

### Pricing Page (`/pricing`)
- Pricing plans and features
- Enterprise solutions
- FAQ section
- Contact information

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Office location
- Meeting scheduling

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - Main brand color
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Green for success states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Consistent styling with shadows and hover effects
- **Forms**: Clean design with validation states
- **Navigation**: Fixed header with smooth scrolling

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to GitHub Pages
1. Add homepage to package.json: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Environment Variables
Create a `.env` file in the root directory for environment-specific variables:
```
REACT_APP_API_URL=your_api_url
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_USER_ID=your_emailjs_user_id
```

## 📈 Performance Optimization

- **Code Splitting**: React Router for lazy loading
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Proper cache headers for static assets

## 🔒 Security

- **Form Validation**: Client-side validation with React Hook Form
- **XSS Protection**: React's built-in XSS protection
- **HTTPS**: Secure connections for production
- **Content Security Policy**: CSP headers for additional security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: hello@datamug.com
- Phone: +1 (555) 123-4567
- Website: https://datamug.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [React Hook Form](https://react-hook-form.com/) - Performant forms with easy validation

---

Built with ❤️ by the DataMug team 