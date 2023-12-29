import { About, Experience, Hero, Projects, Skills } from "./Sections";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  )
}