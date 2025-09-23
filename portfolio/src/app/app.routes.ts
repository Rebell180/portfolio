import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { Legalnoticepage } from './legalnoticepage/legalnoticepage';
import { Projectdetailpage } from './projectdetailpage/projectdetailpage';

export const routes: Routes = [ 
    { path: '', component: Landingpage },
    { path: 'legalnotice', component: Legalnoticepage},
    { path: 'projectdetail', component: Projectdetailpage}
];
