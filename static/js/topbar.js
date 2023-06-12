const newTopBar = document.createElement("div");
newTopBar.id = "id-placeholder";
newTopBar.className = "container-fluid";
newTopBar.innerHTML = `
 <div class="container-fluid custom-white px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <small class="me-3 custom-dark-red-text"><i class="fa fa-map-marker-alt me-2"></i>38B Patrice
                        Lumumba, Airport residential, Accra-Ghana</small>
                    <small class="me-3 custom-dark-red-text"><i class="fa fa-phone-alt me-2"></i>+ (233)
                        0270631185</small>
                    <small class="custom-dark-red-text"><i
                            class="fa fa-envelope-open me-2"></i>thinkchristm@gmail.com</small>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm custom-dark-red-btn btn-sm-square rounded-circle me-2" style="color:#FFFFFF;"
                        href="https://twitter.com/thinkchristm?t=pAZhE6pCYf2IMyubgT7y1A&s=08"><i
                            class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm custom-dark-red-btn btn-sm-square rounded-circle me-2" style="color:#FFFFFF;"
                        href="https://web.facebook.com/thinkchristmovement/"><i
                            class="fab fa-facebook-f fw-normal"></i></a>
                    <!-- <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a> -->
                    <a class="btn btn-sm custom-dark-red-btn btn-sm-square rounded-circle me-2" style="color:#FFFFFF;"
                        href="https://www.instagram.com/thinkchristmove/"><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm custom-dark-red-btn btn-sm-square rounded-circle" style="color:#FFFFFF;"
                        href="#"><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
`
document.body.appendChild(newTopBar);