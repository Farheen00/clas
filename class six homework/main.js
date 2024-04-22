//nested objects
var eyeClinic = { doctor1: { doctorName: "Dr. Saad", speciality: "eye specialist",
        fees: 2000,
        days: "mon,wed,fri" },
    doctor2: { doctorName: "Dr.Raj",
        speciality: "eye surgeon",
        fees: 1500,
        days: "tues,sat" }
};
console.log(eyeClinic);
console.log(eyeClinic.doctor1);
console.log(eyeClinic.doctor1.fees);
console.log(eyeClinic.doctor1.days);
console.log(eyeClinic.doctor2);
console.log(eyeClinic.doctor2.speciality);
console.log(eyeClinic.doctor2.doctorName);
