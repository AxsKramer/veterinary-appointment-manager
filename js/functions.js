import Appointments from './classes/Appointments.js';
import UI from './classes/UI.js';
const petInput = document.querySelector('#pet');
const ownerInput = document.querySelector('#owner');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const hourInput = document.querySelector('#hour');
const symptomsInput = document.querySelector('#symptoms');
const form = document.querySelector('#form');

let editing;
const dataAppointment = {pet: '', owner: '', phone: '', date: '', hour: '', symptoms: '' };

const ui = new UI();
const manageAppointments = new Appointments();

export const addDataAppointment = event => dataAppointment[event.target.name] = event.target.value;

export function newAppointment(event) {
    event.preventDefault();
    const { pet, owner, phone, date, hour, symptoms} = dataAppointment;

    if( pet === '' || owner === '' || phone === '' || date === ''  || hour === '' || symptoms === '' ) {
        ui.printAlert('All fields are required', 'error');
        return;
    }

    if(editing) {
        ui.printAlert('Editing ...', 'edite mode');
        manageAppointments.editAppointment({...dataAppointment})
        form.querySelector('button[type="submit"]').textContent = 'Create Appointment';
        editing = false;
    } else {
        dataAppointment.id = Date.now();
        manageAppointments.addAppointment({...dataAppointment});
        ui.printAlert('The Appointment was created successfully', 'success');
    }

    dataAppointmentReset();
    form.reset();
    ui.printAppointment(manageAppointments);
}

export function dataAppointmentReset() {
    dataAppointment.pet = '';
    dataAppointment.owner = '';
    dataAppointment.phone = '';
    dataAppointment.date = '';
    dataAppointment.hour = '';
    dataAppointment.symptoms = '';
}

export function deleteAppointment(id) {
    manageAppointments.deleteAppointmentById(id);
    ui.printAlert('The Appointment was deleted correctly', 'success');
    ui.printAppointment(manageAppointments);
}

export function loadEditionMode(appointment) {
    const { pet, owner, phone, date, hour, symptoms, id } = appointment;

    petInput.value = pet;
    ownerInput.value = owner;
    phoneInput.value = phone;
    dateInput.value = date;
    hourInput.value = hour;
    symptomsInput.value = symptoms;

    dataAppointment.pet = pet;
    dataAppointment.owner = owner;
    dataAppointment.phone = phone;
    dataAppointment.date = date;
    dataAppointment.hour = hour;
    dataAppointment.symptoms = symptoms;
    dataAppointment.id = id;

    form.querySelector('button[type="submit"]').textContent = 'Save Changes';
    editing = true;
}
© 202