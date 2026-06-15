import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '#', current: true },
    { name: 'Меню', href: '#', current: false },
    { name: 'О нас', href: '#', current: false },
    { name: 'Контакты', href: '#', current: false },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-zinc-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Логотип */}
        <a href="#" className="text-2xl font-bold tracking-wide text-white">
          <span className="text-yellow-500">Coffee</span>Space
        </a>

        {/* Десктопная навигация */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item.current ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Действия (Корзина, Кнопка и Бургер) */}
        <div className="flex items-center gap-4 md:gap-5">
          {/* Иконка корзины */}
          <a href="#" className="text-zinc-400 transition-all duration-200 hover:scale-105 hover:text-yellow-500" aria-label="Корзина">
            <svg xmlns="http://w3.org" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </a>
          
          {/* Кнопка действия */}
          <a href="#" className="hidden sm:inline-block rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-yellow-600">
            Заказать
          </a>

          {/* Кнопка мобильного меню (Бургер) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white md:hidden"
            aria-label="Открыть меню"
          >
            {isOpen ? (
              // Иконка Крестика
              <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              // Иконка Бургера
              <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      {isOpen && (
        <div className="border-t border-white/5 bg-zinc-950 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-base font-medium py-2 ${
                  item.current ? 'text-yellow-500' : 'text-zinc-400 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#" className="mt-2 block w-full text-center rounded-lg bg-yellow-500 py-3 text-base font-semibold text-black hover:bg-yellow-600 sm:hidden">
              Заказать
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
