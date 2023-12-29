export default function Experience()
{
  return (
    <section id="experience" className="flex flex-1 items-center justify-start mx-auto max-w-7xl px-8 sm:px-16">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2021 - Present</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">ThetaCore</p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2019 - March 2021</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">React Native Developer</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">LoadCall</p>
        </li>
        <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2019 - November 2019</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quality Assurance</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Boostability</p>
        </li>
      </ol>
    </section>
  )
}