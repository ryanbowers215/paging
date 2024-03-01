"use client"
import Home from "./home/page";

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

