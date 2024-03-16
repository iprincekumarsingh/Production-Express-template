import dotenv from "dotenv";
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

import {app} from "./app.js";
import dbConn from "./configs/DbConn.js";
dbConn();

app.listen(process.env.HTTP_PORT, () => {
  console.log(`Server listening on port ${process.env.HTTP_PORT}`);
});