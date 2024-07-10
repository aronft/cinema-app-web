import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FooterComponent } from '../../common/footer/footer.component'
import { RouterOutlet } from '@angular/router'
import { HeadingDirective } from '../../ui/atoms/heading/heading.directive'
import { HeaderComponent } from '../../common/header/header.component'

@Component({
    selector: 'app-public-layout',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        RouterOutlet,
        HeadingDirective,
        HeaderComponent,
    ],
    templateUrl: './public-layout.component.html',
    styleUrl: './public-layout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayoutComponent {}
