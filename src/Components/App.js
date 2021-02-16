import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import StartForm from "./StartForm";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main>
        <StartForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
