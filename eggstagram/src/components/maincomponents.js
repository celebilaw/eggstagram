import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default class MainComponents extends React.Component {
  render() {
    return (
        <div>
            {/*random space for now to add more stuff*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p class="text-center">What else should we add here?</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <section class="navbar-custom navbar-text p-2.5">
                <div class="container">
                    <div class="d-md-flex justify-content-between align-items-center">
                        <h3 class="mb-1.5 mb-md-0 newsletterFontSize">Sign Up For Our Newsletter</h3>
                        <div class="input-group news-input">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Email"
                            />
                            <button
                                class="btn btn-dark btn-lg"
                                type="button"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <p class="text-center">Maybe an accordion list that shows FAQ or what this site is about here?</p>
            <section id="developers" class="p-5 navbar-custom">
                <div class="container">
                    <h2 class="text-center text-white">Meet the Developers</h2>
                    <p class="lead text-center text-white mb-5">
                        We Are Computer Science Students @ UCLA
                    </p>
                    <div class="row">
                        <div class="col-md-15 col-sm-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img 
                                        src="https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/celebi.webp" 
                                        class="rounded-circle mb-3"
                                        alt="celebi pic" height="160"
                                    />
                                    <h3 class="card-title mb-3">Celebi Law</h3>
                                    <p class="card-text"> Hello, this is Celebi lol.</p>
                                    {/*LOTS of Warnings here because we need to provide valid href links*/}
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-15 col-sm-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img 
                                        src=""
                                        class="rounded-circle mb-3"
                                        alt="joel pic"
                                    />
                                    <h3 class="card-title mb-3">Joel Hernandez</h3>
                                    <p class="card-text"> Hello, this is Joel.</p>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-15 col-sm-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img 
                                        src="" 
                                        class="rounded-circle mb-3"
                                        alt="marisa pic" height="160"
                                    />
                                    <h3 class="card-title mb-3">Marisa Duran</h3>
                                    <p class="card-text"> Hello, this is Marisa.</p>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-15 col-sm-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img 
                                        src="" 
                                        class="rounded-circle mb-3"
                                        alt="noah pic" height="160"
                                    />
                                    <h3 class="card-title mb-3">Noah Gardner</h3>
                                    <p class="card-text"> Hello, this is Noah.</p>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-15 col-sm-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img 
                                        src="" 
                                        class="rounded-circle mb-3"
                                        alt="matthew pic" height="160"
                                    />
                                    <h3 class="card-title mb-3">Matthew Workman</h3>
                                    <p class="card-text"> Hello, this is Matthew.</p>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
            </section>
            <section class="whiteSection">
                <h3 class="whiteSectionText p-5 text-center">Copyright/Info Stuff</h3>
            </section>
        </div>
    );
  }
}

