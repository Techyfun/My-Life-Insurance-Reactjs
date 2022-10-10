import React from 'react';

const PolicyPrice = ({page,amount,coverage,years}) => {
    return (
        <div className="policy-price py-3 pt-5 px-3">
            <h2 className="fw-bold">Policy Price</h2>
            <h5>
                From <span className="green fs-1 fw-bold">£{amount? `${amount}` :"_"}</span>
            </h5>
            <h5>to <span className="fs-4">£10</span> per month</h5>
            <ul className="m-0 p-0 mt-4">
                <li className={`coverage ${page === "Home" ?"dark-blue":""} ${page === "Home2" ?"light-green":""} ${page === "Home3" ?"light-blue":""}`}>
                    <span className="fs-1">£{coverage? `${coverage}` :"_"}</span>
                        <br />
                        COVERAGE
                </li>
                <li className={`years ${page === "Home" ?"dark-blue":""} ${page === "Home2" ?"light-green":""} ${page === "Home3" ?"light-blue":""}`}>
                    <span className="fs-2">{years? `${years}` :"_"}</span>
                    <br />
                    YEARS
                </li>
            </ul>
        </div>
    );
};

export default PolicyPrice;