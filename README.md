# SARC Website

Welcome to our state-of-the-art event management platform! We've designed a user-friendly interface with features like secure authentication, easy event creation, and seamless browsing. Explore events, track your attendance history, and enjoy a responsive design for an optimal experience on any device.

# Django and React.js Full-Stack Web Application

Welcome to the documentation for the Django and React.js full-stack web application. This project combines the Django framework for the backend and React.js for the frontend, creating a powerful and modern web application.


# Features

- User authentication and registration page.
- Event creation, editing, and deletion functionalities.
- Event browsing with filtering and search capabilities.
- User profiles with event attendance history.
- Responsive design for optimal viewing on various devices.

# Prerequisites

Ensure that you have the following prerequisites installed on your machine:

- Python (version X3.11.3)
- Django==4.2.4
- django-cors-headers==4.3.1
- django-jazzmin==2.6.0
- django-rest-framework==0.1.0
- djangorestframework==3.14.0
- djangorestframework-simplejwt==5.3.1
- Node.js (version 8.16.1)
- npm (version 9.5.1)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/askuahwah/sarc_website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sarc_website
   ```

## Backend (Django)

### Database Setup

Run the following command to apply initial migrations:

```bash
python manage.py migrate
```

### Run the Django Development Server

Start the Django development server:

```bash
python manage.py runserver
```

Your Django API should be accessible at `http://127.0.0.1:8000/`.

## Frontend (React.js)

### Install Node.js and npm

Make sure you have Node.js and npm installed. Visit [Node.js website](https://nodejs.org/) for installation instructions.

### Install Dependencies

Navigate to the `frontend` directory:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

### Run the React Development Server

Start the React development server:

```bash
npm start
```

Your React app should be accessible at `http://localhost:3000/`.

## Contributing

Feel free to further modify this template based on your preferences or additional details specific to your project.
