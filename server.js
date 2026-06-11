const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("REQUEST COMING IN:", req.url);
  next();
});

// ✅ MongoDB Connection
const DB_URL = "mongodb://dbPallavi23:dbKP2005@ac-ijjrejp-shard-00-00.dslfrhb.mongodb.net:27017,ac-ijjrejp-shard-00-01.dslfrhb.mongodb.net:27017,ac-ijjrejp-shard-00-02.dslfrhb.mongodb.net:27017/gameDB?ssl=true&replicaSet=atlas-n5h5nr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB_URL)
.then(() => console.log("✅ DB Connected Successfully"))
.catch(err => console.log("❌ DB ERROR:", err.message));


// ✅ User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);


// =========================
// ✅ SIGNUP
// =========================
app.post('/signup', async (req, res) => {

  try {

    const { username, email, password } = req.body;

    // check existing user
    const existing = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existing) {
      return res.json({
        success: false,
        message: "User already exists"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user
    const user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({
      success: true,
      message: "Signup successful"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }

});


// =========================
// ✅ LOGIN
// =========================
// CHECK EMAIL
app.post('/check-email', async (req,res)=>{

  try{

      const user = await User.findOne({
          email:req.body.email
      });

      if(user){

          res.json({success:true});

      }else{

          res.json({success:false});

      }

  }catch(err){

      console.log(err);

      res.status(500).send("Server error");

  }

});



// UPDATE PASSWORD
app.post('/update-password', async (req,res)=>{

  try{

      const hashed = await bcrypt.hash(req.body.password,10);

      await User.updateOne(

          { email:req.body.email },

          { password:hashed }

      );

      res.json({
          message:"Password updated successfully"
      });

  }catch(err){

      console.log(err);

      res.status(500).send("Server error");

  }

});
app.post('/login', async (req, res) => {

  try {

    const { username, password } = req.body;
    console.log("LOGIN ATTEMPT:", username, password);

    // find user
    const user = await User.findOne({ username });
    console.log("USER FOUND:", user); 

    if (!user) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    // compare password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({
        success: false,
        message: "Wrong password"
      });
    }

    res.json({
      success: true,
      message: "Login successful"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});

app.use(express.static('C:/Users/LENOVO/OneDrive/Desktop/gaming'));
// =========================
// ✅ TEST ROUTE
// =========================
app.get('/', (req, res) => {
  res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/signup.html');
});
app.get('/login', (req, res) => {
  res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/login.html');
});
app.get('/intro', (req, res) => {
  res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/intro.html');
});
app.get('/menu1', (req, res) => {
  res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/menu1.html');
});
app.get('/level',       (req, res) => res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/level.html'));
app.get('/level2',      (req, res) => res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/level2.html'));
app.get('/level3',      (req, res) => res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/level3.html'));
app.get('/levelselect', (req, res) => res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/levelselect.html'));
app.get('/settings',    (req, res) => res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/settings.html'));
app.get('/credits',     (req, res) => res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/credits.html'));
app.get('/end',         (req, res) => res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/gaming/end.html'));
// =========================
// ✅ START SERVER
// =========================


app.listen(3000, () => {
  console.log("Server running on port 3000");
});