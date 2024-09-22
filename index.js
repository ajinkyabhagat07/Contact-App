const User = require("./user/user")
const Contact = require("./Contact/contact");



console.log("start.............");


console.log("create Admin object");

let Admin = User.createAdmin("Ajinkya" , "bhagat");

console.log(Admin);

console.log("create staff1");
let staff1 = Admin.createStaff("Avishkar", "bhagat");
console.log(staff1);

console.log("create staff2");
let staff2 = Admin.createStaff("Ankush" , "pol");
console.log(staff2);

console.log("create staff3");
let staff3 = Admin.createStaff("nikhil" , "surve");
console.log(staff3);


//get staff by id
console.log("get staff by id");
console.log(Admin.getStaffById(2));

//update staff firstname  and print
console.log("update user by using id - firstname");
console.log(Admin.updateStaffById(3 , "firstName" , "lahu"));

//delete user by using id
Admin.deleteByid(4)

//log all the staff after deleting id = 4
console.log(Admin.getAllStaff());


//create contact for staff1
console.log("create three contacts into staff1 contacts");
let contact1 = staff1.createContact("ms" , "dhoni");
staff1.createContact("virat" , "kohli");
staff1.createContact("rohit" , "sharma");

//get All contacts of staff1
console.log("get All contacts");
console.log(staff1.getAllContacts());
console.log("contact with id 1");
console.log(staff1.getContactById(1));
//delete contact with id 2
console.log("delete contact with id 2");
staff1.deleteContactById(2);
console.log(staff1.getAllContacts());

//upadte firstName of ms
console.log("updated contact by changing the firstname");
console.log(staff1.updateContactByid(1 , "firstName" , "mahendra"));

//create new contact detail
console.log("create 3 new contact details in staff1");
staff1.newContactDetails(1,9404042927, "123@gmail.com");
staff1.newContactDetails(1,8208381535,"234@gmail.com");

console.log(staff1.getAllcontactDetails(1));

console.log("get contacts details if staff1 - contact 1 - details - ");

console.log(staff1.getContactsDetailById(1 , 1));

console.log("update contact 1 - details 1 - number ");

console.log(staff1.upadetContactDetailsById(1 , 1 , "number" , 9921429724));

console.log("update contact 1 - details 2 - email");

console.log(staff1.upadetContactDetailsById(1 , 2 , "email" , "amail@gmail.com"));

console.log("delete contact detail contact 1 - contact detail - 1");

staff1.deleteContactDetailsByID(1 , 1);

console.log(staff1.getAllcontactDetails(1));







