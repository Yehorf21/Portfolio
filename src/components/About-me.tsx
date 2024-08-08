import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutMe = () => {
  useGSAP(() => {
    new SplitType('#about-me', {
      types: 'words,chars',
      charClass: 'about-me-char',
    });

    gsap.from('.about-me-char', {
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      scrollTrigger: {
        trigger: '#text-end',
        start: 'top 250%',
        end: '100% 40%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="mt-[140px] sm:mt-[180px] lg:mt-[250px]">
      {/* About me text */}
      <p
        id="about-me"
        className="text-text text-20 lg:text-28 font-secondary leading-[50px] lg:leading-[70px]"
      >
        Dropped out of college, joined a coding boot-camp, started to grind.
        Yep, pretty much how I reached this point.
        <br /> <br />
        It all started in November 2023, when I decided for myself to join Mate
        academy(a Ukrainian coding boot-camp), and start focusing on a specific
        field (web-development). Having no real prior experience did make things
        harder, but where's the fun in easy learning?
        <br /> <br />
        40 hours of study per week, hundreds flashcards of info, and headache
        combined with excitement - it was fun. Though, thanks to my curiousity
        and genuine interest in the topic, I continued. “Learn fast, start slow”
        - is the “study motto” I adhere to. I tackled basic JS, HTML and CSS,
        and then delved into frameworks like React.
        <br /> <br />
        The boot-camp provided me with LOTS of practice and fun theory lessons
        to broaden my knowledge. Alongside learning, I worked on different
        projects with some of them featured in a section below. Once I
        familiarized myself with the fundamentals of the front-end, I learned a
        bit of Node.js, and its libraries (still have a way to go tho).
        <br /> <br />I sincerely wish to apply my knowledge in practice, and
        leave however significant mark on the industry and its consumers. Would
        love to hear from you!
      </p>

      <div id="text-end" />
    </section>
  );
};
