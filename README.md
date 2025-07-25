# HTMknapen - Smart Steering Solutions

Welcome to the HTMknapen website! We are a group of friends developing innovative marine technology solutions with a modern, professional Angular web application featuring clean routing and responsive design.

## About Us

HTMknapen is a team of engineers and professionals working together under the brand **Smart Steering Solutions**. We're developing cutting-edge technology to make boating safer, more convenient, and more enjoyable.

## Our Product: Steermate 1

We are currently developing the **Steermate 1**, an innovative product that allows users to remote control their boat using devices like remote controllers. This revolutionary technology provides:

- **Convenience**: Control your boat from anywhere on deck
- **Safety**: Enhanced maneuverability in tight spaces
- **Innovation**: State-of-the-art remote steering technology

## Our Team

Meet the talented individuals behind HTMknapen:

- **Jannick** - Project Manager & HR Manager
- **Stijn** - Mechanical Engineer
- **Niels** - Mechatronics Engineer  
- **Max** - Electrical Engineer
- **Jens** - Software Engineer (Website creator, owner of [Bertenx.nl](https://bertenx.nl))

## Technology Stack

This website is built with modern technologies:

- **Angular 20** - Latest Angular framework with standalone components
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **TypeScript** - Strongly typed JavaScript
- **Signals** - Angular's reactive state management
- **Lazy Loading** - Optimized component loading

## Development

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/HutsaJens/htmknapen.git
   cd htmknapen
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── solutions/
│   │   ├── team/
│   │   └── shared/
│   ├── app.ts              # Main app component
│   ├── app.html            # App template
│   ├── app.routes.ts       # Routing configuration
│   └── app.config.ts       # App configuration
├── styles.css              # Global styles with Tailwind
├── index.html              # Main HTML file
└── main.ts                 # Bootstrap file
```

## Architecture & Best Practices

This project follows Angular best practices as outlined in our development guidelines:

- **Standalone Components**: All components use the new standalone approach
- **Signals**: State management using Angular signals
- **Lazy Loading**: Feature routes are lazy loaded for performance
- **OnPush Change Detection**: Optimized change detection strategy
- **TypeScript Strict Mode**: Enhanced type safety
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Website Features

- **Modern Angular Architecture** with latest Angular 20 features
- **Responsive Design** optimized for all devices
- **Fast Loading** with lazy-loaded components
- **Clean URLs** with Angular Router
- **SEO-friendly** structure with proper meta tags
- **Professional Design** with maritime blue gradient theme
- **Asset Integration** with optimized images

### Website Sections

The website features three main sections:

- **Home** (`/`) - Hero section with call-to-action buttons and feature highlights
- **Solutions** (`/solutions`) - Dedicated Steermate 1 product showcase with detailed information
- **Team** (`/team`) - Team member profiles with individual descriptions and roles

## Design & User Experience

The website features a modern design with:

- **Maritime blue gradient color scheme** creating a professional aesthetic
- **Fixed navigation header** with active states and mobile responsiveness
- **Smooth page transitions** with Angular Router
- **Interactive elements** with hover effects and animations
- **Mobile-first responsive design** with collapsible navigation
- **SEO-friendly structure** with semantic HTML and proper meta tags

## Contact

For more information about HTMknapen and our Steermate 1 product, please visit our website or contact us through our team members.

---

© 2025 HTMknapen - Smart Steering Solutions