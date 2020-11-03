import { addDataAppointment, newAppointment} from './functions.js';

const petInput = document.querySelector('#pet');
const ownerInput = document.querySelector('#owner');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const hourInput = document.querySelector('#hour');
const symptomsInput = document.querySelector('#symptoms');
const form = document.querySelector('#form');

petInput.addEventListener('input', addDataAppointment);
ownerInput.addEventListener('input', addDataAppointment);
phoneInput.addEventListener('input', addDataAppointment);
dateInput.addEventListener('input', addDataAppointment);
hourInput.addEventListener('input', addDataAppointment);
symptomsInput.addEventListener('input', addDataAppointment);
form.addEventListener('submit', newAppointment);