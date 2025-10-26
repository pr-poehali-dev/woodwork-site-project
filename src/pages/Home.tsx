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
      icon: 'Award',
      title: 'Опыт более 10 лет',
      description: 'Сотни успешно завершенных проектов по отделке деревянных домов'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на все виды работ до 10 лет'
    },
    {
      icon: 'Users',
      title: 'Профессиональная бригада',
      description: 'Квалифицированные специалисты с многолетним опытом'
    },
    {
      icon: 'Leaf',
      title: 'Экологичные материалы',
      description: 'Используем только сертифицированные материалы премиум-класса'
    },
    {
      icon: 'Clock',
      title: 'Соблюдение сроков',
      description: 'Четкое планирование и выполнение работ точно в срок'
    },
    {
      icon: 'DollarSign',
      title: 'Прозрачное ценообразование',
      description: 'Фиксированная смета без скрытых платежей'
    }
  ];

  const stats = [
    { value: '500+', label: 'Завершенных проектов' },
    { value: '10', label: 'Лет на рынке' },
    { value: '100%', label: 'Довольных клиентов' },
    { value: '24/7', label: 'Поддержка клиентов' }
  ];

  const partners = [
    'Tikkurila', 'Belinka', 'Remmers', 'Zobel', 'Osmo', 'Teknos'
  ];

  const workSteps = [
    {
      number: '01',
      title: 'Консультация и выезд специалиста',
      description: 'Бесплатный выезд мастера на объект для оценки объема работ и консультации'
    },
    {
      number: '02',
      title: 'Составление сметы',
      description: 'Детальный расчет стоимости с учетом всех материалов и работ'
    },
    {
      number: '03',
      title: 'Заключение договора',
      description: 'Подписание договора с фиксацией сроков и стоимости работ'
    },
    {
      number: '04',
      title: 'Выполнение работ',
      description: 'Профессиональное выполнение всех этапов отделки с контролем качества'
    },
    {
      number: '05',
      title: 'Приемка и гарантия',
      description: 'Сдача объекта с предоставлением гарантийных документов'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative h-[700px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg)' }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
            <Badge className="mb-6 text-base px-6 py-2" variant="secondary">
              Профессиональная отделка с 2014 года
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Отделка деревянных домов<br />премиум-класса
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              в Москве и Московской области. Гарантия до 10 лет на все виды работ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <a href="#contact-form">Бесплатная консультация</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+74951234567">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексные решения для отделки и защиты вашего деревянного дома
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={service.image_url} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.short_description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to={`/services/${service.slug}`}>
                        Подробнее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Преимущества работы с профессионалами
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                    <Icon name={benefit.icon as any} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Прозрачный процесс от заявки до сдачи объекта
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              {workSteps.map((step, index) => (
                <div key={index} className="flex gap-6 mb-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Экспертные советы по уходу за деревянным домом
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={16} />
                      {article.date}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="px-0 group-hover:gap-2 transition-all">
                      <Link to={`/articles/${article.slug}`}>
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши партнеры</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Работаем с ведущими производителями материалов
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((partner, index) => (
                <div key={index} className="text-2xl md:text-3xl font-semibold text-muted-foreground hover:text-primary transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы наших клиентов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Более 500 довольных клиентов по всей Московской области
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl" style={{ minHeight: '600px' }}>
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

        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Получите бесплатную консультацию и расчет стоимости работ уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact-form">Оставить заявку</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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
