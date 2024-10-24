import Header from "./_components/organisms/Header";
import About from "./_components/templates/About";
import Concept from "./_components/templates/Concept";
import Hero from "./_components/templates/Hero";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Concept></Concept>
    </>
  );
}
