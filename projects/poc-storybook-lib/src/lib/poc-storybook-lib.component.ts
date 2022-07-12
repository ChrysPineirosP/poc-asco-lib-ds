import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-poc-storybook-lib',
  template: `
    <input type="button" class="button" value="Boton Pagar">
  `,
  styles: [
    `.button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
    `
  ]
})
export class PocStorybookLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
