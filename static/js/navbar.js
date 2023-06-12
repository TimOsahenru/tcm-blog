const newDiv = document.createElement("nav");
newDiv.id = "nav-placeholder";
newDiv.className = "navbar";
newDiv.innerHTML = `
<nav id="nav-placeholder" class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
<a href="index.html" class="navbar-brand p-0">
    <h1 class="m-0"><img src="img/logo1.png"></h1>
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span class="fa fa-bars"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
    <div class="navbar-nav ms-auto py-0">
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <a href="about.html" class="nav-item nav-link">About</a>
        <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Programs</a>
            <div class="dropdown-menu m-0">
                <a href="mentorship.html" class="dropdown-item">Mentorship & empowerment class</a>
                <a href="conference.html" class="dropdown-item">Conference-seminar</a>
                <a href="#" class="dropdown-item">Magazines</a>
                <a href="#" class="dropdown-item">Motivation</a>
            </div>
        </div>
        <div class="nav-item dropdown">
            <!-- <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div class="dropdown-menu m-0">
                <a href="price.html" class="dropdown-item">Pricing Plan</a>
                <a href="feature.html" class="dropdown-item">Our features</a>
                <a href="team.html" class="dropdown-item">Team Members</a>
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <a href="quote.html" class="dropdown-item">Free Quote</a>
            </div> -->
        </div>
        <a href="get-involved.html" class="nav-item nav-link">Get involved</a>
        <a href="gallery.html" class="nav-item nav-link">Gallery</a>
        <a href="#" class="nav-item nav-link">TCM Foundation</a>
        <a href="contact.html" class="nav-item nav-link">Contact</a>
    </div>
    <!-- <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> -->
    <a href="sponsors.html" class="btn btn-outline-light custom-dark-red-btn py-2 px-4 ms-3">Sponsors & Partners</a>
</div>
</nav>
`
document.body.appendChild(newDiv);

