import React from 'react';

interface LinksProps {
  title: string;
  links: Array<{ href: string; text: string }>;
}

export default function QuickLinks({ title, links }: LinksProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-indigo-200 hover:text-white">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}