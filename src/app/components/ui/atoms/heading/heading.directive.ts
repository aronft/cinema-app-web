import { cn } from '@/app/shared/utils/class-name'
import {
    Directive,
    HostBinding,
    Input,
    computed,
    input,
    signal,
} from '@angular/core'
import { ClassValue } from 'clsx'

type HeadingSizes = 'small' | 'medium' | 'large'

const HeadingSizes: Record<HeadingSizes, string> = {
    small: 'text-3xl',
    medium: 'text-4xl',
    large: 'text-5xl',
}

@Directive({
    selector: '[heading]',
    standalone: true,
    host: {
        '[class]': '_computedClass()',
    },
})
export class HeadingDirective {
    public readonly userClass = input<ClassValue>('', { alias: 'class' })
    // private readonly _settableClass = signal<ClassValue>('')
    protected _computedClass = computed(() =>
        cn(
            'text-blue-500',
            HeadingSizes[this._size()],
            // this._settableClass(),
            this.userClass()
        )
    )

    private readonly _size = signal<HeadingSizes>('small')
    @Input()
    set size(size: HeadingSizes) {
        this._size.set(size)
    }
}
