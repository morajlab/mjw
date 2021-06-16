const { Nav, NavLink } = await import('shards-react');
type INavLink = typeof NavLink;
type INav = typeof Nav;

export interface IDropdownItemProps {
  title: string;
  onClick?: Function;
  disabled?: boolean;
  state?: any;
  stateFunction?: Function;
}
export interface INavItemProps extends INavLink {
  title: string;
  dropdownItems?: IDropdownItemProps[];
  stateFunction?: Function;
  openState?: boolean;
}
export interface INavbarProps extends INav {
  items: INavItemProps[];
}
export interface INavbarStyleProps {}
