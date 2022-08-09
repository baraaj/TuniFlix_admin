
import Topbar from './components/topbar/Topbar';
import './app.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <Topbar />
     <div className='container'>
      <Sidebar />
     </div>
    </div>
  );
}

export default App;
