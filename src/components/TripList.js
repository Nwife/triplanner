import { useState } from "react"
//styles
import './TripList.css'
import { useFetch } from '../hooks/useFetch';

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:8000/trips');
    const { data: trips, isPending, error } = useFetch(url);

    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            {isPending && <div>Loading trips...</div>}
            {error && <div>error</div>}
            <ul>
                {trips && trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:8000/trips?loc=europe')}>
                    European Trips
                </button>
                <button onClick={() => setUrl('http://localhost:8000/trips')}>
                    All Trips
                </button>
            </div>
        </div>
    )
}

