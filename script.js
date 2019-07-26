"use strict";

class AddressBook {
    constructor(){
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        let newContact = new Contact(name, email, phone, relation);
        this.contacts.push(newContact);
    }
    delete(name) {
        const index = this.contacts.findIndex(contact => {
            return contact.name === name;
        });
        if (index >= 0) {
            this.contacts.splice(index, 1);
        }
    }
    print() {
        for(let i = 0; i<this.contacts.length; i++) {
            console.log('for: ', this.contacts[i])
        }

        // for(const contact of this.contacts) {
        //     console.log('for of: ', contact);
        // }

        // this.contacts.forEach(contact => {
        //     console.log('for each: ', contact);
        // });

    }

}


class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}


const addressBook = new AddressBook();

addressBook.print();
addressBook.add("Sugene", "sugene@gmail.com", "385-1983", "me");
addressBook.print();
addressBook.add("Mom", "mom@gmail.com", "482-7792", "mother");
addressBook.add("Meghana", "meghana@gmail.com", "392-1690", "sister");
addressBook.add("Dad", "dad@gmail.com", "482-1434", "father");
addressBook.print();
addressBook.delete("Dad");
addressBook.print();