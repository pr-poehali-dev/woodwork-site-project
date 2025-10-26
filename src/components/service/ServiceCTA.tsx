import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Оставьте заявку и получите бесплатную консультацию и расчет стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              <a href="#contact-form">
                <Icon name="Send" size={20} className="mr-2" />
                Оставить заявку
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+74951234567">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
