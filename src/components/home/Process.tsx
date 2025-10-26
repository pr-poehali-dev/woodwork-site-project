import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const processSteps = [
  {
    icon: 'Phone',
    title: 'Заявка',
    description: 'Оставьте заявку на сайте или позвоните нам'
  },
  {
    icon: 'Calculator',
    title: 'Замер',
    description: 'Выезд специалиста и расчет стоимости'
  },
  {
    icon: 'FileText',
    title: 'Договор',
    description: 'Заключение договора с фиксацией цены'
  },
  {
    icon: 'Wrench',
    title: 'Работы',
    description: 'Выполнение работ в установленные сроки'
  },
  {
    icon: 'CheckCircle',
    title: 'Сдача',
    description: 'Приемка работ и выдача гарантии'
  }
];

export default function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и понятный процесс от заявки до сдачи объекта
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
