import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  date: string;
}

interface BlogProps {
  articles: Article[];
}

export default function Blog({ articles }: BlogProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Советы и рекомендации по уходу за деревянным домом
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image_url} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  {article.date}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
