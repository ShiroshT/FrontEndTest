import { Component, OnInit, Input } from '@angular/core';
import { SiteFeed } from '../sitefeed.model';
import { SiteFeedService } from '../sitefeed.service';

@Component({
  selector: 'app-sitefeedelement',
  templateUrl: './sitefeedelement.component.html',
  styleUrls: ['./sitefeedelement.component.css']
})
export class SitefeedelementComponent implements OnInit {
  @Input () sitefeed: SiteFeed;

  constructor(private sitefeedservice : SiteFeedService) { }

  ngOnInit() {
    this.sitefeedservice.SiteFeedSelected.emit(this.sitefeed)
  }

}
