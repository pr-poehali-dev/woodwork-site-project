import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Benefits from '@/components/home/Benefits';
import Gallery from '@/components/home/Gallery';
import Process from '@/components/home/Process';
import Reviews from '@/components/home/Reviews';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';

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
        <Hero stats={stats} />
        <Services services={services} />
        <Benefits benefits={benefits} />
        <Gallery gallery={gallery} />
        <Process />
        <Reviews />
        <Blog articles={articles} />
        <CTA />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
