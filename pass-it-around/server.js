const express = require('express');
const app = express()


app.get('/', (req, res) => {
    res.send(
        `<h1>
        "99 Bottles of beer on the wall!"
    </h1><a href="/:98">take one down pass it around<a/>`

    )
})

app.get('/:number_of_bottles', (req, res) => {
    const bottles = parseInt(req.params.number_of_bottles);
    if (bottles === 0) {
        res.send(`<h1>${req.params.number_of_bottles} 
        Bottles of beer on the wall!</h1>
        <a href="/">start over</a>`)

    } else {
        res.send(`<h1>${req.params.number_of_bottles} 
        Bottles of beer on the wall</h1>
        <a href=${`/${bottles - 1}`}>take one down, pass it around!</a>`)
    }
})

app.listen(3000, () => {
    console.log('I still am listening on port 3000')
})
