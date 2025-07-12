# **Personal Portfolio Site**

A modern, responsive portfolio website built with React+Next.js showcasing my work, skills, and experience.

## **Features**

- **Responsive Design** - Optimized for all screen sizes and devices
- **Modern UI** - Clean, professional design with smooth interactions
- **Project Showcase** - Display your work with detailed case studies
- **About Page** - Professional background and skills
- **SEO Optimized** - Built-in SEO features for better discoverability
- **Dark/Light Theme** - Toggle between themes for better user experience

## **Tech Stack**

- **Framework**: Next.js 14
- **Styling**: SCSS Modules
- **Content**: MDX for blog posts and projects
- **Deployment**: AWS EC2

## **Getting Started**

### Prerequisites
- Node.js v18.17 or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd personal_portfolio_site
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## **Project Structure**

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── gallery/           # Image gallery
│   ├── work/              # Projects showcase
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── resources/             # Configuration and content
└── utils/                # Utility functions
```

## **Customization**

### Content Management
- Edit site content in `src/resources/content.js`
- Add blog posts in `src/app/blog/posts/`
- Add projects in `src/app/work/projects/`
- Update images in `public/images/`

### Styling
- Modify SCSS files in `src/components/`
- Update theme colors and styles
- Customize layout and components

### Configuration
- Update site metadata in `src/app/layout.tsx`
- Modify SEO settings
- Configure social links and contact information

## **Deployment**

### Vercel or other platforms
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## **Performance**

- Optimized images and assets
- Lazy loading for better performance
- SEO-friendly structure
- Fast loading times

## **Contributing**

This is a personal portfolio site, but if you find any bugs or have suggestions, feel free to open an issue.

## **License**

This project is for personal use. Please respect the original design and don't use it for commercial purposes without permission.

---

**Built with ❤️ using Next.js**