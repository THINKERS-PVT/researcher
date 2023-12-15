// Import required packages  
import express from 'express';  
import { v4 as uuidv4 } from 'uuid';  
import { ulid } from 'ulid';  
import { nanoid } from 'nanoid';  
import os from 'os';  

  
const port = 3030;  
  
// Set up express app  
const app = express();  
  
// Function to generate and display ULID, UUID, nanoid, Snowflake, Flake ID, and Twitter Snowflake  
function gener(req, res) {  
  // Generate a ULID  
  const ulId = ulid();  
  
  // Generate a UUID  
  const uuidValue = uuidv4();  
  
  // Generate a nanoid  
  const nanoidValue = nanoid();  
  
  // Generate a Snowflake ID  
  // const snowflake = new Snowflake();  
  // const snowflakeValue = snowflake.generate();  
  
  // Generate a Flake ID  
  // const flakeIdGen = new FlakeIdGen();  
  // const flakeIdValue = flakeIdGen.next();  
  
  // Generate a Twitter Snowflake ID  
  // const twitterSnowflake = new TwitterSnowflake();  
  // const twitterSnowflakeValue = twitterSnowflake.generate();  
  let ids ={  
    ulid: ulId,  
    uuid: uuidValue,  
    nanoid: nanoidValue
  };
  
  // Send the response with ULID, UUID, nanoid, Snowflake, Flake ID, and Twitter Snowflake  
  res.send(ids);  
}  
  
app.all('*', gener);  
  
// // Get the LAN IP address  
// const interfaces = os.networkInterfaces();  
// let ipAddress = 'localhost'; // Default to localhost if the IP address cannot be determined  
// for (const networkInterface of Object.values(interfaces)) {  
//   for (const network of networkInterface) {  
//     if (network.family === 'IPv4' && !network.internal) {  
//       ipAddress = network.address;  
//       break;  
//     }  
//   }  
// }  
  
// Start the express server  
app.listen(port, () => {  
  console.log(`Server started on localhost:${port}`);  
});  
