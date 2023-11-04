//importing modules
import express from "express"
import path from "path"
import exphbs from 'express-handlebars'

//importing Css
import './App.css';

//Express Server's instance
const app = express();

const PORT = process.env.PORT || 3000;

//Listening
app.listen(PORT, () => console.log(`Server started running on PORT ${PORT}`))

function App() {
  return (
    <div></div>
  );
}

export default App;
