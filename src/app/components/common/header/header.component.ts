import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { LogoComponent } from '../../ui/atoms/logo/logo.component'
import { Menu } from './menu.interface'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'cinema-header',
    standalone: true,
    imports: [CommonModule, LogoComponent, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    private readonly _menu = signal<boolean>(false)
    public menu: Menu = [
        {
            label: 'Películas',
            url: '/movies',
        },
        {
            label: 'Cines',
            url: '/theaters',
        },
    ]

    public toggleMenu() {
        this._menu.set(!this._menu())
    }

    get menuState(): boolean {
        return this._menu()
    }
}
