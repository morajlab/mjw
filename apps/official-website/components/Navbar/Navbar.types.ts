const { Nav, NavLink } = await import('shards-react');
type INavLink = typeof NavLink;
type INav = typeof Nav;

export interface INavItemProps extends INavLink {
  title: string;
}
export interface INavbarProps extends INav {
  items: INavItemProps[];
}
export interface INavbarStyleProps {}
