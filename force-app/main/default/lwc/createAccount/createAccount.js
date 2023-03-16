import { LightningElement, api, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class CreateRecordExample extends LightningElement {
 
  name = '';
  industry = '';

  handleNameChange(event) {
    this.name = event.target.value;
  }

  handleIndustryChange(event) {
    this.industry = event.target.value;
  }

  handleCreateAccount() {
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.name;
    fields[INDUSTRY_FIELD.fieldApiName] = this.industry;
    const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
    createRecord(recordInput)
      .then(account => {
        console.log('Account created: ', account);
        // Perform additional logic here
      })
      .catch(error => {
        console.error('Error creating account: ', error);
        // Handle error here
      });
  }
}
