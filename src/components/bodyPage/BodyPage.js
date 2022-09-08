import './BodyPage.css';

function BodyPage(props) {
    return (
      <main className="body-page">
            {props.options.map((el, i) => {
                if(i % 2 !== 0) {
                return <section key={i}
                    className="sections">   
                        <div>
                            <h4>{el}</h4>
                        </div>
                        <div>Image{i}</div>
                </section>
                
                } else {
                    return <section key={i}
                        className="sections">
                            <div>Image{i}</div>
                            <div>
                                <h4>{el}</h4>
                            </div>
                    </section>
                }
                
            }
            )}
      </main>
    );
  }
  
  export default BodyPage;