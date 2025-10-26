import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const servicesData: Record<string, {
  title: string;
  description: string;
  fullContent: string;
  benefits: string[];
  process: { step: string; description: string }[];
  image: string;
}> = {
  pokraska: {
    title: 'Покраска деревянных домов',
    description: 'Профессиональная покраска деревянных домов с использованием экологически чистых материалов премиум-класса. Гарантируем долговечность и красоту покрытия.',
    fullContent: 'Покраска деревянного дома – это не только эстетическая процедура, но и важная защитная мера. Правильно выполненная покраска защищает древесину от влаги, УФ-излучения, грибка и плесени, продлевая срок службы вашего дома на десятилетия.',
    benefits: [
      'Защита от атмосферных воздействий',
      'Сохранение текстуры древесины',
      'Экологически чистые материалы',
      'Гарантия до 10 лет'
    ],
    process: [
      { step: 'Подготовка поверхности', description: 'Очистка и шлифовка древесины' },
      { step: 'Грунтование', description: 'Нанесение защитного грунта' },
      { step: 'Покраска', description: 'Нанесение краски в 2-3 слоя' },
      { step: 'Финишное покрытие', description: 'Защитный лак при необходимости' }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg'
  },
  shlifovka: {
    title: 'Шлифовка деревянных домов',
    description: 'Качественная шлифовка деревянных поверхностей современным оборудованием. Подготовка древесины к последующей обработке и покраске.',
    fullContent: 'Шлифовка – важнейший этап подготовки деревянного дома к покраске. Мы используем профессиональное оборудование, которое позволяет добиться идеально гладкой поверхности без повреждения структуры древесины.',
    benefits: [
      'Удаление старого покрытия',
      'Выравнивание поверхности',
      'Подготовка к покраске',
      'Сохранение структуры дерева'
    ],
    process: [
      { step: 'Осмотр поверхности', description: 'Оценка состояния древесины' },
      { step: 'Грубая шлифовка', description: 'Удаление старого покрытия' },
      { step: 'Финишная шлифовка', description: 'Получение гладкой поверхности' },
      { step: 'Очистка', description: 'Удаление пыли и мусора' }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg'
  },
  'teplyj-shov': {
    title: 'Теплый шов для деревянных домов',
    description: 'Герметизация швов деревянных домов специальными материалами. Защита от влаги, ветра и холода. Сохранение тепла в доме.',
    fullContent: 'Технология "теплый шов" – это современный способ герметизации межвенцовых швов в деревянных домах. Использование специальных герметиков обеспечивает надежную защиту от продувания, влаги и потери тепла.',
    benefits: [
      'Энергоэффективность',
      'Защита от влаги и ветра',
      'Эластичность материала',
      'Долговечность до 20 лет'
    ],
    process: [
      { step: 'Очистка швов', description: 'Удаление старого утеплителя' },
      { step: 'Укладка шнура', description: 'Установка уплотнительного шнура' },
      { step: 'Нанесение герметика', description: 'Заполнение шва герметиком' },
      { step: 'Финишная обработка', description: 'Выравнивание и покраска' }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg'
  },
  osada: {
    title: 'Осада для дверей и окон',
    description: 'Профессиональная установка и отделка дверных и оконных проемов в деревянных домах. Точная подгонка и эстетичный внешний вид.',
    fullContent: 'Осада (обсада) – это специальная конструкция в проемах деревянного дома, которая компенсирует усадку сруба и защищает окна и двери от деформации. Правильно установленная осада обеспечивает долговечность оконных и дверных конструкций.',
    benefits: [
      'Компенсация усадки дома',
      'Защита окон и дверей',
      'Эстетичный внешний вид',
      'Долговечность конструкции'
    ],
    process: [
      { step: 'Замеры проемов', description: 'Точные измерения всех проемов' },
      { step: 'Изготовление обсады', description: 'Подготовка элементов конструкции' },
      { step: 'Монтаж', description: 'Установка обсады в проем' },
      { step: 'Отделка', description: 'Финишная обработка и покраска' }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg'
  }
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Услуга не найдена</h1>
            <Button asChild>
              <a href="/">Вернуться на главную</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
              {service.description}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-12">{service.fullContent}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Преимущества</h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">Процесс работы</h2>
                  <ol className="space-y-4">
                    {service.process.map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{item.step}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" asChild>
                  <a href="#contact-form">Заказать услугу</a>
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
