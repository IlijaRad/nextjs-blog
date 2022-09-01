import NavBar from "../components/NavBar";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
