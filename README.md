🚀 ItemNexus - Modern E-Commerce Experience
ItemNexus is a versatile development toolkit and e-commerce platform built on Next.js, designed to accelerate the creation of scalable, maintainable web applications. It combines a robust architecture with integrated styling, authentication, and browsing features to streamline your development workflow.

🛠 Tech Stack
Frontend: Next.js (App Router).

Backend: Node.js & Express.js.

Styling: Tailwind CSS for rapid UI development.

Authentication: Built-in NextAuth.js supporting mock credentials and OAuth.

Hosting: Deployed on Vercel as Serverless Functions.

✨ Core Features
Path Alias Configuration: Simplifies module imports and promotes consistent code organization.

Next.js Optimization: Supports dynamic routing, server-side rendering, and secure image handling.

Theme Management: Facilitates dynamic theme switching for a personalized, eye-comfort-focused user experience.

Modular Components: Provides a comprehensive set of reusable UI components.

Serverless API: A high-performance backend fetching data from structured JSON files.

📁 Project Structure
The backend repository is organized for clarity and performance on Vercel:

Plaintext

/NEXUS-SERVER
  ├── /data
  │    └── products.json   # Product database (JSON format)
  ├── index.js             # Main Express server file
  ├── vercel.json          # Vercel deployment configuration
  ├── .gitignore           # Git ignore rules
  ├── package.json         # Backend dependencies
  └── package-lock.json    # Locked dependency versions
🚀 Getting Started
1. Prerequisites
Programming Language: JavaScript.

Package Manager: npm.

2. Installation
Build seamlessly from the source:

Clone the repository: git clone https://github.com/your-username/ItemNexus.git.

Navigate to the project directory: cd ItemNexus.

Install dependencies: npm install.

3. Usage
Run the development server: npm run dev.

🔐 Mock Credentials
For testing purposes, use the following admin access:

Email: admin@nexus.com

Password: 123456

🌐 API Endpoints
Live Backend: https://item-nexus-server.vercel.app