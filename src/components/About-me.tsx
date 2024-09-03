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
        Hey there, I’m Yehor - a web dev who also writes? I’m the kind of person
        who wants to gain experience in different fields - to be versatile, so
        to speak. I love what I’m doing. I’ve been at it for around a year now
        and web development is sure something. 
        <br/> <br />

        I always considered myself to be a sociable and creative person, so, going into programming seemed
        completely against who I am. “Just to spark things a bit”, I thought.
        Little did I know, it’d suit me better than a suit I wore on prom.

        <br /> <br />

        Development became an outlet for my thoughts and ideas. Overthinking is
        a nasty thing, but here, it’s kind of a lifesaver, honestly. 
        
        <br /> <br />
        I’ve worked with a team, by myself, and watched others. It’s always crazy just how
        much more you can learn even when you feel “all-knowing”. I did 1
        semester of uni, 9 months of a coding boot-camp, and some freelance work
        as a cherry on top. 
        
        <br /> <br />
        As an employee, I think I’d fit into a team of
        people who think…out-of-the-box. They consider the flaws, come up with
        ridiculous ideas, and still create workpieces to enjoy. I think I’d feel
        at home there
      </p>

      <div id="text-end" />
    </section>
  );
};
