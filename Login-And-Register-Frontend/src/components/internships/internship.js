import React from "react";
import Company from "./company-card";
import companyData from "../constants/companies";
import Navb from "../Navb";
import Details from "./view_details";
import "./internship.css"

function Internships() {

    function showDetails(id) {
        return <Details key={id} />
    }

    return (
        <div>
            <Navb />
            {/* <div className="heading">
                <h1>
                    <span>Internships</span>
                </h1>
            </div> */}
            <div className="header-container">
                <div className="header">
                    <h1 className="title">Internships</h1>
                </div>
            </div>
            <dl className="dictionary">
                {companyData.map((company, index) => (
                    <Company
                        key={index}
                        id={index}
                        name={company.name}
                        image={company.image}
                        content={company.content}
                        duration={company.duration}
                        onClicked={showDetails}
                    />
                ))}
            </dl>
        </div>
    );
}

export default Internships;