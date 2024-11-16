import React, { useEffect, useState } from "react";

function SavedPlansPage() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        async function fetchPlans() {
            const response = await fetch(`http://localhost:5050/record`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message);
                return;
            }

            const plans = await response.json();
            setPlans(plans);
        }

        fetchPlans();
    }, []);

    return (
        <div className="SavedPlansPage">
            <h1 className="SavedPlansPageTitle">Saved Plans Page</h1>
            <ul>
                {(plans.map((plan) => (
                    <li>
                        <p>{plan.leg}, {plan.arm}, {plan.chest}, {plan.back}</p>
                    </li>
                )))}
            </ul>
        </div>
    );
}

export default SavedPlansPage;
