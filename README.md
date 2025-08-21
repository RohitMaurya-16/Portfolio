# Rohit Maurya - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my skills, projects, and professional journey as a software developer.

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices
- **Dark Mode Toggle** - Seamless light/dark theme switching
- **Interactive Navigation** - Smooth animations and hover effects
- **Dynamic Content** - Modular component-based architecture
- **Contact Form** - Integrated email functionality with EmailJS
- **AI Chatbot** - Interactive AI assistant powered by OpenAI
- **Resume Download** - Direct PDF download functionality
- **Project Showcase** - Detailed project descriptions with GitHub links

## 🚀 Live Demo

Visit the live portfolio: [Portfolio Website](https://your-portfolio-url.com)

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building user interfaces
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library for smooth transitions
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library for consistent UI elements

### Backend & Services
- **Node.js** - JavaScript runtime for server-side functionality
- **Express.js** - Web framework for API endpoints
- **EmailJS** - Email service for contact form
- **Twilio** - SMS notification service

### Development Tools
- **Create React App** - React project bootstrapping
- **PostCSS** - CSS processing
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
portfolio-site-react/
├── public/
│   ├── profile.jpg          # Profile image
│   ├── resume.pdf           # Resume download
│   ├── favicon.ico          # Site favicon
│   └── index.html           # Main HTML template
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AIChatbot.js    # AI assistant interface
│   │   ├── Certifications.js # Certifications display
│   │   ├── ContactForm.js  # Contact form with validation
│   │   ├── Education.js    # Education timeline
│   │   ├── Profile.js      # Personal profile section
│   │   ├── Projects.js     # Project showcase
│   │   ├── ResumeUpload.js # Resume management
│   │   ├── Skills.js       # Technical skills display
│   │   └── WorkExperience.js # Professional experience
│   ├── pages/              # Route-based page components
│   │   ├── HomePage.js     # Landing page
│   │   ├── SkillsPage.js   # Skills overview
│   │   ├── ProjectsPage.js # Projects gallery
│   │   └── ...             # Additional pages
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md              # Project documentation
```

## 🎯 Key Components

### 1. **HomePage**
- Hero section with animated introduction
- Quick navigation to key sections
- Dark mode toggle functionality

### 2. **Projects Section**
- Interactive project cards with hover effects
- GitHub integration for source code access
- Technology tags for quick identification
- Achievement highlights for each project

### 3. **Skills Display**
- Categorized technical skills
- Visual skill cards with icons
- Responsive grid layout

### 4. **Contact Form**
- Real-time form validation
- Email integration via EmailJS
- Success/error message handling
- Mobile-optimized design

### 5. **AI Chatbot**
- OpenAI GPT integration
- Conversational interface
- Context-aware responses
- Typing indicators and smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-site-react.git
cd portfolio-site-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

## 🎨 Customization

### Personal Information
Update your details in:
- `src/components/Profile.js` - Personal bio and introduction
- `public/resume.pdf` - Your resume file
- `public/profile.jpg` - Profile picture

### Projects
Add your projects in:
- `src/components/Projects.js` - Update the projects array

### Skills
Modify your skills in:
- `src/components/Skills.js` - Update skill categories and items

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component styles use Tailwind CSS classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with automatic CI/CD

### Netlify
1. Build your project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install gh-pages`
2. Add to package.json scripts:
```json
"homepage": "https://yourusername.github.io/portfolio-site-react",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: rohitmaurya.work@gmail.com
- **LinkedIn**: [Rohit Maurya](https://linkedin.com/in/rohit-maurya-16)
- **GitHub**: [RohitMaurya-16](https://github.com/RohitMaurya-16)

---
DEMO-> "https://rohit-portfolio-07.netlify.app/"
Built with ❤️ by Rohit Maurya

