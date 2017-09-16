import { Component, OnInit   } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}
  `]
})
export class AppComponent implements OnInit {
userForm: FormGroup;  

constructor(private _formBuilder: FormBuilder){}

ngOnInit(){

  this.userForm=this._formBuilder.group({
    name:['abc',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    email:[],
    cities: [{name:"hyderabad"},
    {name:"kolkata"},
    {name:"noida"}] ,
    password:['null',Validators.pattern('^[A-Z][a-z]$')];


  })

}

/*userForm= new FormGroup({
  name:new FormControl("abc",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  email:new FormControl("abc@gmail.com"),
  cities:new FormControl( [{name:"hyderabad"},
    {name:"kolkata"},
    {name:"noida"}]), 
    password:new FormControl('null',Validators.pattern('^[1-9][0-9]{4}$'))
});*/
onSubmit(){
  console.log(this.userForm.value)
}


}
