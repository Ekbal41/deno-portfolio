import ProjectCatd from "../components/ProjectCard.tsx";

export default function Projects() {
  return (
    <>
      <div class="container pt-5">
        <h3 class="fw-bold">Recent Works</h3>
        <p class="fs-4 text-dark">
          Some of my recent projects are listed here.
        </p>
        <div class="row row-cols-1 row-cols-lg-2 mt-5">
          <ProjectCatd />
          <ProjectCatd />
          <ProjectCatd />
          <ProjectCatd />
        </div>
      </div>
    </>
  );
}
