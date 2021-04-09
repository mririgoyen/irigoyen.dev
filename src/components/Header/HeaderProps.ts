export interface HeaderProps {
  activeSection: {
    id: string
  };
  setActiveSection({ id }: { id: string }): void;
  showScroll: boolean;
}
