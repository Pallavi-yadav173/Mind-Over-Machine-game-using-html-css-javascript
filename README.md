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
🔐 Secure user authentication with hashed passwords (bcrypt) — signup, login, forgot password, and reset password flow



🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Security: bcrypt (password hashing)


📂 Project Structure

Mind-Over-Machine/
├── server.js
├── package.json
├── package-lock.json
├── style.css
├── script.js
├── script1.js
├── classes.js
├── utils.js
├── character.png
├── login.html
├── signup.html
├── forgot.html
├── reset.html
├── menu1.html
├── levelselect.html
├── level.html
├── level2.html
├── level3.html
├── settings.html
├── credits.html
├── intro.html
├── intro.mp4
├── end.html
├── end.mp4
└── assets/
    ├── background.png, layer1-4.png      # parallax backgrounds
    ├── player.png, projectile.png         # player sprites
    ├── drone.png, jet.png, angler1-2.png, hivewhale.png   # enemy sprites
    ├── fireexplosion.png, smokeExplosion.png, gears.png, shop.png, lucky.png
    ├── bgm.mp3, level1.mp3, shoot1.mp3, sword.mp3, land.mp3, 1.mp3
    ├── kenji/          # character animation frames (Attack1, Attack2, Death, Fall, Idle, Jump, Run, TakeHit)
    └── samuraiMack/    # character animation frames (Attack1, Attack2, Death, Fall, Idle, Jump, Run, TakeHit)



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
