import ProjectCatd from "../components/ProjectCard.tsx";

export default function Projects(props) {
  return (
    <>
      <div class="container pt-5">
        <h3 class="fw-bold">{props.title}</h3>
        <p class="fs-4 text-dark">
          {props.desc}
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
