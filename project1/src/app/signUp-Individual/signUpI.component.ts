import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signUp-Individual',
  templateUrl: './signUpI.component.html',
  styleUrls: ['./signUpI.component.css']
})
export class signUpIComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  Id: any = ''
  Pass: any = ''
  Address: any = ''
  City: any = ''
  Weight: any = ''
  Age: any = ''
  Btype: any = ''
  info: any
  response: any = ''


  addID(){
    const inputId = (<HTMLInputElement>document.getElementById('id'))
    this.Id = inputId.value
    console.log(this.Id)
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

  addWeight(){
    const inputWeight = (<HTMLInputElement>document.getElementById('weight'))
    this.Weight = inputWeight.value
    console.log(this.Weight)
  }

  addAge(){
    const inputAge = (<HTMLInputElement>document.getElementById('age'))
    this.Age = inputAge.value
    console.log(this.Age)
  }

  addBtype(){
    const inputBtype = (<HTMLInputElement>document.getElementById('bType'))
    this.Btype = inputBtype.value
    console.log(this.Btype)
  }


  validation(){
    if(this.Id==''){
      alert('Incomplete name')
      return false
    }
    else if(this.Id.length<14 && this.Pass.length<8){
      alert('INVALID ID and PASSWORD');
      return false
    }
    else if(this.Id.length<14){
      alert('INVALID ID');
      return false
    }
    else if(this.Pass.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    return true
  }

  INFO(): string{
    this.addID()
    this.addPassword()
    this.addAddress()
    this.addCity()
    this.addWeight()
    this.addAge()
    this.addBtype()
    

    var user = new Map<string, string>();
    user.set("Name" ,this.Id);
    user.set("Password", this.Pass);
    user.set("Address", this.Address);
    user.set("City", this.City);
    user.set("workingHoursFrom", this.Weight);
    user.set("workingHoursTo", this.Age);
    user.set("DonateAcceptFrom", this.Btype);

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
        this.router.navigateByUrl('/profileI')
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