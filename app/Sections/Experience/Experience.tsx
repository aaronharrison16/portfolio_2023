import ExperienceItem from "./ExperienceItem";

export interface ExperienceItemProps {
  company: string,
  duration: string,
  jobTitle: string,
  skills?: string[],
  description: string
}

const items: Array<ExperienceItemProps> = [
  {
    company: 'ThetaCore',
    duration: 'March 2021 - Present',
    jobTitle: 'Software Engineer',
    skills: ['Blazor', 'dotnet', 'Vue', 'Python', 'Maui'],
    description: 'something here'
  },
  {
    company: 'LoadCall',
    duration: 'November 2019 - March 2021',
    jobTitle: 'React Native Developer',
    skills: ['React Native', 'Redux', 'Firebase'],
    description: 'something here'
  },
  {
    company: 'Boostability',
    duration: 'April 2019 - November 2019',
    jobTitle: 'Quality Assurance',
    description: 'something here'
  },
  {
    company: 'Utah Water Rights Exchange',
    duration: 'May 2018 - April 2019',
    jobTitle: 'FullStack Software Developer',
    skills: ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'JQuery', 'Bootstrap' ],
    description: 'something here'
  },
]

export default function Experience()
{
  return (
    <section id="experience" className="max-w-7xl px-8 sm:px-16 mx-auto flex justify-center flex-col	">      
        <h2>Experience</h2>
        <ol className="relative border-s" style={{borderColor: 'var(--accent)'}}>
          {items.map((item, i) => (
            <ExperienceItem
              jobTitle={item.jobTitle}
              company={item.company}
              duration={item.duration}
              skills={item.skills}
              description={item.description}
              key={i}
            />
          ))}  
      </ol>
    </section>
  )
}