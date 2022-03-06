import React from "react";
import '../css/maincomponent.css';
import { Accordion } from "react-bootstrap";
import '../css/footer.css'

export default class MainComponents extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            submitted: false,
        }
    }

    onSubmit(submit) {
        window.alert('Thanks')
        submit.preventDefault();
        const userNewsletter = {
            email: this.state.email,
        }
        console.log(userNewsletter);

        //axios.post('http://localhost:5000/post', post)
          //  .then(res => console.log(res.data));
        
        this.setState({
            email: "",
            submitted: true,
        });
    }

    onButtonClickHandler = () => {
        window.alert('Thank you!')
    };

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

            <section class="p-2 text-white text-center">
                <h1>Welcome to Eggstagram!</h1>
                <p>A project inspired by Eggs, Instagram, and EGGERT</p>
            </section>
            
            <section id="faq" class="p-4 whiteSection">
                <div class="container">
                    <h2 class="text-center mb-4">
                        What is this website about?
                    </h2>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Motivation</Accordion.Header>
                            <Accordion.Body>
                            We wanted to create a method for UCLA students to review the food options on campus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Functionality</Accordion.Header>
                            <Accordion.Body>
                            Users will be able to create accounts to post text reviews with images and ratings 
                            about any type of UCLA food, and be able to look through others’ posts, sorting by 
                            dining halls, best reviews, cuisines, etc.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Purpose</Accordion.Header>
                            <Accordion.Body>
                                This website strives to provide key information about UCLA dining food so that fellow
                                Bruins can avoid going back to their dorms with an
                                empty stomach after wasting a meal swipe on terrible food.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>

            <section class="newsletter-custom newsletter-text p-3">
                <form class="container">
                    <div class="d-md-flex justify-content-between align-items-center">
                        <h3 class="mb-1.5 mb-md-0 newsletterFontSize">Sign up for our newsletter</h3>
                        <div class="input-group news-input" onSubmit={this.onSubmit}>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Enter Email"
                                required
                            />
                            <button onSubmit={this.onButtonClickHandler}
                                class="btn btn-dark btn-lg"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>

            <section class="p-3 text-white text-center">
                <h5> #1 BEST COLLEGE FOOD IN AMERICA!? </h5>
                <h6> Let us know what you think! </h6>
            </section>

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

            <footer class="site-footer text-center">
                <div class="container">
                    <div class="row mb-4">
                        <div class="col-md-4 mb-5">
                            <h2>Our GitHub Repo</h2>
                            <p>Project source code is available here</p>
                            <p><a href="https://github.com/celebilaw/eggstagram" target="_blank" rel="noreferrer noopener">Click to learn more</a></p>
                        </div>

                        <div class="col-md-4 mb-5 text-center">
                            <h2>Contact Us</h2>
                            <ul class="list-unstyled footer-link">
                                <li>
                                    <span>Proud to support fellow Bruins</span>
                                </li>
                                <li>
                                    <span class="me-3">Email:</span><span class="text-white">support@eggstagram.com</span>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 mb-5">
                            <h2>Quick Links</h2>
                            <ul class="list-unstyled footer-link">
                                <li><a href="http://menu.dining.ucla.edu/Menus" target="_blank" rel="noreferrer noopener">UCLA Menu</a></li>
                                <li><a href="http://menu.dining.ucla.edu/Hours" target="_blank" rel="noreferrer noopener">UCLA Hours</a></li>
                                <li><a href="https://portal.housing.ucla.edu/dining-services/overview" target="_blank" rel="noreferrer noopener">About</a></li>
                            </ul>
                        </div>

                        <div class="row">
                            <div class="col-12 text-center">
                                <p> <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/eggstagram-colin-judge.jpg" 
                                    alt="eggstagram logo" height="23"/> © 2022 Eggstagram, LLC.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
  }
}

