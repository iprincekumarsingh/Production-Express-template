const dotenv = require("dotenv");

dotenv.config();
const app = require("./app.js");

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
