import { Head } from "$fresh/runtime.ts";
import MainLayout from "../components/layout/MainLayout.tsx";
import Intro from "../islands/Intro.jsx";
import Projects from "../islands/Projects.tsx";
import Techs from "../islands/Techs.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const url = "https://asifekbal.vercel.app/api/projects?id=4356786";
    const resp = await fetch(url);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const projects = await resp.json();
    return ctx.render(projects);
  },
};

export default function AllProjects({ data }: PageProps) {
  const reverseData = data.reverse();

  return (
    <>
      <MainLayout>
        <Head>
          <title>Asif Ekbal</title>
        </Head>

        <div
          class="bg-light "
          style={{
            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
            marginTop: "5.5rem",

          }}
        >
          <Projects
            title={"Recent Works"}
            desc={"Some of my recent projects are listed here."}
            items={reverseData}
          />
        </div>

        <div
          class="bg-light mt-5 "
          style={{
            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
          }}
        >
          <Techs
            title={"Techs"}
            desc={"Some of the techs I used to build this website."}
            item={""}
          />
        </div>
      </MainLayout>
    </>
  );
}
