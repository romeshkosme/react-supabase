import { Routing } from "./helpers/Routing";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routing />
      </div>
    </ErrorBoundary>
  );
}

export default App;
