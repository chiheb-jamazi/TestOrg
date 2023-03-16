import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Type', fieldName: 'Type' }
];

export default class AccountList extends LightningElement {
    @track accounts = [];
    @track columns = columns;

    
    RetrieveAccounts() {
        
    getAccounts().then(result => {
        if (result) {
            console.log('result',result)
            this.accounts = result;
    }})
}

}