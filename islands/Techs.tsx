import TechCard from "../components/TechCard.tsx";

export default function Techs(props) {
  return (
    <>
      <div class="container pt-5">
        <h3 class="fw-bold">{props.title}</h3>
        <p class="fs-4 text-dark">
          {props.desc}
        </p>
        <div class="row row-cols-1 row-cols-lg-3 mt-5">
          <TechCard />
          <TechCard />
        </div>
      </div>
    </>
  );
}
