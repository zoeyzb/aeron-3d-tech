import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>There’s never been a better time to upgrade.</h2>
            <h3>Introducing the AERON Pro concept.</h3>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Designed for fluid creative workflows.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>A stunning <br />
                            Expansive, vivid <br/>
                            display.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="aeron-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Built for <br />
                            <span>Aeron creative workflow.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>Up to
                            <span className="green-gradient">{' '}all-day freedom{' '}</span>
                            battery life.
                            <span className="text-dark-100">{' '}A concept showcase; specifications are illustrative.
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights