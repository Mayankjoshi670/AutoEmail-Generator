import express from 'express';
const app = express(); 
import  morgan from 'morgan';
import mailAi from "./route/mailAi.js"
app.use(morgan('dev')) ; 
app.use(express.json())  ;  

const PORT = 3000 ; 

 
  
app.use('/api/v1/mailAi' , mailAi) ; 
app.listen(PORT   , ()=>{
    console.log(`Server is running on port ${PORT}`) ; 
})