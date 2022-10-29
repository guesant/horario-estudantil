import Head from "next/head";
import { buildPageTitle } from "../../helpers/buildPageTitle";
import AppHeader from "../AppHeader";
import AppPage from "../AppPage/AppPage";

export default function Home() {
  return (
    <AppPage>
      <Head>
        <title>{buildPageTitle("Início")}</title>
      </Head>

      <AppHeader />

      <div>PageHome.tsx</div>
    </AppPage>
  );
}
