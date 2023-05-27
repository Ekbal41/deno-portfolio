export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-white bg-white py-4 fixed-top">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="/">/Ekbal41</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav ms-auto d-flex justify-content-center align-items-center gap-4">
              {/* <li class="nav-item">
                <i class="bi bi-moon fs-5"></i>
              </li>
              <li class="nav-item">
                <i
                  class="bi bi-github"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                </i>
              </li> */}
              <a 
              href="/allprojects"
              class="nav-item">
                <i
                  style={{
                    fontSize: "1rem",
                  
                  }}
                  class="bi bi-columns text-dark"
                >
                </i>
              </a>
              <li class="nav-item">
                <i
                  style={{
                    fontSize: "1.1rem",
                  }}
                  class="bi bi-person-circle "
                >
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
