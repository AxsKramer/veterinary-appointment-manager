import React from 'react'

const BoxDataAppointment = ({dataAppointment, deleteElement, editElement}) => {

    const {pet, owner, phone, date, hour, symptoms, id } = dataAppointment;

    return ( 
        <div className='cita p-3 card w-75 mb-4'>
            <h3 className='card-title font-weight-bolder'>{pet}</h3>
            <p className='card-text'><span className="font-weight-bolder">Owner: </span>{owner}</p>
            <p className='card-text'><span className="font-weight-bolder">Phone: </span>{phone}</p>
            <p className='card-text'><span className="font-weight-bolder">Date: </span>{date}</p>
            <p className='card-text'><span className="font-weight-bolder">Hour: </span>{hour}</p>
            <p className='card-text'><span className="font-weight-bolder">symptoms: </span>{symptoms}</p>
            <button onClick={() => deleteElement(id)} className='btn btn-danger btn-block mr-2'>
                Delete 
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>
            </div>
     );
}
 
export default BoxDataAppointment;