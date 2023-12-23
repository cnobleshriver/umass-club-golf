import { DoubleHeader } from "./components/DoubleHeader/DoubleHeader";
import { FooterSocial } from "./components/FooterSocial/FooterSocial"
import { Hero } from "./components/Hero/Hero";

export default function HomePage() {
  return <>
    <DoubleHeader />
    <Hero />
    <FooterSocial />
  </>;
}
