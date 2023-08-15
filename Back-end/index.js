const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host : "localhost",
    password : "",
    database : "tutorlist"
})


app.post('/createuser', (req, res) => {
    const email = req.body.User_email;
    const name = req.body.User_name;
    const surename = req.body.User_surename;
    const phone = req.body.User_phone;
    const password = req.body.User_password;
    const type = "user";

    const sql = "INSERT INTO users (User_email, User_name, User_surename, User_phone, User_password, User_type) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [email, name, surename, phone, password, type], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting values");
        } else {
            console.log("User inserted:", result);
            res.status(200).send("User registered successfully");
        }
    });
});


//Subject
app.get('/showsubject',(req , res) => {
    db.query("SELECT * FROM subject" ,(err, result)=>{
        if(err){
            console.log("ไม่เจอ")
            console.log(err)
        }else{
            res.send(result)
        }
    })
})


app.post('/addsubject', (req,res) => {
    const subject_name = req.body.subject_name
    db.query("INSERT INTO subject (Subject_name) VALUES (?)",[subject_name],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})


app.delete('/deletesubject/:Subject_id', (req, res) => {
    const Subject_id = req.params.Subject_id; // เปลี่ยนจาก req.body.Subject_id เป็น req.params.Subject_id
    db.query("DELETE FROM subject WHERE Subject_id = ?", [Subject_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});


app.put('/updatesubject',(req,res) =>{
    const Subject_id = req.body.Subject_id
    const Subject_name = req.body.subject_name
    db.query("UPDATE subject SET Subject_name = ? WHERE Subject_id = ?",[Subject_name,Subject_id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("สำเร็จ")
            console.log(result)
            res.send(result)
        }
    })
})




// Close subject

app.listen('5050', () => {
    console.log("Server is running on 5050 ")
})