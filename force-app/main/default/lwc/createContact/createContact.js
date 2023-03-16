import { LightningElement, api, wire, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.LastName';


export default class CreateRecordExample extends LightningElement {
 
  @track LastName = '';


  handleNameChange(event) {
    this.LastName = event.target.value;
  }


  handleCreateAccount() {
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.LastName;
    
    const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };
    createRecord(recordInput)
      .then(contact => {
        console.log('contact created: ', contact);
        // Perform additional logic here
      })
      .catch(error => {
        console.error('Error creating contact: ', error);
        // Handle error here
      });
  }
}
