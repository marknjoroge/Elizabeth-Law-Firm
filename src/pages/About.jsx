import Nav from '../components/Nav';
import Footer from '../components/Footer';

import ElizabethWangari from '../assets/staff/ElizabethWangari.png';

import './About.css';
import { TwoAlt, Five, OverThenUnder, Two } from '../components/TitleStyles';

export default function About() {
    return (
        <>
            <Nav />

            <section id='overview'>
                <div className='row'>
                    <div className='col-md-3 align-self-center about-title '>
                        {/* <p>About Us</p> */}
                        <Five heading='About Us' tagline='Overview' />
                    </div>
                    <div className='col-md-9'>
                        <article>
                            Elizabeth Wangari & Co is a medium sized
                            lawfirm that specializes in, amongst others,
                            family matters, land matters, debt
                            collection and commercial transactions,
                            criminal litigation and conveyance. We
                            have by God's grace over time, created a
                            mark of efficiency, reliability,
                            dependability, and excellence in delivery
                            of our professional services. We are a
                            firm that upholds integrity and
                            professionalism in the discharge of our
                            duties.
                        </article>
                    </div>
                </div>
            </section>

            <section id='team'>
                <div className="team-title">
                    <TwoAlt 
                        alt="Meet The"
                        title="Team" />
                    {/* <p>Meet The <span><br />Team</span></p> */}
                </div>
                <div className="row justify-content-center">
                    <MemberCard
                        image={ElizabethWangari}
                        name="Elizabeth Wangari"
                        position="Managing Partner" />
                    <MemberCard
                        image={ElizabethWangari}
                        name="Elizabeth Wangari"
                        position="Managing Partner" />
                    <MemberCard
                        image={ElizabethWangari}
                        name="Elizabeth Wangari"
                        position="Managing Partner" />
                    <MemberCard
                        image={ElizabethWangari}
                        name="Elizabeth Wangari"
                        position="Managing Partner · CEO " />
                </div>
            </section>

            <section className='performance'>

            </section>

            <Footer />
        </>
    );
}

function MemberCard(props) {
    return (
        <div className="col-md-3 team-member">
            <div className="">
                <img className='member-image' src={props.image} />
                <div className='member-text'>
                    <span className="member-name">{props.name}</span>
                    <br />
                    <span className="member-position">{props.position}</span>
                </div>
            </div>
        </div>
    )
}