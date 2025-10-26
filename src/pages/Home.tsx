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
  icon: string;
  price: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  date: string;
  category: string;
}

interface Project {
  id: number;
  title: string;
  location: string;
  area: string;
  year: string;
  image_url: string;
  services: string[];
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: 'Покраска деревянных домов',
        slug: 'pokraska',
        short_description: 'Профессиональная покраска с гарантией до 10 лет',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
        icon: 'Paintbrush',
        price: 'от 450 ₽/м²'
      },
      {
        id: 2,
        title: 'Шлифовка деревянных домов',
        slug: 'shlifovka',
        short_description: 'Идеально гладкая поверхность премиум качества',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg',
        icon: 'Hammer',
        price: 'от 350 ₽/м²'
      },
      {
        id: 3,
        title: 'Теплый шов',
        slug: 'teplyj-shov',
        short_description: 'Надежная защита от холода и влаги',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg',
        icon: 'Thermometer',
        price: 'от 280 ₽/пог.м'
      },
      {
        id: 4,
        title: 'Осада для дверей и окон',
        slug: 'osada',
        short_description: 'Точная подгонка проемов под ключ',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/80d33fd6-d7c3-4389-9113-c8ba590b7c1f.jpg',
        icon: 'Home',
        price: 'от 3500 ₽/шт'
      }
    ]);

    setProjects([
      {
        id: 1,
        title: 'Современный дом в Подмосковье',
        location: 'Московская область',
        area: '220 м²',
        year: '2024',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg',
        services: ['Покраска', 'Шлифовка', 'Теплый шов']
      },
      {
        id: 2,
        title: 'Загородный коттедж',
        location: 'Калужская область',
        area: '180 м²',
        year: '2024',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg',
        services: ['Покраска', 'Осада окон']
      },
      {
        id: 3,
        title: 'Дом у озера',
        location: 'Тверская область',
        area: '160 м²',
        year: '2023',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
        services: ['Шлифовка', 'Покраска']
      }
    ]);

    setArticles([
      {
        id: 1,
        title: 'Как выбрать краску для деревянного дома',
        slug: 'kak-vybrat-krasku',
        excerpt: 'Выбор правильной краски - залог долговечности покрытия деревянного дома. Разбираем виды красок.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
        date: '15 октября 2024',
        category: 'Советы'
      },
      {
        id: 2,
        title: 'Уход за деревянным домом',
        slug: 'uhod-za-domom',
        excerpt: 'Правильный уход продлит срок службы вашего деревянного дома на десятилетия.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg',
        date: '10 октября 2024',
        category: 'Инструкции'
      },
      {
        id: 3,
        title: 'Технология теплого шва',
        slug: 'tehnologiya-teplogo-shva',
        excerpt: 'Теплый шов - важный элемент защиты деревянного дома от холода и влаги.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg',
        date: '5 октября 2024',
        category: 'Технологии'
      }
    ]);
  }, []);

  const features = [
    {
      icon: 'Award',
      title: '500+ проектов',
      description: 'Реализовано по всей России',
      number: '01'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: '10+ лет работы с деревом',
      number: '02'
    },
    {
      icon: 'BadgeCheck',
      title: 'Гарантия качества',
      description: 'До 10 лет на все работы',
      number: '03'
    },
    {
      icon: 'Palette',
      title: 'Премиум материалы',
      description: 'Tikkurila, Belinka, Osmo',
      number: '04'
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Защита древесины',
      description: 'Профессиональные составы защищают дерево от влаги, грибка, УФ-лучей и насекомых на долгие годы'
    },
    {
      icon: 'Sparkles',
      title: 'Эстетика',
      description: 'Подчеркиваем натуральную текстуру дерева, создавая уникальный внешний вид вашего дома'
    },
    {
      icon: 'Timer',
      title: 'Быстрые сроки',
      description: 'Работаем четко по графику. Типовой дом 150м² обрабатываем за 7-10 дней'
    },
    {
      icon: 'Receipt',
      title: 'Прозрачное ценообразование',
      description: 'Фиксированная смета после осмотра. Никаких скрытых платежей и доплат в процессе'
    },
    {
      icon: 'Wrench',
      title: 'Современное оборудование',
      description: 'Используем профессиональные инструменты и технологии для идеального результата'
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Работаем только с безопасными материалами на водной основе, сертифицированными в России'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Бесплатная консультация по телефону или в офисе',
      icon: 'Phone'
    },
    {
      number: '02',
      title: 'Выезд мастера',
      description: 'Осмотр объекта, замеры, рекомендации',
      icon: 'MapPin'
    },
    {
      number: '03',
      title: 'Смета и договор',
      description: 'Детальная смета с ценами, подписание договора',
      icon: 'FileText'
    },
    {
      number: '04',
      title: 'Выполнение работ',
      description: 'Работаем по графику с фотоотчетами',
      icon: 'Hammer'
    },
    {
      number: '05',
      title: 'Приемка',
      description: 'Проверяете качество, подписываете акт',
      icon: 'CheckCircle2'
    }
  ];

  const stats = [
    { value: '500+', label: 'Завершенных проектов' },
    { value: '10', label: 'Лет на рынке' },
    { value: '98%', label: 'Довольных клиентов' },
    { value: '24/7', label: 'Поддержка клиентов' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b7355_1px,transparent_1px),linear-gradient(to_bottom,#8b7355_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <Badge className="mb-6 text-sm px-4 py-2">
                <Icon name="Sparkles" size={14} className="mr-2" />
                Профессиональная отделка деревянных домов
              </Badge>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
                Ваш дом.<br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Наша забота.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Покраска, шлифовка, теплый шов для деревянных домов. 
                10 лет опыта. Гарантия до 10 лет. Премиум материалы.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <Button size="lg" className="text-lg h-14 px-8 shadow-xl hover:shadow-2xl transition-all" asChild>
                  <a href="#contact-form">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить расчет
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2" asChild>
                  <a href="#services">
                    <Icon name="Layers" size={20} className="mr-2" />
                    Наши услуги
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                      {feature.number}
                    </div>
                    <CardHeader className="relative">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon name={feature.icon as any} size={24} />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-sm">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <Badge className="mb-4">
                <Icon name="Briefcase" size={14} className="mr-2" />
                Услуги
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Комплексная отделка деревянных домов
              </h2>
              <p className="text-xl text-muted-foreground">
                Все услуги по защите и обработке древесины. От подготовки до финишного покрытия.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.id} className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="md:flex">
                    <div className="md:w-2/5 h-80 md:h-auto overflow-hidden relative">
                      <img 
                        src={service.image_url} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon name={service.icon as any} size={28} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-lg mb-6">{service.short_description}</p>
                        <div className="flex items-center gap-2 mb-6">
                          <Icon name="TrendingUp" size={18} className="text-primary" />
                          <span className="text-2xl font-bold text-primary">{service.price}</span>
                        </div>
                      </div>
                      <Button variant="default" size="lg" asChild className="w-full group-hover:bg-secondary transition-colors">
                        <Link to={`/services/${service.slug}`}>
                          Подробнее
                          <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-br from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <Badge className="mb-4">
                <Icon name="Star" size={14} className="mr-2" />
                Преимущества
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-muted-foreground">
                Профессиональный подход к каждому проекту
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon name={advantage.icon as any} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-4">{advantage.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{advantage.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <Badge className="mb-4">
                <Icon name="Target" size={14} className="mr-2" />
                Процесс работы
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Как мы работаем
              </h2>
              <p className="text-xl text-muted-foreground">
                Простой и прозрачный путь от заявки до сдачи объекта
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {process.map((step, index) => (
                <div key={index} className="relative flex gap-8 mb-12 last:mb-0 group">
                  {index !== process.length - 1 && (
                    <div className="absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                  )}
                  
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Icon name={step.icon as any} size={40} className="text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-card border-2 border-primary flex items-center justify-center font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-6">
                    <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Цифры, которые говорят сами за себя
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-lg text-secondary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <Badge className="mb-4">
                <Icon name="Image" size={14} className="mr-2" />
                Портфолио
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Наши проекты
              </h2>
              <p className="text-xl text-muted-foreground">
                Реализованные объекты по всей России
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-500 group">
                  <div className="h-80 overflow-hidden relative">
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {project.services.map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-0">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <span className="flex items-center gap-1">
                          <Icon name="MapPin" size={14} />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Home" size={14} />
                          {project.area}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-br from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <Badge className="mb-4">
                <Icon name="BookOpen" size={14} className="mr-2" />
                Блог
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Полезные статьи
              </h2>
              <p className="text-xl text-muted-foreground">
                Делимся опытом и знаниями о работе с деревом
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={article.id} className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="px-0 text-base">
                      <Link to={`/articles/${article.slug}`}>
                        Читать статью
                        <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <Badge className="mb-4">
                <Icon name="MessageSquare" size={14} className="mr-2" />
                Отзывы
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Что говорят наши клиенты
              </h2>
              <p className="text-xl text-muted-foreground">
                500+ довольных владельцев деревянных домов
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden border-2">
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

        <section className="py-32 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
                <Icon name="Rocket" size={40} />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Готовы начать?
              </h2>
              <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
                Оставьте заявку и получите бесплатный расчет стоимости работ для вашего дома
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg h-14 px-8 shadow-xl">
                  <a href="#contact-form">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить расчет
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-primary">
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
