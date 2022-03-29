import React from "react";
import Slider from "../inc/Slider";
import {Link} from 'react-router-dom';
import Vmc from "./inc/Vmc";
import service1 from '../images/computer.jpg'

function Home()
{

return(
<div>
<Slider/>
    <div className="container">
      <section className="section">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <h3 className="main-heading">Our Organization</h3>
                      <div className="underline mx-auto"><hr className="underline mx-auto"/></div>
                      <p>
                      Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      </p>
                      <Link to="/about" className="btn btn-warning">Read More</Link>


                  </div>
              </div>
          </div>
      </section>

      {/* vission & minnion */}

     <Vmc />
      {/* our servises */}

      <section className="section  border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5 text-center">
                    <h3 className="main-heading">Our Services</h3>
                    <div className="underline mx-auto"></div>
                    </div>
                 
                    <div className="col-md-4 ">
                        <div className="card shadow">
                        <img src={service1} className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                                <h6>Service 1</h6>
                                <div className="underline"></div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                </p>
                                <Link to="/services" className="btn btn-primary btn-lg">Read More</Link>

                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-4 ">
                        <div className="card shadow">
                        <img src={service1} className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                                <h6>Service 1</h6>
                                <div className="underline"></div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                </p>
                                <Link to="/services" className="btn btn-primary btn-lg">Read More</Link>

                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-4 ">
                        <div className="card shadow">
                        <img src={service1} className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                                <h6>Service 1</h6>
                                <div className="underline"></div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                </p>
                                <Link to="/services" className="btn btn-primary btn-lg">Read More</Link>

                            </div>
                        </div>
                        
                    </div>
                    
            </div>
        </div>
    </section>

    </div>

    
</div>
)

}


export default Home