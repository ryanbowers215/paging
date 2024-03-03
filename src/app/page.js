"use client"
// Testing VSCode-Github
import Home from "./home/page";
import "./style.scss"


const currentUser = true;

function App() {

  return (
    <div>
        <Home />
    </div>
  );
}

export function getCurrentUser(){
  return currentUser;
}

export default App;

