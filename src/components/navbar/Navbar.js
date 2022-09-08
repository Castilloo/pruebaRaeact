import NavbarOptions from '../navbarOptions/NavbarOptions.js';
import './Navbar.css'

function Navbar() {

  const centerOptions = [
    {
      text: 'PUFI PUF',
      image: ''
    },
    {
      text: 'PUFI RAIN',
      image: ''
    },
    {
      text: 'PUFI CART',
      image: ''
    },
    {
      text: 'PUFI NAV',
      image: ''
    }
  ]

  const rightOptions = [
    {
      text: 'Mi cuenta',
      image: ''
    },
    {
      text: 'Mi compra',
      image: ''
    }
  ]

  return (
    <div>
      <nav className="navbar">
        <h1>Logo</h1>
        <NavbarOptions options={centerOptions}/>
        <NavbarOptions options={rightOptions}/>
      </nav> 

      
    </div>
  );
}

export default Navbar;