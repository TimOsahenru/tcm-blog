const newFooter = document.createElement("div");
newFooter.id = "id-div";
newFooter.className = "container-fluid";
newFooter.innerHTML = `
<div id="id-div" class="container-fluid custom-white custom-dark-red-text mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <!-- <div class="container-fluid custom-dark-red-btn text-danger mt-5 wow fadeInUp" data-wow-delay="0.1s"> -->
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-4 bg-dark col-md-6 footer-about">
                    <div class="d-flex flex-column align-items-center justify-content-center text-center h-100  p-4">
                        <a href="index.html" class="navbar-brand">
                            <h1 class="m-0 text-light"><img src="img/logo1.png">TCM</h1>
                        </a>
                        <p class="mt-3 text-light mb-4">Think Christ Movement started in the year 2016.We have been empowering people on personal bases but in the year 2019 we decided to take it to another level and did our first outdoor concert in September 2020</p>
                        <form action="">
                            <div class="input-group">
                                <!-- <input type="text" class="form-control border-danger p-3" placeholder="Your Email"> -->
                                <input type="text" class="form-control p-3" placeholder="Your Email">
                                <button class="btn custom-dark-red-btn" style="color:#FFFFFF;">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-8 col-md-6">
                    <div class="row gx-5">
                        <div class="col-lg-4 col-md-12 pt-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="custom-dark-red-text mb-0">Get In Touch</h3>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-geo-alt custom-dark-red-text me-2"></i>
                                <p class="mb-0">Nos. 38B Patrice Lumumba Street, Airport residential area Accra-Ghana</p>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-envelope-open custom-dark-red-text me-2"></i>
                                <p class="mb-0">thinkchristm@gmail.com</p>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-telephone custom-dark-red-text me-2"></i>
                                <p class="mb-0">+ (233) 0270631185</p>
                            </div>
                            <div class="d-flex mt-4">
                                <a class="btn custom-dark-red-btn btn-square me-2" style="color:#FFFFFF;" href="https://twitter.com/thinkchristm?t=pAZhE6pCYf2IMyubgT7y1A&s=08"><i class="fab fa-twitter fw-normal"></i></a>
                                <a class="btn custom-dark-red-btn btn-square me-2" style="color:#FFFFFF;" href="https://web.facebook.com/thinkchristmovement/"><i class="fab fa-facebook-f fw-normal"></i></a>
                                <!-- <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a> -->
                                <a class="btn custom-dark-red-btn btn-square me-2" style="color:#FFFFFF;" href="https://www.instagram.com/thinkchristmove/"><i class="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="custom-dark-red-text mb-0">Quick Links</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start">
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Home</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right tcustom-dark-red-text me-2"></i>About Us</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Mentorship & empowerment class</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Conference-seminar</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Magazines</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Gallery</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="custom-dark-red-text mb-0">Popular Links</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start">
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Home</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>About Us</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Gallery</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Magazines</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Programs</a>
                                <a class="custom-dark-red-text mb-2" href="#"><i class="bi bi-arrow-right custom-dark-red-text me-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
document.body.appendChild(newFooter);