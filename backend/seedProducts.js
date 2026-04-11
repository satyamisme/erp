const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lakki_terminal';

const products = [
  {
    name: 'iPhone 15 Pro Max',
    sku: 'APP-15PM-256',
    category: 'Smartphones',
    price: 1199.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJDfZP_gWx-m9EmySCOq3tHToE1p2uiVlPTYZmEM_nwapBufiTV0WYMWEMr_9sYlG9mfpAmmnpuVsG6kLYr6NHUUE6B7ISlKc0MKr-sTJnJlUoHjUNugrQ2i0tGautwAXuV3MS_wlKSonxAeo2e2r3fCkxyxT49-jiEn2EL6U_Ktqg2GKDv4m2f7V79O9Qc_xn5-7zNhMGhGHD7cioUaWHaEgjyxnxZJmjA_wAfSjGkFrHqUjyr6n0ZjS16mDP86PjoyS1egQ4S8A',
    stock: 50,
    pinned: true
  },
  {
    name: 'Galaxy Z Fold 5',
    sku: 'SAM-ZF5-512',
    category: 'Smartphones',
    price: 1799.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrf8iCkRjJJbSrmNrE0O6foHT4wIwiCVVYJrudRFdGgkNuYDKt4AWF6b2f_e9e1G9wHkGUJTzudUO1E3UUfVTJUKJiQtnw7LGx5HAQCL75p4vNNNXH38IRJT0sl1gumdFHyzMXfm2mxY6jTyhe-PltXQ98E1MgVK9g_04j1gNIJpFC3Z3GoRjpYTndLsu_HwR2Zb3gcH6MrKHyAfByAQ55d_H6S5Z4qZc06gle2O08PgwU1njD-PJIvDtqdxFYardr9Xc9ihVkcLY',
    stock: 20,
    pinned: false
  },
  {
    name: 'iPad Pro 12.9" M2',
    sku: 'APP-IPM2-129',
    category: 'Tablets',
    price: 1099.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3mqGYO-ZbiHLSWmrnmM13XFAAtWdQYi7J6-PbbxpCWRhLieP8jx6IQAHlCaZZTJgj7Oa34yGKpBT0EnO0BVfcEuQ8y0WwB6x81jxb-OBVtlT4pxz18Fo3ZRABopp8Qvq1lNcLq4Xpoo5VpVkcY1s8qmqn8jrb66f40JOTSDaJAScc2859mQPJsdU6EEbWAdYGCto4xqg10HtKesZahYiYT9jbPCXLfEUzOoPmKEfjImNc0kmFycrnwDiQqCa_2INCBR_HzDQYqf4',
    stock: 15,
    pinned: false
  },
  {
    name: 'Sony WH-1000XM5',
    sku: 'SNY-XM5-BLK',
    category: 'Accessories',
    price: 349.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoZzqxLWaYNQN6F2VfO9m_CQG5njEuvAEt2S33k3yhGQM2c4_MnZa-zIHBLKWde2i9-ZKu5GAClxjy8oxSyuy7WLu997BBLKN2TADu_B4U16hmTMWuCkWjei3ClkZLfQPLXk9EELGyZ68YHy979L8w5JN272fiS0X9cao-6DhvRYt1M84V3LLzm3gFJdMPi0jH0VzqUvOE0J5fMADSnJgRaRKmXiJwmQxKgMzOtyj6D8cIZd8-V_NISLC0RyVX4_0JI6Yq9xCVJXU',
    stock: 30,
    pinned: true
  },
  {
    name: 'Pixel Watch 2',
    sku: 'GOO-PW2-LTH',
    category: 'Wearables',
    price: 349.99,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2NHqsqSrP36MmXUvoPgWiVNjkkQEQGjtCexeUWSBNru7FwX5wrpvG0SZJUxlOiPqEXBibhBmL2mABaRtU3qNTZL_E2Kwxs9luLsQkj_GZkVbfTrIHuEnOFeuJZ-QarPTZygC-HRY58tgfLI4OXdFE1-P5YwyxADJQGJX4gHfT6qJTTA4VSAOIYWtcQGYAi7AvzEsWPajzLEsMNRYTw8m7rFF5Zt6ZPXqk92c3ns186If7zEhWsVkO-5uuMTYPoIN0A4qjeaNP0bQ',
    stock: 25,
    pinned: false
  },
  {
    name: 'Apple Watch Ultra',
    sku: 'APP-WATU-ORG',
    category: 'Wearables',
    price: 799.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxsjfOvQBj_gffrMGBBSeU7yEWZ0z62l2EmTAdg8E_spuUNaH8yugtf872Eg5GtQJ5zzAKNGLrh6RY4fl6FSr50-fABlW_SEn-yF8jbsCjv8WorWu-PMZM-1VS1oMYS3z3PlrBVIEJ3QtpdeHoa9UVn-1VFZBmlOWnC_VJQ_0F64Wexd_WP7M9Y1wQ2rlIsRV0D23z9Fokf8pHfIDPkJk43ovPVFZhHyPSdDupAM90GVE35ZEhRkPju81KC_SEgOwIaXiPjqk7tL0',
    stock: 12,
    pinned: false
  },
  {
    name: 'Logitech MX Master 3S',
    sku: 'LOG-MXM3S-GRY',
    category: 'Accessories',
    price: 99.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPMefT2mzOG4fkf270Uu2rVtQpitXqa5WI87xmUGmMg8oT2H3PttUBqga1RW1tLCC-5oFLCzy0AEUp97F2HE6_dU34lomOVkgCvCJwN6oqTdDnuc6WGcI5ZMJnYMeIqNsvu80mxqWn11h3smzQAVJAnqbGk9miUleeOzt0myhJDzu2c6sncIxEuzQODnT11kDcihEwfx_6s-THRI7YOl5mmeSbtTOGW9UB1ifZDxRZmxa4IoLLagyxx4agavRhJa8qh57M-D6TVOM',
    stock: 45,
    pinned: false
  },
  {
    name: 'AirPods Pro Gen 2',
    sku: 'APP-APPG2-WHT',
    category: 'Accessories',
    price: 249.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8OMS8VfnK0bazY8nN9OryAfNgD4NSj4JCV3SzkQiD6TjqAt5REY8AjzyZpfdokl1IcVHolFwCi99DJP9s-nzn78JNAJHMaKsYu_5UR-KducdRB7a-qBps0PK1cK-ZZlJGC-t434IFzfxVoMxxXj8IVT0zT1IbiuoMfeDQBZQPDF-YqKy6ql6LSxKZrtIVBxv7soevTfMrybRuHURF3WXl6nmrO3NAFFQWsNgIXhzQHyuTdw-wqFKed2BYkqJ-KQGer84AVKQ4GaU',
    stock: 60,
    pinned: false
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for product seeding...');

    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log('Products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
  } finally {
    mongoose.disconnect();
  }
}

seed();
