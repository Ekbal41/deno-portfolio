export default function ProjectCatd() {
  return (
    <>
      <div class=" rounded-3 mb-5">
        <div class="px-4 pt-4 pb-2 rounded-3 shadow-lg bg-white  ">
          <img
            src="https://i.postimg.cc/wjr9QgfD/note.jpg"
            alt="project img"
            style={{
              width: "100%",
            }}
            class="rounded-3 border shadow-lg "
          />
          <div class="d-flex justify-content-between align-items-center mt-3 mb-2">
            <h3 class="fw-bold">Project Title</h3>
            <div
              style={{
                cursor: "pointer",
              }}
            >
              View Live <i class="bi bi-box-arrow-up-right"></i>
            </div>
          </div>
          <div>
            <p class="text-dark fs-5">
              A Job Board website for small startup. Cool Design and so much
              more to come. laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
