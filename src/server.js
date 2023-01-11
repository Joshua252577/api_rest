import app from './app';

const port = process.env.APP_PORT ||5555;
app.listen(port, ()=>{
    console.log(`${port}`);
});
