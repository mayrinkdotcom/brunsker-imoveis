import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-manage-properties',
  templateUrl: './manage-properties.component.html',
  styleUrls: ['./manage-properties.component.scss']
})
export class ManagePropertiesComponent implements OnInit, OnDestroy {

  properties: any = [];
  loading: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    private propertiesService: PropertiesService,
  ) { }

  ngOnInit(): void {
    try {
      this.loading = true;
      const sub = this.propertiesService.getAllProperties().subscribe(data => {
        this.loading = false;
        if (!!data) {
          this.properties = data;
          console.log("🚀 -> ManagePropertiesComponent -> ngOnInit -> res", this.properties);
        }
      });

      this.subscriptions.push(sub);
    } catch (error) {
      this.loading = false;
      console.error('ERROR on ManagePropertiesComponent');
      throw error;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
