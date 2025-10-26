import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Алексей Иванов',
    location: 'Москва',
    rating: 5,
    text: 'Отличная работа! Покрасили дом быстро и качественно. Особенно порадовало внимание к деталям.',
    date: '15 октября 2024'
  },
  {
    name: 'Мария Петрова',
    location: 'Подмосковье',
    rating: 5,
    text: 'Делали теплый шов. Результат превзошел ожидания. Профессиональная команда.',
    date: '10 октября 2024'
  },
  {
    name: 'Сергей Смирнов',
    location: 'Тверская область',
    rating: 5,
    text: 'Шлифовка и покраска дома заняли 10 дней. Все четко по договору. Рекомендую!',
    date: '5 октября 2024'
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нас наши довольные клиенты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-4">{review.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
