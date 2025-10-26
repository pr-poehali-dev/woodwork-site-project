import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceProcessProps {
  process: { step: string; description: string; details: string }[];
}

export default function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
          <p className="text-xl text-muted-foreground">Пошаговая технология выполнения</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {process.map((item, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{item.step}</CardTitle>
                    <CardDescription className="text-lg mb-3">{item.description}</CardDescription>
                    <p className="text-muted-foreground">{item.details}</p>
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
