import { Pipe, type PipeTransform } from '@angular/core'

@Pipe({
    name: 'DurationTime',
    standalone: true,
})
export class DurationTimePipe implements PipeTransform {
    transform(value: number): string {
        const hours = Math.floor(value / 60)
        const minutes = value % 60
        if (minutes === 0) {
            return `${hours}h`
        }
        return `${hours}h ${value % 60}m`
    }
}
