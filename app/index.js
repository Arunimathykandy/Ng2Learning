const DELIMITER = ',';
class Customer {
    constructor(id, name, address, credit, status, licenseKey) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
        this.licenseKey = licenseKey;
    }
    get LicenseKey() {
        return this.licenseKey.toUpperCase();
    }
    format() {
        return `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}`;
    }
    static create(csvString) {
        let splittedString = csvString.split(DELIMITER);
        return new Customer(parseInt(splittedString[0]), splittedString[1], splittedString[2], parseInt(splittedString[3]), splittedString[4], splittedString[5]);
    }
}
class USNameFormatter {
    format(firstName, lastName) {
        return lastName + ", " + firstName;
    }
}
class IndianNameFormatter {
    format(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
}
class ModernIndianNameFormatter extends IndianNameFormatter {
    format(firstName, lastName) {
        let modernName = `${super.format(firstName, lastName)}, Facebook: #facebook`;
        return modernName;
    }
}
function formatCustomer(customer, formatter) {
    let validation = customer && formatter;
    if (!validation) {
        throw new Error('Invalid Input Specified!');
    }
    let customerName = customer.name.split(' ');
    let formattedName = formatter.format(customerName[0], customerName[1]);
    console.log(`Formatted Output : ${formattedName}`);
}
function X() {
    window.alert("Displaying Message Box ... Please Forgive me!");
}
document.querySelector("#Show").onclick = X;
let customer = Customer.create('10,Raj kumar,Bangalore,12000,true,LIC87349834');
formatCustomer(customer, new ModernIndianNameFormatter());
document.querySelector("#result").innerHTML =
    customer.format();
