import { EventEmitter } from '@angular/core';
import { SiteFeed } from './sitefeed.model';


export class SiteFeedService {
    SiteFeedSelected = new EventEmitter<SiteFeed>();

    private sitefeeds : SiteFeed[] = [
        new SiteFeed ('E11808383s', 
        'Since grade school, there is one word that always shows up in science class: hypothesis. We learned what hypotheses are through learning about the scientific method. ', 
        'https://steemitimages.com/DQmazeisMMzLsezVDVvxoHythfiGpWQU4bKierPfd2ogs7i/science-03.png', 
        'Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.Since grade school, there is one word that always shows up in science class: hypothesis. We learned what hypotheses are through learning about the scientific method. '),
        new SiteFeed ('E11808383s', 
        'Since grade school, there is one word that always shows up in science class: hypothesis. We learned what hypotheses are through learning about the scientific method. ', 
        'https://steemitimages.com/DQmazeisMMzLsezVDVvxoHythfiGpWQU4bKierPfd2ogs7i/science-03.png', 
        'Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.Since grade school, there is one word that always shows up in science class: hypothesis. We learned what hypotheses are through learning about the scientific method. ')
    ]

    getsiteFeed(){
        return this.sitefeeds.slice();
    }
}


