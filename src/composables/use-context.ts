import { Context } from 'injectomat';
import { inject } from 'vue';
import { DIContextToken } from '../tokens';

export const useContext = (): Context => {
    const context = inject<Context>(DIContextToken);
    if (!context) {
        throw new Error("No dependency injection context setup.")
    }
    return context;
};
