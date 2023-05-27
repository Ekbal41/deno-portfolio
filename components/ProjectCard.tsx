import { PageProps } from "$fresh/server.ts";
interface Props {
  title: string;
  desc: string;
  link: string;
  image: string;
}
export default function ProjectCatd(
  {
    item,
  }: any,
) {
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
            src={item.image}
            alt="project img"
            style={{
              width: "100%",
            }}
            class="rounded-3 border shadow-lg "
          />
          <div class="d-flex justify-content-between align-items-center mt-3 mb-2">
            <h3 class="fw-bold">{item.title}</h3>
            <a
              style={{
                cursor: "pointer",
              }}
              href={item.link}
              class="
              text-decoration-none
              text-primary
              "
            >
              View Live <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
          <div>
            <p class="text-dark fs-5 ">
              {
                //trancate text to 100 chars
                item.desc.length > 130
                  ? item.desc.substring(0, 100) + "..."
                  : item.desc
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
