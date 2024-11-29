import React, { useEffect, useState } from "react";

function SavedPlansPage() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        async function fetchPlans() {
            const response = await fetch(`http://localhost:5050/record/plans`);

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

    async function deletePlan(id) {
        const response = await fetch(`http://localhost:5050/record/plans/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const message = `An error occurred while deleting: ${response.statusText}`;
            console.error(message);
            return;
        }

        setPlans(plans.filter((plan) => plan._id !== id));
    }

    return (
        <div className="SavedPlansPage">
            <h1 className="SavedPlansPageTitle">Saved Plans Page</h1>
            <ul>
                {plans.map((plan) => (
                    <li key={plan._id}>
                        <p>{plan.leg}, {plan.arm}, {plan.chest}, {plan.back}</p>
                        <button className="exercise-button" onClick={() => deletePlan(plan._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SavedPlansPage;
