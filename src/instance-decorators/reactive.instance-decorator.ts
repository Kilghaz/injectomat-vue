import { InstanceDecorator } from 'injectomat/types/instance-decorator';
import { reactive, shallowReactive } from 'vue';
import { ReactiveMetadata } from '../metadata/reactive.metadata';
import { ReactiveType } from '../types/reactive.type';

export const reactiveInstanceDecorator: InstanceDecorator = (target) => {
    const reactiveType = ReactiveMetadata.get(target);

    switch (reactiveType) {
        case ReactiveType.None:
            return target;
        case ReactiveType.Shallow:
            return shallowReactive(target as never);
        case ReactiveType.Deep:
            return reactive(target as never);
        default: return shallowReactive(target as never);
    }
};
