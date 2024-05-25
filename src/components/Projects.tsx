export const Projects = () => {
  const projects = [
    {
      img: 'lumine.png',
      alignment: 'left',
      title: 'Team',
      description:
        '*In development* This was my biggest project yet. Working with a team of talented developers was a really rewarding experience for me and I cannot wait to continue co-working with people from different fields on such projects in the future. The description here is pretty long, so I can’t fit it all here. Check out my repository below for more info!',
      // to be replaced once the project is ready
      demo: '#',
      gitHub: '#',
    },

    {
      img: 'gadgets.png',
      alignment: 'right',
      title: 'Gadgets',
      description:
        'I always wanted to make something “real and useful” as a web developer, so once I had enough knowledge I started working on this project. The process taught me a lot, and helped me both with my JS and CSS skills. On the backend, it was fun to create the api and connect them to the front-end. Would love to work on similar projects in the future!',
      demo: 'https://yehorf21.github.io/react_phone-catalog/',
      gitHub: 'https://github.com/Yehorf21/react_phone-catalog',
    },

    {
      img: 'lumine.png',
      alignment: 'left',
      title: 'Lumine',
      description:
        'Present to you my first self-designed landing page. With this one, I wanted to add some interesting touch to it, so I started learning more about animations and the GSAP library for more convenience. Though short, this landing looks quite exquisite. For more in-depth description you can check out the Readme.MD file in my repository!',
      demo: 'https://yehorf21.github.io/Lumine/',
      gitHub: 'https://github.com/Yehorf21/Lumine',
    },

    {
      img: 'potr-pots.png',
      alignment: 'right',
      title: 'Potr-Pots',
      description:
        'This was my first “big” landing to work on. I decided to build it with React for more flexibility and my own comfort. Though some parts were tricky (especially with all the absolute positioning) it was a really creative design that I had a lot of fun building. For more details, You can check out the Readme.MD file in my repository!',
      demo: 'https://yehorf21.github.io/Potr-Pots-landing/',
      gitHub: 'https://github.com/Yehorf21/Potr-Pots-landing',
    },
  ];

  return (
    <section className="mt-36">
      {/* Title */}
      <h2 className="font-main text-[12vw] huge:text-[150px] text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-primary">
        My can's
      </h2>

      {/* Projects */}
      <div className="grid grid-cols-2 desktop:grid-cols-4 mx-[-30px] sm:ms-0 justify-items-center">
        {projects.map((project) => (
          <article
            className="flex flex-col gap-8 w-[95vw] items-center col-span-2 max-w-[500px] min-w-[420px] max-sm:max-w-[650px] lg:w-[50vw] desktop:w-[38vw] desktop:min-w-[unset]"
            key={project.title}
          >
            {/* Image - applied bg-img directly because had some issues with TailwindCSS  */}
            <a
              className={`blob w-3/4 lg:w-full h-[300px] sm:h-[430px] lg:h-[500px] mt-36 bg-cover bg-no-repeat bg-center hover:rounded-full`}
              style={{ backgroundImage: `url(${project.img})` }}
              href={project.demo}
            />

            {/* Title */}
            <h3 className="font-main  text-64 text-transparent bg-clip-text bg-gradient-to-b from-background-light from-15% to-[#F0DCAB] to-85%">
              {project.title}
            </h3>

            {/* Description */}
            <div className="flex flex-col w-full gap-12 py-10 px-7 bg-background-light rounded-[50px]">
              <p
                className={`font-secondary text-16 sm:text-20 max:sm:text-center text-align-${project.alignment} text-transparent bg-clip-text bg-gradient-to-b from-text to-primary to-65%`}
              >
                {project.description}
              </p>

              <div className="flex justify-between">
                <a
                  className="font-secondary text-32 text-transparent bg-clip-text bg-gradient-to-b from-primary from-30% to-accent"
                  href={project.demo}
                  target="_blank"
                >
                  Demo
                </a>

                <a
                  className="font-secondary text-32 text-transparent bg-clip-text bg-gradient-to-b from-primary from-30% to-accent"
                  href={project.gitHub}
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
