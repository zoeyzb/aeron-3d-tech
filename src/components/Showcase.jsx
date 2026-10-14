import { useGSAP } from '@gsap/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: '+=900',
          scrub: true,
          pin: true,
        }
      });

      timeline
        .to('.mask img', {
          scale: 1.1,
        })
        .to('.content', {
          opacity: 1,
          y: 0,
          ease: 'power1.in'
        });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Made to create</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  an advanced laptop chipset built for creative work
                </span>
                . Built for focused creative work.
              </p>
              <p>
                Designed for demanding creative workflows, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision, color
                accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics to
                your fingertips.
              </p>
              <p className="text-primary">Explore the Aeron creative experience</p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>Fluid</h3>
              <p>creative rendering and immersive graphics</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>Responsive</h3>
              <p>multitasking in an interactive concept</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
