import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';


import url from "../../env.js"



export default function SearchTractor() {
   

  const { TractorBrand, TractorModel, tyreBrand, season } = useParams();
  const [sortedTractors, setSortedTractors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load

    const fetchTractors = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (TractorBrand) queryParams.append("tractorBrand", TractorBrand);
        if (TractorModel) queryParams.append("tractorModel", TractorModel);
        if (tyreBrand) queryParams.append("tyreBrand", tyreBrand);
        if (season) queryParams.append("season", season);

        const response = await fetch(
          `${url.nodeapipath}/get-tyres?${queryParams.toString()}`
        );
        const data = await response.json();
        console.log("Tractor API Response:", data);

        // Filter tyres for 'tractor' type only
        const filteredTractors = data.filter(
          (tyre) => tyre.tyreType?.toLowerCase() === "tractor"
        );

        // Helper function for matching fields (supports string or array, case-insensitive)
        const matchField = (field, value) => {
          if (!field || !value) return false;
          if (Array.isArray(field)) {
            return field.some((item) => item.toLowerCase() === value.toLowerCase());
          }
          return field.toLowerCase() === value.toLowerCase();
        };

        // Final filtering
        const finalFilteredTractors = filteredTractors.filter((tyre) => {
          const matchesBrand = tyreBrand ? matchField(tyre.tyreBrand, tyreBrand) : true;
          const matchesSeason = season && season !== "all" ? matchField(tyre.seasons, season) : true;
          const matchesTractorBrand = TractorBrand ? matchField(tyre.tractorBrand, TractorBrand) : true;
          const matchesTractorModel = TractorModel ? matchField(tyre.tractorModel, TractorModel) : true;

          return (
            matchesBrand &&
            matchesSeason &&
            matchesTractorBrand &&
            matchesTractorModel
          );
        });

        setSortedTractors(finalFilteredTractors);
      } catch (error) {
        console.error("Error fetching tractor tyres:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTractors();
  }, [TractorBrand, TractorModel, tyreBrand, season]);





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
                        <div className="col-md-9">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                <div className="row gx-4 justify-content-start row-gap-5 mt-5">
                                    {sortedTractors.length > 0 ? (
                                        sortedTractors.map((tractor) => {
                                            const isNew = (new Date() - new Date(tractor.createdAt)) < 30 * 24 * 60 * 60 * 1000;
                                            const isOnSale = tractor.Salesprice < tractor.price;

                                            return (
                                                <div className="col" key={tractor._id}>
                                                    <div className="singleProduct">
                                                        <div className="photo">
                                                            {isOnSale && <div className="sale">SALE</div>}
                                                            {isNew && <div className="new">NEW</div>}
                                                            <ul className="cate">
                                                                {tractor.tyreType === 'tractor' && (
                                                                    <li>
                                                                        <img
                                                                            src={`${process.env.PUBLIC_URL}/assets/images/icons/png/tractor.svg`}
                                                                            className="tractor"
                                                                            alt="Tractor Icon"
                                                                        />
                                                                    </li>
                                                                )}
                                                            </ul>
                                                            {/* <img src={`${url.nodeapipath}/uploads/${tractor.avatarImages}`} alt={tractor.title} /> */}
                                                    <img src={`https://tyres.blr1.digitaloceanspaces.com/${tractor.avatarImages}`} alt={tractor.title} />

                                                        </div>
                                                        <div className="details">
                                                            <div className="brand">{tractor.tyreBrand.join(', ')}</div>
                                                            <h2>{tractor.title}</h2>
                                                            <div className="price">
                                                                <div className="new">₹{tractor.Salesprice}</div>
                                                                {isOnSale && <div className="old">₹{tractor.price}</div>}
                                                            </div>
                                                            <Link to={`/${tractor.tyreType}/${tractor.slug}`} className="btn2">
                                                                VIEW DETAILS
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p>No tractor tyres found for the selected criteria.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <FrontendFooter />
        </>
    );
}