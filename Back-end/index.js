const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
var jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const secret = 'Fullstack-Login-2021'

const bcrypt = require('bcrypt')
const saltRounds = 10



app.use(express.json())
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "DELETE", "PUT"],
        credentials: true
    }
))




const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "tutorlist"
})


// create user
app.post('/register_users', (req, res) => {
    // ตรวจสอบว่า User_email มี @ ด้วย
    if (!req.body.User_email.includes('@')) {
        return res.status(400).send('User_email ต้องมี @ ด้วย');
    }

    bcrypt.hash(req.body.User_password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
            res.status(500).send('มีข้อผิดพลาดในการลงทะเบียน');
        } else {
            db.query("INSERT INTO users (User_email, User_name, User_surename, User_phone, User_password, User_type) VALUES (?, ?, ?, ?, ?, ?)",
                [req.body.User_email, req.body.User_name, req.body.User_surename, req.body.User_phone, hash, req.body.User_type],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('มีข้อผิดพลาดในการลงทะเบียน');
                    } else {
                        res.status(200).send('ลงทะเบียนสำเร็จ');
                    }
                }
            )
        }
    });
});


// end create user


//Subject
app.get('/showsubject', (req, res) => {
    db.query("SELECT * FROM subject", (err, result) => {
        if (err) {
            console.log("ไม่เจอ")
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


app.post('/addsubject', (req, res) => {
    const subject_name = req.body.subject_name
    db.query("INSERT INTO subject (Subject_name) VALUES (?)", [subject_name], (err, result) => {
        if (err) {
            console.log(err)
        } else {
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


app.put('/updatesubject', (req, res) => {
    const Subject_id = req.body.Subject_id
    const Subject_name = req.body.subject_name
    db.query("UPDATE subject SET Subject_name = ? WHERE Subject_id = ?", [Subject_name, Subject_id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("สำเร็จ")
            console.log(result)
            res.send(result)
        }
    })
})

// Close subject


// Contact

app.post('/addcontact', (req, res) => {
    const contactname = req.body.contactname
    const contactphone = req.body.contactphone
    const contactmessage = req.body.contactmessage

    db.query("INSERT INTO contact (Contact_name,Contact_phone,Contact_message) VALUES (?,?,?)", [contactname, contactphone, contactmessage],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Insert Contact Succes")
            }
        }
    )
})

// Show Contact

app.get('/showinfocontact', (req, res) => {
    db.query("SELECT * FROM contact ORDER BY Contact_id DESC ", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("An error occurred while fetching data.");
        } else {
            res.send(result);
        }
    });
});

// close show contact

// Delete Contact

app.delete('/Contact_id/:Contact_id', (req, res) => {
    const Contact_id = req.params.Contact_id; // เปลี่ยนจาก req.body.Subject_id เป็น req.params.Subject_id
    db.query("DELETE FROM Contact WHERE Contact_id = ?", [Contact_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

//close Delete Contact




// Login

app.post('/login', (req, res) => {
    db.query(
        'SELECT * FROM users WHERE User_email = ?',
        [req.body.User_email],
        (err, users) => {
            if (err) {
                console.log('Database error:', err);
                res.json({ status: 'error', message: 'มีข้อผิดพลาดในการเข้าสู่ระบบ' });
                return;
            }
            if (users.length === 0) {
                console.log('No user found');
                res.json({ status: 'No user found', message: 'ไม่พบผู้ใช้' });
                return;
            }
            bcrypt.compare(req.body.User_password, users[0].User_password, (err, isLogin) => {
                if (err) {
                    console.log('bcrypt.compare error:', err);
                    res.json({ status: 'Error', message: 'เข้าสู่ระบบผิดพลาด' });
                    return;
                }

                if (isLogin) {
                    const token = jwt.sign({ User_email: users[0].User_email }, secret, { expiresIn: '1h' });
                    res.json({ status: 'ok', message: 'เข้าสู่ระบบสำเร็จ', token });
                } else {
                    res.json({ status: 'Error', message: 'เข้าสู่ระบบผิดพลาด' });
                }
            });
        }
    );
});


app.get('/Logout', (req, res) => {
    // เคลียร์คุกกี้ 'token' ที่เกี่ยวข้องกับการยืนยันตัวตน
    res.clearCookie('token');

    // ตอบกลับว่า Logout สำเร็จ
    return res.json({ status: 'Success', message: 'Logout สำเร็จ' });
});






app.post('/authen', function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret)
        res.json({ status: 'ok', decoded })
    } catch (err) {
        res.json({ status: 'error', message: err.message })
    }

})

//close login


//Register Tutor


app.post('/Register_tutor', (req, res) => {
    db.query("INSERT INTO tutor (Tutor_username, Tutor_password, Tutor_name, Tutor_surename, Tutor_tel, Tutor_email, Tutor_address, Tutor_about, Tutor_img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [req.body.Tutor_username, req.body.Tutor_password, req.body.Tutor_name, req.body.Tutor_surename, req.body.Tutor_tel, req.body.Tutor_email, req.body.Tutor_address, req.body.Tutor_about, req.body.Tutor_img],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send('มีข้อผิดพลาดในการลงทะเบียน')
            } else {
                res.status(200).send('ลงทะเบียนสำเร็จ');
            }
        }
    )
});

// close Register tutor

// Approve Tutor and Showlist 

app.get('/tutor/pending', (req, res) => {
    db.query(`SELECT * FROM tutor WHERE Tutor_status = 'Pending' `, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("An error occurred while fetching data.");
        } else {
            res.send(result)
        }
    })
})

app.put('/approve/tutor', (req, res) => {
    const Tutor_id = req.body.Tutor_id;
    const Tutor_status = req.body.Tutor_status; // แก้ตรงนี้


    db.query("UPDATE tutor SET Tutor_status = ? WHERE Tutor_id = ?", [Tutor_status, Tutor_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'มีข้อผิดพลาดในการอนุมัติติวเตอร์' }); // ส่งสถานะข้อผิดพลาดกลับไปยังแอพพลิเคชัน
        } else {
            console.log("สำเร็จ");
            console.log(result);
            res.status(200).json({ success: true, message: 'อนุมัติติวเตอร์สำเร็จ' }); // ส่งสถานะการทำงานสำเร็จกลับไปยังแอพพลิเคชัน
        }
    });
});

