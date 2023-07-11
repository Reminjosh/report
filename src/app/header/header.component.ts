import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(private router: Router) { }

  product = new FormGroup({
    productType: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  productType(event: any) {
    const value = event.target.value;
    console.log("Product Value:", value)
    if (value == "அரிசி") {
      this.router.navigate(["/"]);
    } else if (value == "து.பருப்பு") {
      this.router.navigate(["/dhal"]);
    } else if (value == "எண்ணெய்") {
      this.router.navigate(["/oil"]);
    } else if (value == "பா.பருப்பு") {
      this.router.navigate(["/paasiParuppu"]);
    } else if (value == "கொ.கடலை") {
      this.router.navigate(["/kondaKadalai"]);
    } else if (value == "உப்பு") {
      this.router.navigate(["/salt"]);
    }
  }

}
