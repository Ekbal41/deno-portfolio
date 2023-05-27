import { Head } from "$fresh/runtime.ts";
import MainLayout from "../components/layout/MainLayout.tsx";
import Intro from "../islands/Intro.jsx";
import Projects from "../islands/Projects.tsx";

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
          <Projects />
        </div>
      </MainLayout>
    </>
  );
}
