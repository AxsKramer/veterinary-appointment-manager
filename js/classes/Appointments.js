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

export default Appointments;