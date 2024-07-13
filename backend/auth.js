import jwt from "jsonwebtoken";
const auth=async(request,response,next)=>{
    try{
        
        //   get the token from the authorization header
        const token=request.headers.authorization.split(" ")[1];
        //check if the token matches the supposed origin
        const decodedToken= jwt.verify(token,"RANDOM-TOKEN");
        if(!decodedToken){
            throw new Error("Failed to authenticate token")
        }
         // retrieve the user details of the logged in user
         request.user= decodedToken;
        // pass the user down to the endpoints here
        // pass down functionality to the endpoint
        next();
    }
    catch(error){
        response.status(401).json({
            error:new Error("Invalid request!"),
        });
    }

}
export default auth;