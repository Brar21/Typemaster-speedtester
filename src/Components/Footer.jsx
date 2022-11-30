import "../App.css"

function Footer() {
     
    return (
        <div className="headDiv" >
    <hr color="green" />
        <div className="footer" >
            <h3>For Devlopers</h3>
            <p>About</p>
            <p>High Scores</p>
            <p>FAQ</p>
            <p>Contact Us</p>
            <strong>Donate</strong>
            <p>Privacy & Terms</p>
            {/* For select diffrent languages we  make select tag here */}

            <select name="Language" id="language">
                <option value="EN">
                    English
                </option>
                <option value="HN">
                    Hindi
                </option>  <option value="EN">
                    English
                </option>  <option value="PN">
                    Punjabi
                </option>  <option value="IT">
                    Italian
                </option>
            </select>
{/* Now time to style this Footer */}
            </div>

        </div>
    )
}
export default Footer;