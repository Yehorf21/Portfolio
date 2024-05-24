export const Header = () => {
  return (
    <section className="overflow-x-clip">
      {/* Background image */}
      <div
        id="bg"
        className="w-screen max-w-[1440px] h-52 lg:h-96 bg-no-repeat bg-cover bg-bottom absolute top-0 bg-header-bg z-[-2]"
      />

      {/* Profile Photo - used responsive top values for better look on bigger devices */}
      <div
        id="photo"
        className="w-[300px] h-[500px] sm:w-[50vw] sm:h-[80vw] huge:w-[700px] huge:h-[700px] bg-no-repeat bg-contain z-[-1] bg-my-photo absolute top-[10%] sm:top-[5%] md:top-[4%] lg:top-[15%] huge:top-[15%] right-0"
      />

      <div className="flex flex-col items-center mt-60 lg:mt-[440px]">
        {/* First name */}
        <h1
          id="first-name"
          className="font-main text-[30vw] huge:text-[350px] leading-none text-transparent text-stroke--light"
        >
          Yehor
        </h1>

        {/* Last name */}
        <h1 className="font-main text-[7vw] huge:text-[100px] text-primary text-stroke--dark">
          Feshchenko
        </h1>
      </div>
    </section>
  );
};
