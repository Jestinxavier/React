
import React from "react";
import './App.css'
import Banner from "./Component/Banner/Banner";
import NavBar from "./Component/NavBar/NavBar";
import RowPost from "./Component/Ropost/RowPost";
import{action,orginal,ComedyMovies} from "./const/urls"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost  url={orginal} title ='Netflix orginals' />
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='ComedyMovies' />
    </div>
  );
}

export default App;
