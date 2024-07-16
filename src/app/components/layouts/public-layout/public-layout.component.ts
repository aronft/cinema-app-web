import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FooterComponent } from '../../common/footer/footer.component'
import { RouterOutlet } from '@angular/router'
import { HeadingDirective } from '../../ui/atoms/heading/heading.directive'
import { HeaderComponent } from '../../common/header/header.component'
import { MovieCardComponent } from '../../../features/movies/components/movie-card/movie-card.component'
import { Movie } from '@/app/features/movies/interfaces/movie.interface'

@Component({
    selector: 'app-public-layout',
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        RouterOutlet,
        HeadingDirective,
        HeaderComponent,
        MovieCardComponent,
    ],
    templateUrl: './public-layout.component.html',
    styleUrl: './public-layout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayoutComponent {
    movie: Movie = {
        id: '1',
        title: 'title',
        overview: 'overview',
        poster_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PgrB4MCEeDumBGtDLd2ytBUway4aam7h3g&s',
        vote_average: 1,
        genres: ['genre1'],
        duration: 124,
    }
}
