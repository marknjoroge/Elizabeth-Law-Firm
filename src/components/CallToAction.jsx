import './CallToAction.css'

export default function CallToAction() {
    return (
        <div className="call-to-action-section">
            <div className='call-to-action-button'>
                <a href="/contact">
                    <div className="call-to-action">
                        <i className="fa fa-phone"></i>
                        <br />
                        Call
                    </div>
                </a>
            </div>
            <div className='call-to-action-button'>
                <a href="/contact">
                    <div className="call-to-action">
                        <i className="fa-brands fa-whatsapp"></i>
                        <br />
                        Whatsapp
                    </div>
                </a>
            </div>
        </div>
    )
}