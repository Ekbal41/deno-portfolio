import { Head } from "$fresh/runtime.ts";
import MainLayout from "../components/layout/MainLayout.tsx";
import Intro from "../islands/Intro.jsx";
import Projects from "../islands/Projects.tsx";
import Techs from "../islands/Techs.tsx";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Head>
          <title>Asif Ekbal</title>
        </Head>
        <div
          class="container pt-3 pb-5"
          style={{
            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
          }}
        >
          <Intro />
        </div>
        <div
          class="bg-light mt-5 "
          style={{
            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
          }}
        >
          <Projects title={"Recent Works"} desc={"Some of my recent projects are listed here."} item={""} />
        </div>
        <div
          class=" mt-5 "
          style={{
            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
          }}
        >
          <Projects title={"All Works"} desc={"My all projects can be found in 'Project' page."} item={""} />
        </div>
        <div
          class="bg-light mt-5 "
          style={{
            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
          }}
        >
          <Techs title={"Techs"} desc={"Some of the techs I used to build this website."} item={""} />
        </div>
      </MainLayout>
    </>
  );
}
