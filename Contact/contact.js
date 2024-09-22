
const contact_Details = require("../ContactDetails/contactDetails.js")


class Contact{
    static contactID = 0;
    static #allContacts = [];


    constructor(contactID, firstName, lastName, isActive, contactDetails) {
        this.contactID = contactID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
        this.contactDetails = contactDetails;
    }

    static createContact(firstName, lastName) {
        try {
            
            if (typeof firstName !== "string") {
                throw new Error("First name is invalid");
            }

            if (typeof lastName !== "string") {
                throw new Error("Last name is invalid");
            }

            let newContact = new Contact(++Contact.contactID, firstName, lastName, true, []);
            Contact.#allContacts.push(newContact);
            return newContact;

        } catch (error) {
            throw error;
        }
    }

    static getContactByUsingId(id , staffContacts){
        for(let i=0; i<staffContacts.length; i++){
            if(staffContacts[i].contactID == id){
                return staffContacts[i];
            }
        }

        return null;
    }

    static updateContactByUsingId(parameterToUpdate , value , foundContact){
       try {
        switch(parameterToUpdate){
            case "firstName":
                foundContact.upadateFirstName(value);
                break;
            case "lastName":
                foundContact.updateLastNmae(value);
                break;
            case "isActive":
                foundContact.updateIsActive(value);
                break;
            default:
                throw new Error("parameter is invalid")
        }
       } catch (error) {
         throw error;
       }
    }

    upadateFirstName(value){
        try {
            if(typeof value != "string"){
                throw new Error("value is invalid")
            }
            this.firstName = value;
        } catch (error) {
            throw error;
        }
    }

    updateLastNmae(value){
        try {
            if(typeof value != "string"){
                throw new Error("value is invalid")
            }
            this.lastName = value;
        } catch (error) {
            throw error;
        }
    }

    updateIsActive(value){
        try {
            if(typeof value != "string"){
                throw new Error("value is invalid")
            }
            this.isActive = value;
        } catch (error) {
            throw error;
        }
    }

    static getAllContacts(userID) {
        return Contact.#allContacts.filter(contact => contact.userID === userID && contact.isActive);
    }

    newContactByDetails(number , email){

        try {

            if(typeof number != "number"){
                throw new Error("invalid number")
            }
    
            if(typeof email != "string"){
                throw new Error("invalid email");
            }

            let contactDetailsID = this.contactDetails.length;

       
           let newContactDetail = contact_Details.newContactDetail(++contactDetailsID , number , email);
           this.contactDetails.push(newContactDetail);

        } catch (error) {
            throw error;
        }
        
    }

    getAllcontactDetails(){
        return this.contactDetails;
    }

    getContactDetails(contactDetailID){
        try {

            if(typeof contactDetailID != "number"){
                throw new Error("contact Details id is invalid");
            }
            
            if(contactDetailID < 0){
                throw new Error("contact details id must be greater than 0");
            }
            let AllContactDetails = this.contactDetails;
            
            let foundDetail = contact_Details.getContactDetails(contactDetailID ,AllContactDetails);

            return foundDetail;
            
        } catch (error) {
            throw error;
        }
    }

    getupdatedContactDetails(contactDetailID , parameterToUpdate , value){
        try {
            if(typeof contactDetailID != "number"){
                throw new Error("contact Details id is invalid");
            }
            
            if(contactDetailID < 0){
                throw new Error("contact details id must be greater than 0");
            }

            if(contactDetailID > this.contactDetails.length){
                throw new Error("id does not exist");
            }

            let reqDetail = this.getContactDetails(contactDetailID);
            contact_Details.updateDetails(reqDetail , parameterToUpdate , value);
            return reqDetail;

            
        } catch (error) {
            throw error;
        }

    }

    deleteContactDetails(contactDetailID){
        try {
            if(typeof contactDetailID != "number"){
                throw new Error("contact Details id is invalid");
            }
            
            if(contactDetailID < 0){
                throw new Error("contact details id must be greater than 0");
            }

            if(contactDetailID > this.contactDetails.length){
                throw new Error("id does not exist");
            }
            
            this.contactDetails = contact_Details.deleteContactDetail(contactDetailID , this.contactDetails);
            
        } catch (error) {
           throw error; 
        }
    }


}


module.exports = Contact;