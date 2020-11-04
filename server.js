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
app.use('/api', require(`${__dirname}/routes/trending`))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get("*", (req, res) => {
        res.send(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`running on port ${port}`))