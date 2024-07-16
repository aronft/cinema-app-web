import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core'
import { Movie } from '../../interfaces/movie.interface'
import { DurationTimePipe } from '../../pipes/duration-time.pipe'

@Component({
    selector: 'movie-card',
    standalone: true,
    imports: [CommonModule, DurationTimePipe],
    templateUrl: './movie-card.component.html',
    styleUrl: './movie-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnInit {
    @Input() movie!: Movie

    ngOnInit(): void {
        if (this.movie === undefined) {
            throw new Error('the movie is required')
        }
    }
}
