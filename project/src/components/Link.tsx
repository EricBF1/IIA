import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth',
        });
      }
      
      // Call the original onClick if it exists
      if (onClick) {
        onClick(e);
      }
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
};