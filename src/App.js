import { Routing } from "./helpers/Routing";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routing />
      </div>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
