import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Shop from './Component/Header/Shop/Shop';
import Theory from './Theory/Theory';
function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Theory></Theory>
    </div>
  );
}

export default App;
