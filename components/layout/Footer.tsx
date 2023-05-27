export default function Footer() {
  return (
    <>
      <div class="container p-4"
      >
        <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row">
          <div>
            <p class=" text-dark tw-light">All Right Reserved 2023</p>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-secondary d-flex justify-content-between align-items-center mb-3 mb-lg-0 "
            >
              <img
                style={{
                  width: "25px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg"
                class="me-1"
              />
              Made with <span class="fw-bold ms-1">Dano</span>
            </button>
          </div>
          <div class="d-flex justify-content-between align-items-center gap-4">
            <a href="#">
              <i class="bi bi-envelope-fill text-dark fs-5"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin text-dark"></i>
            </a>
            <a href="#">
              <i class="bi bi-github text-dark fs-5"></i>
            </a>
            <a href="#">
              <i class="bi bi-facebook text-dark fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
