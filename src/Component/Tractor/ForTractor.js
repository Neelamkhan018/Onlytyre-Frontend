import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';


import url from "../../env.js"




const ForTractor = () => {
  const [sortedTyres, setSortedTyres] = useState([]);
  const [tractorBrands, setTractorBrands] = useState([]);
  const [tyreBrands, setTyreBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTractorBrands, setSelectedTractorBrands] = useState([]);
  const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [allTractorTyres, setAllTractorTyres] = useState([]);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [tyresRes, tractorBrandsRes, tyreBrandsRes] = await Promise.all([
          fetch(`${url.nodeapipath}/get-tyres`), // Adjust this endpoint to fetch tractor tyres
          fetch(`${url.nodeapipath}/get-Tractorbrand`), // Endpoint for tractor brands
          fetch(`${url.nodeapipath}/get-tyre-brands`), // Endpoint for tyre brands
        ]);

        const [tyresData, tractorBrandsData, tyreBrandsData] = await Promise.all([
          tyresRes.json(),
          tractorBrandsRes.json(),
          tyreBrandsRes.json(),
        ]);

        const tractorTyres = tyresData.filter(t => t.tyreType === 'tractor'); // Filter for tractor tyres
        setSortedTyres(tractorTyres);
        setAllTractorTyres(tractorTyres); // Store original tractor tyres
        setTractorBrands(tractorBrandsData);
        setTyreBrands(tyreBrandsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch filtered tyres based on selected brands
  useEffect(() => {
    const fetchFilteredTyres = async () => {
      setLoading(true);
      try {
        let tractorResults = [];
        let tyreResults = [];

        // Fetch tractor tyres based on selected tractor brands
        if (selectedTractorBrands.length > 0) {
          const tractorRequests = selectedTractorBrands.map(id =>
            fetch(`${url.nodeapipath}/get-fortractor/${id}`).then(res => res.json())
          );
          const tractorResponses = await Promise.all(tractorRequests);
          tractorResults = tractorResponses.flatMap(res => res.tyres || []);
        }

        // Fetch tyres based on selected tyre brands
        if (selectedTyreBrands.length > 0) {
          const tyreRequests = selectedTyreBrands.map(id =>
            fetch(`${url.nodeapipath}/get-fortyre/${id}`).then(res => res.json())
          );
          const tyreResponses = await Promise.all(tyreRequests);
          tyreResults = tyreResponses.flatMap(res => res.tyres || []);
        }

        let filteredTyres = [];

        // Combine filtering logic
        if (selectedTractorBrands.length > 0 && selectedTyreBrands.length > 0) {
          filteredTyres = tractorResults.filter(tractorTyre =>
            selectedTractorBrands.some(id => tractorTyre.tractorBrand.includes(id)) &&
            selectedTyreBrands.some(id => tractorTyre.tyreBrand.includes(id))
          );
        } else if (selectedTractorBrands.length > 0) {
          filteredTyres = tractorResults;
        } else if (selectedTyreBrands.length > 0) {
          filteredTyres = tyreResults;
        } else {
          filteredTyres = allTractorTyres; // Use original list when no filters
        }

        const uniqueTyres = [...new Map(filteredTyres.map(t => [t._id, t])).values()];
        setSortedTyres(uniqueTyres);
      } catch (error) {
        console.error('Error fetching tyres:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredTyres();
  }, [selectedTractorBrands, selectedTyreBrands, allTractorTyres]);

  // Handle Tractor Brand Checkbox Toggle
  const handleTractorBrandToggle = (brandId) => {
    setSelectedTractorBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  // Handle Tyre Brand Checkbox Toggle
  const handleTyreBrandToggle = (brandId) => {
    setSelectedTyreBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    let tyres = [...sortedTyres];

    switch (value) {
      case 'price-asc':
        tyres.sort((a, b) => a.Salesprice - b.Salesprice);
        break;
      case 'price-desc':
        tyres.sort((a, b) => b.Salesprice - a.Salesprice);
        break;
      case 'rating-asc':
        tyres.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        tyres.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        tyres.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    setSortedTyres([...tyres]); // Ensure React detects the state update
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Tractor</li>
          </ul>
        </div>
      </section>

      <section className="padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-3 hideMobile">
              <div className="siderFilter">
             

                {/* Tractor Brands Filter */}
                <div className="box">
                  <h3>Tractor Brand</h3>
                  <form action="">
                    <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allTractorBrands"
                            checked={selectedTractorBrands.length === 0}
                            onChange={() => setSelectedTractorBrands([])} // Clear all selections when "All" is checked
                          />
                          <label className="form-check-label" htmlFor="allTractorBrands">All</label>
                        </div>
                      </li>

                      <ul>
                        {tractorBrands.map(brand => (
                          <li key={brand._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`tractor-${brand._id}`}
                                checked={selectedTractorBrands.includes(brand._id)}
                                onChange={() => handleTractorBrandToggle(brand._id)}
                              />
                              <label className="form-check-label" htmlFor={`tractor-${brand._id}`}>{brand.name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </form>
                </div>

                {/* Tyre Brands Filter */}
                <div className="box">
                  <h3>Tyre Brand</h3>
                  <form action="">
                    <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allTyreBrands"
                            checked={selectedTyreBrands.length === 0}
                            onChange={() => setSelectedTyreBrands([])} // Clear all selections when "All" is checked
                          />
                          <label className="form-check-label" htmlFor="allTyreBrands">All</label>
                        </div>
                      </li>

                      <ul>
                        {tyreBrands.map(brand => (
                          <li key={brand._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`tyre-${brand._id}`}
                                checked={selectedTyreBrands.includes(brand._id)}
                                onChange={() => handleTyreBrandToggle(brand._id)}
                              />
                              <label className="form-check-label" htmlFor={`tyre-${brand._id}`}>{brand.name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row align-items-center">
                <div className="col-6 col-md-9">
                  <a
                    href=""
                    className="showsidebar"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sideBarFilter"
                    aria-controls="sideBarFilter"
                  >
                    <img src="assets/images/icons/svg/menu.svg" alt="" /> Show Sidebar
                  </a>
                </div>

                <div className="col-6 col-md-3">
                  <form action="">
                    <select
                      value={sortOption}
                      onChange={handleSortChange}
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="menu_order">Default Sorting</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating-desc">Top Rated</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="row gx-4 justify-content-start row-gap-5 mt-5">
                {sortedTyres.map(tyre => {
                  const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000;
                  const isOnSale = tyre.Salesprice < tyre.price;

                  return (
                    <div className="col" key={tyre._id}>
                      <div className="singleProduct">
                        <div className="photo">
                          {isOnSale && <div className="sale">SALE</div>}
                          {isNew && <div className="new">NEW</div>}
                          <ul className="cate">
                            {tyre.tyreType === 'tractor' && (
                              <li>
                                <img
                                  src="assets/images/icons/png/tractor.svg" 
                                  className="tractor"
                                  alt="Tractor Icon"
                                />
                              </li>
                            )}
                          </ul>
                          {/* <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`} alt={tyre.title} /> */}
                <img src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`} alt={tyre.title} />

                        </div>
                        <div className="details">
                          <div className="brand">{tyre.brand}</div>
                          <h2>{tyre.title}</h2>
                          <div className="price">
                            <div className="new">₹{tyre.Salesprice}</div>
                            {isOnSale && <div className="old">₹{tyre.price}</div>}
                          </div>
                          <Link to={`/${tyre.tyreType}/${tyre.slug}`} className="btn2">
                            VIEW DETAILS
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FrontendFooter />
    </>
  );
};

export default ForTractor;