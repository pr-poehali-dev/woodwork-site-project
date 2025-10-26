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

    try {
      const response = await fetch('https://functions.poehali.dev/050f7d45-2508-40d0-82c8-9edf61b5d5e4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время.',
        });
        setPhone('');
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Не удалось отправить заявку. Попробуйте позже.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Проверьте подключение к интернету.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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