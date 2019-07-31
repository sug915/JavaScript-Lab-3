"use strict";

class AddressBook {
    constructor(){
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        let newContact = new Contact(name, email, phone, relation);
        this.contacts.push(newContact);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        // const index = this.contacts.findIndex(contact => {
        //     return contact.name === name;
        // });
        // if (index >= 0) {
        //     this.contacts.splice(index, 1);
        // }
    }
    // print() {
    //     for(let i = 0; i<this.contacts.length; i++) {
    //         console.log('for: ', this.contacts[i])
    //     }

        // for(const contact of this.contacts) {
        //     console.log('for of: ', contact);
        // }

        // this.contacts.forEach(contact => {
        //     console.log('for each: ', contact);
        // });

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




document.querySelector("form").addEventListener("submit", handleAdd);

const newContacts = [];


function handleAdd(event) {
    event.preventDefault();

 
    newContacts.push({
        name: event.target[0].value,
        email: event.target[1].value,
        phone: event.target[2].value,
        relation: event.target[3].value

    });
  
    display();
}

function display() {
    document.querySelector(".contact_container").innerHTML = "";
   
    newContacts.forEach((contact, index) => {
        const newEntry = document.createElement("div");
        newEntry.classList.add("contact_box");
        newEntry.innerHTML = `<p>Name: ${contact.name}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone: ${contact.phone}</p>
        <p>Relation: ${contact.relation}</p>
        <i class="fa fa-trash" index="${index}" aria-hidden="true"></i>`;
        document.querySelector(".contact_container").append(newEntry);
    
       

        
        document.querySelector("form").addEventListener("submit", handleAdd);
        document.querySelector(".contact_container").addEventListener("click", handleDelete);
       
        
    })

    
   
    

}





document.querySelector("form").addEventListener("submit", handleAdd);
document.querySelector(".contact_container").addEventListener("click", handleDelete);



function handleDelete(event) {
    // event.preventDefault();
    // console.log("delete button was clicked");
    // console.dir(event.target.attributes[0].value);
    newContacts.splice(Number(event.target.attributes[0].value), 1);
    display();
    
}


