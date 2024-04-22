var personDetail = {
    personName: "Waheed Ahmed",
    age: 32,
    qualification: [
        { educationName: "MATRIC",
            group: "general",
            board: "karachi",
            year: 2005,
            percentage: 85,
            division: "first" },
        { educationName: "INTERMEDIATE",
            group: "commerce",
            board: "karachi",
            year: 2007,
            percentage: 80,
            division: "first" },
        { educationName: "BACHELORS",
            group: "commerce",
            board: "karachi",
            year: 2009,
            percentage: 75,
            division: "first" },
        { educationName: "MASTERS",
            group: "International Relations",
            board: "karachi",
            year: 2011,
            percentage: 70,
            division: "first" }
    ],
    contactNo: 923456875,
    emailAddress: "abc@gmail.com"
};
// making a seperate variable for the person's education using interface
var academicQualification = [
    { educationName: "MATRIC",
        group: "general",
        board: "karachi",
        year: 2005,
        percentage: 85,
        division: "first" },
    { educationName: "INTERRMEDIATE",
        group: "commerce",
        board: "karachi",
        year: 2007,
        percentage: 80,
        division: "first" },
    { educationName: "BACHELORS",
        group: "commerce",
        board: "karachi",
        year: 2009,
        percentage: 75,
        division: "first" },
    { educationName: "MASTERS",
        group: "International Relations",
        board: "karachi",
        year: 2011,
        percentage: 70,
        division: "first" }
];
console.log(personDetail);
console.log(personDetail.personName);
console.log(personDetail.contactNo);
console.log(personDetail.qualification);
console.log(personDetail.qualification[0]);
console.log(personDetail.qualification[2].educationName);
console.log(academicQualification);
var bestTelevision = [{
        brandName: "samsung",
        detail: "smart led tv",
        inches: 40,
        model: "c1234",
        price: 80000,
        isOnSale: false
    },
    {
        brandName: "sony",
        detail: "android hd tv",
        inches: 32,
        model: "b23455",
        price: 70000,
        isOnSale: true
    },
    {
        brandName: "TCL",
        detail: "smart hd tv ",
        inches: 42,
        model: "j1234",
        price: 68999,
        isOnSale: true
    }
];
console.log(bestTelevision);
