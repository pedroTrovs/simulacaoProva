import { ManageAdsService } from './../manage-ads.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent {

  formGroupAd : FormGroup;

  constructor (private service: ManageAdsService, formBuilder: FormBuilder){
    this.formGroupAd = formBuilder.group({
      id : [''],
      url : [''],
      descr : [''],
      tel : [''],
      email : ['']
    });
  }

  save()
  {
    this.service.addAd(this.formGroupAd.value).subscribe({
      next: data => {
        this.formGroupAd.reset();
      }
    });
  }
}
