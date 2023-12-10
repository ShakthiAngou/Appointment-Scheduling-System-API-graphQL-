
// hardcoded data
export const doctors = [
  {id: '1', name: "Dr. Shakthi Angou", clinic: "Angou Clinic", specialty: "Cardiothoracics"},
  {id: '2', name: "Dr. Sydney Zhang", clinic: "Zhang Clinic", specialty: "Radiology"},
  {id: '3', name: "Dr. Sarah Li", clinic: "Li Clinic", specialty: "Oncology"}
]
  
export const timeslots = [
// doctorId: 1
{ id: '1', start: '09:00 AM', end: '09:30 AM', doctorId: '1' },
{ id: '2', start: '09:30 AM', end: '10:00 AM', doctorId: '1' },
{ id: '3', start: '11:00 AM', end: '11:30 AM', doctorId: '1' },
// doctorId: 2
{ id: '4', start: '10:00 AM', end: '10:30 AM', doctorId: '2' },
{ id: '5', start: '01:30 PM', end: '02:00 PM', doctorId: '2' },
{ id: '6', start: '04:00 PM', end: '04:30 PM', doctorId: '2' },
// doctorId: 3
{ id: '7', start: '10:00 AM', end: '10:30 AM', doctorId: '3' },
{ id: '8', start: '01:30 PM', end: '02:00 PM', doctorId: '3' },
{ id: '9', start: '04:00 PM', end: '04:30 PM', doctorId: '3' },
];
  
export const appointments = [];
