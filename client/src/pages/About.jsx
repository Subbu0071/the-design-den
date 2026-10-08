import usePageTitle from "../utils/usePageTitle";

function About() {
    usePageTitle("DESIGN DEN — About");
  return (
    <main className="min-h-screen px-5 py-20 sm:px-8 lg:px-10">
      <h1 className="text-5xl text-[var(--color-ink)]">About DESIGN DEN</h1>
    </main>
  );
}

export default About;
