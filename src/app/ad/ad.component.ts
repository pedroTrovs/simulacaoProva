import { ManageAdsService } from './../manage-ads.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ad } from '../ad';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent {

  formGroupAd : FormGroup;
  ads: Ad[] = [];

  constructor (private service: ManageAdsService, formBuilder: FormBuilder){
    this.formGroupAd = formBuilder.group({
      id : [''],
      url : [''],
      descr : [''],
      tel : [''],
      email : ['']
    });
  }

  ngOnInit(): void {
    this.loadList();
  }

  save()
  {
    this.service.addAd(this.formGroupAd.value).subscribe({
      next: data => {
        this.ads.push(data);
        this.formGroupAd.reset();
      }
    });
  }

  loadList(){
    this.service.getAds().subscribe(
      {
          next:  data =>  this.ads = data,
          error: msg  => console.log("Erro ao chamar o endpoint " + msg)
      }
    );
  }
}
