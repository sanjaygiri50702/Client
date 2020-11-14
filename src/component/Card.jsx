import React from 'react';


function Card() {

  return (
    <div className="col-3">
        <div className="card" style={{width : 18+'rem'}}>
            <img src="pexels-andrea-piacquadio-774909.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <div className="alert alert-primary" role="alert">
                
            </div>
            <a href="/somewhere"className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  );
}

export default Card;