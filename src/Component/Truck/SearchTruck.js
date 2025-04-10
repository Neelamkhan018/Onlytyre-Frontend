import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';


import url from "../../env.js"



export default function Searchtruck() {
    const { TruckBrand, TruckModel, tyreBrand, season } = useParams();
    const [sortedTyres, setSortedTyres] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // 👈 scroll to top when the component loads

        const fetchTyres = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams();
                if (TruckBrand) queryParams.append("truckBrand", TruckBrand);
                if (TruckModel) queryParams.append("truckModel", TruckModel);
                if (tyreBrand) queryParams.append("tyreBrand", tyreBrand);
                if (season) queryParams.append("season", season);

                const response = await fetch(`${url.nodeapipath}/get-tyres?${queryParams.toString()}`);
                const data = await response.json();
                console.log("Truck API Response:", data);

                const filteredTyres = data.filter(tyre => tyre.tyreType === "truck");

                const finalFilteredTyres = filteredTyres.filter(tyre => {
                    const matchesBrand = tyreBrand ? tyre.tyreBrand.includes(tyreBrand) : true;
                    const matchesSeason = season && season !== "all" ? tyre.seasons === season : true;
                    const matchesTruckBrand = TruckBrand ? tyre.truckBrand.includes(TruckBrand) : true;
                    const matchesTruckModel = TruckModel ? tyre.truckModel.includes(TruckModel) : true;

                    return matchesBrand && matchesSeason && matchesTruckBrand && matchesTruckModel;
                });

                setSortedTyres(finalFilteredTyres);
            } catch (error) {
                console.error("Error fetching truck tyres:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTyres();
    }, [TruckBrand, TruckModel, tyreBrand, season]);

    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Truck</li>
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
                                    {sortedTyres.length > 0 ? (
                                        sortedTyres.map((tyre) => {
                                            const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000;
                                            const isOnSale = tyre.Salesprice < tyre.price;

                                            return (
                                                <div className="col" key={tyre._id}>
                                                    <div className="singleProduct">
                                                        <div className="photo">
                                                            {isOnSale && <div className="sale">SALE</div>}
                                                            {isNew && <div className="new">NEW</div>}
                                                            <ul className="cate">
                                                                {tyre.tyreType === 'truck' && (
                                                                    <li>
                                                                        <img
                                                                            src={`${process.env.PUBLIC_URL}/assets/images/icons/png/truck.svg`}
                                                                            className="truck"
                                                                            alt="Truck Icon"
                                                                        />
                                                                    </li>
                                                                )}
                                                            </ul>
                                                            <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`} alt={tyre.title} />
                                                        </div>
                                                        <div className="details">
                                                            <div className="brand">{tyre.tyreBrand.join(', ')}</div>
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
                                        })
                                    ) : (
                                        <p>No truck tyres found for the selected criteria.</p>
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
