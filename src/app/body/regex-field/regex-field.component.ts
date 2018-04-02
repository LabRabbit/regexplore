import { Component, OnInit } from '@angular/core';
import {RegexService} from '../../services/regex.service';

@Component({
  selector: 'app-regex-field',
  templateUrl: './regex-field.component.html',
  styleUrls: ['./regex-field.component.css']
})
export class RegexFieldComponent implements OnInit {
  regexInput:string="ashish[0-9]*";

  constructor(private regexService:RegexService) {}

  ngOnInit() {
    //to send initial regex to service if given any
        this.regexService.regexFieldChange(this.regexInput);
  }

  onKeyup(){
    //to send regex if any change happens
    this.regexService.regexFieldChange(this.regexInput);
  }
}
