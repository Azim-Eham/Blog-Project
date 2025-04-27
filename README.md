# Blog Website with Admin Panel

This project is a **Blog Website** built using **React**, **Redux Toolkit**, and **React Router**. It includes both a **public blog** for users to read posts and an **admin panel** where authorized users can create, edit, and delete blog posts. The project uses **Local Storage** to simulate a backend and persist data, making it fully functional without needing a server.

While building this project, I sought guidance and explored various resources to improve my understanding of certain concepts. The following README will describe the features I implemented, the technologies I used, and what I learned in the process.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Lessons Learned](#lessons-learned)


## Project Overview

This is a **Blog Website** with both a **public-facing blog** and an **admin panel** to manage content. The goal was to create a dynamic web application using React, Redux, and local storage for persistence. I designed and implemented most of the features myself, but I did seek advice and suggestions on best practices from tutorials and forums.

## Features

- **Public Blog**:  
  - Users can view, read, and search for blog posts.
  - Each post includes a title, excerpt, and a detailed page with full content.
  
- **Admin Panel**:  
  - **Create Posts**: Admin users can create new posts with a title, content, and an optional excerpt.
  - **Edit Posts**: Admin users can modify existing posts.
  - **Delete Posts**: Admin users can remove posts.
  
- **Authentication Simulation**:  
  - While there is no real back-end authentication, the admin panel has a simulated login system to manage access.
  
- **Responsive Design**:  
  - The app is fully responsive, built with **Tailwind CSS**, and adjusts to different screen sizes.

## Technologies Used

- **React**: To build the user interface and manage component state.
- **Redux Toolkit**: To manage global state for the blog posts.
- **React Router**: For handling client-side routing between the public blog and admin panel.
- **Local Storage**: Used to simulate data persistence.
- **Tailwind CSS**: To make the website visually appealing and responsive.

## Lessons Learned
While working on this project, I encountered and overcame several challenges that helped me grow as a developer:

- **State Management**: I learned how to use Redux Toolkit for managing complex state in a React application. This was especially useful for handling the list of posts and the admin panel state.

- **Routing**: By implementing React Router, I got hands-on experience with dynamic routing, which allowed me to create a seamless navigation experience between the blog and the admin panel.

- **Forms Handling**: I faced challenges with form handling (e.g., adding, editing, and deleting posts), but through careful planning and research, I implemented efficient solutions that work seamlessly.

- **Persistence with Local Storage**: I initially found simulating a backend with Local Storage tricky, but I learned how to manage data persistence across sessions without the need for a real server.

- **UI/UX**: I spent a lot of time perfecting the user interface to ensure it’s both functional and visually appealing. I used Tailwind CSS for styling, which helped me create a responsive and modern design.

Throughout this project, I sought guidance from tutorials and online resources to learn new techniques and approaches. This was a valuable learning experience, and I feel more confident working with React, Redux, and other modern web technologies.