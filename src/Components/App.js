import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import StartForm from "./StartForm";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main>
        <StartForm />
      </main>
    </div>
  );
}

export default App;
