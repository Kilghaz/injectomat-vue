import { getCurrentInstance } from 'vue';
import { useContext } from './use-context';

export const useModuleId = (): string | undefined => {
    const instance = getCurrentInstance();
    const context = useContext();

    if (!instance) {
        return;
    }

    return context.getModuleIdForComponentId(instance.type.name ?? "");
};
