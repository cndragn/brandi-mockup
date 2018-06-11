import React from 'react';


export class Gallery extends React.Component {
    render () {
        return (
            <div id="gallery">
                <div id="myBtnContainer">
                    <button className="btn active" onClick="filterSelection('all')"> All</button>
                    <button className="btn" onClick="filterSelection('branding')"> Branding</button>
                    <button className="btn" onClick="filterSelection('web')"> Web</button>
                    <button className="btn" onClick="filterSelection('logos')"> Logo Design</button>
                    <button className="btn" onClick="filterSelection('photography')"> Photography</button>
                </div>

                <div className="row">
                    <div className="column col-md-3 branding">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="Mountains"  />
                        </div>
                    </div>
                    <div className="column col-md-3 branding">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights"  />
                        </div>
                    </div>
                    <div className="column col-md-3 branding">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/nature.jpg" alt="branding"  />
                        </div>
                    </div>

                    <div className="column col-md-3 web">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/cars1.jpg" alt="Car"  />
                        </div>
                    </div>
                    <div className="column col-md-3 web">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/cars2.jpg" alt="Car"  />
                        </div>
                    </div>
                    <div className="column col-md-3 web">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/cars3.jpg" alt="Car"  />
                        </div>
                    </div>

                    <div className="column col-md-3 logos">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/people1.jpg" alt="logos"  />
                        </div>
                    </div>
                    <div className="column col-md-3 logos">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/people2.jpg" alt="logos"  />
                        </div>
                    </div>
                    {/* <div className="column col-md-3 logos">
                        <div className="content">
                        <img src="https://www.w3schools.com/w3images/people3.jpg" alt="logos"  />
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}