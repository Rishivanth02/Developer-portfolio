import Header from "./components/header/header";
import MainContent from "./components/maincontent/MainContent";
import "./App.css";
import downloadIcon from "./assets/svg/download-solid.svg";

function App() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf";
    link.download = "My_CV.pdf";
    link.click();
  };
  return (
    <>
      <div className="container">
        <Header />
        <MainContent />
        <div className="download-cv-wrapper">
          <button className="download-cv download-cv-wrapper" onClick={downloadCV}>
            Download CV
          <span className="download-icon">
             <img src={downloadIcon} alt="home-icon" />
          </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
