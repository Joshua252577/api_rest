import app from "./app";
const PORT = 3001;
app.listen(PORT, () => {
  console.log("escutando na porta " +PORT);
  console.log('http://localhost:'+PORT);
});
