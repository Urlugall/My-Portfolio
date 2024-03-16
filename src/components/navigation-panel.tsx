'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import ModalGreeting from '../components/modal-greeting';


// Определение интерфейса Link
interface Link {
    id: number;
    title: string;
    href: string;
}

const NavigationPanel = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    // Использование интерфейса Link для типизации массива ссылок
    const links: Link[] = [
        { id: 1, title: 'Welcome', href: '/' },
        { id: 2, title: 'Contacts', href: '/contacts' },
        { id: 3, title: 'Projects', href: '/projects' },
        { id: 4, title: 'Skills', href: '/skills' },
    ];

    useEffect(() => {
        // Проверяем, был ли уже заход на сайт в текущей сессии
        if (!sessionStorage.getItem('isVisited')) {
            setIsFirstVisit(true);
            // Отмечаем, что пользователь уже зашел на сайт
            sessionStorage.setItem('isVisited', 'true');
        }
    }, []);

    // Находим текущий активный пункт меню синхронно
    const currentLink = links.find(link => pathname === link.href);
    const initialActivePage = currentLink ? currentLink.title : links[0].title;

    // Инициализация activePage с найденным заголовком
    const [activePage, setActivePage] = useState(initialActivePage);

    // Использование интерфейса Link для типизации параметра link в функции handleClick
    const handleClick = (link: Link) => {
        const pageName = link.title;
        setActivePage(pageName);
        router.push(link.href);
    };

    return (
        <div className='navigation-panel static z-1'>
            <ModalGreeting show={isFirstVisit}/>
            
            <div className="image-top-left"></div>
            <div className="image-bottom-right"></div>
            <div className="flex flex-col items-start space-y-4 w-fit relative z-2">
                <div className="bg-content overflow-hidden">
                    <h1 className="text-4xl font-bold">Illia Bodrov</h1>
                    <p className="text-base">multilingual developer</p>
                </div>
                <div className="regular-text overflow-hidden pr-3 pl-1">
                    {links.map((link) => (
                        <div key={link.id} onClick={() => handleClick(link)} className="block cursor-pointer" role="link" tabIndex={0}>
                            <motion.div
                                initial={{ translateX: activePage === link.title ? 10 : 0 }} // Устанавливает начальное смещение для активной ссылки
                                animate={{ translateX: 0 }} // Все ссылки возвращаются в исходное положение при анимации
                                whileHover={{ translateX: 10 }} // Эффект наведения мыши
                                transition={{ type: "spring", stiffness: 250 }}
                            >
                                {activePage === link.title ? ` • ${link.title}` : link.title}
                            </motion.div>
                        </div>
                    ))}
                    <div className="content-area"></div>
                </div>
            </div>
        </div>
    );
};

export default NavigationPanel;
