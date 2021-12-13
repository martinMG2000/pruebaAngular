import { Routes } from '@angular/router';
import { ClientesComponent } from './components/Clientes/Clientes.component';
import { EmpresaComponent } from './components/Empresa/Empresa.component';

export const AppRoutes: Routes = [
    { path: 'clientes', component: ClientesComponent },
    { path: 'empresa', component: EmpresaComponent },
];