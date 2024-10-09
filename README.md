
# Mini Blog App with React and Appwrite

![Mini Blog Logo](./public/logo.png) <!-- Add a logo image if you have one -->

## Overview

The Mini Blog App is a lightweight blogging platform built using **React** for the frontend and **Appwrite** for the backend. This application allows users to create, edit, and manage blog posts easily. It is designed to be simple and user-friendly while showcasing the power of modern web development technologies.

## Features

- User authentication (sign up, log in)
- Create, edit, and delete blog posts
- Rich text editor for content creation
- Responsive design for mobile and desktop
- File uploads for featured images
- Post management with status (active/inactive)

## Technologies Used

- **Frontend:** 
  - React
  - React Router
  - React Hook Form
  - Tailwind CSS
  - Appwrite SDK

- **Backend:**
  - Appwrite (for database and user management)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (Node Package Manager)
- Appwrite server (set up locally or use a cloud instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mhistiak3/mini-blog-react-appwrite.git
   cd mini-blog-react-appwrite
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the Appwrite client:

   - Update the `appwrite.config.js` file with your Appwrite endpoint and project ID.

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

### Deployment

To deploy the application, follow the steps according to your hosting provider. You can use services like Vercel, Netlify, or GitHub Pages for the frontend.

## Usage

- Sign up or log in to the application.
- Navigate to the dashboard to create and manage your blog posts.
- Use the rich text editor to format your content and upload images.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Appwrite](https://appwrite.io/) - The open-source backend server for web and mobile developers.

