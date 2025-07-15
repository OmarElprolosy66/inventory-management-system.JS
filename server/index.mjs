import app          from "./config/app.mjs";
import connectDB    from './config/db.mjs';
import { config }   from "dotenv"; config();

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app running on: http://localhost:${port}`);
});
