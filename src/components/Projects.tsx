export const Projects = () => {
  const projects = ['sombra.png','justSchool.png'];

  return (
    <section className="mt-36">
      {/* Title */}
      <h2 className="mb-36 font-main text-[12vw] huge:text-[150px] text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-primary">
        My can's
      </h2>

      {/* Projects */}
      <div className="flex flex-wrap justify-between">
        {projects.map((project) => (
          <article
            className="flex flex-col gap-8 w-[95vw] items-center col-span-2 max-w-[500px] min-w-[420px] max-sm:max-w-[650px] lg:w-[50vw] desktop:w-[38vw] desktop:min-w-[unset]"
            key={project}
          >

            {/* Image - applied bg-img directly because had some issues with TailwindCSS  */}
            <button
              className={`blob w-3/4 lg:w-full h-[300px] sm:h-[430px] lg:h-[500px] bg-cover bg-no-repeat bg-center hover:rounded-full cursor-default`}
              style={{ backgroundImage: `url(${project})` }}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
