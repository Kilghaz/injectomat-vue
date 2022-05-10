import { ReactiveMetadata } from '../metadata/reactive.metadata';
import { ReactiveType } from '../types/reactive.type';

export function reactive(type: ReactiveType): ClassDecorator {
    return function (target) {
        ReactiveMetadata.set(target, type);
    }
}
