import app from './app';
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.APP_PORT || 5555;
app.listen(port, () => {
    console.log(`${port}`);
});
