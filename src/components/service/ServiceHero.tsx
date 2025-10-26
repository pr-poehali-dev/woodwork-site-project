import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <Badge className="mb-6 text-base px-4 py-2 bg-white/20 backdrop-blur-sm">
          <Icon name="Wrench" size={16} className="mr-2" />
          Профессиональная услуга
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact-form">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать услугу
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            <a href="#process">
              <Icon name="Info" size={20} className="mr-2" />
              Подробнее
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
