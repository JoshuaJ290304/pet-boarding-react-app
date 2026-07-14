import { useState } from "react";
import axios from "axios";

const AddPet = () => {

    const [input, changeInput] = useState({

        bookingId: "",
        petName: "",
        petType: "",
        breed: "",
        age: "",
        weight: "",
        vaccinationStatus: "",
        ownerName: "",
        ownerPhone: "",
        ownerEmail: "",
        checkInDate: "",
        checkOutDate: "",
        kennelNumber: ""

    })

    const [message, setMessage] = useState("")

    const inputHandler = (event) => {

        changeInput({

            ...input,
            [event.target.name]: event.target.value

        })

    }

    const readValues = () => {

        axios.post("http://localhost:3000/add-pet", input)

        .then((response) => {

            setMessage(response.data.message)

            changeInput({

                bookingId: "",
                petName: "",
                petType: "",
                breed: "",
                age: "",
                weight: "",
                vaccinationStatus: "",
                ownerName: "",
                ownerPhone: "",
                ownerEmail: "",
                checkInDate: "",
                checkOutDate: "",
                kennelNumber: ""

            })

        })

        .catch(() => {

            setMessage("Something went wrong")

        })

    }

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-success text-white">

                    <h3 className="text-center">
                        Pet Boarding Registration
                    </h3>

                </div>

                <div className="card-body">

                    {
                        message !== "" &&
                        <div className="alert alert-info">
                            {message}
                        </div>
                    }

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label>Booking ID</label>
                            <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Pet Name</label>
                            <input type="text" className="form-control" name="petName" value={input.petName} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Pet Type</label>
                            <input type="text" className="form-control" name="petType" value={input.petType} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Breed</label>
                            <input type="text" className="form-control" name="breed" value={input.breed} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Age</label>
                            <input type="number" className="form-control" name="age" value={input.age} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Weight (kg)</label>
                            <input type="text" className="form-control" name="weight" value={input.weight} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Vaccination Status</label>
                            <input type="text" className="form-control" name="vaccinationStatus" value={input.vaccinationStatus} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Owner Name</label>
                            <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Owner Phone</label>
                            <input type="text" className="form-control" name="ownerPhone" value={input.ownerPhone} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Owner Email</label>
                            <input type="email" className="form-control" name="ownerEmail" value={input.ownerEmail} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Check-In Date</label>
                            <input type="date" className="form-control" name="checkInDate" value={input.checkInDate} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Check-Out Date</label>
                            <input type="date" className="form-control" name="checkOutDate" value={input.checkOutDate} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-12 mb-3">
                            <label>Kennel Number</label>
                            <input type="text" className="form-control" name="kennelNumber" value={input.kennelNumber} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-12 text-center">

                            <button
                                className="btn btn-success me-2"
                                onClick={readValues}
                            >
                                Add Pet
                            </button>

                            <button
                                className="btn btn-secondary"
                                onClick={() => window.location.reload()}
                            >
                                Reset
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AddPet