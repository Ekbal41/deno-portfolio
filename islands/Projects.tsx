import { PageProps } from "$fresh/server.ts";
import ProjectCatd from "../components/ProjectCard.tsx";
interface Props {
  title: string;
  desc: string;
  items: any;
}

export default function Projects({ items, title, desc }: Props) {

  return (
    <>
      <div class="container pt-5">
        <h3 class="fw-bold">{title}</h3>
        <p class="fs-4 text-dark">
          {desc}
        </p>
        <div class="row row-cols-1 row-cols-lg-2 mt-5">
          {items.map((item: any) => {
            return <ProjectCatd item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
