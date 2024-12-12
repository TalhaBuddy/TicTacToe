import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PageNotFound } from "./Components/PageNotFound";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Services from "./Components/pages/Services";
import Contact from "./Components/pages/Contact";
import Crud from "./Components/Crud/Crud";
import Add from "./Components/Crud/Add";
import Read from "./Components/Crud/Read";
import Update from "./Components/Crud/Update";
import QrCodeGeneratorComp from "./Components/QrCodeGenerator/QrCodeGeneratorComp";
import GitHubProfileFinder from "./Components/GitHubProfileFinder/GitHubProfileFinder";
import TicTacToeGame from "./Components/TicTacToe/TicTacToeGame";

function App() { 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qr" element={<QrCodeGeneratorComp />} />
        <Route path="/githubprofilefinder" element={<GitHubProfileFinder />} />
        <Route path="/tictactoe" element={<TicTacToeGame />} />
          <Route path="/crud" element={<Crud/>}>
            <Route index element={<Read/>} />
            <Route path="read" index element={<Read/>} />
            <Route path="add" element={<Add/>} />
            <Route path="edit/:id" element={<Update/>} />
          </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
