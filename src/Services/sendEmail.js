import axios from "axios"

const sendEmail = (data) => {
    const URL = 'http://localhost:5000/new-message'
    const req =  axios.post(URL, data)
    return req
}

export default sendEmail