import { useEffect, useState } from "react";
import axios from "axios";

const ViewPets = () => {

    const [pets, setPets] = useState([]);

    const fetchData = () => {

        axios.post("http://localhost:3000/view-pets", {})

        .then((response) => {

            setPets(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    };

    useEffect(() => {

        fetchData();

    }, []);

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="text-center">
                        View Pet Boarding Details
                    </h3>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-bordered table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Booking ID</th>
                                    <th>Pet Name</th>
                                    <th>Pet Type</th>
                                    <th>Breed</th>
                                    <th>Age</th>
                                    <th>Weight</th>
                                    <th>Vaccination</th>
                                    <th>Owner</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Check-In</th>
                                    <th>Check-Out</th>
                                    <th>Kennel No</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    pets.map((value,index)=>{

                                        return(

                                            <tr key={index}>

                                                <td>{value.bookingId}</td>
                                                <td>{value.petName}</td>
                                                <td>{value.petType}</td>
                                                <td>{value.breed}</td>
                                                <td>{value.age}</td>
                                                <td>{value.weight}</td>
                                                <td>{value.vaccinationStatus}</td>
                                                <td>{value.ownerName}</td>
                                                <td>{value.ownerPhone}</td>
                                                <td>{value.ownerEmail}</td>
                                                <td>{value.checkInDate}</td>
                                                <td>{value.checkOutDate}</td>
                                                <td>{value.kennelNumber}</td>

                                            </tr>

                                        )

                                    })

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewPets