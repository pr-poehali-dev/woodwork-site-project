import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Icon name="Home" size={32} />
            <span>Arte Madera</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              Галерея
            </Link>
            <Link to="/cases" className="text-foreground hover:text-primary transition-colors">
              Кейсы
            </Link>
            <Link to="/articles" className="text-foreground hover:text-primary transition-colors">
              Статьи
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-primary font-semibold">
              <Icon name="Phone" size={20} />
              +7 (495) 123-45-67
            </a>
            <Button asChild>
              <a href="#contact-form">Заказать звонок</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors py-2">
                Главная
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors py-2">
                Услуги
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-primary transition-colors py-2">
                Галерея
              </Link>
              <Link to="/cases" className="text-foreground hover:text-primary transition-colors py-2">
                Кейсы
              </Link>
              <Link to="/articles" className="text-foreground hover:text-primary transition-colors py-2">
                Статьи
              </Link>
              <Link to="/contacts" className="text-foreground hover:text-primary transition-colors py-2">
                Контакты
              </Link>
              <a href="tel:+74951234567" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </a>
              <Button className="w-full" asChild>
                <a href="#contact-form">Заказать звонок</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
