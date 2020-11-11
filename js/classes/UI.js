// eslint-disable-next-line import/no-cycle
import { deleteAppointment, loadEditionMode } from '../functions';

const containerAppointment = document.querySelector('#appointments');

class UI {
  // eslint-disable-next-line class-methods-use-this
  printAlert(message, type) {
    const divMsg = document.querySelector('#alert');
    const p = document.createElement('p');
    // eslint-disable-next-line no-unused-expressions
    (type === 'error') ? p.classList.add('alert-danger', 'text-center', 'alert', 'd-block') : p.classList.add('alert-success', 'text-center', 'alert', 'd-block');
    p.textContent = message;
    divMsg.appendChild(p);
    setTimeout(() => p.remove(), 5000);
  }

  printAppointment({ appointments }) {
    this.cleanHTML();
    appointments.forEach((appointment) => {
      const {
        pet, owner, phone, date, hour, symptoms, id,
      } = appointment;

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

  // eslint-disable-next-line class-methods-use-this
  cleanHTML() {
    while (containerAppointment.firstChild) {
      containerAppointment.removeChild(containerAppointment.firstChild);
    }
  }
}

export default UI;
