const express = require('express')
const app = express();
port = 3000


app.get("/:number", (req, res) => {
    let num = req.params.number
    let n1 = 0, n2 = 1
    let total = 0
    const check = (num) => {
        for (let i = 0; i < num; i++) {
            total = n1 + n2
            if (total == num) {
                return true
            } else if (total > num) {
                return false
            } else {
                n1++
                n2++
            }
        }
    }
    if (check(num)) {
        res.send("<p>it is fib!</a>")
    } else {
        res.send("<p>it is not fib!</a>")
    }
})

app.listen(3000, () => {
    console.log('I still am listening on port 3000')
})