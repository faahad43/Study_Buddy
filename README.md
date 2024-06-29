# StudyBuddy

StudyBuddy is a web application built with the MERN stack designed to enhance your study experience, whether solo or in groups. It offers features like video calls, goal tracking, Pomodoro timers, and real-time chat, making it the perfect companion for your study sessions.

## Features

- **Solo Study Mode**: 
  - Track your goals.
  - Utilize a customizable Pomodoro timer with various backgrounds and videos.
  
- **Group Study Mode**:
  - Create or join study rooms with unique IDs.
  - Engage in video calls while chatting with other users.
  
- **Real-time Chat**: 
  - Communicate with other users in your study group.

- **Progress Tracking**: 
  - Monitor your study progress over time.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: Zustand, Context API
- **Authentication**: JWT (JSON Web Tokens)
- **Notifications**: Toast

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/studybuddy.git
   cd studybuddy
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   cd client
   npm install
   ```

3. **Run the Application**:
   ```bash
   cd ..
   npm run dev
   ```

4. **Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     ```

## Usage

- **Solo Study**:
  - List and track your study goals.
  - Use the Pomodoro timer with different themes.
  
- **Group Study**:
  - Create or join a room using a unique ID.
  - Engage in video calls with chat functionality.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Contributors

- Syed Fahad Shah
- Muhammad Wahaj Khan 
- Ali Abdullah

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

Thanks to everyone who contributed to this project and made StudyBuddy a reality!

---

Feel free to customize this README further based on your project specifics!
