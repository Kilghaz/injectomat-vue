import { App, ComponentPublicInstance } from 'vue';
import { Context, InjectionContainer, InstanceManager, Module, ProviderContainer } from 'injectomat';
import { ErrorHandler } from '../types/error-handler.type';
import { AppErrorHandler, DIContainerToken, DIContextToken } from '../tokens';
import { reactiveInstanceDecorator } from '../instance-decorators/reactive.instance-decorator';

export class ModulePlugin {
    private instanceManager: InstanceManager = new InstanceManager();
    private providerContainer: ProviderContainer = new ProviderContainer();
    private context: Context = new Context();

    private errorHandler = false;
    private reactive = false;

    private readonly container: InjectionContainer = new InjectionContainer(
        this.instanceManager,
        this.providerContainer,
        this.context,
    );

    constructor(private readonly module: Module) {
    }

    install(app: App): void {
        this.setupReactive();
        this.container.registerRootModule(this.module);
        app.provide(DIContextToken, this.context);
        app.provide(DIContainerToken, this.container);
        this.setupErrorHandler(app);
    }

    private setupErrorHandler(app: App) {
        if (!this.errorHandler) {
            return;
        }

        const errorHandlers = this.container.resolveAll<ErrorHandler>(AppErrorHandler);
        app.config.errorHandler = (err, instance, info) => {
            errorHandlers.forEach((it) => {
                it.handleError(err as Error, instance as ComponentPublicInstance, info);
            });
        }
    }

    private setupReactive() {
        if (!this.reactive) {
            return;
        }

        this.instanceManager = new InstanceManager(
            [reactiveInstanceDecorator]
        );
    }

    withErrorHandler(): ModulePlugin {
        this.errorHandler = true;
        return this;
    }

    withReactive(): ModulePlugin {
        this.reactive = true;
        return this;
    }

}
