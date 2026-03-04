# Personal Web Portfolio

A modern, dynamic, and interactive personal web portfolio designed to showcase projects, skills, and professional background.

This project was built with [Angular 18](https://angular.dev/) and integrates robust services for backend management and media delivery.

## 🚀 Features

- **Interactive UI**: Fluid animations and touch gesture support powered by `@angular/animations` and `hammerjs`.
- **Dynamic Content**: Backed by **Firebase Firestore** to manage real-time data for projects, skills, and configuration.
- **Media Management**: Fast and scalable image hosting integrated seamlessly with **Cloudinary** (`@cloudinary/ng`).
- **Rich Text Support**: Project details and blog-like entries are beautifully rendered using **Markdown** via `ngx-markdown` and `marked`.
- **Admin Section**: Secure login module and administrative dashboard for managing portfolio content dynamically.
- **Component Architecture**: Modular design featuring components such as `home`, `about-me`, `skills`, `projects`, `contact`, and `markdown-viewer`.

## Tech Stack

- **Frontend Framework**: Angular 18 (TypeScript, HTML, CSS)
- **State & Reactivity**: RxJS
- **Backend / Database**: Firebase & Cloud Firestore
- **Asset Delivery**: Cloudinary
- **Routing**: Angular Router (Lazy-loaded modules)

## Local Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://github.com/angular/angular-cli) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd touchiness
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Configure your Firebase credentials and Cloudinary settings in the appropriate environment files (e.g., `src/environments/environment.ts`).

### Development Server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Tests

- **Unit Tests**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## License

This project is private and intended for personal use and showcasing purposes.
