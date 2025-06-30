const express = require('express')
const postsRouter = require('./routing/posts')
const app = express()
const port = 8080
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})

app.use("/posts", postsRouter)