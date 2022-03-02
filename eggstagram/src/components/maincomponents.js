import React from "react";
import '../css/maincomponent.css';
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
            <div id="carouselPics" class="carousel slide carousel-fade" data-bs-interval="3500" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselPics" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselPics" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselPics" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row g-0">
                            <div class="col-3">
                                <img src={require('./images/epic.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/pancakes.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/noodles.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/sandwich.png')} class="d-block w-100" alt="missing image" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="row g-0">
                            <div class="col-3">
                                <img src={require('./images/pic1.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/pic2.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/pic3.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/pic4.png')} class="d-block w-100" alt="missing image" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="row g-0">
                            <div class="col-3">
                                <img src={require('./images/pic5.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/pic6.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/pic7.png')} class="d-block w-100" alt="missing image" />
                            </div>
                            <div class="col-3">
                                <img src={require('./images/bread.png')} class="d-block w-100" alt="missing image" />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselPics" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselPics" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
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

