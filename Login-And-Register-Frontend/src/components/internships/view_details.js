import React from "react";
import Company from "./company-card";
import companyData from "../constants/companies";
import Navb from "../Navb";

function Details() {
    return (
        <div>
            <Navb />
            <h1>
                <span>Internships</span>
            </h1>
                {companyData.map((company, index) => (
                    <Company
                        key={index}
                        id={index}
                        name={company.name}
                        image={company.image}
                        content={company.content}
                        duration={company.duration}
                    />
                ))}
        </div>
    );
}

export default Details;