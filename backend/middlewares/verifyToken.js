import jwt from "jsonwebtoken";

export async function verifyToken(req,res,next){
     const token = req.cookies.jwt;
      if (!token) {
      return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }
      jwt.verify(token, process.env.SECRET, function(err, decoded) {
            console.log(decoded.foo) // bar
          });

}