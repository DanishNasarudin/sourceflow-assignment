export type NavProps = {
  title: string;
  href?: string;
  anotherPage?: boolean;
};

export type Nav = NavProps & {
  children?: NavProps[];
};
