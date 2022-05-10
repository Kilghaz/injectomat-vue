import { InjectionContainer } from 'injectomat';
import { inject } from 'vue';
import { DIContainerToken } from '../tokens';

export const useInjectionContainer = (): InjectionContainer => {
    const container = inject<InjectionContainer>(DIContainerToken);
    if (!container) {
        throw new Error("No dependency injection container setup.")
    }
    return container;
};
