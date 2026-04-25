import { NavMenuComponent } from './nav-menu.component';

describe('NavMenuComponent', () => {
  it('should start collapsed', () => {
    const component = new NavMenuComponent();

    expect(component.isExpanded).toBe(false);
  });

  it('should toggle expanded state', () => {
    const component = new NavMenuComponent();

    component.toggle();
    expect(component.isExpanded).toBe(true);

    component.toggle();
    expect(component.isExpanded).toBe(false);
  });

  it('should always collapse menu', () => {
    const component = new NavMenuComponent();
    component.isExpanded = true;

    component.collapse();

    expect(component.isExpanded).toBe(false);
  });
});
