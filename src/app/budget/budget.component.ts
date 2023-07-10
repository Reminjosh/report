import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  constructor() { }

  budgetCalculate = new FormGroup({
    rice: new FormControl("", [Validators.required]),
    dhal: new FormControl("", [Validators.required]),
    totalKgs: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
  }

  kgsCalculate() {
    const rice = this.budgetCalculate.get("rice")?.value
    const dhal = this.budgetCalculate.get("dhal")?.value
    const total = Number(rice) + Number(dhal);
    this.budgetCalculate.controls["totalKgs"].setValue(total)
  }

}
