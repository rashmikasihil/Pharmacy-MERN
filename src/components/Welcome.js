import React, { useState } from 'react';
import './App.css';
import "./Welcome.css" // Make sure to import your existing styles

const Welcome = () => {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const toggleSidebar = () => {
    setSidebarWidth(sidebarWidth === 0 ? 200: 0);
  };

  const mainStyle = {
    marginLeft: `${sidebarWidth}px`,
    backgroundImage: 'url("")',
    backgroundRepeat: 'no-repeat',
    height: '85vh',
    width: '180vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'margin-left 0.3s ease',
    
  };
  

  return (
    <div className="container" style={mainStyle}>
      <aside style={{ width: `${sidebarWidth}px` }}>
        <nav>
          <ol>
            <li>
              <img
                src={require('../image/logoo.png')}
                alt="Login"
                style={{ width: '100px', height: '100px' }}
              />
        
            </li>
            <hr className="mt-5" />
            <li>
              <a href="./Home/Dashboard">DashBoard</a>
            </li>
            <li>
              <a href="./Home/About">About</a>
            </li>
            <li>
              <a href="./Home/Services">Services</a>
            </li>
            <li>
              <a href="./Home/Contact">Contact</a>
            </li>
          </ol>
          <hr className="mt-5" />
        </nav>
      </aside>
       <button className="toggle-btn" onClick={toggleSidebar}>
          ||||
        </button>
      

      <main>
      
        <h1><img
                src={require('../image/logoo.png')}
                alt="Login"
                style={{ width: '100px', height: '100px' }}
              />𝖀𝖓𝖎𝖔𝖓 𝕮𝖊𝖓𝖙𝖊𝖗 𝕻𝖍𝖆𝖗𝖒𝖆𝖈𝖞</h1>
        <br />
        <section className="hero">
          <div className="hero-text">
            
            <p></p>
          </div>
        </section>
        <h2>Featured Products</h2>
        <hr/>
        <section className="products">
          
         
          <br/>
          <div className="product-card">
            <img
              src="https://th.bing.com/th/id/OIP.hR3J1ei0P_cyzUTDkd3d6AHaHa?w=220&h=201&c=7&r=0&o=5&pid=1.7/150"
              alt="Product 1"
            />
            <div className="product-details">
              <h3>NESTLE BOOST ORIGINAL CHOCOLATE 480G</h3>
              <p>
                BOOST® Original Balanced Nutritional Powder is designed to provide NUTRITIONAL
                ENERGY. 
              </p>
              <h3>LKR7,845.00</h3>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://th.bing.com/th/id/OIP.aGUNLkBKTj45hdr104ybewHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7/150"
              alt="Product 2"
            />
            <div className="product-details">
              <h3>NUTRI MASTER FISH OIL 1000MG 100S</h3>
              <p>
                Active ingredients per capsule-Fish oil 1,000 mg. containing eicosapentaenoic acid (EPA) 180 mg and Docosahexaenoic Acid (DHA) 120 mg.
                
               </p>
              <h3>LKR2,945.00</h3>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://fsastore.com/dw/image/v2/BFKW_PRD/on/demandware.static/-/Sites-hec-master/default/dwc076ec98/images/large/breathe-well-nasal-filter-medium-6-ct-30496m-3.jpg?sw=900"
              alt="Product 1"
            />
            <div className="product-details">
              <h3>NESTLE BOOST ORIGINAL CHOCOLATE 480G</h3>
              <p>
                BOOST® Original Balanced Nutritional Powder is designed to provide NUTRITIONAL
                ENERGY. It contains 220 nutrient-rich calories and B-vitamins to help convert food.
                
              </p>
              <h3>LKR7,845.00</h3>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://www.pharmacyonline.co.uk/uploads/images/products/verylarge/pharmacy-online-imigran-imigran-1592407877Imigran-Tablets-100mg.jpg"
              alt="Product 1"
            />
            <div className="product-details">
              <h3>NESTLE BOOST ORIGINAL CHOCOLATE 480G</h3>
              <p>
                BOOST® Original Balanced Nutritional Powder is designed to provide NUTRITIONAL
                ENERGY. 
              </p>
              <h3>LKR7,845.00</h3>
              <button>Add to Cart</button>
            </div>
          </div>

       
        </section>
        <hr/>
        <footer>
        <p>&copy; 2023 Union Center Pharmacy. All Rights Reserved.</p>
      </footer>
      </main>

      
    </div>
  );
};

export default Welcome;

