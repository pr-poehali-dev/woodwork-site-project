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
        short_description: 'Покраска с гарантией до 10 лет',
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
        short_description: 'Надежная защита от холода',
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
        excerpt: 'Выбор правильной краски - залог долговечности покрытия деревянного дома. Разбираем виды красок, их особенности и лучшие бренды для разных климатических условий.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
        date: '15 октября 2024'
      },
      {
        id: 2,
        title: 'Уход за деревянным домом: советы экспертов',
        slug: 'uhod-za-domom',
        excerpt: 'Правильный уход продлит срок службы вашего деревянного дома на десятилетия. Узнайте о сезонных работах, профилактике и защите древесины.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg',
        date: '10 октября 2024'
      },
      {
        id: 3,
        title: 'Технология теплого шва: что важно знать',
        slug: 'tehnologiya-teplogo-shva',
        excerpt: 'Теплый шов - важный элемент защиты деревянного дома от холода и влаги. Подробно рассказываем о материалах, этапах работы и типичных ошибках.',
        image_url: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg',
        date: '5 октября 2024'
      }
    ]);
  }, []);

  const benefits = [
    {
      icon: 'Sprout',
      title: 'Экологичность',
      description: 'Используем только натуральные материалы, безопасные для здоровья и природы'
    },
    {
      icon: 'TreePine',
      title: 'Сохранение текстуры',
      description: 'Подчеркиваем естественную красоту древесины, сохраняя её уникальный рисунок'
    },
    {
      icon: 'Shield',
      title: 'Долговечность',
      description: 'Защита дерева от влаги, грибка и насекомых на долгие годы'
    },
    {
      icon: 'Heart',
      title: 'Ручная работа',
      description: 'Каждый проект выполняется с душой и вниманием к деталям'
    },
    {
      icon: 'Leaf',
      title: 'Дышащие покрытия',
      description: 'Материалы, которые позволяют дереву "дышать" и регулировать влажность'
    },
    {
      icon: 'Sun',
      title: 'Защита от УФ',
      description: 'Предотвращаем выцветание и разрушение древесины от солнечных лучей'
    }
  ];

  const stats = [
    { value: '500+', label: 'Домов защищено' },
    { value: '10', label: 'Лет заботы о природе' },
    { value: '100%', label: 'Натуральные материалы' },
    { value: '0', label: 'Вреда экологии' }
  ];

  const partners = [
    'Tikkurila', 'Belinka', 'Remmers', 'Zobel', 'Osmo', 'Teknos'
  ];

  const workSteps = [
    {
      icon: 'Search',
      title: 'Диагностика',
      description: 'Тщательный осмотр состояния древесины и подбор оптимальных решений'
    },
    {
      icon: 'Calculator',
      title: 'Расчет',
      description: 'Честная смета с учетом экологичных материалов премиум-класса'
    },
    {
      icon: 'FileText',
      title: 'Договор',
      description: 'Прозрачные условия и гарантии качества работ'
    },
    {
      icon: 'Hammer',
      title: 'Работа',
      description: 'Бережное выполнение с заботой о доме и окружающей среде'
    },
    {
      icon: 'CheckCircle2',
      title: 'Результат',
      description: 'Красивый защищенный дом и долгосрочная гарантия'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/40 via-background to-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg)' }}
          />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(140,180,130,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,220,196,0.15),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in py-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Icon name="Leaf" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">В гармонии с природой</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
              Защита и красота<br />
              <span className="text-primary">вашего деревянного дома</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Профессиональная отделка с использованием экологичных материалов. 
              Сохраняем душу дерева, защищаем на десятилетия.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="rounded-full text-base px-8 h-14 shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="#contact-form">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 border-2" asChild>
                <a href="tel:+74951234567">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Icon name="Sparkles" size={32} className="text-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексный уход за деревянным домом с заботой о природе
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={service.id} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group animate-scale-in rounded-3xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={service.image_url} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-primary/90 backdrop-blur-sm">
                        <Icon name="Leaf" size={14} className="mr-1" />
                        Эко-материалы
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.short_description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full rounded-full border-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <Link to={`/services/${service.slug}`}>
                        Подробнее
                        <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Icon name="Heart" size={32} className="text-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему мы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Наша философия — бережное отношение к дереву и природе
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="group p-8 rounded-3xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name={benefit.icon as any} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Icon name="Route" size={32} className="text-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Простой и прозрачный процесс от идеи до результата
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {workSteps.map((step, index) => (
                <div key={index} className="flex gap-6 mb-6 last:mb-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                      <Icon name={step.icon as any} size={32} />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-accent/30 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Icon name="BookOpen" size={32} className="text-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Делимся знаниями о правильном уходе за деревом
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <Card key={article.id} className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group animate-fade-in rounded-3xl bg-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-base leading-relaxed">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="px-0 text-base group-hover:gap-2 transition-all">
                      <Link to={`/articles/${article.slug}`}>
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Icon name="Handshake" size={32} className="text-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши партнеры</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Работаем с лидерами экологичных материалов
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {partners.map((partner, index) => (
                <div key={index} className="text-2xl md:text-3xl font-semibold text-muted-foreground/60 hover:text-primary transition-colors duration-300 cursor-default">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Icon name="MessageSquare" size={32} className="text-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Более 500 счастливых владельцев деревянных домов
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border-2 border-border" style={{ minHeight: '600px' }}>
                <iframe 
                  loading="lazy" 
                  style={{ width: '100%', height: '600px', border: 'none' }}
                  src="https://yandex.ru/maps-reviews-widget/45828270851?comments"
                  title="Отзывы на Яндекс.Картах"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block mb-6">
              <Icon name="Sparkles" size={40} className="mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Начнём вместе?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95 leading-relaxed">
              Получите бесплатную консультацию и узнайте, как мы можем помочь вашему дому
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full text-base px-8 h-14 shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="#contact-form">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Оставить заявку
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-8 h-14" asChild>
                <a href="tel:+74951234567">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
