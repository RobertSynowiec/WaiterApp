import React, { useState, useEffect } from 'react';

const Loading = ({ singleTable }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!singleTable || Object.keys(singleTable).length === 0) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [singleTable]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : null}
        </div>
    );
};

export default Loading;