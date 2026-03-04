import { Link } from "react-router-dom";
import "./../styles/Home.css";
import { FaShoppingBasket } from "react-icons/fa";
import { GiWoodBeam } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

function Home() {

  const categories = [
    { id: 1, name: "Grocery", icon: <FaShoppingBasket /> },
    { id: 2, name: "Carpenter", icon: <GiWoodBeam /> },
    { id: 3, name: "Plumber", icon: <FaWrench /> },
    { id: 4, name: "Electrician", icon: <FaBolt /> },
    { id: 5, name: "Medicine", icon: <FaPills /> },
    { id: 6, name: "Ready to Eat", icon: <FaHamburger /> }
  ];

  return (
    <div>

      <div className="home-container">

        <div className="hero">
          <div className="hero-overlay">
            <h1>Welcome to LocalBizConnect</h1>
            <p>Support and discover trusted local businesses near you.</p>
          </div>
        </div>

        <h2 className="category-heading">Browse Categories</h2>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>

      </div>

      <div className="about-section">
        <h2>Why LocalBizConnect?</h2>

        <div className="about-grid">
          <div>
            <h3>Support Local Businesses</h3>
            <p>Help nearby shops grow by choosing local services and products.</p>
          </div>

          <div>
            <h3>Trusted Services</h3>
            <p>Find verified carpenters, plumbers, electricians and more.</p>
          </div>

          <div>
            <h3>Convenient Shopping</h3>
            <p>Browse products and services easily from different local shops.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;