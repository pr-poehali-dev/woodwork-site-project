import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/cfd0acdf-c478-4632-a4b3-95ce2a9a0857', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время.',
        });
        setName('');
        setPhone('');
        setMessage('');
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
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Icon name="User" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-12 h-12"
              />
            </div>

            <div className="relative">
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

            <div className="relative">
              <Icon name="MessageSquare" size={20} className="absolute left-3 top-3 text-muted-foreground" />
              <Textarea
                placeholder="Комментарий (необязательно)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pl-12 min-h-[100px]"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}