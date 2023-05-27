import { asset, Head } from "$fresh/runtime.ts";
import Navbar from "./Navbar.tsx";
export default function MainLayout(Props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.3/zephyr/bootstrap.min.css"
          integrity="sha512-dcTg+pv6j02FTyko5ua8nsnARs/l4u43vmnbeVgkFWB5wdLgfUq4CEotFWOlTE4XK7FfVriWj7BrpqET/a+SJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        >
        </link>
      </Head>
      <Navbar />
      {Props.children}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      >
      </script>
    </>
  );
}
