import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Arte Madera</h3>
            <p className="text-sm opacity-90">
              Профессиональная отделка деревянных домов в Москве и Московской области
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/services/pokraska" className="hover:underline opacity-90">
                Покраска домов
              </Link>
              <Link to="/services/shlifovka" className="hover:underline opacity-90">
                Шлифовка домов
              </Link>
              <Link to="/services/teplyj-shov" className="hover:underline opacity-90">
                Теплый шов
              </Link>
              <Link to="/services/osada" className="hover:underline opacity-90">
                Осада для окон и дверей
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-2 text-sm opacity-90">
              <a href="tel:+74951234567" className="flex items-center gap-2 hover:underline">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </a>
              <a href="tel:+79269876543" className="flex items-center gap-2 hover:underline">
                <Icon name="Phone" size={16} />
                +7 (926) 987-65-43
              </a>
              <a href="mailto:info@artemadera.ru" className="flex items-center gap-2 hover:underline">
                <Icon name="Mail" size={16} />
                info@artemadera.ru
              </a>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва и Московская область
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform" aria-label="VK">
                <Icon name="Share2" size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Telegram">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="WhatsApp">
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Arte Madera. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
