import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { LogoComponent } from '../../ui/atoms/logo/logo.component'

@Component({
    selector: 'cinema-footer',
    standalone: true,
    imports: [CommonModule, LogoComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    public year = new Date().getFullYear()
}
