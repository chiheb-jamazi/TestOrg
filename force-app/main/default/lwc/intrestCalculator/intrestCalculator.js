import { LightningElement, track } from 'lwc';

export default class IntrestCalculator extends LightningElement {

    @track currentOutput;
    principal;
    rateOfIntrest ;
    numberOfYears;

    principalChangeHandler(event){
        this.principal=parseInt(event.target.value)
    }

    timeChangeHandler(event){
        this.numberOfYears=parseInt(event.target.value)
    }
    rateIntrestChangeHandler(event){
        this.rateOfIntrest=parseInt(event.target.value)
    }


    calculateSiHandler()
    {
        this.currentOutput='Simple Intrest is  :'+(this.principal * this.rateOfIntrest * this.numberOfYears) /100 ;
    }


}