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
]

// {
//   key: 'scrambled-eggs-with-sausages-and-beans',
//   name: 'scrambled-eggs-with-sausages-and-beans',
//   img: null,
//   title: 'Яичница с сосисками и фасолью',
//   description:
//     'Это сытное и сбалансированное блюдо вдохновлено английскими традициями. В яичнице с фасолью и сосисками сочетаются белки, углеводы и насыщенный вкус. Подойдёт не только для завтрака, но и для позднего ужина. Готовится просто, а съедается с удовольствием.',
//   time: 25,
//   level: 1,
//   rating: 5,
// },
// {
//   key: 'scrambled-eggs-shakshuka',
//   name: 'scrambled-eggs-shakshuka',
//   img: null,
//   title: 'Яичница шакшука',
//   description:
//     'Шакшука — взрыв вкуса и цвета! Томаты, специи, сладкий перец и яйца объединяются в сковороде, создавая ароматное блюдо восточной кухни. Идеально подходит для любителей остринки и насыщенных соусов. Удобный и быстрый вариант, если хочется чего-то необычного.',
//   time: 30,
//   level: 1,
//   rating: 5,
// },
// {
//   key: 'hearty-scrambled-eggs',
//   name: 'hearty-scrambled-eggs',
//   img: null,
//   title: 'Cытная яичница',
//   description:
//     'Эта яичница — настоящий праздник вкуса. Колбаски, свежие овощи и зелень делают её питательной и ароматной. Подходит для тех, кто предпочитает плотные и разнообразные завтраки. Быстро готовится и отлично насыщает на долгое время.',
//   time: 15,
//   level: 2,
//   rating: 4.7,
// },
// {
//   key: 'menemen',
//   name: 'menemen',
//   img: null,
//   title: 'Менемен (турецкая яичница)',
//   description:
//     'Менемен — турецкий кулинарный хит. В этом блюде яйца томятся с перцами и помидорами до идеальной мягкости, а специи придают характер. Добавьте сыр или зелень, и получите завтрак, полный южного колорита. Отличный способ разнообразить утреннее меню.',
//   time: 25,
//   level: 1,
//   rating: 5,
// },
