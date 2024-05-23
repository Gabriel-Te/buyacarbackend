import userModel from "../../models/userModel.js";
import generateToken from "../../middlewares/generateToken.js";
import bcrypt from 'bcryptjs'

const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await userModel.findUserByUsername(username);
      if (user && bcrypt.compare(password, user.password)) {
        const token = generateToken(user.iduser);
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error',username,password, details: error.message });
    }
  };

export default login