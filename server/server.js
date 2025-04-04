const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")


//create a database connection -> u can also
//create a separate file for this and then import/use thar file

mongoose.connect("mongodb+srv://akrmh:akrmh55555@cluster0.nm6oknv.mongodb.net/").then(
    ()=>console.log("MongoDB conecting ")
).catch((error) => console.log(error))

const app = express();
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expirse',
            'Pragma'
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running in port ${PORT}`))