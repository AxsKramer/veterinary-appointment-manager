import React, {Fragment, useState} from 'react'
import Header from '../components/Header';
import Layout from '../components/Layout';
import Form from '../components/Form'
import Appointments  from '../components/Appointments';
import {v4 as uuidv4}  from 'uuid'

const App = () => {
    const [dataAppointment, setDataAppointment ] = useState({
        pet: '',
        owner: '',
        phone: '',
        date: '',
        hour: '',
        symptoms: ''
    })
    const [appointments, setAppointments] = useState([]);

    const addDataAppointment = (event) => setDataAppointment({...dataAppointment, [event.target.name]: event.target.value});

    const saveAppointment = event => {
        event.preventDefault();
        const {pet, owner, phone, date, hour, symptoms} = dataAppointment;
        if(pet === '' || owner === '' || phone === '' || date === '' || hour === '' || symptoms ==='' ) return;
        dataAppointment.id = uuidv4();
        setAppointments(prevState => [...prevState, dataAppointment]);
        setTimeout(() => cleanFormData(event), 3000);
    }

    const cleanFormData =(event) => {
        setDataAppointment({pet: '', owner: '', phone: '', date: '', hour: '', symptoms: '', id: ''})
        for(let i = 0; i < event.target.length; i++){
            event.target[i].value = '';
        }
    }

    const deleteAppointment = (id) =>{
        const newAppointments = appointments.filter( appointment => appointment.id !== id )
        setAppointments(newAppointments);
    }

    return ( 
        <Fragment>
            <Header />
            <Layout>
                <Form dataInput={addDataAppointment} submit={saveAppointment}/>
                <Appointments appointments={appointments} deleteElement={deleteAppointment}/>
            </Layout>
        </Fragment>
     );
}
 
export default App;