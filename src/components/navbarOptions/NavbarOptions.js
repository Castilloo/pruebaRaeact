import './NavbarOptions.css';

function NavbarOptions(props) {
  console.log(props)
    return (
      <div className="options">
            {props.options.map((el, i) => 
                <a 
                  key={el.text + i}
                  className="pufi-options">
                    {el.text}
                </a>
            )}
      </div>
    );
  }
  
  export default NavbarOptions;