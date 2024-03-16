'use client'
import { motion } from 'framer-motion';

interface Link {
    id: number;
    title: string;
    href: string;
  }
  
  const links: Link[] = [
    { id: 1, title: 'Email me', href: 'mailto:illia.bodrov@gmail.com' },
    { id: 2, title: 'LinkedIn page', href: 'https://www.linkedin.com/in/illia-bodrov/' },
    { id: 3, title: 'Github', href: 'https://github.com/Urlugall' }
  ];

const ContactsPanel = () => {
    return (
        <div className="page-content absolute bottom-0 right-0 text-right w-1/2 p-6 sm:p-8 md:p-10 lg:p-14">
        <div className="regular-text pl-3 flex flex-col">
          {links.map(link => (
            <motion.a
              key={link.id}
              href={link.href}
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 250 }}
              target="_blank"
            >
              {link.title}-
            </motion.a>
          ))}
        </div>
      </div>
    );
};

export default ContactsPanel;
