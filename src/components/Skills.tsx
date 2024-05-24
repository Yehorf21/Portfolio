import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isSmallTablet = useMediaQuery({ minWidth: 640 });
  const isLargeTablet = useMediaQuery({ minWidth: 820 });
  const isSmallDesktop = useMediaQuery({ minWidth: 1020 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1440 });

  // returns an array index for icon positions depending on the screen size
  const getResponsive = () => {
    if (isLargeDesktop) return 0;
    else if (isSmallDesktop) return 1;
    else if (isLargeTablet) return 2;
    else if (isSmallTablet) return 3;
    else return 4;
  };

  // values for the end value of the scroller to ensure smooth animations on all the devices
  const getScrollEndResponsive = () => {
    if (isLargeDesktop) return '-=100';
    else if (isSmallTablet) return '+=50';
    else if (isMobile) return '+=300';
  };

  const skillsIcons = [
    'js',
    'html',
    'css',
    'sass',
    'git',
    'github',
    'react',
    'react-router',
    'redux',
    'typescript',
    'postgresql',
    'node-js',
    'figma',
    'jest',
    'tailwind',
  ];

  // Added hardcoded positions for better experience on different devices - top and bottom, respectively
  const iconPositions = [
    // desktop
    [50, -90, 65, -50, -10, 35, -60, 50, -35, -10, 55, -100, 65, -70, -35],

    // small desktop
    [50, -30, 65, -10, 0, 50, -35, 70, -35, 35, 35, -30, 65, -30, 35],

    // large tablet
    [50, 10, 65, 30, 10, 90, -15, 90, -5, 55, 55, 10, 65, 30, 5],

    // small tablet
    [50, 50, 55, 70, 20, 110, -5, 125, -5, 105, 35, 60, 55, 50, 25],

    // mobile
    [50, 100, 55, 110, 30, 140, 15, 155, 20, 140, 55, 110, 70, 125, 50],
  ];

  // starting from desktop
  const iconLeftPositionsResponsive = [300, 200, 170, 125, 85];

  const getIconTop = (index: number) => {
    const ind = getResponsive();
    if ((index + 1) % 2 !== 0) {
      return iconPositions[ind][index];
    }

    return 'unset';
  };

  const getIconBottom = (index: number) => {
    const ind = getResponsive();
    if ((index + 1) % 2 === 0) {
      return iconPositions[ind][index];
    }

    return 'unset';
  };

  const getIconLeft = (index: number) =>
    index === 0 ? 50 : index * iconLeftPositionsResponsive[getResponsive()];

  useGSAP(() => {
    const slider = document.getElementById('skills');
    const roadmap = document.getElementById('roadmap');
    const icons = document.querySelectorAll('#icon');

    gsap.to(slider, {
      xPercent: -90,
      ease: 'none',
      scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 1,
        start: `top ${getScrollEndResponsive()}`,
        end: () => '+=' + roadmap?.offsetWidth,
      },
    });

    // used intersection observer as had some issues with gsap while animating skill icons on horizontal scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    icons.forEach((icon) => {
      observer.observe(icon);
    });
  }, []);

  return (
    <section
      id="skills"
      className="mt-36 h-[300px] sm:h-[unset] flex items-center gap-32 lg:gap-96 w-[420vw] overflow-x-clip"
    >
      {/* Title */}
      <h2 className="text-[17vw] huge:text-[200px] w-[screen] max-w-[1440px] lg:text-[15vw] font-main text-center text-transparent m-0 bg-gradient-to-r from-primary to-accent bg-clip-text">
        My Like's
        <br />
        &
        <br />
        Do's
      </h2>

      <div>
        {/* Roadmap */}
        <div className="relative">
          <div
            id="roadmap"
            className="h-80 w-[300vw] max-w-[4320px] bg-roadmap bg-no-repeat bg-contain relative top-20"
          />

          {/* Icon */}
          {skillsIcons.map((icon, i) => (
            <div
              id="icon"
              key={i}
              className="absolute bg-no-repeat bg-contain h-8 w-8 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-20 lg:w-20 desktop:h-[100px] desktop:w-[100px] opacity-0"
              style={{
                backgroundImage: `url('/skill-icons/${icon}.svg')`,
                top: getIconTop(i),
                bottom: getIconBottom(i),
                left: getIconLeft(i),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
