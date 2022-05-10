import { Module } from 'injectomat';
import { createApp, defineComponent } from 'vue';
import { ModulePlugin, useResolve } from '../../src';

describe("ModulePlugin", () => {

    it("should setup dependency injection", () => {
        const tokenFixture = "TestToken";
        const valueFixture = "SomeValue";
        const componentName = "test-component";

        const TestComponent = defineComponent({
            name: componentName,
            setup() {
                return {
                    resolvedValue: useResolve(tokenFixture)
                }
            },
            render() {
                return this.resolvedValue;
            }
        });

        const module: Module = new Module({
            components: [
                TestComponent
            ],
            providers: [
                { token: tokenFixture, useValue: valueFixture },
            ]
        });

        const app = createApp(TestComponent);
        app.use(
            new ModulePlugin(module)
                .withErrorHandler()
                .withReactive()
        );
        const rootElement = document.createElement("div");
        app.mount(rootElement);

        expect(rootElement.innerHTML).toEqual(valueFixture);
    });

});
