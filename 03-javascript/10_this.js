let person = {
    firstName: 'Saidur',
    lastName: 'Rahman',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person.fullName());
