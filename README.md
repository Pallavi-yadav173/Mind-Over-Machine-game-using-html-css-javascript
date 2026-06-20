🎮 Mind Over Machine

A full-stack, web-based game application featuring user authentication, multi-level gameplay, and persistent backend data storage.

Show Image

<!-- CONFIRM: replace the line above with your actual GIF path once uploaded, or remove this line if you don't have one yet -->

📖 About the Project

Mind Over Machine is a browser-based action game where players battle through progressively challenging levels, complete with a secure login system, in-game shop, and dynamic combat mechanics. The project combines frontend game logic with a Node.js backend and MongoDB database to handle user accounts and gameplay.


✨ Features


🔐 User authentication — signup, login, forgot password, and reset password flow
🕹️ Three playable levels with a dedicated level-select screen
⚔️ Combat system with shooting and melee (sword) attacks
👾 Multiple enemy types with unique behavior (drone, jet, and more)
🛒 In-game shop screen
⚙️ Settings and credits screens
🎬 Intro and outro cutscene videos
🎵 Background music and sound effects per level
🌄 Parallax-scrolling backgrounds for visual depth



🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js<!-- CONFIRM: add Express here if you used it — check your require() statements in server.js -->
Database: MongoDB<!-- CONFIRM: add Mongoose here if you used it -->


📂 Project Structure

Mind-Over-Machine/
├── server.js               # Backend server & API routes
├── package.json             # Dependencies
├── public/
│   ├── pages/                # HTML pages (login, levels, menu, etc.)
│   ├── css/                  # Stylesheets
│   ├── js/                   # Game logic scripts
│   └── assets/
│       ├── images/           # Sprites & backgrounds
│       ├── audio/             # Sound effects & music
│       └── video/             # Intro/outro cutscenes
└── README.md

<!-- CONFIRM: update this to match your actual folder layout once you reorganize -->

🚀 Getting Started

Prerequisites


Node.js installed
A MongoDB connection string (local MongoDB or free MongoDB Atlas cluster)


Installation


Clone the repository


bash   git clone https://github.com/Pallavi-yadav173/Mind-Over-Machine-game-using-html-css-javascript.git
   cd Mind-Over-Machine-game-using-html-css-javascript


Install dependencies


bash   npm install


Create a .env file in the root directory and add your MongoDB connection string


   MONGODB_URI=your_connection_string_here


Start the server


bash   node server.js


Open your browser and go to http://localhost:3000


<!-- CONFIRM: replace 3000 with your actual port if different -->

🎥 Demo

<!-- CONFIRM: add either a GIF embed or a YouTube link here, e.g.: -->
<!-- [Watch the gameplay demo](your-youtube-link-here) -->

🔮 Future Improvements


Add a leaderboard / high-score system
Deploy live version for instant play
Add more levels and enemy types


<!-- CONFIRM: edit this list to reflect what you'd genuinely want to add -->

👩‍💻 Author

Pallavi Yadav
GitHub

<!-- CONFIRM: add your LinkedIn link here too, it's worth including -->
