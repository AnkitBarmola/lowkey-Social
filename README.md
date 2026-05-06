# Complete Backend + Frontend

This repository contains a full-stack project with a separate backend and frontend.

## Structure

- `backend/` - Express API server
  - `server.js` - starts the Express app
  - `src/app.js` - Express routes and middleware
  - `src/db/db.js` - MongoDB connection
  - `src/models/post.model.js` - Mongoose schema
  - `src/services/storage.service.js` - ImageKit upload helper
- `frontend/` - React app built with Vite

## Setup

### Backend

1. Navigate to `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the required environment variables:
   ```env
   MONGO_URI=<your-mongo-uri>
   IMAGEKIT_PRIVATE_KEY=<your-imagekit-private-key>
   ```
4. Start the backend:
   ```bash
   node server.js
   ```

### Frontend

1. Navigate to `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Notes

- The backend expects a MongoDB connection URI in `process.env.MONGO_URI`.
- The backend also requires ImageKit credentials for file uploads.
- The frontend currently uses Vite and React.
- Add a root-level `.gitignore` to keep local files and secrets out of version control.
