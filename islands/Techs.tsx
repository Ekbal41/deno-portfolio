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
          <TechCard title={"Dano Runtime"} img={"https://ik.imagekit.io/serenity/ByteofDev/Blog_Heading_Images/State_of_the_Web_Deno"}/>
          <TechCard title={"Fresh Framework"} img={"https://res.cloudinary.com/practicaldev/image/fetch/s--nNf3u14O--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6dre0h7reim1xq9eg87b.gif"}/>
        </div>
      </div>
    </>
  );
}
