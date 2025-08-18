import { EQUIPMENTS } from '../equipments'
import { INGREDIENTS } from '../ingredients'

export const BREAKFAST = [
  {
    metaSeo: {
      title: 'Яичница-болтунья',
      description:
        'Нежная и воздушная яичница-болтунья — идеальный вариант для тех, кто ценит вкус и простоту. Это блюдо быстро готовится, легко усваивается и дарит приятное ощущение сытости без тяжести. Главное — не перегревать сковороду и не взбивать яйца слишком сильно, чтобы сохранить кремовую текстуру.',
      keywords: ['яичница', 'болтунья', 'завтрак', 'яйца', 'легкий завтрак'],
      'og:title': 'Яичница-болтунья',
      'og:description':
        'Нежная и воздушная яичница-болтунья — идеальный вариант для тех, кто ценит вкус и простоту. Это блюдо быстро готовится, легко усваивается и дарит приятное ощущение сытости без тяжести. Главное — не перегревать сковороду и не взбивать яйца слишком сильно, чтобы сохранить кремовую текстуру.',
      'og:url': 'https://povreshka.ru/recipe/scrambled-eggs',
      'og:image': '/static/recipes/breakfast/scrambled-eggs.jpeg',
      twitterTitle: 'Яичница-болтунья',
      twitterDescription:
        'Нежная и воздушная яичница-болтунья — идеальный вариант для тех, кто ценит вкус и простоту. Это блюдо быстро готовится, легко усваивается и дарит приятное ощущение сытости без тяжести. Главное — не перегревать сковороду и не взбивать яйца слишком сильно, чтобы сохранить кремовую текстуру.',
      twitterImage: '/static/recipes/breakfast/scrambled-eggs.jpeg',
      twitterUrl: 'https://povreshka.ru/recipe/scrambled-eggs',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/scrambled-eggs',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['яичница', 'болтунья', 'завтрак', 'яйца', 'легкий завтрак'],
    categories: [{ name: 'breakfast' }],
    key: 'scrambled-eggs',
    name: 'scrambled-eggs',
    img: '/static/recipes/breakfast/scrambled-eggs.jpeg',
    title: 'Яичница-болтунья',
    description:
      'Нежная и воздушная яичница-болтунья — идеальный вариант для тех, кто ценит вкус и простоту. Это блюдо быстро готовится, легко усваивается и дарит приятное ощущение сытости без тяжести. Главное — не перегревать сковороду и не взбивать яйца слишком сильно, чтобы сохранить кремовую текстуру.',
    calories: 287.85,
    preparation: 5,
    time: 10,
    level: 1,
    rating: 5,
    portions: 2,
    used: [10.92, 26.2, 0.6],
    ingredients: [
      {
        ...INGREDIENTS.eggs,
        count: 4,
      },
      {
        ...INGREDIENTS.refinedVegetableOil,
        count: 2,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
        count: 0.5,
      },
      {
        ...INGREDIENTS.salt,
        count: 0.5,
      },
    ],
    equipments: [EQUIPMENTS.pan, EQUIPMENTS.spatula, EQUIPMENTS.bowl, EQUIPMENTS.whisk, EQUIPMENTS.plate],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Яйца для болтуньи разбейте в миску. Слегка перемешайте вилкой, чтобы желтки и белки только соединились. Можно влить пару столовых ложек питьевой воды. Взбивать, тем более венчиком, до пены, не следует. Посолите и поперчите по вкусу.',
        ingredients: [
          {
            ...INGREDIENTS.eggs,
            count: 4,
          },
          {
            ...INGREDIENTS.groundBlackPepper,
            count: 0.5,
          },
          {
            ...INGREDIENTS.salt,
            count: 0.5,
          },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'В сковороде на среднем огне нагрейте растительное масло. Вылейте в нее яичную массу. Сразу же начните перемешивать, чтобы она свернулась и получились маленькие нежные кусочки.',
        ingredients: [
          {
            ...INGREDIENTS.refinedVegetableOil,
            count: 2,
          },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Цвет яичницы-болтуньи должен быть светло-желтым: никакой румяной корочки в данном случае добиваться не нужно. Разложите ее по тарелкам и сразу же подайте на стол.',
        ingredients: [],
      },
    ],
  },
  {
    metaSeo: {
      title: 'Яичница с брокколи',
      description:
        'Яичница с брокколи — отличный способ начать утро с порции витаминов. Хрустящие соцветия и мягкие яйца создают интересный контраст текстур, а зелень и перец добавляют свежести. Готовится за считанные минуты и выглядит как настоящее ресторанное блюдо.',
      keywords: ['яичница', 'брокколи', 'завтрак', 'яйца', 'легкий завтрак'],
      'og:title': 'Яичница с брокколи',
      'og:description':
        'Яичница с брокколи — отличный способ начать утро с порции витаминов. Хрустящие соцветия и мягкие яйца создают интересный контраст текстур, а зелень и перец добавляют свежести. Готовится за считанные минуты и выглядит как настоящее ресторанное блюдо.',
      'og:url': 'https://povreshka.ru/recipe/scrambled-eggs-with-broccoli',
      'og:image': '/static/recipes/breakfast/scrambled-eggs-with-broccoli.webp',
      twitterTitle: 'Яичница с брокколи',
      twitterDescription:
        'Яичница с брокколи — отличный способ начать утро с порции витаминов. Хрустящие соцветия и мягкие яйца создают интересный контраст текстур, а зелень и перец добавляют свежести. Готовится за считанные минуты и выглядит как настоящее ресторанное блюдо.',
      twitterImage: '/static/recipes/breakfast/scrambled-eggs-with-broccoli.webp',
      twitterUrl: 'https://povreshka.ru/recipe/scrambled-eggs-with-broccoli',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/scrambled-eggs-with-broccoli',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['яичница', 'брокколи', 'завтрак', 'яйца', 'легкий завтрак'],
    categories: [{ name: 'breakfast' }],
    key: 'scrambled-eggs-with-broccoli',
    name: 'scrambled-eggs-with-broccoli',
    img: '/static/recipes/breakfast/scrambled-eggs-with-broccoli.jpeg',
    title: 'Яичница с брокколи',
    description:
      'Яичница с брокколи — отличный способ начать утро с порции витаминов. Хрустящие соцветия и мягкие яйца создают интересный контраст текстур, а зелень и перец добавляют свежести. Готовится за считанные минуты и выглядит как настоящее ресторанное блюдо.',
    calories: 278.75,
    preparation: 5,
    time: 15,
    level: 1,
    rating: 5,
    portions: 2,
    used: [16.18, 23.56, 6.09],
    ingredients: [
      {
        ...INGREDIENTS.eggs,
        count: 3,
      },
      {
        ...INGREDIENTS.refinedVegetableOil,
        count: 2,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
        count: 0.5,
      },
      {
        ...INGREDIENTS.salt,
        count: 0.5,
      },
      {
        ...INGREDIENTS.broccoli,
        count: 150,
      },
      {
        ...INGREDIENTS.hardCheese,
        count: 30,
      },
    ],
    equipments: [
      EQUIPMENTS.pan,
      EQUIPMENTS.spatula,
      EQUIPMENTS.bowl,
      EQUIPMENTS.whisk,
      EQUIPMENTS.plate,
      EQUIPMENTS.colander,
      EQUIPMENTS.pot,
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Разберите брокколи на мелкие соцветия и тщательно промойте под холодной водой. Затем доведите до кипения воду в небольшой кастрюле, слегка подсолите и опустите в нее капусту. Бланшируйте около 3 минут, чтобы она стала мягкой, но сохранила свою текстуру и цвет. После этого откиньте брокколи на дуршлаг и дайте воде стечь.',
        ingredients: [
          {
            ...INGREDIENTS.broccoli,
            count: 150,
          },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Разогрейте сковороду на среднем огне и добавьте растительное масло. Как только масло разогреется, выложите подготовленные соцветия на сковороду. Обжарьте брокколи на среднем огне, периодически помешивая, примерно 3-4 минуты, чтобы она немного подрумянилась.',
        ingredients: [
          {
            ...INGREDIENTS.refinedVegetableOil,
            count: 3,
          },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Пока брокколи обжаривается, разбейте яйца в миску и слегка взбейте их вилкой или венчиком. Взбивать сильно не нужно, достаточно просто размешать желтки с белками. Добавьте немного соли и свежемолотого черного перца.',
        ingredients: [
          {
            ...INGREDIENTS.eggs,
            count: 2,
          },
          {
            ...INGREDIENTS.groundBlackPepper,
            count: 0.5,
          },
          {
            ...INGREDIENTS.salt,
            count: 0.5,
          },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Обжаренную брокколи равномерно распределите по сковороде и залейте взбитыми яйцами. Уменьшите огонь до минимума и готовьте яичницу под крышкой, чтобы яйца схватились и приготовились равномерно. Весь процесс займет около 5-7 минут, в зависимости от размера сковороды.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Если хотите добавить сыр, посыпьте яичницу тертым сыром за 2-3 минуты до готовности. Готовую яичницу с брокколи аккуратно переложите на тарелку и подавайте горячей. Это блюдо отлично сочетается с хрустящими тостами и свежими овощами.',
        ingredients: [
          {
            ...INGREDIENTS.hardCheese,
            count: 30,
          },
        ],
      },
    ],
  },
  {
    metaSeo: {
      title: 'Овсяная каша с яблоками и корицей',
      description:
        'Начните день с ароматной овсянки — нежной, сытной и с витаминным зарядом! Этот простой рецепт сочетает полезные злаки, сладкие яблоки и согревающую корицу. Без сахара, на молоке или воде — идеально для правильного питания и худеющих.',
      keywords: ['овсянка', 'яблоки', 'корица', 'завтрак', 'легкий завтрак'],
      'og:title': 'Овсяная каша с яблоками и корицей',
      'og:description':
        'Начните день с ароматной овсянки — нежной, сытной и с витаминным зарядом! Этот простой рецепт сочетает полезные злаки, сладкие яблоки и согревающую корицу. Без сахара, на молоке или воде — идеально для правильного питания и худеющих.',
      'og:url': 'https://povreshka.ru/recipe/ovsyanaya-kasha-s-yablokami-i-koritsej',
      'og:image': '/static/recipes/breakfast/ovsyanaya-kasha-s-yablokami-i-koritsej.webp',
      twitterTitle: 'Овсяная каша с яблоками и корицей',
      twitterDescription:
        'Начните день с ароматной овсянки — нежной, сытной и с витаминным зарядом! Этот простой рецепт сочетает полезные злаки, сладкие яблоки и согревающую корицу. Без сахара, на молоке или воде — идеально для правильного питания и худеющих.',
      twitterImage: '/static/recipes/breakfast/ovsyanaya-kasha-s-yablokami-i-koritsej.webp',
      twitterUrl: 'https://povreshka.ru/recipe/ovsyanaya-kasha-s-yablokami-i-koritsej',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/ovsyanaya-kasha-s-yablokami-i-koritsej',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['овсянка', 'яблоки', 'корица', 'завтрак', 'легкий завтрак'],
    categories: [{ name: 'breakfast' }],
    key: 'ovsjanaja-kasha-s-jablokami-i-koricej',
    name: 'ovsjanaja-kasha-s-jablokami-i-koricej',
    img: '/static/recipes/breakfast/ovsyanaya-kasha-s-yablokami-i-koritsej.jpeg',
    title: 'Овсяная каша с яблоками и корицей',
    description:
      'Начните день с ароматной овсянки — нежной, сытной и с витаминным зарядом! Этот простой рецепт сочетает полезные злаки, сладкие яблоки и согревающую корицу. Без сахара, на молоке или воде — идеально для правильного питания и худеющих.',
    calories: 320.5,
    preparation: null,
    time: 20,
    level: 1,
    rating: 4.8,
    portions: 4,
    used: [],
    ingredients: [],
    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.spoon,
      EQUIPMENTS.measuringSpoon,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.knife,
      EQUIPMENTS.plate,
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Насыпьте овсяные хлопья в кастрюлю, влейте молоко и добавьте сахар по вкусу. Поставьте на средний огонь и, постоянно помешивая, доведите смесь до кипения. Затем влейте яблочный сок и снова доведите до легкого кипения.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Подготовьте яблоки: очистите их от кожуры и удалите сердцевину. Нарежьте тонкими дольками и добавьте в кашу. Уменьшите огонь до минимума и варите около 5 минут, пока яблоки не станут мягкими. Снимите с огня, накройте крышкой и дайте настояться ещё 5 минут.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'В горячую кашу добавьте щепотку молотой корицы и немного сливок для нежности. Быстро перемешайте и подавайте к столу, украсив дольками свежего яблока или орешками по желанию.',
        ingredients: [],
      },
    ],
  },
  {
    metaSeo: {
      title: 'Идеальный омлет с молоком — простой рецепт вкусного завтрака',
      description:
        'Пошаговый рецепт воздушного омлета с молоком на сковороде. Узнайте секреты приготовления нежного завтрака без корочки за 15 минут. Французская технология с русским акцентом - взбиваем только вилкой!',
      keywords: [
        'омлет с молоком',
        'рецепт омлета',
        'быстрый завтрак',
        'нежный омлет',
        'яйца с молоком',
        'французский омлет',
        'омлет на сковороде',
        'идеальный завтрак',
        'рецепты из яиц',
        'домашний омлет',
        'легкие рецепты',
        'вкусный завтрак',
        'омлет без корочки',
        'классический омлет',
        'рецепт за 15 минут',
      ],
      'og:title': 'Идеальный омлет с молоком — простой рецепт вкусного завтрака',
      'og:description':
        'Пошаговый рецепт воздушного омлета с молоком на сковороде. Узнайте секреты приготовления нежного завтрака без корочки за 15 минут. Французская технология с русским акцентом - взбиваем только вилкой!',
      'og:url': 'https://povreshka.ru/recipe/omlet-s-molokom',
      'og:image': '/static/recipes/breakfast/omlet-s-molokom.jpeg',
      twitterTitle: 'Идеальный омлет с молоком — простой рецепт вкусного завтрака',
      twitterDescription:
        'Пошаговый рецепт воздушного омлета с молоком на сковороде. Узнайте секреты приготовления нежного завтрака без корочки за 15 минут. Французская технология с русским акцентом - взбиваем только вилкой!',
      twitterImage: '/static/recipes/breakfast/omlet-s-molokom.jpeg',
      twitterUrl: 'https://povreshka.ru/recipe/omlet-s-molokom',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/omlet-s-molokom',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: [
      'омлет с молоком',
      'рецепт омлета',
      'быстрый завтрак',
      'нежный омлет',
      'яйца с молоком',
      'французский омлет',
      'омлет на сковороде',
    ],
    categories: [{ name: 'breakfast' }],
    key: 'omlet-s-molokom',
    name: 'omlet-s-molokom',
    img: '/static/recipes/breakfast/omlet-s-molokom.jpeg',
    title: 'Омлет с молоком по-французски',
    description:
      'Уникальный рецепт омлета с молоком, сочетающий французские традиции и русские привычки. Главный секрет — особый способ взбивания вилкой, который гарантирует нежную текстуру без комочков. В отличие от классического французского варианта, мы добавляем молоко для более воздушной консистенции. Рецепт проверен временем — такой омлет получается идеальным в 99% случаев!',
    calories: 408,
    preparation: 5,
    time: 15,
    level: 1,
    rating: 4.9,
    portions: 1,
    used: [15.29, 35.09, 6.43],
    ingredients: [
      {
        ...INGREDIENTS.eggs,
        count: 2,
      },
      {
        ...INGREDIENTS.milk,
        count: 120,
      },
      {
        ...INGREDIENTS.vegetableOil,
        count: 1,
      },
      {
        ...INGREDIENTS.butter,
        count: 5,
      },
      {
        ...INGREDIENTS.salt,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
      },
    ],
    equipments: [EQUIPMENTS.pan, EQUIPMENTS.bowl, EQUIPMENTS.plate, EQUIPMENTS.fork, EQUIPMENTS.spatula],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'В глубокой миске аккуратно соедините яйца с молоком. Важно: взбалтывайте смесь вилкой круговыми движениями, а не взбивайте. Это принципиальный момент — так омлет получится слоистым, а не пористым. Французские шеф-повара считают, что венчик или миксер убивают нежность текстуры.',
        ingredients: [{ ...INGREDIENTS.eggs }, { ...INGREDIENTS.milk }],
      },
      {
        img: null,
        video: null,
        description:
          'Возьмите сковороду с толстым дном диаметром 18-22 см. Разогрейте на среднем огне 1 минуту — правильный температурный режим ключевой момент. Добавьте растительное и сливочное масло, распределите по поверхности. Смесь масел даст идеальную текстуру — без пригорания, но с тонким сливочным ароматом.',
        ingredients: [{ ...INGREDIENTS.vegetableOil }, { ...INGREDIENTS.butter }],
      },
      {
        img: null,
        video: null,
        description:
          'Когда масло начнет слегка пузыриться (но не дымиться!), влейте яичную смесь. Наклоните сковороду на 30 градусов, чтобы масса равномерно распределилась. Не перемешивайте! Держите на огне ровно 6 секунд — этого времени хватит для образования нежной "сеточки" снизу.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Через 40 секунд после начала готовки, когда середина останется слегка влажной, снимите с огня. Посолите и поперчите по вкусу. Французы называют это состояние "baveuse" — когда омлет остается кремовым внутри. Подавайте немедленно — идеальный омлет не терпит ожидания!',
        ingredients: [{ ...INGREDIENTS.salt }, { ...INGREDIENTS.groundBlackPepper }],
      },
    ],
  },
  {
    metaSeo: {
      title: 'Идеальные блины на молоке — пошаговый рецепт с фото | Густые и воздушные',
      description:
        'Проверенный рецепт тонких блинчиков на молоке с дырочками. Секреты мягкости, 5 вариантов начинки и правила хранения. Готовим за 30 минут без комочков!',
      keywords: [
        'блины на молоке',
        'рецепт блинов',
        'тонкие блины',
        'русские блины',
        'домашние блинчики',
        'блины с дырочками',
        'быстрые блины',
        'рецепт теста для блинов',
        'как приготовить блины',
        'идеальные блинчики',
        'густые блины',
        'воздушные блины',
        'праздничные блины',
        'блины как у бабушки',
        'рецепт без комочков',
      ],
      'og:title': 'Идеальные блины на молоке — пошаговый рецепт с фото | Густые и воздушные',
      'og:description':
        'Проверенный рецепт тонких блинчиков на молоке с дырочками. Секреты мягкости, 5 вариантов начинки и правила хранения. Готовим за 30 минут без комочков!',
      'og:url': 'https://povreshka.ru/recipe/bliny',
      'og:image': '/static/recipes/breakfast/bliny.jpg',
      twitterTitle: 'Идеальные блины на молоке — пошаговый рецепт с фото | Густые и воздушные',
      twitterDescription:
        'Проверенный рецепт тонких блинчиков на молоке с дырочками. Секреты мягкости, 5 вариантов начинки и правила хранения. Готовим за 30 минут без комочков!',
      twitterImage: '/static/recipes/breakfast/bliny.jpg',
      twitterUrl: 'https://povreshka.ru/recipe/bliny',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/bliny',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: [
      'блины на молоке',
      'рецепт тонких блинов',
      'идеальные блинчики',
      'домашние блины',
      'русские блины',
    ],
    categories: [{ name: 'breakfast' }, { name: 'dessert' }],
    key: 'bliny',
    name: 'bliny',
    img: '/static/recipes/breakfast/bliny.jpg',
    title: 'Блины классические на молоке',
    description:
      'Легендарные русские блины с кружевными краями и золотистой корочкой. Этот рецепт передается в нашей семье три поколения — тесто замешивается на горячем молоке для особой эластичности. Секрет в двойном просеивании муки и правильной температуре сковороды. Получаются тонкие, но прочные блины для любых начинок!',
    calories: 185,
    preparation: 15,
    time: 30,
    level: 2,
    rating: 4.9,
    portions: 12,
    used: [45.2, 60.1, 15.3],
    ingredients: [
      {
        ...INGREDIENTS.milk,
        count: 500,
      },
      {
        ...INGREDIENTS.eggs,
        count: 3,
      },
      {
        ...INGREDIENTS.flour,
        count: 200,
      },
      {
        ...INGREDIENTS.sugar,
        count: 30,
      },
      {
        ...INGREDIENTS.salt,
        count: 3,
      },
      {
        ...INGREDIENTS.vegetableOil,
        count: 30,
      },
      {
        ...INGREDIENTS.soda,
        count: 2,
      },
      {
        ...INGREDIENTS.vinegar,
        count: 2,
      },
    ],
    equipments: [
      EQUIPMENTS.whisk,
      EQUIPMENTS.bowl,
      EQUIPMENTS.sieve,
      EQUIPMENTS.pan,
      EQUIPMENTS.ladle,
      EQUIPMENTS.pastryBrush,
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'В глубокой миске взбейте яйца с сахаром и солью до легкой пены. Постепенно вливайте теплое молоко, продолжая взбивать. Важно: молоко должно быть именно горячим (не кипяток!) — это активирует клейковину муки.',
        ingredients: [
          { ...INGREDIENTS.milk },
          { ...INGREDIENTS.eggs },
          { ...INGREDIENTS.sugar },
          { ...INGREDIENTS.salt },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Муку просеивайте дважды — сначала в отдельную миску, затем в яично-молочную смесь. Добавляйте небольшими порциями, тщательно размешивая венчиком. В конце введите гашеную соду и растительное масло. Тесто должно стекать с ложки «лентой».',
        ingredients: [
          { ...INGREDIENTS.flour },
          { ...INGREDIENTS.soda },
          { ...INGREDIENTS.vegetableOil },
          { ...INGREDIENTS.vinegar },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Накройте миску полотенцем и оставьте на 30 минут при комнатной температуре. За это время выйдут пузырьки воздуха, а мука полностью набухнет. Не пропускайте этот этап — он отвечает за отсутствие дырок на готовых блинах!',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Разогрейте специальную блинную сковороду (или обычную с толстым дном) на среднем огне. Смажьте поверхность маслом с помощью силиконовой кисточки. Наливайте тесто половником, быстро вращая сковороду для равномерного распределения.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Жарьте 1-1,5 минуты до появления «кружевного» края. Когда поверхность перестанет быть блестящей, переверните лопаткой. Вторую сторону готовьте 30 секунд. Готовые блины складывайте стопкой, смазывая каждый растопленным сливочным маслом.',
        ingredients: [],
      },
    ],
    tips: [
      'Для идеальных дырочек: добавьте 1 ст.л. газированной воды в тесто перед жаркой',
      'Если блины рвутся: увеличьте количество яиц на 1 шт или добавьте 1 ст.л. крахмала',
      'Хранение: между слоями пергамента в холодильнике до 3 дней',
      'Лучшие начинки: творог+изюм, грибы+лук, красная рыба+сливочный сыр',
    ],
    variations: [
      {
        name: 'На кефире',
        changes: 'Замените молоко на кефир + 1/2 ч.л. разрыхлителя',
      },
      {
        name: 'Без яиц',
        changes: 'Используйте 2 ст.л. льняной муки + 6 ст.л. воды',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Яичница с сосисками и фасолью — сытный английский завтрак за 25 минут',
      description:
        'Классический английский завтрак в домашних условиях: яичница с фасолью в томатном соусе и жареными сосисками. Пошаговый рецепт с фото и советами по выбору ингредиентов. Энергетическая ценность и варианты подачи.',
      keywords: [
        'яичница с сосисками',
        'английский завтрак',
        'фасоль в томатном соусе',
        'сытный завтрак',
        'рецепт яичницы',
        'быстрый завтрак',
        'завтрак как в англии',
        'яйца с фасолью',
        'утреннее меню',
        'белковый завтрак',
        'завтрак за 25 минут',
        'рецепт с фасолью',
        'сосиски на завтрак',
        'энергичный старт дня',
        'завтрак для мужчин',
      ],
      'og:title': 'Яичница с сосисками и фасолью — сытный английский завтрак за 25 минут',
      'og:description':
        'Классический английский завтрак в домашних условиях: яичница с фасолью в томатном соусе и жареными сосисками. Пошаговый рецепт с фото и советами по выбору ингредиентов.',
      'og:url': 'https://povreshka.ru/recipe/scrambled-eggs-with-sausages-and-beans',
      'og:image': '/static/recipes/breakfast/scrambled-eggs-with-sausages-and-beans.jpeg',
      twitterTitle: 'Яичница с сосисками и фасолью — сытный английский завтрак за 25 минут',
      twitterDescription:
        'Классический английский завтрак в домашних условиях: яицa с фасолью и сосисками. Полноценный белковый завтрак за 25 минут!',
      twitterImage: '/static/recipes/breakfast/scrambled-eggs-with-sausages-and-beans.jpeg',
      twitterUrl: 'https://povreshka.ru/recipe/scrambled-eggs-with-sausages-and-beans',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/scrambled-eggs-with-sausages-and-beans',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: [
      'английский завтрак',
      'яичница с сосисками',
      'фасоль в томатном соусе',
      'сытный завтрак',
      'яйца с фасолью',
    ],
    categories: [{ name: 'breakfast' }, { name: 'protein' }],
    key: 'scrambled-eggs-with-sausages-and-beans',
    name: 'scrambled-eggs-with-sausages-and-beans',
    img: '/static/recipes/breakfast/scrambled-eggs-with-sausages-and-beans.jpeg',
    title: 'Яичница с сосисками и фасолью',
    description:
      'Аутентичный английский завтрак в русской интерпретации: золотистая яичница с поджаристыми молочными сосисками и фасолью в густом томатном соусе. Это блюдо — идеальный баланс белков и сложных углеводов для энергичного начала дня. Особый секрет — добавление вустерского соуса и копченой паприки для глубины вкуса.',
    calories: 420,
    preparation: 5,
    time: 25,
    level: 1,
    rating: 4.8,
    portions: 2,
    used: [18.5, 32.7, 12.4],
    ingredients: [
      {
        ...INGREDIENTS.eggs,
        count: 4,
      },
      {
        ...INGREDIENTS.milkSausages,
        count: 4,
        note: 'лучше молочные высшего сорта',
      },
      {
        ...INGREDIENTS.cannedBeans,
        count: 200,
        note: 'в томатном соусе',
      },
      {
        ...INGREDIENTS.vegetableOil,
        count: 2,
      },
      {
        ...INGREDIENTS.butter,
        count: 10,
      },
      {
        ...INGREDIENTS.worcestershireSauce,
        count: 1,
      },
      {
        ...INGREDIENTS.smokedPaprika,
        count: 0.5,
      },
      {
        ...INGREDIENTS.salt,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
      },
    ],
    equipments: [EQUIPMENTS.pan, EQUIPMENTS.spatula, EQUIPMENTS.pot, EQUIPMENTS.tongs, EQUIPMENTS.plate],
    cookingRecipe: [
      {
        img: '/static/steps/english-breakfast1.webp',
        video: null,
        description:
          'Нарежьте сосиски на кусочки по 3 см. Разогрейте сковороду с 1 ст.л. растительного масла на среднем огне. Обжаривайте сосиски 5-7 минут до румяной корочки, периодически переворачивая щипцами. В конце добавьте 1 ч.л. вустерского соуса и перемешайте.',
        ingredients: [
          { ...INGREDIENTS.milkSausages },
          { ...INGREDIENTS.vegetableOil },
          { ...INGREDIENTS.worcestershireSauce },
        ],
      },
      {
        img: '/static/steps/english-breakfast2.webp',
        video: null,
        description:
          'В отдельной кастрюльке разогрейте фасоль в томатном соусе на слабом огне. Добавьте копченую паприку и 1 ч.л. сливочного масла для мягкости вкуса. Томите под крышкой 5 минут, периодически помешивая.',
        ingredients: [{ ...INGREDIENTS.cannedBeans }, { ...INGREDIENTS.smokedPaprika }, { ...INGREDIENTS.butter }],
      },
      {
        img: '/static/steps/english-breakfast3.webp',
        video: null,
        description:
          'В чистой сковороде растопите оставшееся сливочное масло с 1 ст.л. растительного. Взбейте яйца вилкой с щепоткой соли и перца. Вылейте на сковороду и готовьте на среднем огне 2-3 минуты, аккуратно помешивая лопаткой для получения нежной текстуры.',
        ingredients: [
          { ...INGREDIENTS.eggs },
          { ...INGREDIENTS.butter },
          { ...INGREDIENTS.vegetableOil },
          { ...INGREDIENTS.salt },
          { ...INGREDIENTS.groundBlackPepper },
        ],
      },
      {
        img: '/static/steps/english-breakfast4.webp',
        video: null,
        description:
          'Подавайте на подогретых тарелках: сначала фасоль, затем яичницу, сверху выложите сосиски. Украсьте свежей петрушкой. Традиционно подается с тостами из цельнозернового хлеба.',
        ingredients: [],
      },
    ],
    tips: [
      'Для аутентичности используйте английские колбаски Cumberland',
      'Вегетарианский вариант: замените сосиски на грибы портобелло',
      'Добавьте 1 ч.л. коричневого сахара в фасоль для карамельных ноток',
      'Перед подачей можно посыпать тертым чеддером',
    ],
  },
  {
    metaSeo: {
      title: 'Шакшука — израильская яичница с помидорами и перцем | Рецепт с фото',
      description:
        'Аутентичный рецепт шакшуки — ароматной яичницы с томатами, сладким перцем и специями. Секреты правильной консистенции, 3 уровня остроты и советы по подаче. Готовим восточный завтрак за 30 минут!',
      keywords: [
        'шакшука',
        'яичница по-израильски',
        'рецепт шакшуки',
        'яйца с помидорами',
        'восточный завтрак',
        'острая яичница',
        'арабская кухня',
        'завтрак с перцем',
        'яичница в томатном соусе',
        'рецепт за 30 минут',
        'вегетарианская шакшука',
        'питательный завтрак',
        'яичница со специями',
        'баклажаны в шакшуке',
        'подача шакшуки',
      ],
      'og:title': 'Шакшука — израильская яичница с помидорами и перцем | Рецепт с фото',
      'og:description':
        'Аутентичный рецепт шакшуки — ароматной яичницы с томатами, перцем и специями. Секреты правильной консистенции и советы по подаче. Готовим восточный завтрак за 30 минут!',
      'og:url': 'https://povreshka.ru/recipe/scrambled-eggs-shakshuka',
      'og:image': '/static/recipes/breakfast/scrambled-eggs-shakshuka.jpeg',
      twitterTitle: 'Шакшука — израильская яичница с помидорами и перцем | Рецепт с фото',
      twitterDescription:
        'Научитесь готовить настоящую шакшуку — восточный завтрак, покоривший мир! 3 уровня остроты на выбор.',
      twitterImage: '/static/recipes/breakfast/scrambled-eggs-shakshuka.jpeg',
      twitterUrl: 'https://povreshka.ru/recipe/scrambled-eggs-shakshuka',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/scrambled-eggs-shakshuka',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['шакшука', 'яичница по-израильски', 'рецепт шакшуки', 'яйца с помидорами', 'восточный завтрак'],
    categories: [{ name: 'breakfast' }, { name: 'vegetarian' }],
    key: 'scrambled-eggs-shakshuka',
    name: 'scrambled-eggs-shakshuka',
    img: '/static/recipes/breakfast/scrambled-eggs-shakshuka.jpeg',
    title: 'Шакшука (израильская яичница)',
    description:
      'Традиционное блюдо ближневосточной кухни, завоевавшее мировую популярность. В основе — томленые в ароматном томатно-перечном соусе яйца с копченой паприкой, тмином и зеленью. Наш рецепт сохраняет аутентичность, но адаптирован под доступные в России ингредиенты. Секрет — в медленном тушении овощей и правильном моменте добавления яиц.',
    calories: 320,
    preparation: 15,
    time: 30,
    level: 2,
    rating: 4.9,
    portions: 2,
    used: [22.1, 18.7, 9.3],
    ingredients: [
      {
        ...INGREDIENTS.eggs,
        count: 4,
      },
      {
        ...INGREDIENTS.tomato,
        count: 3,
        note: 'или 400 г консервированных',
      },
      {
        ...INGREDIENTS.bellPepper,
        count: 2,
      },
      {
        ...INGREDIENTS.onion,
        count: 1,
      },
      {
        ...INGREDIENTS.garlic,
        count: 3,
        unit: 'зубчика',
      },
      {
        ...INGREDIENTS.tomatoPaste,
        count: 1,
      },
      {
        ...INGREDIENTS.smokedPaprika,
        count: 1,
      },
      {
        ...INGREDIENTS.cumin,
        count: 0.5,
      },
      {
        ...INGREDIENTS.chiliPepper,
        count: 0.5,
        note: 'по желанию',
      },
      {
        ...INGREDIENTS.vegetableOil,
        count: 2,
      },
      {
        ...INGREDIENTS.salt,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
      },
      {
        ...INGREDIENTS.parsley,
        count: 10,
      },
    ],
    equipments: [
      EQUIPMENTS.pan,
      EQUIPMENTS.spatula,
      EQUIPMENTS.woodenSpoon,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.lid,
    ],
    cookingRecipe: [
      {
        img: '/static/steps/shakshuka1.webp',
        video: null,
        description:
          'Нарежьте лук полукольцами, перец соломкой, чеснок тонкими пластинами. Помидоры ошпарьте кипятком, снимите кожицу и нарежьте кубиками (консервированные просто разомните вилкой).',
        ingredients: [
          { ...INGREDIENTS.onion },
          { ...INGREDIENTS.bellPepper },
          { ...INGREDIENTS.garlic },
          { ...INGREDIENTS.tomato },
        ],
      },
      {
        img: '/static/steps/shakshuka2.webp',
        video: null,
        description:
          'Разогрейте масло в глубокой сковороде. Обжаривайте лук 3 минуты до прозрачности. Добавьте перец и готовьте еще 5 минут. Положите чеснок, томатную пасту и все специи, прогрейте 1 минуту до аромата.',
        ingredients: [
          { ...INGREDIENTS.vegetableOil },
          { ...INGREDIENTS.tomatoPaste },
          { ...INGREDIENTS.smokedPaprika },
          { ...INGREDIENTS.cumin },
          { ...INGREDIENTS.chiliPepper },
        ],
      },
      {
        img: '/static/steps/shakshuka3.webp',
        video: null,
        description:
          'Добавьте помидоры, посолите и поперчите. Тушите под крышкой на медленном огне 15 минут, пока соус не загустеет. Сделайте в соусе 4 углубления ложкой.',
        ingredients: [{ ...INGREDIENTS.salt }, { ...INGREDIENTS.groundBlackPepper }],
      },
      {
        img: '/static/steps/shakshuka4.webp',
        video: null,
        description:
          'Аккуратно разбейте яйца в углубления. Накройте крышкой и готовьте 5-7 минут до желаемой степени прожарки желтков. Посыпьте рубленой петрушкой и подавайте прямо в сковороде с питой или хлебом.',
        ingredients: [{ ...INGREDIENTS.eggs }, { ...INGREDIENTS.parsley }],
      },
    ],
    tips: [
      'Для средиземноморского варианта добавьте оливки и фету',
      'Мясная версия: подойдет фарш или кусочки курицы',
      'Если соус слишком кислый — добавьте 1 ч.л. меда',
      'Лучше использовать чугунную сковороду',
    ],
    variations: [
      {
        name: 'С баклажанами',
        changes: 'Добавьте 1 нарезанный кубиками баклажан на этапе обжарки перца',
      },
      {
        name: 'Зеленая шакшука',
        changes: 'Замените помидоры на 300 г шпината и 2 цукини',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Менемен — турецкая яичница с перцем и помидорами | Пошаговый рецепт',
      description:
        'Настоящий турецкий менемен: нежная яичница с сочными овощами и ароматными специями. Секреты правильной текстуры, выбор перцев и варианты подачи. Готовим солнечный завтрак за 25 минут!',
      keywords: [
        'менемен',
        'турецкая яичница',
        'яйца по-турецки',
        'рецепт менемена',
        'завтрак с перцем',
        'яичница с овощами',
        'восточная кухня',
        'яйца с помидорами',
        'быстрый завтрак',
        'рецепт за 25 минут',
        'питательный завтрак',
        'яичница со специями',
        'турецкая кухня',
        'завтрак как в турции',
        'подача менемена',
      ],
      'og:title': 'Менемен — турецкая яичница с перцем и помидорами | Пошаговый рецепт',
      'og:description':
        'Настоящий турецкий менемен: нежная яичница с сочными овощами и специями. Секреты правильной текстуры и варианты подачи. Готовим за 25 минут!',
      'og:url': 'https://povreshka.ru/recipe/menemen',
      'og:image': '/static/recipes/breakfast/menemen.jpeg',
      twitterTitle: 'Менемен — турецкая яичница с перцем и помидорами | Пошаговый рецепт',
      twitterDescription: 'Научитесь готовить менемен как в стамбульских кафе! Солнечный завтрак за 25 минут.',
      twitterImage: '/static/recipes/breakfast/menemen.jpeg',
      twitterUrl: 'https://povreshka.ru/recipe/menemen',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://povreshka.ru/recipe/menemen',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['менемен', 'турецкая яичница', 'яйца по-турецки', 'рецепт менемена', 'завтрак с перцем'],
    categories: [{ name: 'breakfast' }, { name: 'vegetarian' }],
    key: 'menemen',
    name: 'menemen',
    img: '/static/recipes/breakfast/menemen.jpeg',
    title: 'Менемен (турецкая яичница)',
    description:
      'Визитная карточка турецкой кухни — менемен отличается от привычной яичницы особым способом приготовления. Яйца не жарятся, а томятся в овощном рагу из сладких перцев и помидоров, приобретая нежную кремовую текстуру. Наш рецепт сохраняет традиционную технологию, но адаптирован под российские продукты. Обязательный элемент — свежий турецкий перец «чили» и оливковое масло холодного отжима.',
    calories: 280,
    preparation: 10,
    time: 25,
    level: 2,
    rating: 4.9,
    portions: 2,
    used: [15.8, 20.4, 8.2],
    ingredients: [
      {
        ...INGREDIENTS.eggs,
        count: 4,
      },
      {
        ...INGREDIENTS.tomato,
        count: 3,
      },
      {
        ...INGREDIENTS.greenPepper,
        count: 2,
      },
      {
        ...INGREDIENTS.onion,
        count: 1,
        note: 'красный',
      },
      {
        ...INGREDIENTS.garlic,
        count: 2,
        unit: 'зубчика',
      },
      {
        ...INGREDIENTS.oliveOil,
        count: 3,
      },
      {
        ...INGREDIENTS.redPepperFlakes,
        count: 0.5,
      },
      {
        ...INGREDIENTS.driedMint,
        count: 0.5,
      },
      {
        ...INGREDIENTS.salt,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
      },
      {
        ...INGREDIENTS.fetaCheese,
        count: 50,
        note: 'по желанию',
      },
      {
        ...INGREDIENTS.parsley,
        count: 10,
      },
    ],
    equipments: [EQUIPMENTS.pan, EQUIPMENTS.woodenSpoon, EQUIPMENTS.knife, EQUIPMENTS.cutBoard, EQUIPMENTS.lid],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Нарежьте перец тонкими полукольцами, лук — кубиками, помидоры — средними дольками (предварительно ошпарьте и снимите кожицу). Чеснок мелко порубите. Важно: овощи должны быть примерно одинакового размера для равномерного приготовления.',
        ingredients: [
          { ...INGREDIENTS.greenPepper },
          { ...INGREDIENTS.onion },
          { ...INGREDIENTS.tomato },
          { ...INGREDIENTS.garlic },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Разогрейте оливковое масло в сковороде с высокими бортами. На среднем огне обжаривайте лук 2 минуты до прозрачности. Добавьте перец и готовьте еще 5 минут, пока он не станет мягким. В конце положите чеснок и все специи, прогрейте 30 секунд.',
        ingredients: [{ ...INGREDIENTS.oliveOil }, { ...INGREDIENTS.redPepperFlakes }, { ...INGREDIENTS.driedMint }],
      },
      {
        img: null,
        video: null,
        description:
          'Добавьте помидоры, посолите и поперчите. Тушите на среднем огне 10 минут без крышки, пока помидоры не разварятся в соус, а жидкость не испарится. В классическом варианте помидоры должны полностью раствориться.',
        ingredients: [{ ...INGREDIENTS.salt }, { ...INGREDIENTS.groundBlackPepper }],
      },
      {
        img: null,
        video: null,
        description:
          'Уменьшите огонь до минимума. Ложкой сделайте в овощной массе 4 углубления и влейте в каждое по яйцу. Накройте крышкой и готовьте 3-5 минут до желаемой степени прожарки желтков. В конце посыпьте рубленой петрушкой и крошкой феты.',
        ingredients: [{ ...INGREDIENTS.eggs }, { ...INGREDIENTS.parsley }, { ...INGREDIENTS.fetaCheese }],
      },
    ],
    tips: [
      'Для аутентичности используйте турецкие длинные зеленые перцы',
      'Перед подачей сбрызните лимонным соком',
      'Подавайте сразу в сковороде с теплым хлебом',
      'Если нет свежих помидоров — возьмите 400 г консервированных',
    ],
    variations: [
      {
        name: 'С колбасой суджук',
        changes: 'Добавьте 100 г нарезанной турецкой колбасы на этапе обжарки лука',
      },
      {
        name: 'Деревенский вариант',
        changes: 'Добавьте 1 нарезанный кубиками баклажан и 1 картофелину',
      },
    ],
  },
]
