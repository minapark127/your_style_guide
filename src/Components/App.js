import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Entry";
import EntryFormProvider from "../entryFormContext";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main>
        <EntryFormProvider>
          <Entry />
        </EntryFormProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
