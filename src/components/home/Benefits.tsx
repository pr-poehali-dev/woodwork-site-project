import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход и забота о качестве на каждом этапе работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
