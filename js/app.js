const petInput = document.querySelector('#pet');
const ownerInput = document.querySelector('#owner');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const hourInput = document.querySelector('#hour');
const symptomsInput = document.querySelector('#symptoms');
const form = document.querySelector('#form');
const containerAppointment = document.querySelector('#appointments');
let editing;

const addDataAppointment = event => dataAppointment[event.target.name] = event.target.value;

const dataAppointment = {
    pet: '',
    owner: '',
    phone: '',
    date: '',
    hour: '',
    symptoms: ''
}

petInput.addEventListener('input', addDataAppointment);
ownerInput.addEventListener('input', addDataAppointment);
phoneInput.addEventListener('input', addDataAppointment);
dateInput.addEventListener('input', addDataAppointment);
hourInput.addEventListener('input', addDataAppointment);
symptomsInput.addEventListener('input', addDataAppointment);
form.addEventListener('submit', newAppointment);

class Appointments {
    constructor() {
        this.appointments = [];
    }
    addAppointment(appointment) {
        this.appointments = [...this.appointments, appointment];
    }
    deleteAppointmentById(id) {
        this.appointments = this.appointments.filter( appointment => appointment.id !== id )
    }
    editAppointment(appointmentUpdated) {
        this.appointments = this.appointments.map( appointment => appointment.id === appointmentUpdated.id ? appointmentUpdated : appointment );
    }
}

class UI {

    printAlert(message, type ) {
        const divMsg = document.querySelector('#alert');
        const p = document.createElement('p');
        type === 'error' ? p.classList.add('alert-danger','text-center', 'alert', 'd-block') : p.classList.add('alert-success','text-center', 'alert', 'd-block');
        p.textContent = message;
        divMsg.appendChild(p);
        setTimeout( () => p.remove(), 5000 );
    }

    printAppointment({appointments}) {
        this.cleanHTML();
        appointments.forEach( appointment => {
            const { pet, owner, phone, date, hour, symptoms, id } = appointment;

            const divAppointment = document.createElement('div');
            divAppointment.classList.add('cita', 'p-3');
            divAppointment.dataset.id = id;
            const petP = document.createElement('h2');
            petP.classList.add('card-title', 'font-weight-bolder');
            petP.textContent = pet;
            const ownerP = document.createElement('p');
            ownerP.innerHTML = `<span class="font-weight-bolder">Owner: </span> ${owner}`;
            const phoneP = document.createElement('p');
            phoneP.innerHTML = `<span class="font-weight-bolder">Phone: </span> ${phone}`;
            const dateP = document.createElement('p');
            dateP.innerHTML = `<span class="font-weight-bolder">Date: </span> ${date}`;
            const hourP = document.createElement('p');
            hourP.innerHTML = `<span class="font-weight-bolder">Hour: </span> ${hour}`;
            const symptomsP = document.createElement('p');
            symptomsP.innerHTML = `<span class="font-weight-bolder">symptoms: </span> ${symptoms}`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'mr-2');
            deleteBtn.innerHTML = 'Delete <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            deleteBtn.onclick = () => deleteAppointment(id);

            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'btn-info');
            editBtn.innerHTML = 'Edit <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            editBtn.onclick = () => loadEditionMode(appointment);

            divAppointment.appendChild(petP);
            divAppointment.appendChild(ownerP);
            divAppointment.appendChild(phoneP);
            divAppointment.appendChild(dateP);
            divAppointment.appendChild(hourP);
            divAppointment.appendChild(symptomsP);
            divAppointment.appendChild(deleteBtn);
            divAppointment.appendChild(editBtn);
            
            containerAppointment.appendChild(divAppointment);
        });
    }
    cleanHTML() {
        while(containerAppointment.firstChild) {
            containerAppointment.removeChild( containerAppointment.firstChild )
        }
    }
}

const ui = new UI();
const manageAppointments = new Appointments();

function newAppointment(event) {
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
        editando = false;
    } else {
        dataAppointment.id = Date.now();
        manageAppointments.addAppointment({...dataAppointment});
        ui.printAlert('The Appointment was created successfully', 'success');
    }

    dataAppointmentReset();
    form.reset();
    ui.printAppointment(manageAppointments);
}

function dataAppointmentReset() {
    dataAppointment.pet = '';
    dataAppointment.owner = '';
    dataAppointment.phone = '';
    dataAppointment.date = '';
    dataAppointment.hour = '';
    dataAppointment.symptoms = '';
}

function deleteAppointment(id) {
    manageAppointments.deleteAppointmentById(id);
    ui.printAlert('The Appointment was deleted correctly', 'success');
    ui.printAppointment(manageAppointments);
}

function loadEditionMode(appointment) {
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