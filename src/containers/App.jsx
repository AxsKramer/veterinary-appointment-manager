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

    const addDataAppointment = event => setDataAppointment({...dataAppointment, [event.target.name]: event.target.value});

    const saveAppointment = event => {
        event.preventDefault();

        const {pet, owner, phone, date, hour, symptoms} = dataAppointment;
        if(pet === '' || owner === '' || phone === '' || date === '' || hour === '' || symptoms ==='' ) return;

        dataAppointment.id = uuidv4();
        setAppointments(prevState => [...prevState, dataAppointment])
        // console.log(appointments);
    }


    return ( 
        <Fragment>
            <Header />
            <Layout>
                <Form dataInput={addDataAppointment} submit={saveAppointment} />
                <Appointments appointments={appointments}/>
            </Layout>
        </Fragment>
        
     );
}
 
export default App;