import { ComponentPublicInstance } from 'vue';

export type ErrorHandler = {
    handleError(error: Error, instance: ComponentPublicInstance, info: unknown): void;
}
