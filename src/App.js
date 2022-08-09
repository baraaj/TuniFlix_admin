
import Topbar from './components/topbar/Topbar';
import './app.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div >
     <Topbar />
     <div className='container'>
      <Sidebar />
      <div className='others'>others</div>
     </div>
    </div>
  );
}

export default App;
