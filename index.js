const express = require('express');
const mysql = require('mysql');
const mysql2 = require('mysql2');
const cors = require('cors');
const axios = require('axios');


const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res)=> {

 axios.get('http://localhost:3000/transactions/').then((response)=>{
    // console.log(response.data.result);

     
res.json({"payload": response.data})
   });

    
  

});

app.get('/:id', async (req, res)=> {


    const id = req.params.id
    // console.log(id)
 axios.get('http://localhost:3000/transactions/' + id).then((response)=>{
    // console.log(response.data.result);

     
res.json({"payload": response.data})
   });

    
  

});

// app.get('/users/:id', async (req, res)=> {


//     const id = req.params.id
//     console.log(id)

//     await axios.get('http://localhost:3000/user/user/' + id).then((val)=>{
//         console.log(val.data);
    
         
//     res.send(val)
//        }).catch((err)=> {if (err){
//            console.log(err.message)
//        }
//     });

    
  

// });




app.listen(3030, (req, res)=> console.log('Server started!'));
