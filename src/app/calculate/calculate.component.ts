import {Component, OnInit} from '@angular/core';

const thisTemplate = `<div>
    <h1>Calculate Component</h1>
    <input #txtNum1 (input)="onchange(txtNum1.value)" placeholder="number1" type="text"/>
    <input #txtNum2 (input)="onchange(txtNum2.value)" placeholder="number2" type="text"/>
    <input [value]=sum type="text" placeholder="sum using property binding"/>
    <input value={{sum}} type="text" placeholder="sum using interpolation"/>
    <button (click)="calculateInVar(txtNum1.value,txtNum2.value)">Add 2 numbers</button>
    <h3 *ngIf="show">the sum is {{sum}}</h3>
    <h3 *ngIf="!show">the sum will come on click</h3>
    </div>
`

@Component({
    selector: 'app-calculate',
    template: thisTemplate,
    styles: []
})
export class CalculateComponent implements OnInit {
    sum: number = 0
    show = false

    constructor() {
    }

    ngOnInit(): void {
    }

    calculateInVar(num1: any, num2: any) {
        this.sum = parseFloat(num1) + parseFloat(num2)
        this.show = true
        // alert('sum ' + this.sum)
    }

    onchange(val: any) {
        console.log('input value', val)
    }


}
