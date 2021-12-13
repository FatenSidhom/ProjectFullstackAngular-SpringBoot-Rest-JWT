import { Component, OnInit } from '@angular/core';
import {promotions} from '../../Core/models/promotions'
import { PromotionsService } from 'src/app/Core/Services/promotions.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  list:promotions[];
  promotions:promotions;
  modalOpen:boolean=false;
  arrIndex:any = [];


  constructor(private promotionService:PromotionsService) { }

  ngOnInit(): void {
    this.promotionService.getAllPromo().subscribe((data:promotions[])=>this.list=data); 
    this.promotions = new promotions();
   }
  deletePromo(id:number,p:promotions) {
    let i = this.list.indexOf(p);
    this.promotionService.deleteCategory(id).subscribe();
      this.list.splice(i,1);
  }
  updateForm(id:number,f:NgForm) {
    this.promotionService.getById(id).subscribe((data:promotions)=>{
      this.promotions=data;
    })
  }
    postPromoDetails(f:NgForm,p:promotions) {
    let i=0;
    this.arrIndex = this.list.map(data=>data.id)
    console.log(this.arrIndex);
    i = this.arrIndex.indexOf(p.id);
    this.promotions.name = f.value['name'];
    this.promotions.startingDate = f.value['startingDate'];
    this.promotions.endingDate = f.value['endingDate'];
    this.promotions.value = f.value['value'];
    if(i==-1) {
      this.promotionService.addPromo(this.promotions).subscribe(res=>{
        console.log(res);
      this.promotionService.getAllPromo().subscribe((data:promotions[])=>{
        this.list = data;
      })
      f.reset();
      p.id=0;
      this.modalOpen=true;
      setTimeout(()=>{
        this.modalOpen=false;
      },2000);
      },
      );}
    else {
      this.promotionService.update(p.id,p).subscribe(res=>{
        console.log(res);
      this.promotionService.getAllPromo().subscribe((data:promotions[])=>{
        this.list = data;
      })
      f.reset();
      i=0;
      p.id=0;
      this.modalOpen=true;
      setTimeout(()=>{
        this.modalOpen=false;
      },2000);
      })
    }
  }


}