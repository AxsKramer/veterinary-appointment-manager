import React from 'react';
import '../assets/styles/Form.css'

const Form = ({dataInput, submit}) => {
    return ( 
        <div className="col-md-6 agregar-cita">
            <form onSubmit={submit}>
                <img className="img-fluid" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/10/30/15093416326666.jpg" alt="pets" />
                <legend >Pet´s Data</legend>
                <div className="form-group ">
                    <label className="font-weight-bold">Name:</label>
                    <input onChange={dataInput} type="text" name="pet" className="form-control" placeholder="Pet's name" />
                </div>
                <div className="form-group ">
                    <label className="font-weight-bold">Owner:</label>
                    <input onChange={dataInput} type="text" name="owner" className="form-control"  placeholder="Owner's name" />
                </div>
                <div className="form-group ">
                    <label className="font-weight-bold">Phone Number:</label>
                    <input onChange={dataInput} type="tel" name="phone" className="form-control"  placeholder="Phone number" />
                </div>
                <div className="form-group ">
                    <label className="font-weight-bold">Date:</label>
                    <input onChange={dataInput} type="date" name="date" className="form-control" />
                </div>
                <div className="form-group ">
                    <label className="font-weight-bold">Hour:</label>
                    <input  onChange={dataInput} type="time" name="hour" className="form-control" />
                </div>
                <div className="form-group ">
                    <label className="font-weight-bold">Symptoms:</label>
                    <textarea onChange={dataInput}  name="symptoms" className="form-control"></textarea>
                </div>
                <div id="alert"></div>
                <button type="submit" className="btn btn-info btn-block">Create Appointment</button>
            </form>
        </div>
    );
}
 
export default Form;
