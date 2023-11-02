const express = require('express')
const app = express();

const PORT = 3000; 

app.use(express.urlencoded({ extended: true}))

app.use("/api", required("./api"));

app.use((err, req, res , next) => {
    console.error(err)
    const statues = err.status ?? 500;
    const message = err.message ?? 'internal server error.'
    res.status(status).json({ message });
});

app.listen(PORT, () => {
    console.log('server lisitng on port ${PORT}')
})