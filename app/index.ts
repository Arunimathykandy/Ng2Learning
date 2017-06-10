const DELIMITER: string = ',';

class Customer {
    constructor(public id: number, public name: string,
        public address: string, public credit: number, public status: boolean,
        private licenseKey: string) { }

    public get LicenseKey() {
        return this.licenseKey.toUpperCase();
    }

    format(): string {
        return `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}`
    }

    static create(csvString: string): Customer {
        let splittedString: string[] = csvString.split(DELIMITER);

        return new Customer(
            parseInt(splittedString[0]),
            splittedString[1],
            splittedString[2],
            parseInt(splittedString[3]),
            !!splittedString[4],
            splittedString[5]);
    }
}

interface INameFormatter {
    format(firstName: string, lastName: string): string;
}

class USNameFormatter implements INameFormatter {
    format(firstName: string, lastName: string): string {
        return lastName + ", " + firstName;
    }
}

class IndianNameFormatter implements INameFormatter {
    format(firstName: string, lastName: string): string {
        return firstName + ' ' + lastName;
    }
}

class ModernIndianNameFormatter extends IndianNameFormatter {
    format(firstName: string, lastName: string): string {
        let modernName = `${super.format(firstName, lastName)}, Facebook: #facebook`;

        return modernName;
    }
}

function formatCustomer<T extends INameFormatter>(customer: Customer, formatter: T) {
    let validation: any = customer && formatter;

    if (!validation) {
        throw new Error('Invalid Input Specified!');
    }

    let customerName: string[] = customer.name.split(' ');

    let formattedName = formatter.format(customerName[0], customerName[1]);

    console.log(`Formatted Output : ${formattedName}`);
}

function X() {
    window.alert("Displaying Message Box ... Please Forgive me!");
}

document.querySelector("#Show").onclick = X;

let customer: Customer =
    Customer.create('10,Raj kumar,Bangalore,12000,true,LIC87349834');

formatCustomer<IndianNameFormatter>(
    customer, new ModernIndianNameFormatter());

document.querySelector("#result").innerHTML =
    customer.format();
