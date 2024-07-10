import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import(
                './components/layouts/public-layout/public-layout.component'
            ).then((m) => m.PublicLayoutComponent),
    },
    // {
    //     path: '/movies',
    // },
    // {
    //     path: '/theaters',
    // },
]
