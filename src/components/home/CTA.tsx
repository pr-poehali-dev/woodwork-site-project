import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы защитить свой деревянный дом?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию и расчет стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8" asChild>
              <a href="#contact-form">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent border-2 hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+79999999999">
                <Icon name="PhoneCall" size={20} className="mr-2" />
                +7 (999) 999-99-99
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
