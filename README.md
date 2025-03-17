<h1>Conectify</h1>

# Video Conferencing Web App

## Overview
This is a full-stack video conferencing web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app enables users to create and join video meetings, chat in real-time, and share screens seamlessly.

## Features
- **Real-time Video & Audio Calls**: High-quality video and audio communication.
- **Chat Messaging**: Instant messaging within the conference.
- **Screen Sharing**: Share screen with participants.
- **User Authentication**: Secure login and signup with authentication.
- **Room Management**: Create and join meeting rooms with unique IDs.
- **Responsive UI**: Fully responsive and user-friendly interface.

## Tech Stack
### Frontend:
- React.js
- WebRTC (for real-time communication)
- Tailwind CSS (for styling)

### Backend:
- Node.js
- Express.js
- Socket.io (for real-time messaging)
- MongoDB (database)
- Authentication

## Installation
### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/sarthak-shastrakar/video-conferencing-app.git
   cd video-conferencing-app
   ```

2. **Install dependencies**
   - Backend
     ```sh
     cd backend
     npm install
     ```
   - Frontend
     ```sh
     cd frontend
     npm install
     ```

3. **Set up environment variables**
   - Create a `.env` file in the `server` directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Start the application**
   - Start backend server
     ```sh
     cd backend
     cd src
     npm start
     ```
   - Start frontend
     ```sh
     cd frontend
     npm start
     ```

5. **Open the app**
   - Navigate to `http://localhost:3000` in your browser.

## Contributing
Feel free to fork the repository and submit pull requests for new features or bug fixes.


