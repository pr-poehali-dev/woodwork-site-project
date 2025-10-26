import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroProps {
  stats: { value: string; label: string; icon: string }[];
}

export default function Hero({ stats }: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary text-primary-foreground">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Профессиональная отделка деревянных домов
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Защита и красота вашего 
              <span className="text-primary"> деревянного дома</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Покраска, шлифовка, теплый шов и осада для окон и дверей. 
              Работаем с премиум материалами. Гарантия до 10 лет.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg h-14 px-8" asChild>
                <a href="#contact-form">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                <a href="#services">
                  <Icon name="Briefcase" size={20} className="mr-2" />
                  Наши услуги
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={stat.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg"
                    alt="Покраска дома"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg"
                    alt="Шлифовка"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg"
                    alt="Теплый шов"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/80d33fd6-d7c3-4389-9113-c8ba590b7c1f.jpg"
                    alt="Осада"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
