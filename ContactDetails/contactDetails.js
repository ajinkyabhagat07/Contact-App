

class contactDetails{
    constructor(contactDetailID , number , email){
        this.contactDetailID = contactDetailID;
        this.number = number;
        this.email = email;
    }


    static newContactDetail(contactDetailID , number , email){
        try {
            if(typeof contactDetailID != "number"){
                throw new Error("contactdetail id is invalid")
            }
    
            if(contactDetailID < 0){
                throw new Error("contactDetail id should greater than 0")
            }
    
            if(typeof number != "number"){
                throw new Error("invalid number")
            }
    
            if(typeof email != "string"){
                throw new Error("invalid email");
            }
    
    
            let newContact = new contactDetails(contactDetailID , number , email);
            
            return newContact;
    
        } catch (error) {
            throw error;
        }
        

    }

    static getContactDetails(contactdeID , AllContactsDetails){
            try {
                if(typeof contactdeID != "number"){
                    throw new Error("contact Details id is invalid");
                }
                
                if(contactdeID < 0){
                    throw new Error("contact details id must be greater than 0");
                }


                for(let i=0; i<AllContactsDetails.length; i++){
                    
                    if(AllContactsDetails[i].contactDetailID == contactdeID){
                        return AllContactsDetails[i];
                    }
                }

                return null;
                
            } catch (error) {
                throw error;
            }
    }

    static deleteContactDetail(id , AllcontactDetails){
        try {
            if(typeof id != "number"){
                throw new Error("contact Details id is invalid");
            }
            
            if(id < 0){
                throw new Error("contact details id must be greater than 0");
            }
            if(AllcontactDetails.length < id){
                throw new Error("id does not exist")
            }
        
            let newDetails = AllcontactDetails.filter(contact => contact.contactDetailID != id);
            return newDetails;
        } catch (error) {
            throw error;
        }
    }

    static updateDetails(reqDetail , parameterToUpdate , value){
        try {
            switch(parameterToUpdate){
                case "number":
                    reqDetail.updateNumber(value);
                    break;
                case "email":
                    reqDetail.updateEmail(value);
                    break;
                default:
                    throw new Error("parametr is invalid");
            }
            return reqDetail;
        } catch (error) {
            throw error;
        }
    }

    updateNumber(value){
       try {
         if(typeof value != "number"){
            throw new Error("value is invalid");
         }
         this.number = value;
       } catch (error) {
         throw error;
       }
    }

    updateEmail(value){
        try {
            if(typeof value != "string"){
                throw new Error("value is invalid");
             }

             this.email = value;
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = contactDetails;