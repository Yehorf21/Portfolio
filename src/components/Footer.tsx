export const Footer = () => {
  const footerIconLinks = [
    {
      img: 'github.svg',
      link: 'https://github.com/Yehorf21',
    },

    {
      img: 'linkedIn.svg',
      link: 'https://www.linkedin.com/in/yehor-feshchenko-09a77a310',
    },

    {
      img: 'gmail.svg',
      link: 'mailto:feshchenkoye@gmail.com',
    },
  ];

  return (
    <section className="mt-32 sm:mt-36 lg:mt-60 flex justify-between lg:justify-center lg:gap-80 w-full">
      {footerIconLinks.map((icon) => (
        <a
          href={icon.link}
          target="_blank"
          className="h-12 w-12 sm:h-20 sm:w-20 lg:w-24 lg:h-24 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${icon.img})` }}
          key={icon.img}
        />
      ))}
    </section>
  );
};
