const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Api node")
});

app.post('/new-message', (req, res) => {
    const  {email, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cristiansolano1941@gmail.com',
            pass: 'umvfwsrkckydbjvx'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOption = {
        from: email,
        to: 'analu.jaor@gmail.com',
        subject: subject,
        message: message
    };

    transporter.sendMail(mailOption, (error, info) => {
        if(error){
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Correo Enviado' + info.response)
    });
}); 

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})