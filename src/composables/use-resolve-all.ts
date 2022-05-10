import { Token } from 'injectomat/types/token';
import { useInjectionContainer } from './use-container';

export const useResolveAll = <T>(token: Token<T>): T[] => {
    const container = useInjectionContainer();
    return container.resolveAll(token);
};
