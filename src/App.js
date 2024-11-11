//styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//elements
import Mynav from './components/Mynav/Mynav.component';
import Myfooter from './components/Myfooter/Myfooter.component';
import Welcome from './components/Welcome/Welcome.components';
import AllTheBooks from './components/AllTheBooks/AllTheBooks.components';

function App() {
  return (
    <div className="App">
      <Mynav />
      <Myfooter />
      <Welcome />
      <AllTheBooks></AllTheBooks>
    </div>
  );
}

export default App;
