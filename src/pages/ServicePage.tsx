import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const servicesData: Record<string, {
  title: string;
  description: string;
  fullContent: string;
  benefits: { icon: string; title: string; description: string }[];
  process: { step: string; description: string; details: string }[];
  image: string;
  gallery: string[];
  price: string;
  duration: string;
  warranty: string;
  features: { label: string; value: string }[];
  materials: { name: string; brand: string; description: string }[];
  faq: { question: string; answer: string }[];
}> = {
  pokraska: {
    title: 'Покраска деревянных домов',
    description: 'Профессиональная покраска деревянных домов с использованием экологически чистых материалов премиум-класса. Гарантируем долговечность и красоту покрытия.',
    fullContent: 'Покраска деревянного дома – это не только эстетическая процедура, но и важная защитная мера. Правильно выполненная покраска защищает древесину от влаги, УФ-излучения, грибка и плесени, продлевая срок службы вашего дома на десятилетия. Мы используем только проверенные материалы ведущих мировых производителей.',
    price: 'от 450 ₽/м²',
    duration: '7-14 дней',
    warranty: 'до 10 лет',
    features: [
      { label: 'Площадь покрытия', value: 'от 50 м²' },
      { label: 'Слои покрытия', value: '2-3 слоя' },
      { label: 'Время высыхания', value: '24-48 часов' },
      { label: 'Расход материала', value: '150-200 мл/м²' }
    ],
    benefits: [
      {
        icon: 'Shield',
        title: 'Защита от атмосферных воздействий',
        description: 'Надежная защита древесины от дождя, снега, ветра и перепадов температур'
      },
      {
        icon: 'Sun',
        title: 'УФ-защита',
        description: 'Специальные компоненты предотвращают выцветание и разрушение древесины от солнца'
      },
      {
        icon: 'Droplet',
        title: 'Влагостойкость',
        description: 'Создание водоотталкивающего барьера, предотвращающего гниение'
      },
      {
        icon: 'Leaf',
        title: 'Экологичность',
        description: 'Используем только безопасные материалы на водной основе'
      },
      {
        icon: 'Palette',
        title: 'Сохранение текстуры',
        description: 'Подчеркиваем естественную красоту и рисунок древесины'
      },
      {
        icon: 'Award',
        title: 'Гарантия качества',
        description: 'Официальная гарантия на покрытие до 10 лет'
      }
    ],
    process: [
      { 
        step: 'Подготовка поверхности', 
        description: 'Очистка и шлифовка древесины',
        details: 'Удаляем старое покрытие, пыль, грязь. Проводим шлифовку для получения идеально гладкой поверхности'
      },
      { 
        step: 'Обработка антисептиком', 
        description: 'Защита от грибка и плесени',
        details: 'Наносим антисептик глубокого проникновения для защиты от биологических поражений'
      },
      { 
        step: 'Грунтование', 
        description: 'Нанесение защитного грунта',
        details: 'Грунт улучшает адгезию краски и защищает древесину от влаги'
      },
      { 
        step: 'Покраска', 
        description: 'Нанесение краски в 2-3 слоя',
        details: 'Каждый слой наносится после полного высыхания предыдущего для максимальной долговечности'
      },
      { 
        step: 'Финишное покрытие', 
        description: 'Защитный лак при необходимости',
        details: 'Наносим защитный лак для усиления блеска и дополнительной защиты'
      },
      { 
        step: 'Контроль качества', 
        description: 'Проверка покрытия',
        details: 'Тщательно проверяем равномерность покрытия и устраняем возможные дефекты'
      }
    ],
    materials: [
      {
        name: 'Tikkurila Pika-Teho',
        brand: 'Tikkurila',
        description: 'Грунтовочный антисептик глубокого проникновения для защиты древесины'
      },
      {
        name: 'Belinka Toplasur',
        brand: 'Belinka',
        description: 'Лазурь с УФ-фильтром для наружных работ, подчеркивает текстуру дерева'
      },
      {
        name: 'Osmo Landhausfarbe',
        brand: 'Osmo',
        description: 'Укрывная краска на масляной основе, высокая паропроницаемость'
      }
    ],
    faq: [
      {
        question: 'Как часто нужно красить деревянный дом?',
        answer: 'При использовании качественных материалов и соблюдении технологии, покраска требуется раз в 7-10 лет. Однако рекомендуем проводить осмотр ежегодно.'
      },
      {
        question: 'Можно ли красить дом зимой?',
        answer: 'Большинство красок рекомендуется наносить при температуре от +5°C. Зимой возможна покраска только специальными составами и при соблюдении технологии.'
      },
      {
        question: 'Сколько времени сохнет краска?',
        answer: 'Время высыхания зависит от типа краски и погодных условий. Обычно 24-48 часов между слоями, полное высыхание 5-7 дней.'
      },
      {
        question: 'Нужно ли шлифовать новый дом перед покраской?',
        answer: 'Да, даже новую древесину необходимо шлифовать для удаления ворса и получения идеально гладкой поверхности под покраску.'
      }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg'
    ]
  },
  shlifovka: {
    title: 'Шлифовка деревянных домов',
    description: 'Качественная шлифовка деревянных поверхностей современным оборудованием. Подготовка древесины к последующей обработке и покраске.',
    fullContent: 'Шлифовка – важнейший этап подготовки деревянного дома к покраске. Мы используем профессиональное оборудование последнего поколения, которое позволяет добиться идеально гладкой поверхности без повреждения структуры древесины. Применяем несколько видов шлифовки в зависимости от состояния дерева.',
    price: 'от 350 ₽/м²',
    duration: '5-10 дней',
    warranty: 'гарантия качества работ',
    features: [
      { label: 'Тип шлифовки', value: 'Грубая и финишная' },
      { label: 'Зернистость', value: '40-120 грит' },
      { label: 'Оборудование', value: 'Festool, Makita' },
      { label: 'Удаление пыли', value: '99% (с пылесосом)' }
    ],
    benefits: [
      {
        icon: 'Eraser',
        title: 'Удаление старого покрытия',
        description: 'Полное снятие старой краски, лака и загрязнений с поверхности древесины'
      },
      {
        icon: 'Ruler',
        title: 'Выравнивание поверхности',
        description: 'Устранение неровностей, сколов и дефектов древесины'
      },
      {
        icon: 'Sparkles',
        title: 'Идеальная подготовка',
        description: 'Создание идеальной поверхности для последующей покраски или обработки'
      },
      {
        icon: 'TreePine',
        title: 'Сохранение структуры',
        description: 'Бережная обработка без повреждения волокон древесины'
      },
      {
        icon: 'Wind',
        title: 'Беспыльная технология',
        description: 'Использование промышленных пылесосов для чистоты на объекте'
      },
      {
        icon: 'Zap',
        title: 'Быстрая работа',
        description: 'Современное оборудование позволяет выполнять работы в короткие сроки'
      }
    ],
    process: [
      { 
        step: 'Осмотр поверхности', 
        description: 'Оценка состояния древесины',
        details: 'Определяем степень износа покрытия, наличие дефектов, выбираем метод шлифовки'
      },
      { 
        step: 'Грубая шлифовка', 
        description: 'Удаление старого покрытия',
        details: 'Используем крупнозернистую наждачную бумагу (40-60 грит) для снятия краски и лака'
      },
      { 
        step: 'Средняя шлифовка', 
        description: 'Выравнивание поверхности',
        details: 'Применяем среднезернистую бумагу (80 грит) для устранения неровностей'
      },
      { 
        step: 'Финишная шлифовка', 
        description: 'Получение гладкой поверхности',
        details: 'Мелкозернистая бумага (100-120 грит) создает идеально гладкую поверхность'
      },
      { 
        step: 'Очистка', 
        description: 'Удаление пыли и мусора',
        details: 'Тщательно очищаем поверхность промышленным пылесосом и щетками'
      },
      { 
        step: 'Контроль качества', 
        description: 'Проверка результата',
        details: 'Проверяем гладкость поверхности, устраняем пропущенные участки'
      }
    ],
    materials: [
      {
        name: 'Festool ETS EC 150',
        brand: 'Festool',
        description: 'Профессиональная эксцентриковая шлифмашина с системой пылеудаления'
      },
      {
        name: 'Makita BO6050J',
        brand: 'Makita',
        description: 'Орбитальная шлифмашина для финишной обработки больших поверхностей'
      },
      {
        name: 'Mirka Abranet',
        brand: 'Mirka',
        description: 'Профессиональные сетчатые абразивы для беспыльной шлифовки'
      }
    ],
    faq: [
      {
        question: 'Обязательно ли шлифовать дом перед покраской?',
        answer: 'Да, шлифовка обязательна для качественной покраски. Она обеспечивает лучшую адгезию краски и удаляет старое покрытие.'
      },
      {
        question: 'Сколько времени занимает шлифовка?',
        answer: 'Для дома 150 м² шлифовка занимает 5-7 дней в зависимости от состояния древесины и объема работ.'
      },
      {
        question: 'Будет ли много пыли?',
        answer: 'Мы используем оборудование с системой пылеудаления, которое улавливает до 99% пыли. Объект остается чистым.'
      },
      {
        question: 'Можно ли шлифовать влажную древесину?',
        answer: 'Нет, влажность древесины должна быть не более 18-20%. При необходимости проводим сушку перед шлифовкой.'
      }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/80d33fd6-d7c3-4389-9113-c8ba590b7c1f.jpg'
    ]
  },
  'teplyj-shov': {
    title: 'Теплый шов для деревянных домов',
    description: 'Герметизация швов деревянных домов специальными материалами. Защита от влаги, ветра и холода. Сохранение тепла в доме.',
    fullContent: 'Технология "теплый шов" – это современный способ герметизации межвенцовых швов в деревянных домах. Использование специальных герметиков обеспечивает надежную защиту от продувания, влаги и потери тепла. Правильно выполненный теплый шов сохраняет тепло в доме и значительно снижает затраты на отопление.',
    price: 'от 280 ₽/пог.м',
    duration: '3-7 дней',
    warranty: 'до 20 лет',
    features: [
      { label: 'Экономия тепла', value: 'до 40%' },
      { label: 'Толщина шва', value: '6-10 мм' },
      { label: 'Эластичность', value: 'до 500%' },
      { label: 'Морозостойкость', value: 'до -50°C' }
    ],
    benefits: [
      {
        icon: 'Thermometer',
        title: 'Энергоэффективность',
        description: 'Снижение теплопотерь до 40%, экономия на отоплении'
      },
      {
        icon: 'CloudRain',
        title: 'Защита от влаги и ветра',
        description: 'Герметичное заполнение швов предотвращает продувание и намокание'
      },
      {
        icon: 'Maximize2',
        title: 'Эластичность материала',
        description: 'Герметик растягивается вместе с древесиной при усадке дома'
      },
      {
        icon: 'Clock',
        title: 'Долговечность до 20 лет',
        description: 'Современные герметики служат десятилетиями без потери свойств'
      },
      {
        icon: 'Bug',
        title: 'Защита от насекомых',
        description: 'Герметичные швы препятствуют проникновению насекомых'
      },
      {
        icon: 'Palette',
        title: 'Широкая палитра цветов',
        description: 'Подбираем цвет герметика точно под цвет древесины'
      }
    ],
    process: [
      { 
        step: 'Очистка швов', 
        description: 'Удаление старого утеплителя',
        details: 'Полностью удаляем старый джут, паклю или мох из межвенцовых швов'
      },
      { 
        step: 'Подготовка поверхности', 
        description: 'Обезжиривание и грунтовка',
        details: 'Очищаем поверхность от пыли, при необходимости наносим праймер'
      },
      { 
        step: 'Укладка шнура', 
        description: 'Установка уплотнительного шнура',
        details: 'Укладываем вилатерм-шнур нужного диаметра для формирования шва'
      },
      { 
        step: 'Нанесение герметика', 
        description: 'Заполнение шва герметиком',
        details: 'Наносим акриловый или полиуретановый герметик специальным пистолетом'
      },
      { 
        step: 'Формирование шва', 
        description: 'Выравнивание и придание формы',
        details: 'Разглаживаем шов специальным шпателем для идеального внешнего вида'
      },
      { 
        step: 'Финишная обработка', 
        description: 'Покраска при необходимости',
        details: 'При желании окрашиваем шов в цвет древесины или оставляем как есть'
      }
    ],
    materials: [
      {
        name: 'Remmers Acryl 100',
        brand: 'Remmers',
        description: 'Акриловый герметик для деревянных швов, эластичность до 25%'
      },
      {
        name: 'Perma-Chink',
        brand: 'Perma-Chink',
        description: 'Эластичный герметик специально для срубов, растяжение до 500%'
      },
      {
        name: 'Вилатерм',
        brand: 'Вилатерм',
        description: 'Уплотнительный шнур из вспененного полиэтилена, диаметр 6-20 мм'
      }
    ],
    faq: [
      {
        question: 'Когда лучше делать теплый шов?',
        answer: 'Оптимально через 1-2 года после постройки дома, когда завершилась основная усадка. Работы проводятся при температуре от +5°C.'
      },
      {
        question: 'Чем теплый шов лучше конопатки?',
        answer: 'Теплый шов эластичен, не требует обновления, защищает от влаги и выглядит эстетично. Конопатка требует регулярного обновления.'
      },
      {
        question: 'Можно ли делать теплый шов изнутри дома?',
        answer: 'Да, теплый шов делается как снаружи, так и внутри дома для максимальной теплоизоляции.'
      },
      {
        question: 'Сколько служит теплый шов?',
        answer: 'При использовании качественных материалов и соблюдении технологии - до 20 лет без необходимости обновления.'
      }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/7285c54f-ec11-4c93-98cf-0f97ed397d9e.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/58c1df22-8269-4c6e-a032-57b1e9ff3532.jpg'
    ]
  },
  osada: {
    title: 'Осада для дверей и окон',
    description: 'Профессиональная установка и отделка дверных и оконных проемов в деревянных домах. Точная подгонка и эстетичный внешний вид.',
    fullContent: 'Осада (обсада, окосячка) – это специальная конструкция в проемах деревянного дома, которая компенсирует усадку сруба и защищает окна и двери от деформации. Правильно установленная осада обеспечивает долговечность оконных и дверных конструкций, предотвращает их перекос и заклинивание.',
    price: 'от 3500 ₽/шт',
    duration: '1-3 дня на проем',
    warranty: 'гарантия 5 лет',
    features: [
      { label: 'Тип древесины', value: 'Сосна, лиственница' },
      { label: 'Влажность', value: 'не более 12%' },
      { label: 'Зазор на усадку', value: '5-7 см' },
      { label: 'Обработка', value: 'Антисептик + покраска' }
    ],
    benefits: [
      {
        icon: 'Home',
        title: 'Компенсация усадки дома',
        description: 'Специальная конструкция позволяет дому садиться без повреждения окон и дверей'
      },
      {
        icon: 'Shield',
        title: 'Защита окон и дверей',
        description: 'Предотвращает перекос, заклинивание и разрушение оконных и дверных блоков'
      },
      {
        icon: 'Sparkles',
        title: 'Эстетичный внешний вид',
        description: 'Красивое обрамление проемов, которое подчеркивает стиль деревянного дома'
      },
      {
        icon: 'Award',
        title: 'Долговечность конструкции',
        description: 'Служит весь срок эксплуатации дома при правильном монтаже'
      },
      {
        icon: 'Thermometer',
        title: 'Дополнительная теплоизоляция',
        description: 'Плотное прилегание обсады устраняет мостики холода'
      },
      {
        icon: 'Ruler',
        title: 'Точная геометрия',
        description: 'Выверенные размеры обеспечивают идеальную установку окон и дверей'
      }
    ],
    process: [
      { 
        step: 'Замеры проемов', 
        description: 'Точные измерения всех проемов',
        details: 'Измеряем высоту, ширину, глубину проема с учетом усадки дома'
      },
      { 
        step: 'Выпиливание паза', 
        description: 'Подготовка проема',
        details: 'Выпиливаем паз в торцах бревен для установки лафета (вертикальных стоек)'
      },
      { 
        step: 'Изготовление обсады', 
        description: 'Подготовка элементов конструкции',
        details: 'Изготавливаем лафеты, вершник (верхняя планка) и подоконную доску'
      },
      { 
        step: 'Антисептирование', 
        description: 'Защитная обработка',
        details: 'Обрабатываем все элементы антисептиком для защиты от грибка и плесени'
      },
      { 
        step: 'Монтаж обсады', 
        description: 'Установка конструкции в проем',
        details: 'Устанавливаем лафеты в пазы, монтируем вершник и подоконную доску'
      },
      { 
        step: 'Утепление и отделка', 
        description: 'Финишная обработка',
        details: 'Заполняем зазоры утеплителем, устанавливаем наличники, красим'
      }
    ],
    materials: [
      {
        name: 'Сосна камерной сушки',
        brand: 'ГОСТ',
        description: 'Обрезной брус влажностью 10-12% для изготовления обсады'
      },
      {
        name: 'Лиственница',
        brand: 'Премиум',
        description: 'Более прочная и долговечная древесина для влажных помещений'
      },
      {
        name: 'Сенеж Огнебио Проф',
        brand: 'Сенеж',
        description: 'Огнебиозащитный состав для обработки деревянных конструкций'
      }
    ],
    faq: [
      {
        question: 'Когда устанавливать обсаду?',
        answer: 'Обсаду можно устанавливать сразу после возведения сруба. Она как раз компенсирует дальнейшую усадку дома.'
      },
      {
        question: 'Обязательна ли обсада для деревянного дома?',
        answer: 'Да, обсада обязательна для любого деревянного дома из бревна или бруса. Без нее окна и двери деформируются.'
      },
      {
        question: 'Какой зазор оставлять на усадку?',
        answer: 'Стандартный зазор между вершником обсады и верхним бревном проема - 5-7 см в зависимости от влажности древесины.'
      },
      {
        question: 'Нужна ли обсада в доме из клееного бруса?',
        answer: 'Даже дом из клееного бруса дает усадку 1-2%. Обсада желательна для защиты окон и дверей.'
      }
    ],
    image: 'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/80d33fd6-d7c3-4389-9113-c8ba590b7c1f.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/80d33fd6-d7c3-4389-9113-c8ba590b7c1f.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/515865e8-ceb9-4e97-8094-801f523116d8.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/974f4178-79ab-4a2e-9c80-56b002ed282f.jpg',
      'https://cdn.poehali.dev/projects/6fcd73e5-b9b9-4906-9da8-8604cb9ca70f/files/46675a9d-0f63-4b3b-a0c3-1704db627290.jpg'
    ]
  }
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Услуга не найдена</h1>
            <Button asChild>
              <a href="/">Вернуться на главную</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <Badge className="mb-6 text-base px-4 py-2 bg-white/20 backdrop-blur-sm">
              <Icon name="Wrench" size={16} className="mr-2" />
              Профессиональная услуга
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact-form">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать услугу
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="#process">
                  <Icon name="Info" size={20} className="mr-2" />
                  Подробнее
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{service.price}</div>
                <div className="text-sm opacity-90">Стоимость</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{service.duration}</div>
                <div className="text-sm opacity-90">Сроки работ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{service.warranty}</div>
                <div className="text-sm opacity-90">Гарантия</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Поддержка</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">О услуге</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{service.fullContent}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {service.features.map((feature, index) => (
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

        <section className="py-20 bg-gradient-to-br from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Преимущества</h2>
              <p className="text-xl text-muted-foreground">Почему стоит выбрать нашу услугу</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={benefit.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
              <p className="text-xl text-muted-foreground">Пошаговая технология выполнения</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {service.process.map((item, index) => (
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

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
              <p className="text-xl text-muted-foreground">Примеры наших проектов</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.gallery.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <div className="aspect-[4/3]">
                    <img 
                      src={image}
                      alt={`Проект ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-lg font-semibold">Проект #{index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Материалы</h2>
              <p className="text-xl text-muted-foreground">Используем только проверенные бренды</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {service.materials.map((material, index) => (
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

        <section className="py-20 bg-gradient-to-br from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {service.faq.map((item, index) => (
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

        <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы начать?
              </h2>
              <p className="text-xl mb-10 opacity-90">
                Оставьте заявку и получите бесплатную консультацию и расчет стоимости работ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
                  <a href="#contact-form">
                    <Icon name="Send" size={20} className="mr-2" />
                    Оставить заявку
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  <a href="tel:+74951234567">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (495) 123-45-67
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
