import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceAboutProps {
  fullContent: string;
  features: { label: string; value: string }[];
}

export default function ServiceAbout({ fullContent, features }: ServiceAboutProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">О услуге</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{fullContent}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{feature.value}</CardTitle>
                <CardDescription>{feature.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
