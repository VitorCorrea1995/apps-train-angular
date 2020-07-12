import { FooterComponent } from './footer.component';

describe('Footer Component', () => {
    it('Exists', () => {
        expect(FooterComponent).toBeDefined();
    });

    it('Can be built', () => {
        const component = new FooterComponent();

        expect(component instanceof FooterComponent).toBe(true);
    })

    describe('General', () => {
        let component: FooterComponent;

        beforeEach(() => {
            component = new FooterComponent();
        });

        it('Returns the current year', () => {
            const currentYear = new Date().getFullYear();

            const result = component.currentYear;

            expect(result).toBe(currentYear);
        })
    })
})