# Professional Portfolio
A modern portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a completely data-driven architecture.

## 🚀 Features

-   **Data-Driven Content**: All text, projects, and skills are managed via a single `lib/data.ts` file.
-   **Dark/Light Mode**: Fully responsive theme switching with system preference detection.
-   **Responsive Design**: Optimized for mobile, tablet, and desktop views.
-   **Smooth Animations**: Powered by Framer Motion for engaging user experience.
-   **Section Navigation**: Sticky navbar with scroll spy functionality.
-   **Contact Form**: Integrated UI for handling messages (configured for FormSubmit).

## 🛠️ Tech Stack

-   **Frontend**: [React 18](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📂 Project Structure

```text
├── components/         # React components
│   ├── ui/             # Reusable UI primitives (Buttons, Inputs)
│   ├── Hero.tsx        # Landing section with profile image
│   ├── About.tsx       # Bio and personal details
│   ├── Projects.tsx    # Project showcase
│   └── ...
├── lib/
│   ├── data.ts         # Actual contents
│   └── utils.ts        # Helper functions
├── pages/              # Main page layout
├── App.tsx             # App entry point
└── index.html          # HTML entry point
```

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm start
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
