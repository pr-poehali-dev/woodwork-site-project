CREATE TABLE IF NOT EXISTS site_settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  description TEXT,
  short_description TEXT,
  image_url TEXT,
  order_num INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gallery_photos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  image_url TEXT NOT NULL,
  service_id INTEGER,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS case_studies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  description TEXT,
  full_content TEXT,
  image_url TEXT,
  service_id INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS partners (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS certificates (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  image_url TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO site_settings (key, value) VALUES 
  ('company_name', 'Arte Madera'),
  ('phone_main', '+7 (495) 123-45-67'),
  ('phone_secondary', '+7 (926) 987-65-43'),
  ('email', 'info@artemadera.ru'),
  ('address', 'Москва и Московская область')
ON CONFLICT (key) DO NOTHING;

INSERT INTO services (title, slug, description, short_description, order_num) VALUES
  ('Покраска деревянных домов', 'pokraska', 'Профессиональная покраска деревянных домов с использованием экологически чистых материалов премиум-класса. Гарантируем долговечность и красоту покрытия.', 'Покраска с гарантией до 10 лет', 1),
  ('Шлифовка деревянных домов', 'shlifovka', 'Качественная шлифовка деревянных поверхностей современным оборудованием. Подготовка древесины к последующей обработке и покраске.', 'Идеально гладкая поверхность', 2),
  ('Теплый шов для деревянных домов', 'teplyj-shov', 'Герметизация швов деревянных домов специальными материалами. Защита от влаги, ветра и холода. Сохранение тепла в доме.', 'Надежная защита от холода', 3),
  ('Осада для дверей и окон', 'osada', 'Профессиональная установка и отделка дверных и оконных проемов в деревянных домах. Точная подгонка и эстетичный внешний вид.', 'Точная подгонка проемов', 4);

INSERT INTO articles (title, slug, excerpt, content, is_published) VALUES
  ('Как выбрать краску для деревянного дома', 'kak-vybrat-krasku', 'Выбор правильной краски - залог долговечности покрытия деревянного дома', 'Детальное руководство по выбору краски для деревянного дома...', true),
  ('Уход за деревянным домом: советы экспертов', 'uhod-za-domom', 'Правильный уход продлит срок службы вашего деревянного дома на десятилетия', 'Экспертные советы по уходу за деревянным домом...', true),
  ('Технология теплого шва: что важно знать', 'tehnologiya-teplogo-shva', 'Теплый шов - важный элемент защиты деревянного дома от холода и влаги', 'Подробно о технологии теплого шва...', true);