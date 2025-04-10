# Kevin Avila's Blog

## Project Description

This is a personal blog built using Gatsby as the frontend framework and Directus as the headless CMS. The project is structured to provide a seamless development experience, allowing for easy content management through Directus while leveraging Gatsby's powerful static site generation capabilities.

The architecture consists of two main components:
- A Gatsby frontend that serves as the blog interface
- A Directus CMS backend for content management
- Custom Gatsby plugins to fetch content from Directus

## Docker Requirements

To run this project using Docker, you'll need:
- Docker Engine (version 20.10.0 or higher)
- Docker Compose (version 2.0.0 or higher)
- At least 2GB of available RAM
- Port 8055 available for Directus
- Port 8000 available for Gatsby development server

## Local Development Setup

### 1. Starting the CMS (Directus)

1. Create a `.env` file in the root directory based on the example:
   ```bash
   cp .env.example .env
   source .env
   ```

2. Start Directus using Docker Compose from the root directory:
   ```bash
   docker compose up -d directus
   ```

3. Access the Directus admin interface at:
   ```
   http://localhost:8055
   ```

4. Log in with the default credentials:
   - Email: admin@example.com
   - Password: d1r3ctu5

Note: On first run, Docker will pull the required images and set up the database, which may take a few minutes.

### 2. Starting the Gatsby Development Server

There are two options for starting the Gatsby development server:

1. Using Docker Compose:
   ```bash
   docker compose up -d blog-dev
   ```

2. Using pnpm:
   ```bash
   pnpm --filter @kevhah/blog develop
   ```


