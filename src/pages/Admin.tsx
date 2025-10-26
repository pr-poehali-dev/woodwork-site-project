import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface ContactRequest {
  id: number;
  phone: string;
  created_at: string;
  status: string;
  notes: string | null;
}

export default function Admin() {
  const { toast } = useToast();
  const [phoneMain, setPhoneMain] = useState('+7 (495) 123-45-67');
  const [phoneSecondary, setPhoneSecondary] = useState('+7 (926) 987-65-43');
  const [contactRequests, setContactRequests] = useState<ContactRequest[]>([]);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [contactFilter, setContactFilter] = useState<string>('');

  useEffect(() => {
    fetchContactRequests();
  }, [contactFilter]);

  const fetchContactRequests = async () => {
    setLoadingContacts(true);
    try {
      const url = contactFilter 
        ? `https://functions.poehali.dev/ff332474-3781-42e4-92c4-ff59c6e63d43?status=${contactFilter}`
        : 'https://functions.poehali.dev/ff332474-3781-42e4-92c4-ff59c6e63d43';
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.requests) {
        setContactRequests(data.requests);
      }
    } catch (error) {
      console.error('Failed to fetch requests:', error);
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить заявки',
        variant: 'destructive'
      });
    } finally {
      setLoadingContacts(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; className: string }> = {
      'new': { label: 'Новая', className: 'bg-primary text-primary-foreground' },
      'processing': { label: 'В работе', className: 'bg-yellow-500 text-white' },
      'completed': { label: 'Обработана', className: 'bg-green-500 text-white' }
    };
    
    const config = variants[status] || { label: status, className: 'bg-gray-500 text-white' };
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleSaveSettings = () => {
    toast({
      title: 'Настройки сохранены',
      description: 'Все изменения успешно применены'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Панель управления</h1>
            <p className="text-muted-foreground">Управление контентом сайта</p>
          </div>

          <Tabs defaultValue="contacts" className="space-y-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-8 w-full">
              <TabsTrigger value="contacts">Заявки</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
              <TabsTrigger value="services">Услуги</TabsTrigger>
              <TabsTrigger value="gallery">Галерея</TabsTrigger>
              <TabsTrigger value="cases">Кейсы</TabsTrigger>
              <TabsTrigger value="articles">Статьи</TabsTrigger>
              <TabsTrigger value="partners">Партнеры</TabsTrigger>
              <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
            </TabsList>

            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Заявки с сайта</CardTitle>
                  <CardDescription>Управление обращениями клиентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 flex gap-3 flex-wrap">
                    <Button 
                      variant={contactFilter === '' ? 'default' : 'outline'}
                      onClick={() => setContactFilter('')}
                    >
                      Все заявки
                    </Button>
                    <Button 
                      variant={contactFilter === 'new' ? 'default' : 'outline'}
                      onClick={() => setContactFilter('new')}
                    >
                      <Icon name="Bell" size={16} className="mr-2" />
                      Новые
                    </Button>
                    <Button 
                      variant={contactFilter === 'processing' ? 'default' : 'outline'}
                      onClick={() => setContactFilter('processing')}
                    >
                      <Icon name="Clock" size={16} className="mr-2" />
                      В работе
                    </Button>
                    <Button 
                      variant={contactFilter === 'completed' ? 'default' : 'outline'}
                      onClick={() => setContactFilter('completed')}
                    >
                      <Icon name="CheckCircle2" size={16} className="mr-2" />
                      Обработаны
                    </Button>
                  </div>

                  {loadingContacts ? (
                    <div className="text-center py-12">
                      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                      <p className="mt-4 text-muted-foreground">Загрузка...</p>
                    </div>
                  ) : contactRequests.length === 0 ? (
                    <div className="py-12 text-center">
                      <Icon name="Inbox" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-xl text-muted-foreground">Заявок пока нет</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {contactRequests.map((request) => (
                        <Card key={request.id} className="border-2">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <CardTitle>Заявка #{request.id}</CardTitle>
                                  {getStatusBadge(request.status)}
                                </div>
                                <CardDescription>
                                  <div className="flex items-center gap-2">
                                    <Icon name="Calendar" size={14} />
                                    {formatDate(request.created_at)}
                                  </div>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-3">
                              <Icon name="Phone" size={20} className="text-primary" />
                              <a 
                                href={`tel:${request.phone}`}
                                className="text-lg font-semibold hover:text-primary transition-colors"
                              >
                                {request.phone}
                              </a>
                            </div>
                            {request.notes && (
                              <div className="mt-4 p-3 bg-accent/50 rounded-lg text-sm">
                                {request.notes}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                      <Icon name="BarChart3" size={24} className="text-primary" />
                      <div>
                        <div className="text-2xl font-bold">{contactRequests.length}</div>
                        <div className="text-sm text-muted-foreground">
                          {contactFilter ? 'Заявок в категории' : 'Всего заявок'}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Основные настройки</CardTitle>
                  <CardDescription>Управление контактными данными</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="phone-main">Основной телефон</Label>
                      <Input
                        id="phone-main"
                        type="tel"
                        value={phoneMain}
                        onChange={(e) => setPhoneMain(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone-secondary">Дополнительный телефон</Label>
                      <Input
                        id="phone-secondary"
                        type="tel"
                        value={phoneSecondary}
                        onChange={(e) => setPhoneSecondary(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="info@artemadera.ru"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Адрес</Label>
                      <Input
                        id="address"
                        defaultValue="Москва и Московская область"
                      />
                    </div>
                  </div>
                  <Button onClick={handleSaveSettings}>
                    <Icon name="Save" size={20} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Управление услугами</CardTitle>
                  <CardDescription>Добавление и редактирование услуг</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button>
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить услугу
                  </Button>
                  <div className="space-y-4">
                    {['Покраска деревянных домов', 'Шлифовка деревянных домов', 'Теплый шов', 'Осада'].map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Icon name="Wrench" size={24} />
                          <span>{service}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery">
              <Card>
                <CardHeader>
                  <CardTitle>Фотогалерея</CardTitle>
                  <CardDescription>Управление фотографиями работ</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="photo-upload">Загрузить фото</Label>
                    <Input id="photo-upload" type="file" accept="image/*" multiple />
                  </div>
                  <div>
                    <Label htmlFor="photo-title">Название</Label>
                    <Input id="photo-title" placeholder="Название фотографии" />
                  </div>
                  <div>
                    <Label htmlFor="photo-service">Услуга</Label>
                    <select id="photo-service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>Покраска</option>
                      <option>Шлифовка</option>
                      <option>Теплый шов</option>
                      <option>Осада</option>
                    </select>
                  </div>
                  <Button>
                    <Icon name="Upload" size={20} className="mr-2" />
                    Загрузить фото
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cases">
              <Card>
                <CardHeader>
                  <CardTitle>Кейсы</CardTitle>
                  <CardDescription>Управление проектами и кейсами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="case-title">Название кейса</Label>
                      <Input id="case-title" placeholder="Например: Покраска дома в Подмосковье" />
                    </div>
                    <div>
                      <Label htmlFor="case-description">Краткое описание</Label>
                      <Textarea id="case-description" placeholder="Краткое описание проекта" />
                    </div>
                    <div>
                      <Label htmlFor="case-content">Полное описание</Label>
                      <Textarea id="case-content" rows={6} placeholder="Подробное описание кейса" />
                    </div>
                    <div>
                      <Label htmlFor="case-image">Изображение</Label>
                      <Input id="case-image" type="file" accept="image/*" />
                    </div>
                  </div>
                  <Button>
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить кейс
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="articles">
              <Card>
                <CardHeader>
                  <CardTitle>Статьи</CardTitle>
                  <CardDescription>Управление полезными статьями</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="article-title">Заголовок статьи</Label>
                      <Input id="article-title" placeholder="Заголовок статьи" />
                    </div>
                    <div>
                      <Label htmlFor="article-excerpt">Краткое описание</Label>
                      <Textarea id="article-excerpt" placeholder="Краткое описание для превью" />
                    </div>
                    <div>
                      <Label htmlFor="article-content">Содержание</Label>
                      <Textarea id="article-content" rows={10} placeholder="Полный текст статьи" />
                    </div>
                    <div>
                      <Label htmlFor="article-image">Изображение</Label>
                      <Input id="article-image" type="file" accept="image/*" />
                    </div>
                  </div>
                  <Button>
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить статью
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partners">
              <Card>
                <CardHeader>
                  <CardTitle>Партнеры</CardTitle>
                  <CardDescription>Управление партнерами компании</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="partner-name">Название партнера</Label>
                      <Input id="partner-name" placeholder="Название компании" />
                    </div>
                    <div>
                      <Label htmlFor="partner-logo">Логотип</Label>
                      <Input id="partner-logo" type="file" accept="image/*" />
                    </div>
                    <div>
                      <Label htmlFor="partner-website">Сайт партнера</Label>
                      <Input id="partner-website" type="url" placeholder="https://example.com" />
                    </div>
                  </div>
                  <Button>
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить партнера
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle>Грамоты и сертификаты</CardTitle>
                  <CardDescription>Управление сертификатами и наградами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="cert-title">Название</Label>
                      <Input id="cert-title" placeholder="Название сертификата или грамоты" />
                    </div>
                    <div>
                      <Label htmlFor="cert-image">Изображение</Label>
                      <Input id="cert-image" type="file" accept="image/*" />
                    </div>
                  </div>
                  <Button>
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить сертификат
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}