import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '@capacitor/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/models/storeState.interface';
import * as fromDetailActions from "../../store/product-review-list/product-review-list.actions";
@Component({
  selector: 'app-dialog-observations-end',
  templateUrl: './dialog-observations-end.component.html',
  styleUrls: ['./dialog-observations-end.component.scss'],
})
export class DialogObservationsEndComponent implements OnInit {
  @Input() set productId(productIdValue) {
    this._productId=productIdValue;
  }
  constructor(public navParams:NavParams,private modalController:ModalController,private store:Store<AppStateInterface>,
    private alertController:AlertController) { }
  _productId:string;
  ngOnInit() {
    
  }

  observations:string="";

  cancel(){
    this.modalController.dismiss();
  }

  async end(){
    console.log("Observations: "+this.observations);
    if(this.observations!=""){
    this.store.dispatch(
        fromDetailActions.closeOvenProduct({ productId: this._productId ,observations:this.observations})
      );
      this.modalController.dismiss();
    }else{
      const alert =await this.alertController.create({header:"Error",message:"El campo observaciones no debe ser vacio",buttons:["Aceptar"]});
      alert.present();
    }
  }

}
