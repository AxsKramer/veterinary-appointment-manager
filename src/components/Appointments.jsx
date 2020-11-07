import React from 'react'
import '../assets/styles/Appointments.css';
import BoxDataAppointment from '../components/BoxDataAppointment';

const Appointments = ({appointments}) => {

    return(
        <div className="col-md-6">
            <h2 id="manage" className="mb-4 text-center">Manage Appointments</h2>
            <ul id="appointments" className="list-group lista-citas">
            {
                appointments && appointments.map(appointment => <BoxDataAppointment key={appointment.id} dataAppointment={appointment} /> )   
            }
            </ul>
        </div>
    )
}
export default Appointments;