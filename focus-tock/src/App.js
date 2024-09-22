import './App.css';
import Timer from './clock.js';
function App() {
  return (
    <div>
      <Timer initialTime={[1,1,13]} /> {/* Set the timer to 30 seconds */}
    </div>
  );
}

export default App;
