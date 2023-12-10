import { doctors, timeslots, appointments } from './db.js';

export const resolvers = {
  Query : {
    doctorDetails: (parent, args) => {
      console.log('Arguments received:', args)
      const foundDoctor = doctors.find(doctor => doctor.id === args.doctorId);
      console.log('Doctor found:', foundDoctor);
      return foundDoctor;
    },
    doctorAvailability: (parent, args) => {
      return timeslots.filter(slot => slot.doctorId === args.doctorId);
    },
  },
  Mutation : {
      bookAppointment: (parent, args) => {
        const { doctorId, timeslotId, patientName } = args;
        // Check if the timeslot is available
        const timeslot = timeslots.find(slot => slot.id === timeslotId);
        if (!timeslot) {
          throw new Error('Timeslot not found');
        }
        // Create the appointment
        const appointment = {
          id: appointments.length + 1,
          doctorId,
          timeslotId,
          patientName,
        };
        console.log("length of appointments list before:", appointments.length)
        appointments.push(appointment);
        console.log("length of appointments list after:", appointments.length)
        return appointment;
      },
      cancelAppointment: (parent, args) => {
        const { appointmentId } = args;
        console.log("apt id to cancel", appointmentId)
        console.log("apt[0] id:", appointments[0].id)
        const index = appointments.findIndex(appointment => appointment.id == (appointmentId));
        console.log("index of appointment:", index)
        if (index == -1) {
          throw new Error('Appointment not found');
        }
        appointments.splice(index, 1);
        return true;
      },
      updatePatientName: (parent, args) => {
        const { appointmentId, newPatientName } = args;
        const appointment = appointments.find(appointment => appointment.id == (appointmentId));
        if (!appointment) {
          throw new Error('Appointment not found');
        }
        appointment.patientName = newPatientName;
        return appointment;
      },
  }
}
