import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import StartForm from "./StartForm";
import StartFormProvider from "../startFormContext";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main>
        <StartFormProvider>
          <StartForm />
        </StartFormProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
