import { LightningElement, api } from 'lwc';
import createContact from '@salesforce/apex/CreateContactController.createContact';

export default class CreateContactController extends LightningElement {
    @api firstName;
    @api lastName;
    @api email;

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleCreateContact() {
        createContact({ firstName: this.firstName, lastName: this.lastName, email: this.email })
            .then(result => {
                console.log('Contact created successfully');
                // reset fields after successful creation
                this.firstName = '';
                this.lastName = '';
                this.email = '';
            })
            .catch(error => {
                console.error('Error creating contact', error);
            });
    }
}
