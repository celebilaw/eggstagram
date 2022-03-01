import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Accordion } from "react-bootstrap";

export default class MainComponents extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
        }
    }

    onSubmit(submit) {
        submit.preventDefault();

        const userNewsletter = {
            email: this.state.email,
        }

        console.log(userNewsletter);

        //axios.post('http://localhost:5000/post', post)
          //  .then(res => console.log(res.data));
        
        this.setState({
            email: ""
        });
    }

  render() {
    return (
        <div>
            {/*random space, for now, to add more stuff*/}
            <br/>
            <br/>
            <br/>
            <p class="text-center">What else should we add here?</p>
            <br/>
            <br/>
            <br/>
            
            <section id="faq" class="p-4 whiteSection">
                <div class="container">
                    <h2 class="text-center mb-4">
                        What is this website about?
                    </h2>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Item #1</Accordion.Header>
                            <Accordion.Body>
                                Hello
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Item #2</Accordion.Header>
                            <Accordion.Body>
                                There!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Item #3</Accordion.Header>
                            <Accordion.Body>
                                - General Kenobi
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>

            <br/>
            <p class="text-center">Other stuff?</p>

            <section class="newsletter-custom newsletter-text p-3">
                <form class="container">
                    <div class="d-md-flex justify-content-between align-items-center">
                        <h3 class="mb-1.5 mb-md-0 newsletterFontSize">Sign Up For Our Newsletter</h3>
                        <div class="input-group news-input" onSubmit={this.onSubmit}>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Enter Email"
                                required
                            />
                            <button
                                class="btn btn-dark btn-lg"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>

            <br/>
            <p class="text-center">Other stuff?</p>

            <section id="developers" class="p-5 newsletter-custom">
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
            <section class="whiteSection p-5">
                <h3 class="whiteSectionText text-center">Copyright/Info Stuff</h3>
            </section>
        </div>
    );
  }
}

