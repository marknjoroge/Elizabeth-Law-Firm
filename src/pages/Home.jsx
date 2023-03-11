import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

import scale from '../assets/scale.png'
import bank from '../assets/bank.png'
import constitution from '../assets/constitution.png'
import corporation from '../assets/corporation.png'
import intellectualProperty from '../assets/intellectual-property.png'
import labour from '../assets/labour.png'
import litigation from '../assets/litigation.png'
import realEstate from '../assets/real-estate.png'
import taxes from '../assets/taxes.png'

import './Home.css'

function Home() {

    return (
        <div className="home">
            <Nav />

            <section className="hero">
                <div className="row ">
                    <div className="col align-self-center">
                        <div className="hero-content">
                            <p>Elizabeth Wangari & Co Advocates</p>
                            <h1>Experience · integrity · results</h1>
                        </div>

                        <div className='hero-buttons'>
                            <button className="btn btn-1">Consult</button>
                            <button className="btn btn-2">About Us</button>
                        </div>
                    </div>
                    <div className="col">
                        <img src={scale} alt="law" />
                    </div>
                </div>
            </section>

            <section id="divider-1">

            </section>

            <section className="fields">
                <div className='field-header'>
                    <h3>Ask us about</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col text-center single-field">
                        <img src={bank} />
                        <p>Banking & Finance</p>
                    </div>
                    <div className="col text-center single-field">
                        <img src={constitution} />
                        <p>Constitutional Law</p>
                    </div>
                    <div className="col text-center single-field">
                        <img src={corporation} />
                        <p>Corporate Law</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col text-center single-field">
                        <img src={intellectualProperty} />
                        <p>Intellectual Property</p>
                    </div>
                    <div className="col text-center single-field">
                        <img src={labour} />
                        <p>Labour Law</p>
                    </div>
                    <div className="col text-center single-field">
                        <img src={litigation} />
                        <p>Litigation</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col text-center single-field">
                        <img src={realEstate} />
                        <p>Real Estate</p>
                    </div>
                    <div className="col text-center single-field">
                        <img src={taxes} />
                        <p>Taxes</p>
                    </div>
                </div>
            </section>

            <CallToAction />

            <section className="about">
                <div className="text-center about-stat">
                    <div className='stat-title'>
                        20
                    </div>
                    <div className='stat-desc'>
                        Fully qualified associates
                    </div>
                </div>
                <div className="text-center about-stat">
                    <div className='stat-title'>
                        10+
                    </div>
                    <div className='stat-desc'>
                        Years
                    </div>
                </div>
                <div className="text-center about-stat">
                    <div className='stat-title'>
                        280+
                    </div>
                    <div className='stat-desc'>
                        Happy clients
                    </div>
                </div>
            </section>

            <CallToAction />

            <hr />

            <Footer />
        </div>
    )
}

export default Home
