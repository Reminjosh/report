import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-paasi-paruppu',
  templateUrl: './paasi-paruppu.component.html',
  styleUrls: ['./paasi-paruppu.component.scss']
})
export class PaasiParuppuComponent implements OnInit {
  isModalShow = true;
  riceGramsValue: number = 0;
  dhalGramsValue: number = 0;
  oilGramsValue: number = 0;
  paParuppuGramsValue: number = 0;
  koKadalaiGramsValue: number = 0;
  saltGramsValue: number = 0;

  constructor() { }

  budgetCalculate = new FormGroup({
    startCount: new FormControl("", [Validators.required]),
    studentsCount: new FormControl("", [Validators.required]),
    days: new FormControl("", [Validators.required]),
    totalKgs: new FormControl("", [Validators.required]),
    givenKgs: new FormControl("", [Validators.required]),
    remainingKgs: new FormControl("", [Validators.required]),
    schoolType: new FormControl("", [Validators.required]),
    credit: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
  }

  kgsCalculate() {
    const studentsCount = this.budgetCalculate.get("studentsCount")?.value
    const startCount = this.budgetCalculate.get("startCount")?.value
    const days = this.budgetCalculate.get("days")?.value
    const credit = this.budgetCalculate.get("credit")?.value
    const paruppuValue = localStorage.getItem("paParuppuGram")
    const remainingTotal =  Number(startCount) - (Number(studentsCount) * Number(days) * Number(paruppuValue)) + Number(credit);
    this.budgetCalculate.controls["remainingKgs"].setValue((remainingTotal).toFixed(2) + " Kgs")
    const total = Number(startCount) + Number(credit);
    this.budgetCalculate.controls["totalKgs"].setValue((total).toFixed(2) + " Kgs");
    const givenTotal = Number(studentsCount) * Number(days) * Number(paruppuValue);
    this.budgetCalculate.controls["givenKgs"].setValue((givenTotal).toFixed(2) + " Kgs");
  }

  /*schoolType(event: any) {
    const value = event.target.value;
    console.log("value:", value)
    if (value == "Hr'Sec") {
      this.riceGramsValue = 15.00;
      this.dhalGramsValue = 1.50;
      this.oilGramsValue = .30;
      this.paParuppuGramsValue = 2.00;
      this.koKadalaiGramsValue = 2.00;
      this.saltGramsValue = .25;
      localStorage.setItem("riceGram", JSON.stringify(this.riceGramsValue))
      localStorage.setItem("dhalGram", JSON.stringify(this.dhalGramsValue))
      localStorage.setItem("oilGram", JSON.stringify(this.oilGramsValue))
      localStorage.setItem("paParuppuGram", JSON.stringify(this.paParuppuGramsValue))
      localStorage.setItem("koKadalaiGram", JSON.stringify(this.koKadalaiGramsValue))
      localStorage.setItem("saltGram", JSON.stringify(this.saltGramsValue))
    } else if (value == "Middle") {
      this.riceGramsValue = 10.00;
      this.dhalGramsValue = 1.50;
      this.oilGramsValue = .30;
      this.paParuppuGramsValue = 2.00;
      this.koKadalaiGramsValue = 2.00;
      this.saltGramsValue = .19;
      localStorage.setItem("riceGram", JSON.stringify(this.riceGramsValue))
      localStorage.setItem("dhalGram", JSON.stringify(this.dhalGramsValue))
      localStorage.setItem("oilGram", JSON.stringify(this.oilGramsValue))
      localStorage.setItem("paParuppuGram", JSON.stringify(this.paParuppuGramsValue))
      localStorage.setItem("koKadalaiGram", JSON.stringify(this.koKadalaiGramsValue))
      localStorage.setItem("saltGram", JSON.stringify(this.saltGramsValue))
    }
  }*/
}
