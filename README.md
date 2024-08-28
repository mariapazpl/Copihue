# [Copihue Dance Studio](https://copihue.vercel.app/)

## Overview

This project is a dynamic and interactive website for a dance studio, built using modern web development technologies. The goal is to create a platform where users can explore dance classes, view schedules, and enroll in courses directly through the site.

## Technologies Used

- **Next.js**: React framework for server-side rendering and generating static websites.
- **TypeScript**: Typed superset of JavaScript that helps catch errors early and improve development workflow.
- **Tailwind CSS**: Utility-first CSS framework for quickly building custom designs.
- **PostgreSQL**: Robust, open-source relational database used for managing user data and class enrollments, hosted on Vercel.

## Features

- **Responsive Design**: Ensures the site is accessible and visually appealing on all devices.
- **Course Offerings**: Sections dedicated to showcasing Salsa and Bachata dance classes, with detailed descriptions for Beginner, Intermediate, and Advanced levels.
- **Video Banners**: Engaging video banners that bring the dance experience to life.
- **Class Calendar**: A calendar component where users can view and add their scheduled classes.
- **Full-Screen Sections**: Each section on the homepage is designed to occupy the full screen height for a modern, immersive experience.
- **User Authentication**: Secure login system allowing users to create accounts, join drop-in classes, and enroll in courses.
- **Booking Management**: Users can book, view, and manage their class enrollments directly through their profile.
- **Participant Control**: Ensures that classes can only be booked if the number of participants is greater than zero.
- **Past Class Restriction**: Users are prevented from booking classes that have already occurred.
- **Cancellation Feature**: Users can cancel upcoming classes directly from their profile.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/mariapazpl/Copihue.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Copihue
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up the environment variables for your PostgreSQL database in `.env.local`:
    ```bash
    POSTGRES_URL=your_database_url
    POSTGRES_PRISMA_URL=your_prisma_database_url
    POSTGRES_USER=your_database_user
    POSTGRES_PASSWORD=your_database_password
    ```
5. Run the development server:
    ```bash
    npm run dev
    ```
6. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Development Roadmap

- **Phase 1**: (COMPLETED) Complete the homepage design and ensure full responsiveness across all devices.
- **Phase 2**: (COMPLETED) Build the calendar to allow users to add, edit, and manage their class schedules.
- **Phase 3**: (COMPLETED) Implement the login system with authentication and user management features.
- **Phase 4**: (COMPLETED) Integrate a PostgreSQL database (hosted on Vercel) for storing user data, class enrollments, and schedules.
- **Phase 5**: (COMPLETED) Deploy the website on Vercel for public use.
- **Phase 6**: (Ongoing) Gather user feedback, fix bugs, and continuously improve the platform.
