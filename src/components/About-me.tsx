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
        Hey there, I’m Yehor - a web dev with a bunch of stuff I'm into.
        Creating, writing, reading - you name it. I've been dabbling in web development
        for 2 years now - worked for myself, on projects, at a company. Got enough stories to share
        <br/> <br />

        As I was growing up, I was always uncertain about which path I want to follow.
        I wanted to create, not destroy. I wanted to be useful, not a burden.
        And now I make the tools that make my resolutions real.
        
        <br /> <br />

        Development became an outlet for my thoughts and ideas. Overthinking is
        a nasty thing, but here it’s kind of a lifesaver, honestly. 
        
        <br /> <br />
        I’ve worked with a team, by myself, and watched others. It’s always crazy just how
        much more you can learn even when you feel “all-knowing”. I did 1
        semester of uni, 9 months of a coding boot-camp, but self-study was always
        my main way to go. In the process of building discipline, I 
        developed qualities to perform better - and I'm growing ever since. 
        
        <br /><br />
        "Sky is the limit", they say. But humans learned how to handle that one too.
        So the limit is You - traverse it.
      </p>

      <div id="text-end" />
    </section>
  );
};
