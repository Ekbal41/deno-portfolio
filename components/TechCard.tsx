export default function TechCard() {
  return (
    <>
      <div class=" rounded-3 mb-5">
        <div
          class="px-4 pt-4 pb-2 rounded-3 shadow-lg bg-white  "
          style={{
            border: "1px solid #e0e0e0",
          }}
        >
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
              <i class="bi bi-box-arrow-up-right fw-bold"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
