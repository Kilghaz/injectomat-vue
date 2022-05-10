import { Token } from 'injectomat/types/token';
import { useModuleId } from './use-module-id';
import { useInjectionContainer } from './use-container';

export const useResolve = <T>(token: Token<T>): T => {
    const container = useInjectionContainer();
    const moduleId = useModuleId();
    return container.resolve(token, moduleId);
};
