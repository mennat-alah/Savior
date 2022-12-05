import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signUp-Authority',
  templateUrl: './signUpA.component.html',
  styleUrls: ['./signUpA.component.css']
})
export class signUpAComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Name: any = ''
  Email: any = ''
  Pass: any = ''
  Address: any = ''
  City: any = ''
  WFrom: any
  WTo: any
  DAFrom: any
  DATo: any
  info: any
  response: any = ''

  addName(){
    const inputName = (<HTMLInputElement>document.getElementById('name'))
    this.Name = inputName.value
    console.log(this.Name)
  }

  addEmail(){
    const inputEmail = (<HTMLInputElement>document.getElementById('email'))
    this.Email = inputEmail.value
    console.log(this.Email)
  }

  addPassword(){
    const inputPass = (<HTMLInputElement>document.getElementById('password'))
    this.Pass = inputPass.value
    console.log(this.Pass)
  }

  addAddress(){
    const inputAddress = (<HTMLInputElement>document.getElementById('address'))
    this.Address = inputAddress.value
    console.log(this.Address)
  }

  addCity(){
    const inputCity = (<HTMLInputElement>document.getElementById('city'))
    this.City = inputCity.value
    console.log(this.City)
  }

  addWFrom(){
    const inputWFrom = (<HTMLInputElement>document.getElementById('wHourf'))
    this.WFrom = inputWFrom.value
    console.log(this.WFrom)
  }

  addWTo(){
    const inputWTo = (<HTMLInputElement>document.getElementById('wHourt'))
    this.WTo = inputWTo.value
    console.log(this.WTo)
  }

  addDAFrom(){
    const inputDAFrom = (<HTMLInputElement>document.getElementById('dTimeF'))
    this.DAFrom = inputDAFrom.value
    console.log(this.DAFrom)
  }

  addDATo(){
    const inputDATo = (<HTMLInputElement>document.getElementById('dTimeT'))
    this.DATo = inputDATo.value
    console.log(this.DATo)
  }

  validation(){
    if(this.Name==''){
      alert('Incomplete name')
      return false
    }
    else if(this.Email.length<11 && this.Pass.length<8){
      alert('INVALID EMAIL and PASSWORD');
      return false
    }
    else if(this.Email.length<11){
      alert('INVALID Email');
      return false
    }
    else if(this.Pass.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    else{
      let i = this.Email.length
      if(this.Email[i-1]!='m' || this.Email[i-2]!='o' || this.Email[i-3]!='c' || this.Email[i-4]!='.' || this.Email[i-5]!='l' || this.Email[i-6]!='i' || this.Email[i-7]!='a' || this.Email[i-8]!='m' || this.Email[i-9]!='E' || this.Email[i-10]!='@'){
        alert('your Email must ends with "@Email.com')
        return false;
      }
    }
    return true
  }

  INFO(): string{
    this.addName()
    this.addEmail()
    this.addPassword()
    this.addAddress()
    this.addCity()
    this.addWFrom()
    this.addWTo()
    this.addDAFrom()
    this.addDATo()

    var user = new Map<string, string>();
    user.set("Name" ,this.Name);
    user.set("Email" ,this.Email);
    user.set("Password", this.Pass);
    user.set("Address", this.Address);
    user.set("City", this.City);
    user.set("workingHoursFrom", this.WFrom);
    user.set("workingHoursTo", this.WTo);
    user.set("DonateAcceptFrom", this.DAFrom);
    user.set("DonateAcceptTo", this.DATo);

   let result = Object.fromEntries(user);
   this.info = JSON.stringify(result)
   console.log(this.info)
    return this.info
  }

  SIGNUP(Info: string){
    console.log("SIGNUP calling")
    this.http.get('http://localhost:4200/savior/signUpA',{  //this link is determined on back
      responseType:'text',
      params:{
        info: Info
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log(this.response)

      if(this.validation() && this.response=="Done"){
        this.router.navigateByUrl('/profileA')
      }
      else if(!this.validation()){
        console.log("validation return false")
      }
      else if(this.response==""){
        console.log("has not received Done from back")
      }
      else{
        alert("INVALID!")
      }

    })
  }

  NEXT(){
    this.INFO()
    if(this.validation()){
      console.log('valid');
    }
    else{
      console.log("not valid")
    }
    // console.log(this.response);
    // this.SIGNUP(this.INFO());
    // console.log(this.response);
  }

}