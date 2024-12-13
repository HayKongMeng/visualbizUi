import React from 'react';
import OrderCard from './OrderCard';

const ParentComponent = () => {
    const handleAccept = (order, idx) => {
        console.log("Order accepted:", order, idx);
    };

    const handleDeny = (order, idx) => {
        console.log("Order denied:", order, idx);
    };

    const order = {
        Accept: "Order #123",
        id: 53, date: new Date(),
        name: "Sample Shop",
        address: "123 Main St",
        total: 100,
        img: "path/to/img"
    };

    return (
        <OrderCard
            order={order}
            idx={53}
            onAccept={handleAccept}
            onDeny={handleDeny}
        />
    );
};

export default ParentComponent;