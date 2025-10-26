import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ServiceMaterialsProps {
  materials: { name: string; brand: string; description: string }[];
}

export default function ServiceMaterials({ materials }: ServiceMaterialsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Материалы</h2>
          <p className="text-xl text-muted-foreground">Используем только проверенные бренды</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {materials.map((material, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Package" size={24} className="text-primary" />
                  </div>
                  <Badge>{material.brand}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{material.name}</CardTitle>
                <CardDescription className="text-base">{material.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
