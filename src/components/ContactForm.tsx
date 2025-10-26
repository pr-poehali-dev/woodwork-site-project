import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function ContactForm() {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setPhone('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Оставьте номер телефона, и мы перезвоним в течение 15 минут
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Icon name="Phone" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="pl-12 h-12"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="sm:w-auto w-full"
            >
              {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  );
}
