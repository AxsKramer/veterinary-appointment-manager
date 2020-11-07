import React from 'react'
import '../assets/styles/Appointments.css';
import BoxDataAppointment from '../components/BoxDataAppointment';

const Appointments = ({appointments,deleteElement}) => {
    return(
        <div className="col-md-6 mb-3">
            <h2 className="mb-4 text-center font-weight-bolder text-white">Manage Appointments</h2>
            <div className="lista-citas d-flex flex-column align-items-center">
            {
                appointments.length !== 0 
                    ? appointments.map(appointment => <BoxDataAppointment key={appointment.id} dataAppointment={appointment} deleteElement={deleteElement}/> )   
                    : <h3 className='text-center text-white'>No Appointments...</h3>
            }
            </div>
        </div>
    )
}
export default Appointments;