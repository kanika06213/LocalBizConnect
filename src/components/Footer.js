import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>LocalBizConnect</h3>
          <p>
            Connecting customers with trusted local businesses.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Categories</p>
          <p>Cart</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@localbizconnect.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 LocalBizConnect. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;