import React, { useEffect, useState } from 'react';

const Flowers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/flowers')
        .then((res) => res.json())
            .then((data) =>{
                setData(data)
                setIsLoading(false)
            })
           
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Flowers</h1>
            <ul> 
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Flowers;
