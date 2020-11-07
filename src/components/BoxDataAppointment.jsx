import React from 'react'

const BoxDataAppointment = ({dataAppointment}) => {

    const {pet, owner, phone, date, hour, symptoms, id } = dataAppointment;

    return ( 
        <div className='cita p-3'>
            <h2 className='card-title font-weight-bolder'>{pet}</h2>
            <p><span className="font-weight-bolder">Owner: </span>{owner}</p>
            <p><span className="font-weight-bolder">Phone: </span>{phone}</p>
            <p><span className="font-weight-bolder">Date: </span>{date}</p>
            <p><span className="font-weight-bolder">Hour: </span>{hour}</p>
            <p><span className="font-weight-bolder">symptoms: </span>{symptoms}</p>
            <button onClick={() => deleteAppointment(id)} className='btn btn-danger mr-2'>
                Delete 
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>
            <button onClick={() => loadEditionMode(dataAppointment) } className='btn btn-info'>
                Edit 
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
            </button>
        </div>
     );
}
 
export default BoxDataAppointment;