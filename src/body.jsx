import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Body = (props) => {
    const [country, setCountry] = useState("");
    const [array, setArray] = useState([]);
    const [newArrayCountry, setNewArrayCountry] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [arrayState, setArrayState] = useState([]);

    useEffect(() => {
        let obj = [
            {
                name: "ddu",
                link: "ddu.com",
                country: "india",
                state: "gujarat"
            },
            {
                name: "nirma",
                link: "nirma.com",
                country: "india",
                state: "gujarat"
            },
            {
                name: "Toronto",
                link: "Toronto.com",
                country: "canada",
                state: "toronto"
            },
            {
                name: "IIT Bombay",
                link: "iitb.com",
                country: "india",
                state: "maharashtra"
            }
        ];
        setArray(obj);
    }, []);

    useEffect(() => {
        setNewArrayCountry(array.filter(element => element.country === country));
    }, [country, array]);

    useEffect(() => {
        if (country) {
            const countryStates = array
                .filter(element => element.country === country)
                .map(e => e.state);
            setArrayState([...new Set(countryStates)]);
        } else {
            setArrayState([]);
        }
    }, [country, array]);

    const handleChangeCountry = (e) => {
        const value = e.target.value;
        setCountry(value);
        setSelectedState(""); 
    };

    const handleChangeState = (e) => {
        const value = e.target.value;
        setSelectedState(value);
    };

    const filteredCards = selectedState
        ? newArrayCountry.filter(element => element.state === selectedState)
        : newArrayCountry;

    return (
        <div className="">
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="country"
                    type="text"
                    placeholder="Search your desired Country"
                    value={country}
                    onChange={handleChangeCountry}
                />
            </div>

            <div>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedState}
                    onChange={handleChangeState}
                >
                    <option value="">Select State</option>
                    {arrayState.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            {filteredCards.map((element, index) => (
                <Cards key={index} name={element.name} link={element.link} />
            ))}
        </div>
    );
};

export default Body;
