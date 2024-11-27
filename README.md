# Team Work Tracker

## Overview

This is a full-stack web application built with **Next.js**, **TypeScript**, and **Tailwind CSS** that helps track and manage team workload. The app provides a user-friendly interface to visualize and monitor the work distribution among team members, ensuring an even allocation of tasks, and tracking overall team performance.

## Features

- **User Authentication**: Secure login for team members and administrators.
- **Dashboard**: Overview of team members, tasks assigned, and current workload.
- **Task Management**: Add, edit, assign, and track tasks.
- **Team Member Management**: View and edit details for each team member.
- **Workload Tracking**: View individual workloads and balance task allocation.
- **Responsive Design**: Optimized UI for both desktop and mobile.

## Tech Stack

- **Frontend**: 
  - Next.js (React framework)
  - TypeScript (Static typing)
  - Tailwind CSS (Utility-first CSS framework)
- **Backend**:
  - Node.js (Backend runtime)
  - API Routes (Next.js API)
  - Database:  PostgreSQL
- **Authentication**:
  - NextAuth.js
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn
- A database PostgreSQL

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/team-workload-tracker.git
    cd team-workload-tracker
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or if using yarn
    yarn install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root directory and configure the necessary environment variables (e.g., database connection, authentication secrets, etc.).

    Example `.env.local`:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    DATABASE_URL=your-database-connection-string
    NEXTAUTH_SECRET=your-nextauth-secret
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or if using yarn
    yarn dev
    ```

    The app will be running at [http://localhost:3000](http://localhost:3000).

### Database Setup

1. Set up the database schema by running migrations. If using Prisma ORM:

    ```bash
    npx prisma migrate dev
    ```

2. Seed the database (optional):

    ```bash
    npx prisma db seed
    ```

### Deployment

For deploying your app:

- **Vercel**: 
    - Push your code to GitHub and connect the repository to [Vercel](https://vercel.com).
    - Vercel will automatically build and deploy the app.

- **Other Hosting Providers**: 
    - You can deploy the app to platforms like AWS, DigitalOcean, or Netlify. Ensure that environment variables are properly set for production.


## Development Tips

- Use **TypeScript** for type safety across the codebase.
- Customize **Tailwind CSS** with `tailwind.config.js` for a personalized UI design.
- Use **Next.js API routes** for server-side logic, like task and team member management.
- For state management, you can use **React Context** or **Redux** if the app grows larger.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request to the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




