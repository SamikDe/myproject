import React from "react";


function Contact()
{

    return(

<div>

<section className="py-4 bg-info">
        <div className="container">
            <div className="row">
                <div className="col-md-4 my-auto">
                  <h4>Contact</h4>
                 </div>
                 <div className="col-md-8 my-auto">
                    <h6 className="float-end">
                       Home/Contact
                    </h6>
                </div>
                
            </div>
        </div>
    </section>

<section className="section">

<div className="container">
    <div className="card shadow">
        <div className="card-body">
            <div className="row">
                <div className="col-md-6 ">
                    <h6>Contact Form</h6>
                    <hr/>
                    <div className="form-group">
                        <label className="mb-1">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter full name"/>

                    </div>
                    <div className="form-group">
                        <label className="mb-1">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Enter Phone Number"/>

                    </div>
                    <div className="form-group">
                        <label className="mb-1">Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email Address"/>

                    </div>
                    <div className="form-group">
                        <label className="mb-1">Your Message</label>
                     
                        <textarea rows="3" className="form-control" placeholder="Your Message about our services" />
                    </div>

                    <div className="form-group py-3">
                                      
                        <button type="button"  className="btn btn-warning shadow w-100">Submit</button>
                    </div>


                </div>


                <div className="col-md-4 border-start">
                        <h6 className="main-heading ">Contact Information</h6>
                        <hr/>
                        <div><p className="text-black mb-1">64 Bangalore Karnataka India </p></div>
                        <div><p className="text-black mb-1">+91 8523###### </p></div>
                        <div><p className="text-black mb-1">###@gmail.com </p></div>


                 </div>



                <div className="col-md-6">
                    
                </div>

            </div>
        </div>

    </div>
</div>
</section>



</div>


    )

}

export default Contact