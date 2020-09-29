const express = require('express');
const path = require('path')
const app = express();

// parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('/img'));

// home
app.use('/api/home', require(`${__dirname}/routes/home`))

// shows
app.use('/api', require(`${__dirname}/routes/shows`))

// register
app.use('/api/register', require(`${__dirname}/routes/register`))

// login
app.use('/api/login', require(`${__dirname}/routes/login`))

// user domain
app.use('/api/mydomain', require(`${__dirname}/routes/mydomain`))

// users
app.use('/api/users', require(`${__dirname}/routes/users`))

// 404
app.use((req, res) => {
    res.status(404).send('404')
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('moviemaniac/build'))

    app.get("*", (req, res) => {
        res.send(path.resolve(__dirname, 'moviemaniac', 'bulid', 'index.html'))
    })
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`running on port ${port}`))