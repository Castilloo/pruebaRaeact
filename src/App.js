import Navbar from './components/navbar/Navbar.js';
import Carrousel from './components/carrousel/Carrousel.js';
import BodyPage from './components/bodyPage/BodyPage.js';

function App() {
  const products = ['PUFI PUF', 'PUFI RAIN', 'PUFI CART', 'PUFI NAV']
  return (
    <div className="App">
      <Navbar/>
      <Carrousel/>
      <BodyPage options={products}/>
    </div>
  );
}

export default App;