app.put('/reject/tutor', (req, res) => {
    const Tutor_id = req.body.Tutor_id;
    const Tutor_status = req.body.Tutor_status; // แก้ตรงนี้


    db.query("UPDATE tutor SET Tutor_status = ? WHERE Tutor_id = ?", [Tutor_status, Tutor_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'มีข้อผิดพลาดในการอนุมัติติวเตอร์' }); // ส่งสถานะข้อผิดพลาดกลับไปยังแอพพลิเคชัน
        } else {
            console.log("สำเร็จ");
            console.log(result);
            res.status(200).json({ success: true, message: 'ปฏิเสธข้อมูลติวเตอร์สำเร็จ' }); // ส่งสถานะการทำงานสำเร็จกลับไปยังแอพพลิเคชัน
        }
    });
});

// close Approve


// Show & Delete Tutor 
app.get('/tutor/approve', (req, res) => {
    db.query(`SELECT * FROM tutor WHERE Tutor_status = 'Approve' `, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("An error occurred while fetching data.");
        } else {
            res.send(result)
        }
    })
})


app.delete('/tutor/:Tutor_id', (req, res) => {
    const Tutor_id = req.params.Tutor_id;
    const query = "DELETE FROM tutor WHERE Tutor_id = ?";

    db.query(query, [Tutor_id], (err, result) => {
        if (err) {
            console.error('Error deleting tutor: ' + err.message);
            res.status(500).json({ error: 'Error deleting tutor' });
        } else {
            console.log('Tutor deleted:', result.affectedRows);
            res.status(200).json({ message: 'Tutor deleted successfully' });
        }
    });
});



// close Show & Delete Tutor


app.listen('5050', () => {
    console.log("Server is running on 5050 ")
})