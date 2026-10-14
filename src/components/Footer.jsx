import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p className="font-bold">Aeron — cinematic laptop product concept</p>
                <span className="text-indigo font-bold">AERON</span>
            </div>

            <hr />

            <div className="links">
                <p>Aeron 3D Tech — independent interactive concept.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer