import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServiceBenefitsProps {
  benefits: { icon: string; title: string; description: string }[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Преимущества</h2>
          <p className="text-xl text-muted-foreground">Почему стоит выбрать нашу услугу</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
