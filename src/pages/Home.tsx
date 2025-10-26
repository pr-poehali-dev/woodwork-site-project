import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

interface Service {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  image_url: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  date: string;
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: 'Покраска деревянных домов',
        slug: 'pokraska',
        short_description: 'Профессиональная покраска с гарантией до 10 лет',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg'
      },
      {
        id: 2,
        title: 'Шлифовка деревянных домов',
        slug: 'shlifovka',
        short_description: 'Идеально гладкая поверхность',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg'
      },
      {
        id: 3,
        title: 'Теплый шов для деревянных домов',
        slug: 'teplyj-shov',
        short_description: 'Надежная защита от холода и влаги',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg'
      },
      {
        id: 4,
        title: 'Осада для дверей и окон',
        slug: 'osada',
        short_description: 'Точная подгонка проемов',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/80d33fd6-d7c3-4389-9113-c8ba590b7c1f.jpg'
      }
    ]);

    setArticles([
      {
        id: 1,
        title: 'Как выбрать краску для деревянного дома',
        slug: 'kak-vybrat-krasku',
        excerpt: 'Выбор правильной краски - залог долговечности покрытия деревянного дома.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
        date: '15 октября 2024'
      },
      {
        id: 2,
        title: 'Уход за деревянным домом',
        slug: 'uhod-za-domom',
        excerpt: 'Правильный уход продлит срок службы вашего деревянного дома.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg',
        date: '10 октября 2024'
      },
      {
        id: 3,
        title: 'Технология теплого шва',
        slug: 'tehnologiya-teplogo-shva',
        excerpt: 'Теплый шов - важный элемент защиты от холода.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg',
        date: '5 октября 2024'
      }
    ]);
  }, []);

  const stats = [
    { value: '500+', label: 'Домов защищено', icon: 'Home' },
    { value: '10 лет', label: 'Опыта работы', icon: 'Award' },
    { value: '98%', label: 'Довольных клиентов', icon: 'ThumbsUp' },
    { value: '24/7', label: 'Поддержка', icon: 'Headphones' }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Гарантия до 10 лет',
      description: 'Официальная гарантия на все виды работ'
    },
    {
      icon: 'Award',
      title: 'Премиум материалы',
      description: 'Работаем с Tikkurila, Belinka, Osmo'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Профессионалы с опытом 10+ лет'
    },
    {
      icon: 'BadgeCheck',
      title: 'Соблюдение сроков',
      description: 'Работаем строго по договору'
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Безопасные материалы для здоровья'
    },
    {
      icon: 'Sparkles',
      title: 'Качество работ',
      description: 'Контроль на каждом этапе'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
    'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg',
    'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg',
    'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/80d33fd6-d7c3-4389-9113-c8ba590b7c1f.jpg',
    'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg',
    'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
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
                        alt="Шлифовка дома"
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
                        alt="Осада окон"
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">
                <Icon name="Briefcase" size={16} className="mr-2" />
                Услуги
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Комплексная отделка деревянных домов
              </h2>
              <p className="text-xl text-muted-foreground">
                Все виды работ для защиты и красоты вашего дома
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={service.image_url} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90">{service.short_description}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Button variant="default" className="w-full" asChild>
                      <Link to={`/services/${service.slug}`}>
                        Подробнее об услуге
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">
                <Icon name="Star" size={16} className="mr-2" />
                Преимущества
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-muted-foreground">
                Надежность, качество и профессионализм в каждом проекте
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name={benefit.icon as any} size={32} className="text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">
                <Icon name="Image" size={16} className="mr-2" />
                Галерея работ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Наши проекты
              </h2>
              <p className="text-xl text-muted-foreground">
                Смотрите, как преображаются деревянные дома
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image}
                      alt={`Проект ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-lg font-bold">Проект #{index + 1}</div>
                      <div className="text-sm text-white/80">Деревянный дом</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg"
                      alt="До и после"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl pt-8">
                    <img 
                      src="https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg"
                      alt="Результат работы"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Badge className="mb-4">
                  <Icon name="Target" size={16} className="mr-2" />
                  О нас
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Профессионалы деревянного домостроения
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы занимаемся отделкой деревянных домов более 10 лет. За это время 
                  реализовали более 500 проектов по всей России.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Наша команда - это опытные мастера, которые знают всё о древесине 
                  и современных материалах для её защиты и обработки.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Работаем только с проверенными материалами',
                    'Соблюдаем технологию на каждом этапе',
                    'Даем реальные гарантии на выполненные работы',
                    'Делаем фотоотчеты о ходе работ'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" asChild>
                  <a href="#contact-form">
                    Заказать консультацию
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Блог
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Полезные статьи
              </h2>
              <p className="text-xl text-muted-foreground">
                Делимся опытом и знаниями о работе с деревом
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Icon name="Calendar" size={16} />
                      {article.date}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="px-0">
                      <Link to={`/articles/${article.slug}`}>
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Отзывы
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Что говорят наши клиенты
              </h2>
              <p className="text-xl text-muted-foreground">
                Более 500 счастливых владельцев деревянных домов
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-2xl">
                <iframe 
                  loading="lazy" 
                  style={{ width: '100%', height: '600px', border: 'none' }}
                  src="https://yandex.ru/maps-reviews-widget/45828270851?comments"
                  title="Отзывы на Яндекс.Картах"
                />
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы начать свой проект?
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
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  <a href="tel:+74951234567">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (495) 123-45-67
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
