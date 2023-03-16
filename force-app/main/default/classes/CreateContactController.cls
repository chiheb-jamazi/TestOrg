public with sharing class CreateContactController {
    @AuraEnabled
    public static void createContact(String firstName, String lastName, String email) {
        Contact contact = new Contact();
        contact.FirstName = firstName;
        contact.LastName = lastName;
        contact.Email = email;
        insert contact;
    }

    @AuraEnabled
    public static List<Contact> getAllContacts() {
        return [SELECT Id, FirstName, LastName, Email FROM Contact];
    }
}
