export type ButtonOrLinkProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      as: 'button';
    })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as: 'link';
    });
