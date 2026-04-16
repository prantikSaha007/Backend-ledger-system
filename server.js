require('dotenv').config();
const app=require('./src/app');
const connectToDB=require('./src/config/db.js');

connectToDB();
const port=8001;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});