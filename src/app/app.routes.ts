import { Routes } from '@angular/router';
import { Viewport } from './viewport/viewport';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Testimonials } from './testimonials/testimonials';
import { Achievement } from './achievement/achievement';
import { Contact } from './contact/contact';
import { Rewards } from './rewards/rewards';
import { Vision } from './vision/vision';
import { PracticeArea } from './practice-area/practice-area';

export const routes: Routes = [
    {
        path: '', component: Viewport,
        children: [
            { path: '', component: Homepage },
            { path: 'about', component: About },
            { path: 'gallery', component: Gallery },
            { path: 'testimonials', component: Testimonials },
            { path: 'achievements', component: Achievement },
            { path: 'contact', component: Contact },
            { path: 'rewards', component: Rewards },
            { path: 'vision', component: Vision },
            { path: 'practice', component: PracticeArea },
        ]
    }
];
