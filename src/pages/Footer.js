import Image from "next/image";
import LOGO from "/public/LOGO-FOOTER.png";
import { Quicksand, Tilt_Neon } from "next/font/google";


const tiltNeon = Tilt_Neon({
    weight: '400',
    subsets: [],
});

const quicksand = Quicksand({
    weight: '600',
    subsets: ['latin'],
});

const Footer = () => {
    return(
        <>

            <div className="footer-container" style={{margin: 0, marginTop: 100, backgroundColor: "#26428B", height: "auto", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-arround", alignItems: "center"}}>
                <div className="footer-first-child-container">
                    <div className="footer-first-child-logo-container">
                        <Image src={LOGO} alt="" height={46} width={46} style={{ padding: 0, margin: 0 }} />
                        <span className={quicksand.className}>S P Solutions Point Pvt. Ltd.</span>
                    </div>
                    <div className="footer-first-child-description-container">
                        <p className={tiltNeon.className} style={{margin: 0, padding: 0, color: "white"}}>+91 8130494920 - 31, +91 9811281443</p>
                        <p className={tiltNeon.className} style={{margin: 0, padding: 0, color: "white"}}>info@solutionspoint.net, www.solutionspoint.net</p>
                        <p className={tiltNeon.className} style={{margin: 0, padding: 0, color: "white"}}>U-207 3rd Floor Shakarpur Delhi-110092</p>
                    </div>
                </div>
                <div className="footer-second-child-container">
                    <p className={tiltNeon.className} style={{margin: 0, padding: 0, textAlign: "center", color: "white"}}>Copyright © S P Solutions Point Pvt. Ltd. 2023. All Right Reserved. </p>
                </div>
            </div>

        </>
    )
}

export default Footer;
