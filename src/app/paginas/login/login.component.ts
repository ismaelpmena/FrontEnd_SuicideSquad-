import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  siteKey:string;

  constructor() { 
    this.siteKey="6Lc6MrMcAAAAAOMYRNKQJTZ5KGNLP6DPtsu3T-Nq";

  }
  ngOnInit(): void {

  }

}
