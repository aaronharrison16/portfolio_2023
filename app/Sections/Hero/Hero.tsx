import { Button } from "../../Components"

const Hero = () => {
  return (
    <section id="hero" className="flex flex-1 items-center justify-center px-4">
      
      <div className="text-center">
        <h1>Hi, I&apos;m Aaron.</h1>
        <h3 className="mt-6">I&apos;m a full stack developer.</h3>
        <div className="mt-10 flex items-center justify-center">
          <Button>
            About Me
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero