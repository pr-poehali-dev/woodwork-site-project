import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Admin() {
  const { toast } = useToast();
  const [phoneMain, setPhoneMain] = useState('+7 (495) 123-45-67');
  const [phoneSecondary, setPhoneSecondary] = useState('+7 (926) 987-65-43');

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

          <Tabs defaultValue="settings" className="space-y-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-7 w-full">
              <TabsTrigger value="settings">Настройки</TabsTrigger>
              <TabsTrigger value="services">Услуги</TabsTrigger>
              <TabsTrigger value="gallery">Галерея</TabsTrigger>
              <TabsTrigger value="cases">Кейсы</TabsTrigger>
              <TabsTrigger value="articles">Статьи</TabsTrigger>
              <TabsTrigger value="partners">Партнеры</TabsTrigger>
              <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
            </TabsList>

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
