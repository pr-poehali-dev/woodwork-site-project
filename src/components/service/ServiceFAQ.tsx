import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServiceFAQProps {
  faq: { question: string; answer: string }[];
}

export default function ServiceFAQ({ faq }: ServiceFAQProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="HelpCircle" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-3">{item.question}</CardTitle>
                    <CardDescription className="text-base">{item.answer}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
