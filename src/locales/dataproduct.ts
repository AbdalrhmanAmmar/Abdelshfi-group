const products: Product[] = [
  // الخضروات الطازجة
  { id: 'fresh-onions', name: 'بصل أحمر', category: 'vegetables', image: '/Images/vegetables/basal-ahmar.png', description: 'بصل أحمر طازج عالي الجودة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-onions-white', name: 'بصل أبيض', category: 'vegetables', image: '/Images/vegetables/bsl-abyd.jpg', description: 'بصل أبيض طازج للتصدير', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-onions-golden', name: 'بصل ذهبي', category: 'vegetables', image: '/Images/vegetables/bsl-gold.jpg', description: 'بصل ذهبي مميز', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-potatoes', name: 'بطاطس', category: 'vegetables', image: '/Images/vegetables/potato.jpg', description: 'بطاطس طازجة عالية الجودة', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-tomatoes', name: 'طماطم', category: 'vegetables', image: '/Images/vegetables/tomato.jpg', description: 'طماطم طازجة حمراء', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-garlic', name: 'ثوم', category: 'vegetables', image: '/Images/vegetables/Garlic.jpg', description: 'ثوم طازج عالي الجودة', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-cucumbers', name: 'خيار', category: 'vegetables', image: '/Images/vegetables/fresh-cucumbers.jpeg', description: 'خيار طازج أخضر', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-courgette', name: 'كوسة', category: 'vegetables', image: '/Images/vegetables/Courgette.jpg', description: 'كوسة طازجة خضراء', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-peppers', name: 'فلفل ألوان', category: 'vegetables', image: '/Images/vegetables/fresh-peppers.jpg', description: 'فلفل ملون طازج', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-eggplant', name: 'باذنجان رومي', category: 'vegetables', image: '/Images/vegetables/Eggplant.jpg', description: 'باذنجان رومي طازج', rating: 4.4, price: 'حسب الطلب', inStock: true, featured: false },

  // الفواكه الطازجة
  { id: 'fresh-mangoes-butter', name: 'مانجو زبدية', category: 'fruits', image: '/Images/fruits/mango.jpg', description: 'مانجو زبدية مصرية أصلية', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-mangoes-kit', name: 'مانجو كيت', category: 'fruits', image: '/Images/fruits/mango-kit.jpg', description: 'مانجو كيت عالية الجودة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-oranges-navel', name: 'برتقال بسرة', category: 'fruits', image: '/Images/fruits/Navel-Orange.jpg', description: 'برتقال بسرة مصري طازج', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-lemons', name: 'ليمون', category: 'fruits', image: '/Images/fruits/limon.jpg', description: 'ليمون طازج حامض', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-pomegranate', name: 'رمان', category: 'fruits', image: '/Images/fruits/Pomegranate.jpg', description: 'رمان أحمر طازج', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-grapes', name: 'عنب', category: 'fruits', image: '/Images/fruits/Grapes.jpg', description: 'عنب طازج حلو', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-strawberries', name: 'فراولة', category: 'fruits', image: '/Images/fruits/Strawberry.jpeg', description: 'فراولة طازجة حمراء', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-watermelon', name: 'بطيخ', category: 'fruits', image: '/Images/fruits/watermelon.jpeg', description: 'بطيخ أحمر حلو', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-oranges-valencia', name: 'برتقال فالنسيا', category: 'fruits', image: '/Images/fruits/Valencia-Orange.jpg', description: 'برتقال فالنسيا مصري عالي الجودة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-oranges-sweet', name: 'برتقال سكري', category: 'fruits', image: '/Images/fruits/Sweet-Orange.webp', description: 'برتقال سكري حلو المذاق', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-oranges-baladi', name: 'برتقال بلدي', category: 'fruits', image: '/Images/fruits/Baladi-Orange.webp', description: 'برتقال بلدي مصري أصيل', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-bananas-local', name: 'موز بلدي', category: 'fruits', image: '/Images/fruits/banana.webp', description: 'موز بلدي مصري طازج وحلو', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-bananas-tropical', name: 'موز استوائي', category: 'fruits', image: '/Images/fruits/Tropical-Banana.jpg', description: 'موز استوائي كبير الحجم', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-melon-yellow', name: 'شمام أصفر', category: 'fruits', image: '/Images/fruits/Canary-Melon.jpg', description: 'شمام أصفر حلو ومنعش', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-melon-green', name: 'شمام أخضر', category: 'fruits', image: '/Images/fruits/Honeydew-Melon.jpg', description: 'شمام أخضر طازج ولذيذ', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-cherries-red', name: 'كرز أحمر', category: 'fruits', image: '/Images/fruits/Red-Cherry.jpg', description: 'كرز أحمر طازج حلو المذاق', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'fresh-cherries-black', name: 'كرز أسود', category: 'fruits', image: '/Images/fruits/Black-Cherry.jpg', description: 'كرز أسود غني بمضادات الأكسدة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },

  // البقوليات
  { id: 'white-beans', name: 'فاصوليا بيضاء', category: 'legumes', image: '/Images/Legumes/White-Beans.jpg', description: 'فاصوليا بيضاء عالية الجودة', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'red-lentils', name: 'عدس', category: 'legumes', image: '/Images/Legumes/Lentils.jpg', description: 'عدس أحمر وأصفر', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'chickpeas', name: 'حمص', category: 'legumes', image: '/Images/Legumes/Chickpeas.jpg', description: 'حمص جاف عالي الجودة', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'rice', name: 'أرز', category: 'legumes', image: '/Images/Legumes/Rice.jpg', description: 'أرز مصري أبيض', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'wheat', name: 'قمح', category: 'legumes', image: '/Images/Legumes/Wheat.jpg', description: 'قمح مصري عالي الجودة', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },

  // الأعشاب العطرية
  { id: 'fresh-mint', name: 'نعناع', category: 'herbs', image: '/Images/Aromatic-Herbs/Mint.jpg', description: 'نعناع طازج عطري', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'hibiscus', name: 'كركديه', category: 'herbs', image: '/Images/Aromatic-Herbs/Hibiscus.jpg', description: 'كركديه أحمر طبيعي', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'chamomile', name: 'بابونج', category: 'herbs', image: '/Images/Aromatic-Herbs/Chamomile.webp', description: 'بابونج طبيعي مجفف', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'fresh-thyme', name: 'زعتر', category: 'herbs', image: '/Images/Aromatic-Herbs/Thyme.jpg', description: 'زعتر طبيعي عطري', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },

  // المجففات
  { id: 'sun-dried-tomatoes', name: 'طماطم مجففة', category: 'dried', image: '/Images/Dried/dried-Tomatoes.webp', description: 'طماطم مجففة طبيعياً', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'dried-mangoes', name: 'مانجو مجففة', category: 'dried', image: '/Images/Dried/dried-mango.webp', description: 'مانجو مجففة حلوة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'dried-onions', name: 'بصل مجفف', category: 'dried', image: '/Images/Dried/Dried-Onion.jpeg', description: 'بصل مجفف مطحون', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'dried-figs', name: 'تين مجفف', category: 'dried', image: '/Images/Dried/Dried-Figs.jpg', description: 'تين مجفف طبيعي حلو المذاق', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'dried-strawberries', name: 'فراولة مجففة', category: 'dried', image: '/Images/Dried/Dried-Strawberries.jpg', description: 'فراولة مجففة محتفظة بالطعم الطبيعي', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'dried-apricots', name: 'مشمش مجفف', category: 'dried', image: '/Images/Dried/Dried-Apricots.jpg', description: 'مشمش مجفف غني بالفيتامينات', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'dried-dates', name: 'تمر مجفف', category: 'dried', image: '/Images/Dried/Dried-Dates.jpg', description: 'تمر مجفف عالي الجودة', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'raisins', name: 'عنب مجفف (زبيب)', category: 'dried', image: '/Images/Dried/Raisins.webp', description: 'زبيب طبيعي حلو المذاق', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'dried-bananas', name: 'موز مجفف', category: 'dried', image: '/Images/Dried/Dried-Banana.jpg', description: 'موز مجفف مقرمش ولذيذ', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'dried-pineapple', name: 'أناناس مجفف', category: 'dried', image: '/Images/Dried/Dried-Pineapple.jpg', description: 'أناناس مجفف استوائي الطعم', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'dried-kiwi', name: 'كيوي مجفف', category: 'dried', image: '/Images/Dried/Dried-kiwi.jpg', description: 'كيوي مجفف غني بفيتامين سي', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'dried-coconut', name: 'جوز الهند مجفف', category: 'dried', image: '/Images/Dried/Dried-Coconut.jpg', description: 'جوز الهند المجفف الطبيعي', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'dried-peaches', name: 'خوخ مجفف', category: 'dried', image: '/Images/Dried/Dried-Peaches.jpeg', description: 'خوخ مجفف طري ولذيذ', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'dried-pears', name: 'كمثرى مجففة', category: 'dried', image: '/Images/Dried/Dried-Pears.jpg', description: 'كمثرى مجففة حلوة المذاق', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'dried-apples', name: 'تفاح مجفف', category: 'dried', image: '/Images/Dried/dried-apple.jpg', description: 'تفاح مجفف مقرمش وصحي', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },

  // الزيوت والبذور
  { id: 'olive-oil', name: 'زيت زيتون', category: 'oils', image: '/Images/Oils/Olive-Oil.webp', description: 'زيت زيتون بكر ممتاز', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'peppermint-oil', name: 'زيت نعناع', category: 'oils', image: '/Images/Oils/Peppermint-Oil.webp', description: 'زит نعناع طبيعي', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'flax-seeds', name: 'بذور الكتان', category: 'oils', image: '/Images/Oils/Flaxseed-Oil.jpg', description: 'بذور كتان طبيعية', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'black-cumin', name: 'حبة البركة', category: 'oils', image: '/Images/Oils/Black-Cumin.webp', description: 'حبة البركة الطبيعية', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },

  // المجمدات
  { id: 'frozen-peas', name: 'البازلاء الخضراء', category: 'frozen', image: '/Images/Frozen/green-peans-frozen.jpg', description: 'بازلاء خضراء مجمدة طازجة', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-corn', name: 'الذرة', category: 'frozen', image: '/Images/Frozen/sweet-corn.jpg', description: 'ذرة حلوة مجمدة', rating: 4.4, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-spinach', name: 'السبانخ', category: 'frozen', image: '/Images/Frozen/frozen-spinach.jpg', description: 'سبانخ مجمدة طازجة', rating: 4.3, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-broccoli', name: 'البروكلي', category: 'frozen', image: '/Images/Frozen/frozen-broccoli.jpg', description: 'بروكلي مجمد طازج', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'frozen-mixed-vegetables', name: 'خلطات الخضروات', category: 'frozen', image: '/Images/Frozen/Frozen-mixed-veggies.jpg', description: 'خلطات خضروات مجمدة للمقلاة أو الحساء', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-carrots', name: 'الجزر', category: 'frozen', image: '/Images/Frozen/frozen-carrots.jpeg', description: 'جزر مجمد طازج', rating: 4.2, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-cauliflower', name: 'القرنبيط', category: 'frozen', image: '/Images/Frozen/frozen-Cauliflower.jpg', description: 'قرنبيط مجمد طازج', rating: 4.4, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-berries', name: 'التوت', category: 'frozen', image: '/Images/Frozen/frozen-barries.jpg', description: 'توت مجمد طازج', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'frozen-mango', name: 'المانجو', category: 'frozen', image: '/Images/Frozen/frozen-mango.webp', description: 'مانجو مجمدة طازجة', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-banana', name: 'الموز', category: 'frozen', image: '/Images/Frozen/frozen-banana.jpg', description: 'موز مجمد طازج', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-pineapple', name: 'الأناناس', category: 'frozen', image: '/Images/Frozen/frozen-pineapple.webp', description: 'أناناس مجمد طازج', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: 'frozen-fruit-mix', name: 'خلطات الفواكه', category: 'frozen', image: '/Images/Frozen/Fruit-Mix.jpg', description: 'خلطات فواكه مجمدة (مثل التوت الأزرق والفراولة)', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: 'frozen-peaches', name: 'الخوخ', category: 'frozen', image: '/Images/Frozen/frozen-Peaches.webp', description: 'خوخ مجمد طازج', rating: 4.4, price: 'حسب الطلب', inStock: true, featured: false }
];

export default products;

export const dataproductTranslations = {
  ar: {
    products: {
      // General Terms
      title: "منتجاتنا الزراعية",
      subtitle: "اكتشف مجموعة واسعة من المنتجات الزراعية الطازجة والعضوية",
      allProducts: "جميع المنتجات",
      vegetables: "الخضروات الطازجة",
      fruits: "الفواكه الطازجة",
      legumes: "البقوليات",
      herbs: "الأعشاب العطرية",
      dried: "المجففات",
      oils: "الزيوت والبذور",
      frozen: "المنتجات المجمدة",
      featured: "مميز",
      inStock: "متوفر",
      outOfStock: "غير متوفر",
      searchPlaceholder: "ابحث عن منتج...",
      sortByName: "ترتيب حسب الاسم",
      sortByRating: "ترتيب حسب التقييم",
      sortByFeatured: "ترتيب حسب المميز",
      featuredOnly: "المميزة فقط",
      categories: "الفئات",
      viewDetails: "عرض التفاصيل",
      productCount: "منتج",
      noProductsFound: "لم يتم العثور على منتجات",
      tryDifferentSearch: "حاول استخدام مصطلحات بحث مختلفة",

      // Vegetables
      "fresh-onions": {
        name: "بصل أحمر",
        description: "بصل أحمر طازج عالي الجودة من مزارعنا الخاصة، غني بالفيتامينات والمعادن الأساسية"
      },
      "fresh-onions-white": {
        name: "بصل أبيض",
        description: "بصل أبيض طازج للتصدير من أجود الأنواع، مزروع في أفضل الأراضي الزراعية المصرية"
      },
      "fresh-onions-golden": {
        name: "بصل ذهبي",
        description: "بصل ذهبي مميز طازج، مثالي للاستخدام في الطبخ والأطباق المختلفة"
      },
      "fresh-potatoes": {
        name: "بطاطس طازجة",
        description: "بطاطس طازجة عالية الجودة، مثالية للطبخ والقلي، من مزارعنا المتخصصة"
      },
      "fresh-tomatoes": {
        name: "طماطم طازجة",
        description: "طماطم طازجة عالية الجودة من مزارعنا الخاصة، غنية بالفيتامينات والمعادن الأساسية"
      },
      "fresh-garlic": {
        name: "ثوم طازج",
        description: "ثوم طازج عالي الجودة، غني بمضادات الأكسدة والمركبات المفيدة للصحة"
      },
      "fresh-cucumbers": {
        name: "خيار طازج",
        description: "خيار طازج ومقرمش، مثالي للسلطات والعصائر الطبيعية"
      },
      "fresh-courgette": {
        name: "كوسة طازجة",
        description: "كوسة طازجة خضراء، غنية بالألياف والفيتامينات، مثالية للشوي والطبخ"
      },
      "fresh-peppers": {
        name: "فلفل ألوان",
        description: "فلفل ملون طازج بأنواعه المختلفة، غني بفيتامين سي والمواد المضادة للأكسدة"
      },
      "fresh-eggplant": {
        name: "باذنجان رومي",
        description: "باذنجان رومي طازج، مثالي للتحضير في الأطباق المختلفة والشوي"

      },

      // Fruits
      "fresh-mangoes-butter": {
        name: "مانجو زبدية",
        description: "مانجو زبدية مصرية أصلية طازجة، غنية بالفيتامينات والطعم الاستوائي الرائع"
      },
      "fresh-mangoes-kit": {
        name: "مانجو كيت",
        description: "مانجو كيت عالية الجودة، حلوة المذاق وغنية بالعصارة"
      },
      "fresh-oranges-navel": {
        name: "برتقال بسرة",
        description: "برتقال بسرة مصري طازج، غني بفيتامين سي والألياف الطبيعية"
      },
      "fresh-lemons": {
        name: "ليمون طازج",
        description: "ليمون طازج حامض، مثالي للعصائر وتتبيل الأطباق"
      },
      "fresh-pomegranate": {
        name: "رمان طازج",
        description: "رمان أحمر طازج، غني بمضادات الأكسدة والعناصر الغذائية المفيدة"
      },
      "fresh-grapes": {
        name: "عنب طازج",
        description: "عنب طازج حلو المذاق، غني بمضادات الأكسدة والفيتامينات الأساسية"
      },
      "fresh-strawberries": {
        name: "فراولة طازجة",
        description: "فراولة طازجة حلوة المذاق، غنية بفيتامين سي والمواد المضادة للأكسدة"
      },
      "fresh-watermelon": {
        name: "بطيخ طازج",
        description: "بطيخ أحمر حلو ومنعش، مثالي للصيف والحلويات الطبيعية"
      },
      "fresh-oranges-valencia": {
        name: "برتقال فالنسيا",
        description: "برتقال فالنسيا مصري عالي الجودة، غني بالعصارة والفيتامينات"
      },
      "fresh-oranges-sweet": {
        name: "برتقال سكري",
        description: "برتقال سكري حلو المذاق، مثالي للعصائر والاستهلاك المباشر"
      },
      "fresh-oranges-baladi": {
        name: "برتقال بلدي",
        description: "برتقال بلدي مصري أصيل، معروف بمذاقه المميز وفائدته الصحية"
      },
      "fresh-bananas-local": {
        name: "موز بلدي",
        description: "موز بلدي مصري طازج وحلو، غني بالبوتاسيوم والفيتامينات"
      },
      "fresh-bananas-tropical": {
        name: "موز استوائي",
        description: "موز استوائي كبير الحجم، حلو المذاق وغني بالعناصر الغذائية"
      },
      "fresh-melon-yellow": {
        name: "شمام أصفر",
        description: "شمام أصفر حلو ومنعش، غني بالماء والفيتامينات"
      },
      "fresh-melon-green": {
        name: "شمام أخضر",
        description: "شمام أخضر طازج ولذيذ، معروف بطعمه الحلو والمنعش"
      },
      "fresh-cherries-red": {
        name: "كرز أحمر",
        description: "كرز أحمر طازج حلو المذاق، غني بمضادات الأكسدة"
      },
      "fresh-cherries-black": {
        name: "كرز أسود",
        description: "كرز أسود غني بمضادات الأكسدة، مثالي للاستهلاك الطازج والحلويات"
      },

      // Legumes
      "white-beans": {
        name: "فاصوليا بيضاء",
        description: "فاصوليا بيضاء عالية الجودة، غنية بالبروتين والألياف، مثالية للوجبات الصحية"
      },
      "red-lentils": {
        name: "عدس",
        description: "عدس أحمر وأصفر عالي الجودة، سريع الطبخ وغني بالبروتين النباتي"
      },
      "chickpeas": {
        name: "حمص",
        description: "حمص جاف عالي الجودة، غني بالبروتين والألياف، مثالي للحمص والفلافل"
      },
      "rice": {
        name: "أرز مصري",
        description: "أرز مصري أبيض عالي الجودة، مثالي للطهي اليومي والأطباق المختلفة"
      },
      "wheat": {
        name: "قمح مصري",
        description: "قمح مصري عالي الجودة، غني بالألياف والعناصر الغذائية الأساسية"
      },

      // Herbs
      "fresh-mint": {
        name: "نعناع طازج",
        description: "نعناع طازج عطري، غني بالفيتامينات والمعادن، مثالي للشاي والمشروبات والأطباق العربية"
      },
      "hibiscus": {
        name: "كركديه",
        description: "كركديه أحمر طبيعي، مثالي لتحضير المشروبات الصحية والمنعشة"
      },
      "chamomile": {
        name: "بابونج",
        description: "بابونج طبيعي مجفف، معروف بفوائده المهدئة والعلاجية"
      },
      "fresh-thyme": {
        name: "زعتر طازج",
        description: "زعتر طازج عطري، غني بمضادات الأكسدة، مثالي للطبخ والشاي العشبي"
      },

      // Dried Products
      "sun-dried-tomatoes": {
        name: "طماطم مجففة",
        description: "طماطم مجففة طبيعياً، مركزة النكهة ومثالية للطبخ والصلصات"
      },
      "dried-mangoes": {
        name: "مانجو مجففة",
        description: "مانجو مجففة حلوة، محتفظة بالطعم الطبيعي والفيتامينات"
      },
      "dried-onions": {
        name: "بصل مجفف",
        description: "بصل مجفف مطحون، مثالي للطبخ السريع وحفظ النكهة لفترة طويلة"
      },
      "dried-figs": {
        name: "تين مجفف",
        description: "تين مجفف طبيعي حلو المذاق، غني بالألياف والمعادن، مثالي كوجبة خفيفة صحية"
      },
      "dried-strawberries": {
        name: "فراولة مجففة",
        description: "فراولة مجففة محتفظة بالطعم الطبيعي، مثالية للوجبات الخفيفة والحلويات"
      },
      "dried-apricots": {
        name: "مشمش مجفف",
        description: "مشمش مجفف غني بالفيتامينات، حلو المذاق ومفيد للصحة"
      },
      "dried-dates": {
        name: "تمر مجفف",
        description: "تمر مجفف عالي الجودة، غني بالسكريات الطبيعية والمعادن"
      },
      "raisins": {
        name: "زبيب",
        description: "زبيب طبيعي حلو المذاق، غني بالطاقة والعناصر الغذائية"
      },
      "dried-bananas": {
        name: "موز مجفف",
        description: "موز مجفف مقرمش ولذيذ، مثالي للوجبات الخفيفة"
      },
      "dried-pineapple": {
        name: "أناناس مجفف",
        description: "أناناس مجفف استوائي الطعم، حلو ومنعش"
      },
      "dried-kiwi": {
        name: "كيوي مجفف",
        description: "كيوي مجفف غني بفيتامين سي، مثالي للوجبات الخفيفة الصحية"
      },
      "dried-coconut": {
        name: "جوز الهند مجفف",
        description: "جوز الهند المجفف الطبيعي، غني بالنكهة والفوائد الصحية"
      },
      "dried-peaches": {
        name: "خوخ مجفف",
        description: "خوخ مجفف طري ولذيذ، غني بالفيتامينات والألياف"
      },
      "dried-pears": {
        name: "كمثرى مجففة",
        description: "كمثرى مجففة حلوة المذاق، مثالية للوجبات الخفيفة"
      },
      "dried-apples": {
        name: "تفاح مجفف",
        description: "تفاح مجفف مقرمش وصحي، غني بالألياف والفيتامينات"
      },

      // Oils & Seeds
      "olive-oil": {
        name: "زيت زيتون",
        description: "زيت زيتون بكر ممتاز، مستخرج من أجود أنواع الزيتون، غني بمضادات الأكسدة"
      },
      "peppermint-oil": {
        name: "زيت نعناع",
        description: "زيت نعناع طبيعي، معروف بفوائده العلاجية والعطرية"
      },
      "flax-seeds": {
        name: "بذور الكتان",
        description: "بذور كتان طبيعية، غنية بأوميجا 3 والألياف، مفيدة للصحة العامة"
      },
      "black-cumin": {
        name: "حبة البركة",
        description: "حبة البركة الطبيعية، معروفة بفوائدها الصحية والعلاجية"
      },

      // Frozen Products
      "frozen-peas": {
        name: "بازلاء مجمدة",
        description: "بازلاء خضراء مجمدة طازجة، تحتفظ بكامل قيمتها الغذائية ونضارتها"
      },
      "frozen-corn": {
        name: "ذرة مجمدة",
        description: "ذرة حلوة مجمدة، مثالية للاستخدام في الأطباق المختلفة والسلطات"
      },
      "frozen-spinach": {
        name: "سبانخ مجمدة",
        description: "سبانخ مجمدة طازجة، غنية بالحديد والفيتامينات، جاهزة للاستخدام"
      },
      "frozen-broccoli": {
        name: "بروكلي مجمد",
        description: "بروكلي مجمد طازج، يحتفظ بجميع العناصر الغذائية والطعم الطبيعي"
      },
      "frozen-mixed-vegetables": {
        name: "خضروات مجمدة متنوعة",
        description: "خلطات خضروات مجمدة للمقلاة أو الحساء، غنية بالعناصر الغذائية"
      },
      "frozen-carrots": {
        name: "جزر مجمد",
        description: "جزر مجمد طازج، مقطع ومجهز للاستخدام المباشر في الطهي"
      },
      "frozen-cauliflower": {
        name: "قرنبيط مجمد",
        description: "قرنبيط مجمد طازج، يحتفظ بقيمته الغذائية وملمسه المقرمش بعد الطهي"
      },
      "frozen-berries": {
        name: "توت مجمد",
        description: "توت مجمد طازج، مثالي للعصائر والحلويات والاستهلاك المباشر بعد التجميد"
      },
      "frozen-mango": {
        name: "مانجو مجمدة",
        description: "مانجو مجمدة طازجة، حلوة المذاق، مثالية للعصائر والسلطات والحلويات"
      },
      "frozen-banana": {
        name: "موز مجمد",
        description: "موز مجمد طازج، مثالي للعصائر والمخفوقات والاستخدام في الخبز"
      },
      "frozen-pineapple": {
        name: "أناناس مجمد",
        description: "أناناس مجمد طازج، حلو ومنعش، يحتفظ بنكهته الاستوائية المميزة"
      },
      "frozen-fruit-mix": {
        name: "مزيج فواكه مجمدة",
        description: "خلطات فواكه مجمدة (مثل التوت الأزرق والفراولة)، مثالية للعصائر والسلطات والحلويات"
      },
      "frozen-peaches": {
        name: "خوخ مجمد",
        description: "خوخ مجمد طازج، حلو المذاق، مثالي للعصائر والحلويات والزبادي"
      }
    }
  },
  en: {
    products: {
      // General Terms
      title: "Our Agricultural Products",
      subtitle: "Discover a wide range of fresh and organic agricultural products",
      allProducts: "All Products",
      vegetables: "Fresh Vegetables",
      fruits: "Fresh Fruits",
      legumes: "Legumes",
      herbs: "Aromatic Herbs",
      dried: "Dried Products",
      oils: "Oils & Seeds",
      frozen: "Frozen Products",
      featured: "Featured",
      inStock: "In Stock",
      outOfStock: "Out of Stock",
      searchPlaceholder: "Search for a product...",
      sortByName: "Sort by Name",
      sortByRating: "Sort by Rating",
      sortByFeatured: "Sort by Featured",
      featuredOnly: "Featured Only",
      categories: "Categories",
      viewDetails: "View Details",
      productCount: "product",
      noProductsFound: "No products found",
      tryDifferentSearch: "Try using different search terms",

      // Vegetables
      "fresh-onions": {
        name: "Red Onions",
        description: "High-quality fresh red onions from our private farms, rich in vitamins and essential minerals"
      },
      "fresh-onions-white": {
        name: "White Onions",
        description: "Fresh white onions for export of the finest varieties, grown in the best Egyptian agricultural lands"
      },
      "fresh-onions-golden": {
        name: "Golden Onions",
        description: "Distinctive fresh golden onions, perfect for use in cooking and various dishes"
      },
      "fresh-potatoes": {
        name: "Fresh Potatoes",
        description: "High-quality fresh potatoes, perfect for cooking and frying, from our specialized farms"
      },
      "fresh-tomatoes": {
        name: "Fresh Tomatoes",
        description: "High-quality fresh tomatoes from our private farms, rich in vitamins and essential minerals"
      },
      "fresh-garlic": {
        name: "Fresh Garlic",
        description: "High-quality fresh garlic, rich in antioxidants and health-beneficial compounds"
      },
      "fresh-cucumbers": {
        name: "Fresh Cucumbers",
        description: "Fresh and crispy cucumbers, perfect for salads and natural juices"
      },
      "fresh-courgette": {
        name: "Fresh Zucchini",
        description: "Fresh green zucchini, rich in fiber and vitamins, ideal for grilling and cooking"
      },
      "fresh-peppers": {
        name: "Colorful Peppers",
        description: "Fresh colorful peppers of different varieties, rich in vitamin C and antioxidants"
      },
      "fresh-eggplant": {
        name: "Roman Eggplant",
        description: "Fresh Roman eggplant, ideal for preparation in various dishes and grilling"
      },

      // Fruits
      "fresh-mangoes-butter": {
        name: "Buttery Mango",
        description: "Fresh original Egyptian buttery mango, rich in vitamins and wonderful tropical taste"
      },
      "fresh-mangoes-kit": {
        name: "Kit Mango",
        description: "High-quality Kit mango, sweet tasting and rich in juice"
      },
      "fresh-oranges-navel": {
        name: "Navel Orange",
        description: "Fresh Egyptian navel orange, rich in vitamin C and natural fiber"
      },
      "fresh-lemons": {
        name: "Fresh Lemons",
        description: "Fresh sour lemons, ideal for juices and seasoning dishes"
      },
      "fresh-pomegranate": {
        name: "Fresh Pomegranate",
        description: "Fresh red pomegranate, rich in antioxidants and beneficial nutrients"
      },
      "fresh-grapes": {
        name: "Fresh Grapes",
        description: "Fresh sweet grapes, rich in antioxidants and essential vitamins"
      },
      "fresh-strawberries": {
        name: "Fresh Strawberries",
        description: "Fresh sweet strawberries, rich in vitamin C and antioxidants"
      },
      "fresh-watermelon": {
        name: "Fresh Watermelon",
        description: "Sweet and refreshing red watermelon, ideal for summer and natural desserts"
      },
      "fresh-oranges-valencia": {
        name: "Valencia Orange",
        description: "High-quality Egyptian Valencia orange, rich in juice and vitamins"
      },
      "fresh-oranges-sweet": {
        name: "Sweet Orange",
        description: "Sweet tasting sugar orange, ideal for juices and direct consumption"
      },
      "fresh-oranges-baladi": {
        name: "Baladi Orange",
        description: "Authentic Egyptian Baladi orange, known for its distinctive taste and health benefits"
      },
      "fresh-bananas-local": {
        name: "Local Bananas",
        description: "Fresh and sweet Egyptian local bananas, rich in potassium and vitamins"
      },
      "fresh-bananas-tropical": {
        name: "Tropical Bananas",
        description: "Large tropical bananas, sweet tasting and rich in nutrients"
      },
      "fresh-melon-yellow": {
        name: "Yellow Melon",
        description: "Sweet and refreshing yellow melon, rich in water and vitamins"
      },
      "fresh-melon-green": {
        name: "Green Melon",
        description: "Fresh and delicious green melon, known for its sweet and refreshing taste"
      },
      "fresh-cherries-red": {
        name: "Red Cherries",
        description: "Fresh sweet red cherries, rich in antioxidants"
      },
      "fresh-cherries-black": {
        name: "Black Cherries",
        description: "Black cherries rich in antioxidants, ideal for fresh consumption and desserts"
      },

      // Legumes
      "white-beans": {
        name: "White Beans",
        description: "High-quality white beans, rich in protein and fiber, perfect for healthy meals"
      },
      "red-lentils": {
        name: "Lentils",
        description: "High-quality red and yellow lentils, quick-cooking and rich in plant protein"
      },
      "chickpeas": {
        name: "Chickpeas",
        description: "High-quality dry chickpeas, rich in protein and fiber, perfect for hummus and falafel"
      },
      "rice": {
        name: "Egyptian Rice",
        description: "High-quality white Egyptian rice, ideal for daily cooking and various dishes"
      },
      "wheat": {
        name: "Egyptian Wheat",
        description: "High-quality Egyptian wheat, rich in fiber and essential nutrients"
      },

      // Herbs
      "fresh-mint": {
        name: "Fresh Mint",
        description: "Fresh aromatic mint, rich in vitamins and minerals, perfect for tea, drinks and Arabic dishes"
      },
      "hibiscus": {
        name: "Hibiscus",
        description: "Natural red hibiscus, ideal for preparing healthy and refreshing drinks"
      },
      "chamomile": {
        name: "Chamomile",
        description: "Natural dried chamomile, known for its calming and therapeutic benefits"
      },
      "fresh-thyme": {
        name: "Fresh Thyme",
        description: "Fresh aromatic thyme, rich in antioxidants, perfect for cooking and herbal tea"
      },

      // Dried Products
      "sun-dried-tomatoes": {
        name: "Sun-Dried Tomatoes",
        description: "Naturally sun-dried tomatoes, concentrated flavor and perfect for cooking and sauces"
      },
      "dried-mangoes": {
        name: "Dried Mangoes",
        description: "Sweet dried mangoes, preserving natural taste and vitamins"
      },
      "dried-onions": {
        name: "Dried Onions",
        description: "Dried ground onions, perfect for quick cooking and preserving flavor for long periods"
      },
      "dried-figs": {
        name: "Dried Figs",
        description: "Natural dried figs with sweet taste, rich in fiber and minerals, perfect as a healthy snack"
      },
      "dried-strawberries": {
        name: "Dried Strawberries",
        description: "Dried strawberries preserving natural taste, ideal for snacks and desserts"
      },
      "dried-apricots": {
        name: "Dried Apricots",
        description: "Dried apricots rich in vitamins, sweet tasting and beneficial for health"
      },
      "dried-dates": {
        name: "Dried Dates",
        description: "High-quality dried dates, rich in natural sugars and minerals"
      },
      "raisins": {
        name: "Raisins",
        description: "Natural sweet raisins, rich in energy and nutrients"
      },
      "dried-bananas": {
        name: "Dried Bananas",
        description: "Crispy and delicious dried bananas, ideal for snacks"
      },
      "dried-pineapple": {
        name: "Dried Pineapple",
        description: "Tropical tasting dried pineapple, sweet and refreshing"
      },
      "dried-kiwi": {
        name: "Dried Kiwi",
        description: "Dried kiwi rich in vitamin C, ideal for healthy snacks"
      },
      "dried-coconut": {
        name: "Dried Coconut",
        description: "Natural dried coconut, rich in flavor and health benefits"
      },
      "dried-peaches": {
        name: "Dried Peaches",
        description: "Soft and delicious dried peaches, rich in vitamins and fiber"
      },
      "dried-pears": {
        name: "Dried Pears",
        description: "Sweet tasting dried pears, ideal for snacks"
      },
      "dried-apples": {
        name: "Dried Apples",
        description: "Crispy and healthy dried apples, rich in fiber and vitamins"
      },

      // Oils & Seeds
      "olive-oil": {
        name: "Olive Oil",
        description: "Extra virgin olive oil, extracted from the finest olive varieties, rich in antioxidants"
      },
      "peppermint-oil": {
        name: "Peppermint Oil",
        description: "Natural peppermint oil, known for its therapeutic and aromatic benefits"
      },
      "flax-seeds": {
        name: "Flax Seeds",
        description: "Natural flax seeds, rich in omega-3 and fiber, beneficial for overall health"
      },
      "black-cumin": {
        name: "Black Cumin",
        description: "Natural black cumin, known for its health and therapeutic benefits"
      },

      // Frozen Products
      "frozen-peas": {
        name: "Frozen Peas",
        description: "Fresh frozen green peas, retaining all their nutritional value and freshness"
      },
      "frozen-corn": {
        name: "Frozen Corn",
        description: "Sweet frozen corn, ideal for use in various dishes and salads"
      },
      "frozen-spinach": {
        name: "Frozen Spinach",
        description: "Fresh frozen spinach, rich in iron and vitamins, ready to use"
      },
      "frozen-broccoli": {
        name: "Frozen Broccoli",
        description: "Fresh frozen broccoli, retaining all nutrients and natural flavor"
      },
      "frozen-mixed-vegetables": {
        name: "Frozen Mixed Vegetables",
        description: "Frozen vegetable mixes for stir-fry or soup, rich in nutrients"
      },
      "frozen-carrots": {
        name: "Frozen Carrots",
        description: "Fresh frozen carrots, pre-cut and ready for direct use in cooking"
      },
      "frozen-cauliflower": {
        name: "Frozen Cauliflower",
        description: "Fresh frozen cauliflower, retaining its nutritional value and crisp texture after cooking"
      },
      "frozen-berries": {
        name: "Frozen Berries",
        description: "Fresh frozen berries, ideal for smoothies, desserts and direct consumption after freezing"
      },
      "frozen-mango": {
        name: "Frozen Mango",
        description: "Fresh frozen mango, sweet tasting, perfect for smoothies, salads and desserts"
      },
      "frozen-banana": {
        name: "Frozen Banana",
        description: "Fresh frozen banana, ideal for smoothies, shakes and use in baking"
      },
      "frozen-pineapple": {
        name: "Frozen Pineapple",
        description: "Fresh frozen pineapple, sweet and refreshing, retains its distinctive tropical flavor"
      },
      "frozen-fruit-mix": {
        name: "Frozen Fruit Mix",
        description: "Frozen fruit mixes (like blueberries and strawberries), ideal for smoothies, salads and desserts"
      },
      "frozen-peaches": {
        name: "Frozen Peaches",
        description: "Fresh frozen peaches, sweet tasting, ideal for smoothies, desserts and yogurt"
      }
    }
  },
  fr: {
    products: {
      // General Terms
      title: "Nos Produits Agricoles",
      subtitle: "Découvrez une large gamme de produits agricoles frais et biologiques",
      allProducts: "Tous les Produits",
      vegetables: "Légumes Frais",
      fruits: "Fruits Frais",
      legumes: "Légumineuses",
      herbs: "Herbes Aromatiques",
      dried: "Produits Séchés",
      oils: "Huiles & Graines",
      frozen: "Produits Surgelés",
      featured: "En Vedette",
      inStock: "En Stock",
      outOfStock: "En Rupture",
      searchPlaceholder: "Rechercher un produit...",
      sortByName: "Trier par Nom",
      sortByRating: "Trier par Note",
      sortByFeatured: "Trier par Vedette",
      featuredOnly: "En Vedette Seulement",
      categories: "Catégories",
      viewDetails: "Voir Détails",
      productCount: "produit",
      noProductsFound: "Aucun produit trouvé",
      tryDifferentSearch: "Essayez d'autres termes de recherche",

      // Vegetables
      "fresh-onions": {
        name: "Oignons Rouges",
        description: "Oignons rouges frais de haute qualité de nos fermes privées, riches en vitamines et minéraux essentiels"
      },
      "fresh-onions-white": {
        name: "Oignons Blancs",
        description: "Oignons blancs frais pour l'exportation des variétés les plus fines, cultivés dans les meilleures terres agricoles égyptiennes"
      },
      "fresh-onions-golden": {
        name: "Oignons Dorés",
        description: "Oignons dorés frais distinctifs, parfaits pour une utilisation en cuisine et dans divers plats"
      },
      "fresh-potatoes": {
        name: "Pommes de Terre Fraîches",
        description: "Pommes de terre fraîches de haute qualité, parfaites pour la cuisine et la friture, de nos fermes spécialisées"
      },
      "fresh-tomatoes": {
        name: "Tomates Fraîches",
        description: "Tomates fraîches de haute qualité de nos fermes privées, riches en vitamines et minéraux essentiels"
      },
      "fresh-garlic": {
        name: "Ail Frais",
        description: "Ail frais de haute qualité, riche en antioxydants et composés bénéfiques pour la santé"
      },
      "fresh-cucumbers": {
        name: "Concombres Frais",
        description: "Concombres frais et croquants, parfaits pour les salades et les jus naturels"
      },
      "fresh-courgette": {
        name: "Courgette Fraîche",
        description: "Courgette verte fraîche, riche en fibres et vitamines, idéale pour le grill et la cuisine"
      },
      "fresh-peppers": {
        name: "Poivrons Colorés",
        description: "Poivrons frais colorés de différentes variétés, riches en vitamine C et antioxydants"
      },
      "fresh-eggplant": {
        name: "Aubergine Romaine",
        description: "Aubergine romaine fraîche, idéale pour la préparation de divers plats et le grill"
      },

      // Fruits
      "fresh-mangoes-butter": {
        name: "Mangue Beurrée",
        description: "Mangue beurrée égyptienne originale fraîche, riche en vitamines et au goût tropical merveilleux"
      },
      "fresh-mangoes-kit": {
        name: "Mangue Kit",
        description: "Mangue Kit de haute qualité, au goût sucré et riche en jus"
      },
      "fresh-oranges-navel": {
        name: "Orange Navel",
        description: "Orange navel égyptienne fraîche, riche en vitamine C et fibres naturelles"
      },
      "fresh-lemons": {
        name: "Citrons Frais",
        description: "Citrons frais acides, idéaux pour les jus et l'assaisonnement des plats"
      },
      "fresh-pomegranate": {
        name: "Grenade Fraîche",
        description: "Grenade rouge fraîche, riche en antioxydants et nutriments bénéfiques"
      },
      "fresh-grapes": {
        name: "Raisins Frais",
        description: "Raisins frais et sucrés, riches en antioxydants et vitamines essentielles"
      },
      "fresh-strawberries": {
        name: "Fraises Fraîches",
        description: "Fraises fraîches et sucrées, riches en vitamine C et antioxydants"
      },
      "fresh-watermelon": {
        name: "Pastèque Fraîche",
        description: "Pastèque rouge sucrée et rafraîchissante, idéale pour l'été et les desserts naturels"
      },
      "fresh-oranges-valencia": {
        name: "Orange Valencia",
        description: "Orange Valencia égyptienne de haute qualité, riche en jus et vitamines"
      },
      "fresh-oranges-sweet": {
        name: "Orange Sucrée",
        description: "Orange sucrée au goût sucré, idéale pour les jus et la consommation directe"
      },
      "fresh-oranges-baladi": {
        name: "Orange Baladi",
        description: "Orange Baladi égyptienne authentique, connue pour son goût distinctif et ses bienfaits pour la santé"
      },
      "fresh-bananas-local": {
        name: "Bananes Locales",
        description: "Bananes locales égyptiennes fraîches et sucrées, riches en potassium et vitamines"
      },
      "fresh-bananas-tropical": {
        name: "Bananes Tropicales",
        description: "Grosses bananes tropicales, au goût sucré et riches en nutriments"
      },
      "fresh-melon-yellow": {
        name: "Melon Jaune",
        description: "Melon jaune sucré et rafraîchissant, riche en eau et vitamines"
      },
      "fresh-melon-green": {
        name: "Melon Vert",
        description: "Melon vert frais et délicieux, connu pour son goût sucré et rafraîchissant"
      },
      "fresh-cherries-red": {
        name: "Cerises Rouges",
        description: "Cerises rouges fraîches et sucrées, riches en antioxydants"
      },
      "fresh-cherries-black": {
        name: "Cerises Noires",
        description: "Cerises noires riches en antioxydants, idéales pour la consommation fraîche et les desserts"
      },

      // Legumes
      "white-beans": {
        name: "Haricots Blancs",
        description: "Haricots blancs de haute qualité, riches en protéines et fibres, parfaits pour les repas sains"
      },
      "red-lentils": {
        name: "Lentilles",
        description: "Lentilles rouges et jaunes de haute qualité, à cuisson rapide et riches en protéines végétales"
      },
      "chickpeas": {
        name: "Pois Chiches",
        description: "Pois chiches secs de haute qualité, riches en protéines et fibres, parfaits pour le houmous et les falafels"
      },
      "rice": {
        name: "Riz Égyptien",
        description: "Riz blanc égyptien de haute qualité, idéal pour la cuisine quotidienne et divers plats"
      },
      "wheat": {
        name: "Blé Égyptien",
        description: "Blé égyptien de haute qualité, riche en fibres et nutriments essentiels"
      },

      // Herbs
      "fresh-mint": {
        name: "Menthe Fraîche",
        description: "Menthe fraîche aromatique, riche en vitamines et minéraux, parfaite pour le thé, les boissons et les plats arabes"
      },
      "hibiscus": {
        name: "Hibiscus",
        description: "Hibiscus rouge naturel, idéal pour préparer des boissons saines et rafraîchissantes"
      },
      "chamomile": {
        name: "Camomille",
        description: "Camomille séchée naturelle, connue pour ses bienfaits calmants et thérapeutiques"
      },
      "fresh-thyme": {
        name: "Thym Frais",
        description: "Thym frais aromatique, riche en antioxydants, parfait pour la cuisine et le thé aux herbes"
      },

      // Dried Products
      "sun-dried-tomatoes": {
        name: "Tomates Séchées au Soleil",
        description: "Tomates séchées naturellement au soleil, saveur concentrée et parfaites pour la cuisine et les sauces"
      },
      "dried-mangoes": {
        name: "Mangues Séchées",
        description: "Mangues séchées sucrées, conservant le goût naturel et les vitamines"
      },
      "dried-onions": {
        name: "Oignons Séchés",
        description: "Oignons séchés moulus, parfaits pour la cuisine rapide et la conservation de la saveur longtemps"
      },
      "dried-figs": {
        name: "Figues Séchées",
        description: "Figues séchées naturelles au goût sucré, riches en fibres et minéraux, parfaites comme collation saine"
      },
      "dried-strawberries": {
        name: "Fraises Séchées",
        description: "Fraises séchées conservant le goût naturel, idéales pour les collations et les desserts"
      },
      "dried-apricots": {
        name: "Abricots Séchés",
        description: "Abricots séchés riches en vitamines, au goût sucré et bénéfiques pour la santé"
      },
      "dried-dates": {
        name: "Dattes Séchées",
        description: "Dattes séchées de haute qualité, riches en sucres naturels et minéraux"
      },
      "raisins": {
        name: "Raisins Secs",
        description: "Raisins secs naturels sucrés, riches en énergie et nutriments"
      },
      "dried-bananas": {
        name: "Bananes Séchées",
        description: "Bananes séchées croustillantes et délicieuses, idéales pour les collations"
      },
      "dried-pineapple": {
        name: "Ananas Séché",
        description: "Ananas séché au goût tropical, sucré et rafraîchissant"
      },
      "dried-kiwi": {
        name: "Kiwi Séché",
        description: "Kiwi séché riche en vitamine C, idéal pour les collations saines"
      },
      "dried-coconut": {
        name: "Noix de Coco Séchée",
        description: "Noix de coco séchée naturelle, riche en saveur et bienfaits pour la santé"
      },
      "dried-peaches": {
        name: "Pêches Séchées",
        description: "Pêches séchées tendres et délicieuses, riches en vitamines et fibres"
      },
      "dried-pears": {
        name: "Poires Séchées",
        description: "Poires séchées au goût sucré, idéales pour les collations"
      },
      "dried-apples": {
        name: "Pommes Séchées",
        description: "Pommes séchées croustillantes et saines, riches en fibres et vitamines"
      },

      // Oils & Seeds
      "olive-oil": {
        name: "Huile d'Olive",
        description: "Huile d'olive extra vierge, extraite des meilleures variétés d'olives, riche en antioxydants"
      },
      "peppermint-oil": {
        name: "Huile de Menthe Poivrée",
        description: "Huile de menthe poivrée naturelle, connue pour ses bienfaits thérapeutiques et aromatiques"
      },
      "flax-seeds": {
        name: "Graines de Lin",
        description: "Graines de lin naturelles, riches en oméga-3 et fibres, bénéfiques pour la santé générale"
      },
      "black-cumin": {
        name: "Cumin Noir",
        description: "Cumin noir naturel, connu pour ses bienfaits pour la santé et thérapeutiques"
      },

      // Frozen Products
      "frozen-peas": {
        name: "Pois Surgelés",
        description: "Pois verts surgelés frais, conservant toute leur valeur nutritionnelle et fraîcheur"
      },
      "frozen-corn": {
        name: "Maïs Surgelé",
        description: "Maïs sucré surgelé, idéal pour une utilisation dans divers plats et salades"
      },
      "frozen-spinach": {
        name: "Épinards Surgelés",
        description: "Épinards surgelés frais, riches en fer et vitamines, prêts à l'emploi"
      },
      "frozen-broccoli": {
        name: "Brocoli Surgelé",
        description: "Brocoli surgelé frais, conservant tous les nutriments et la saveur naturelle"
      },
      "frozen-mixed-vegetables": {
        name: "Légumes Surgelés Mélangés",
        description: "Mélanges de légumes surgelés pour sautés ou soupes, riches en nutriments"
      },
      "frozen-carrots": {
        name: "Carottes Surgelées",
        description: "Carottes surgelées fraîches, pré-coupées et prêtes pour une utilisation directe en cuisine"
      },
      "frozen-cauliflower": {
        name: "Chou-fleur Surgelé",
        description: "Chou-fleur surgelé frais, conservant sa valeur nutritionnelle et sa texture croquante après cuisson"
      },
      "frozen-berries": {
        name: "Baies Surgelées",
        description: "Baies surgelées fraîches, idéales pour smoothies, desserts et consommation directe après congélation"
      },
      "frozen-mango": {
        name: "Mangue Surgelée",
        description: "Mangue surgelée fraîche, au goût sucré, parfaite pour smoothies, salades et desserts"
      },
      "frozen-banana": {
        name: "Banane Surgelée",
        description: "Banane surgelée fraîche, idéale pour smoothies, shakes et utilisation en pâtisserie"
      },
      "frozen-pineapple": {
        name: "Ananas Surgelé",
        description: "Ananas surgelé frais, sucré et rafraîchissant, conserve sa saveur tropicale distinctive"
      },
      "frozen-fruit-mix": {
        name: "Mélange de Fruits Surgelés",
        description: "Mélanges de fruits surgelés (comme myrtilles et fraises), idéaux pour smoothies, salades et desserts"
      },
      "frozen-peaches": {
        name: "Pêches Surgelées",
        description: "Pêches surgelées fraîches, au goût sucré, idéales pour smoothies, desserts et yaourt"
      }
    }
  },
  it: {
    products: {
      // General Terms
      title: "I Nostri Prodotti Agricoli",
      subtitle: "Scopri una vasta gamma di prodotti agricoli freschi e biologici",
      allProducts: "Tutti i Prodotti",
      vegetables: "Verdure Fresche",
      fruits: "Frutta Fresca",
      legumes: "Legumi",
      herbs: "Erbe Aromatiche",
      dried: "Prodotti Essiccati",
      oils: "Oli & Semi",
      frozen: "Prodotti Surgelati",
      featured: "In Evidenza",
      inStock: "Disponibile",
      outOfStock: "Esaurito",
      searchPlaceholder: "Cerca un prodotto...",
      sortByName: "Ordina per Nome",
      sortByRating: "Ordina per Valutazione",
      sortByFeatured: "Ordina per In Evidenza",
      featuredOnly: "Solo In Evidenza",
      categories: "Categorie",
      viewDetails: "Vedi Dettagli",
      productCount: "prodotto",
      noProductsFound: "Nessun prodotto trovato",
      tryDifferentSearch: "Prova a utilizzare termini di ricerca diversi",

      // Vegetables
      "fresh-onions": {
        name: "Cipolle Rosse",
        description: "Cipolle rosse fresche di alta qualità dalle nostre fattorie private, ricche di vitamine e minerali essenziali"
      },
      "fresh-onions-white": {
        name: "Cipolle Bianche",
        description: "Cipolle bianche fresche per l'esportazione delle varietà più fini, coltivate nelle migliori terre agricole egiziane"
      },
      "fresh-onions-golden": {
        name: "Cipolle Dorate",
        description: "Cipolle dorate fresche distintive, perfette per l'uso in cucina e vari piatti"
      },
      "fresh-potatoes": {
        name: "Patate Fresche",
        description: "Patate fresche di alta qualità, perfette per cucinare e friggere, dalle nostre fattorie specializzate"
      },
      "fresh-tomatoes": {
        name: "Pomodori Freschi",
        description: "Pomodori freschi di alta qualità dalle nostre fattorie private, ricchi di vitamine e minerali essenziali"
      },
      "fresh-garlic": {
        name: "Aglio Fresco",
        description: "Aglio fresco di alta qualità, ricco di antiossidanti e composti benefici per la salute"
      },
      "fresh-cucumbers": {
        name: "Cetrioli Freschi",
        description: "Cetrioli freschi e croccanti, perfetti per insalate e succhi naturali"
      },
      "fresh-courgette": {
        name: "Zucchina Fresca",
        description: "Zucchina verde fresca, ricca di fibre e vitamine, ideale per grigliate e cucina"
      },
      "fresh-peppers": {
        name: "Peperoni Colorati",
        description: "Peperoni freschi colorati di diverse varietà, ricchi di vitamina C e antiossidanti"
      },
      "fresh-eggplant": {
        name: "Melanzana Romana",
        description: "Melanzana romana fresca, ideale per la preparazione di vari piatti e grigliate"
      },

      // Fruits
      "fresh-mangoes-butter": {
        name: "Mango Burroso",
        description: "Mango burroso egiziano originale fresco, ricco di vitamine e dal meraviglioso sapore tropicale"
      },
      "fresh-mangoes-kit": {
        name: "Mango Kit",
        description: "Mango Kit di alta qualità, dal sapore dolce e ricco di succo"
      },
      "fresh-oranges-navel": {
        name: "Arancia Navel",
        description: "Arancia navel egiziana fresca, ricca di vitamina C e fibre naturali"
      },
      "fresh-lemons": {
        name: "Limoni Freschi",
        description: "Limoni freschi acidi, ideali per succhi e condimento di piatti"
      },
      "fresh-pomegranate": {
        name: "Melagrana Fresca",
        description: "Melagrana rossa fresca, ricca di antiossidanti e nutrienti benefici"
      },
      "fresh-grapes": {
        name: "Uva Fresca",
        description: "Uva fresca e dolce, ricca di antiossidanti e vitamine essenziali"
      },
      "fresh-strawberries": {
        name: "Fragole Fresche",
        description: "Fragole fresche e dolci, ricche di vitamina C e antiossidants"
      },
      "fresh-watermelon": {
        name: "Anguria Fresca",
        description: "Anguria rossa dolce e rinfrescante, ideale per l'estate e dessert naturali"
      },
      "fresh-oranges-valencia": {
        name: "Arancia Valencia",
        description: "Arancia Valencia egiziana di alta qualità, ricca di succo e vitamine"
      },
      "fresh-oranges-sweet": {
        name: "Arancia Dolce",
        description: "Arancia zuccherina dal sapore dolce, ideale per succhi e consumo diretto"
      },
      "fresh-oranges-baladi": {
        name: "Arancia Baladi",
        description: "Arancia Baladi egiziana autentica, nota per il suo sapore distintivo e benefici per la salute"
      },
      "fresh-bananas-local": {
        name: "Banane Locali",
        description: "Banane locali egiziane fresche e dolci, ricche di potassio e vitamine"
      },
      "fresh-bananas-tropical": {
        name: "Banane Tropicali",
        description: "Banane tropicali grandi, dal sapore dolce e ricche di nutrienti"
      },
      "fresh-melon-yellow": {
        name: "Melone Giallo",
        description: "Melone giallo dolce e rinfrescante, ricco di acqua e vitamine"
      },
      "fresh-melon-green": {
        name: "Melone Verde",
        description: "Melone verde fresco e delizioso, noto per il suo sapore dolce e rinfrescante"
      },
      "fresh-cherries-red": {
        name: "Ciliegie Rosse",
        description: "Ciliegie rosse fresche e dolci, ricche di antiossidanti"
      },
      "fresh-cherries-black": {
        name: "Ciliegie Nere",
        description: "Ciliegie nere ricche di antiossidanti, ideali per il consumo fresco e dessert"
      },

      // Legumes
      "white-beans": {
        name: "Fagioli Bianchi",
        description: "Fagioli bianchi di alta qualità, ricchi di proteine e fibre, perfetti per pasti sani"
      },
      "red-lentils": {
        name: "Lenticchie",
        description: "Lenticchie rosse e gialle di alta qualità, a cottura rapida e ricche di proteine vegetali"
      },
      "chickpeas": {
        name: "Ceci",
        description: "Ceci secchi di alta qualità, ricchi di proteine e fibre, perfetti per hummus e falafel"
      },
      "rice": {
        name: "Riso Egiziano",
        description: "Riso bianco egiziano di alta qualità, ideale per la cucina quotidiana e vari piatti"
      },
      "wheat": {
        name: "Grano Egiziano",
        description: "Grano egiziano di alta qualità, ricco di fibre e nutrienti essenziali"
      },

      // Herbs
      "fresh-mint": {
        name: "Menta Fresca",
        description: "Menta fresca aromatica, ricca di vitamine e minerali, perfetta per tè, bevande e piatti arabi"
      },
      "hibiscus": {
        name: "Ibisco",
        description: "Ibisco rosso naturale, ideale per preparare bevande sane e rinfrescanti"
      },
      "chamomile": {
        name: "Camomilla",
        description: "Camomilla essiccata naturale, nota per i suoi benefici calmanti e terapeutici"
      },
      "fresh-thyme": {
        name: "Timo Fresco",
        description: "Timo fresco aromatica, ricco di antiossidanti, perfetto per cucinare e tè alle erbe"
      },

      // Dried Products
      "sun-dried-tomatoes": {
        name: "Pomodori Secchi al Sole",
        description: "Pomodori secchi naturalmente al sole, sapore concentrato e perfetti per cucinare e salse"
      },
      "dried-mangoes": {
        name: "Manghi Secchi",
        description: "Manghi secchi dolci, che conservano il sapore naturale e le vitamine"
      },
      "dried-onions": {
        name: "Cipolle Essiccate",
        description: "Cipolle essiccate macinate, perfette per cucinare rapidamente e conservare il sapore a lungo"
      },
      "dried-figs": {
        name: "Fichi Secchi",
        description: "Fichi secchi naturali dal sapore dolce, ricchi di fibre e minerali, perfetti come spuntino sano"
      },
      "dried-strawberries": {
        name: "Fragole Secche",
        description: "Fragole secche che conservano il sapore naturale, ideali per spuntini e dessert"
      },
      "dried-apricots": {
        name: "Albicocche Secche",
        description: "Albicocche secche ricche di vitamine, dal sapore dolce e benefiche per la salute"
      },
      "dried-dates": {
        name: "Datteri Secchi",
        description: "Datteri secchi di alta qualità, ricchi di zuccheri naturali e minerali"
      },
      "raisins": {
        name: "Uvetta",
        description: "Uvetta naturale dolce, ricca di energia e nutrienti"
      },
      "dried-bananas": {
        name: "Banane Secche",
        description: "Banane secche croccanti e deliziose, ideali per spuntini"
      },
      "dried-pineapple": {
        name: "Ananas Secco",
        description: "Ananas secco dal sapore tropicale, dolce e rinfrescante"
      },
      "dried-kiwi": {
        name: "Kiwi Secco",
        description: "Kiwi secco ricco di vitamina C, ideale per spuntini sani"
      },
      "dried-coconut": {
        name: "Cocco Secco",
        description: "Cocco secco naturale, ricco di sapore e benefici per la salute"
      },
      "dried-peaches": {
        name: "Pesche Secche",
        description: "Pesche secche tenere e deliziose, ricche di vitamine e fibre"
      },
      "dried-pears": {
        name: "Pere Secche",
        description: "Pere secche dal sapore dolce, ideali per spuntini"
      },
      "dried-apples": {
        name: "Mele Secche",
        description: "Mele secche croccanti e sane, ricche di fibre e vitamine"
      },

      // Oils & Seeds
      "olive-oil": {
        name: "Olio d'Oliva",
        description: "Olio d'oliva extra vergine, estratto dalle migliori varietà di olive, ricco di antiossidanti"
      },
      "peppermint-oil": {
        name: "Olio di Menta Piperita",
        description: "Olio di menta piperita naturale, noto per i suoi benefici terapeutici e aromatici"
      },
      "flax-seeds": {
        name: "Semi di Lino",
        description: "Semi di lino naturali, ricchi di omega-3 e fibre, benefici per la salute generale"
      },
      "black-cumin": {
        name: "Cumino Nero",
        description: "Cumino nero naturale, noto per i suoi benefici per la salute e terapeutici"
      },

      // Frozen Products
      "frozen-peas": {
        name: "Piselli Surgelati",
        description: "Piselli verdi surgelati freschi, che conservano tutto il loro valore nutritivo e freschezza"
      },
      "frozen-corn": {
        name: "Mais Surgelato",
        description: "Mais dolce surgelato, ideale per l'uso in vari piatti e insalate"
      },
      "frozen-spinach": {
        name: "Spinaci Surgelati",
        description: "Spinaci surgelati freschi, ricchi di ferro e vitamine, pronti per l'uso"
      },
      "frozen-broccoli": {
        name: "Broccoli Surgelati",
        description: "Broccoli surgelati freschi, che conservano tutti i nutrienti e il sapore naturale"
      },
      "frozen-mixed-vegetables": {
        name: "Verdure Surgelate Miste",
        description: "Miscele di verdure surgelate per saltati in padella o zuppe, ricche di nutrienti"
      },
      "frozen-carrots": {
        name: "Carote Surgelate",
        description: "Carote surgelate fresche, pre-tagliate e pronte per l'uso diretto in cucina"
      },
      "frozen-cauliflower": {
        name: "Cavolfiore Surgelato",
        description: "Cavolfiore surgelato fresco, che conserva il suo valore nutritivo e la texture croccante dopo la cottura"
      },
      "frozen-berries": {
        name: "Bacche Surgelate",
        description: "Bacche surgelate fresche, ideali per frullati, dessert e consumo diretto dopo il congelamento"
      },
      "frozen-mango": {
        name: "Mango Surgelato",
        description: "Mango surgelato fresco, dal sapore dolce, perfetto per frullati, insalate e dessert"
      },
      "frozen-banana": {
        name: "Banana Surgelata",
        description: "Banana surgelata fresca, ideale per frullati, frullati e uso in pasticceria"
      },
      "frozen-pineapple": {
        name: "Ananas Surgelato",
        description: "Ananas surgelato fresco, dolce e rinfrescante, conserva il suo distintivo sapore tropicale"
      },
      "frozen-fruit-mix": {
        name: "Miscela di Frutta Surgelata",
        description: "Miscele di frutta surgelata (come mirtilli e fragole), ideali per frullati, insalate e dessert"
      },
      "frozen-peaches": {
        name: "Pesche Surgelate",
        description: "Pesche surgelate fresche, dal sapore dolce, ideali per frullati, dessert e yogurt"
      }
    }
  },
  de: {
    products: {
      // General Terms
      title: "Unsere Landwirtschaftlichen Produkte",
      subtitle: "Entdecken Sie eine breite Palette von frischen und biologischen landwirtschaftlichen Produkten",
      allProducts: "Alle Produkte",
      vegetables: "Frisches Gemüse",
      fruits: "Frisches Obst",
      legumes: "Hülsenfrüchte",
      herbs: "Aromatische Kräuter",
      dried: "Getrocknete Produkte",
      oils: "Öle & Samen",
      frozen: "Tiefkühlprodukte",
      featured: "Hervorgehoben",
      inStock: "Auf Lager",
      outOfStock: "Nicht auf Lager",
      searchPlaceholder: "Nach einem Produkt suchen...",
      sortByName: "Nach Name sortieren",
      sortByRating: "Nach Bewertung sortieren",
      sortByFeatured: "Nach Hervorgehoben sortieren",
      featuredOnly: "Nur Hervorgehobene",
      categories: "Kategorien",
      viewDetails: "Details anzeigen",
      productCount: "Produkt",
      noProductsFound: "Keine Produkte gefunden",
      tryDifferentSearch: "Versuchen Sie andere Suchbegriffe",

      // Vegetables
      "fresh-onions": {
        name: "Rote Zwiebeln",
        description: "Hochwertige frische rote Zwiebeln von unseren privaten Bauernhöfen, reich an Vitaminen und essentiellen Mineralien"
      },
      "fresh-onions-white": {
        name: "Weiße Zwiebeln",
        description: "Frische weiße Zwiebeln für den Export der feinsten Sorten, angebaut auf den besten ägyptischen landwirtschaftlichen Flächen"
      },
      "fresh-onions-golden": {
        name: "Goldene Zwiebeln",
        description: "Unterscheidende frische goldene Zwiebeln, perfekt für den Einsatz beim Kochen und in verschiedenen Gerichten"
      },
      "fresh-potatoes": {
        name: "Frische Kartoffeln",
        description: "Hochwertige frische Kartoffeln, perfekt zum Kochen und Braten, von unseren spezialisierten Bauernhöfen"
      },
      "fresh-tomatoes": {
        name: "Frische Tomaten",
        description: "Hochwertige frische Tomaten von unseren privaten Bauernhöfen, reich an Vitaminen und essentiellen Mineralien"
      },
      "fresh-garlic": {
        name: "Frischer Knoblauch",
        description: "Hochwertiger frischer Knoblauch, reich an Antioxidantien und gesundheitsfördernden Verbindungen"
      },
      "fresh-cucumbers": {
        name: "Frische Gurken",
        description: "Frische und knusprige Gurken, perfekt für Salate und natürliche Säfte"
      },
      "fresh-courgette": {
        name: "Frische Zucchini",
        description: "Frische grüne Zucchini, reich an Ballaststoffen und Vitaminen, ideal zum Grillen und Kochen"
      },
      "fresh-peppers": {
        name: "Bunte Paprika",
        description: "Frische bunte Paprika verschiedener Sorten, reich an Vitamin C und Antioxidantien"
      },
      "fresh-eggplant": {
        name: "Römische Aubergine",
        description: "Frische römische Aubergine, ideal für die Zubereitung in verschiedenen Gerichten und zum Grillen"
      },

      // Fruits
      "fresh-mangoes-butter": {
        name: "Buttrige Mango",
        description: "Frische originale ägyptische buttrige Mango, reich an Vitaminen und wunderbarem tropischen Geschmack"
      },
      "fresh-mangoes-kit": {
        name: "Kit Mango",
        description: "Hochwertige Kit Mango, süß im Geschmack und reich an Saft"
      },
      "fresh-oranges-navel": {
        name: "Navel Orange",
        description: "Frische ägyptische Navel Orange, reich an Vitamin C und natürlichen Ballaststoffen"
      },
      "fresh-lemons": {
        name: "Frische Zitronen",
        description: "Frische saure Zitronen, ideal für Säfte und zum Würzen von Gerichten"
      },
      "fresh-pomegranate": {
        name: "Frischer Granatapfel",
        description: "Frischer roter Granatapfel, reich an Antioxidantien und nützlichen Nährstoffen"
      },
      "fresh-grapes": {
        name: "Frische Trauben",
        description: "Frische süße Trauben, reich an Antioxidantien und essentiellen Vitaminen"
      },
      "fresh-strawberries": {
        name: "Frische Erdbeeren",
        description: "Frische süße Erdbeeren, reich an Vitamin C und Antioxidantien"
      },
      "fresh-watermelon": {
        name: "Frische Wassermelone",
        description: "Süße und erfrischende rote Wassermelone, ideal für den Sommer und natürliche Desserts"
      },
      "fresh-oranges-valencia": {
        name: "Valencia Orange",
        description: "Hochwertige ägyptische Valencia Orange, reich an Saft und Vitaminen"
      },
      "fresh-oranges-sweet": {
        name: "Süße Orange",
        description: "Zuckerorange mit süßem Geschmack, ideal für Säfte und direkten Verzehr"
      },
      "fresh-oranges-baladi": {
        name: "Baladi Orange",
        description: "Authentische ägyptische Baladi Orange, bekannt für ihren unverwechselbaren Geschmack und gesundheitliche Vorteile"
      },
      "fresh-bananas-local": {
        name: "Lokale Bananen",
        description: "Frische und süße ägyptische lokale Bananen, reich an Kalium und Vitaminen"
      },
      "fresh-bananas-tropical": {
        name: "Tropische Bananen",
        description: "Große tropische Bananen, süß im Geschmack und reich an Nährstoffen"
      },
      "fresh-melon-yellow": {
        name: "Gelbe Melone",
        description: "Süße und erfrischende gelbe Melone, reich an Wasser und Vitaminen"
      },
      "fresh-melon-green": {
        name: "Grüne Melone",
        description: "Frische und köstliche grüne Melone, bekannt für ihren süßen und erfrischenden Geschmack"
      },
      "fresh-cherries-red": {
        name: "Rote Kirschen",
        description: "Frische süße rote Kirschen, reich an Antioxidantien"
      },
      "fresh-cherries-black": {
        name: "Schwarze Kirschen",
        description: "Schwarze Kirschen reich an Antioxidantien, ideal für frischen Verzehr und Desserts"
      },

      // Legumes
      "white-beans": {
        name: "Weiße Bohnen",
        description: "Hochwertige weiße Bohnen, reich an Protein und Ballaststoffen, perfekt für gesunde Mahlzeiten"
      },
      "red-lentils": {
        name: "Linsen",
        description: "Hochwertige rote und gelbe Linsen, schnell kochend und reich an pflanzlichem Protein"
      },
      "chickpeas": {
        name: "Kichererbsen",
        description: "Hochwertige trockene Kichererbsen, reich an Protein und Ballaststoffen, perfekt für Hummus und Falafel"
      },
      "rice": {
        name: "Ägyptischer Reis",
        description: "Hochwertiger weißer ägyptischer Reis, ideal für den täglichen Gebrauch und verschiedene Gerichte"
      },
      "wheat": {
        name: "Ägyptischer Weizen",
        description: "Hochwertiger ägyptischer Weizen, reich an Ballaststoffen und essentiellen Nährstoffen"
      },

      // Herbs
      "fresh-mint": {
        name: "Frische Minze",
        description: "Frische aromatische Minze, reich an Vitaminen und Mineralien, perfekt für Tee, Getränke und arabische Gerichte"
      },
      "hibiscus": {
        name: "Hibiskus",
        description: "Natürlicher roter Hibiskus, ideal für die Zubereitung gesunder und erfrischender Getränke"
      },
      "chamomile": {
        name: "Kamille",
        description: "Natürliche getrocknete Kamille, bekannt für ihre beruhigenden und therapeutischen Vorteile"
      },
      "fresh-thyme": {
        name: "Frischer Thymian",
        description: "Frischer aromatischer Thymian, reich an Antioxidantien, perfekt zum Kochen und für Kräutertee"
      },

      // Dried Products
      "sun-dried-tomatoes": {
        name: "Sonnengetrocknete Tomaten",
        description: "Natürlich sonnengetrocknete Tomaten, konzentrierter Geschmack und perfekt zum Kochen und für Saucen"
      },
      "dried-mangoes": {
        name: "Getrocknete Mangos",
        description: "Süße getrocknete Mangos, die den natürlichen Geschmack und die Vitamine bewahren"
      },
      "dried-onions": {
        name: "Getrocknete Zwiebeln",
        description: "Getrocknete gemahlene Zwiebeln, perfekt für schnelles Kochen und langen Geschmackserhalt"
      },
      "dried-figs": {
        name: "Getrocknete Feigen",
        description: "Natürliche getrocknete Feigen mit süßem Geschmack, reich an Ballaststoffen und Mineralien, perfekt als gesunder Snack"
      },
      "dried-strawberries": {
        name: "Getrocknete Erdbeeren",
        description: "Getrocknete Erdbeeren, die den natürlichen Geschmack bewahren, ideal für Snacks und Desserts"
      },
      "dried-apricots": {
        name: "Getrocknete Aprikosen",
        description: "Getrocknete Aprikosen reich an Vitaminen, süß im Geschmack und gesundheitsfördernd"
      },
      "dried-dates": {
        name: "Getrocknete Datteln",
        description: "Hochwertige getrocknete Datteln, reich an natürlichen Zuckern und Mineralien"
      },
      "raisins": {
        name: "Rosinen",
        description: "Natürliche süße Rosinen, reich an Energie und Nährstoffen"
      },
      "dried-bananas": {
        name: "Getrocknete Bananen",
        description: "Knusprige und leckere getrocknete Bananen, ideal für Snacks"
      },
      "dried-pineapple": {
        name: "Getrocknete Ananas",
        description: "Getrocknete Ananas mit tropischem Geschmack, süß und erfrischend"
      },
      "dried-kiwi": {
        name: "Getrocknete Kiwis",
        description: "Getrocknete Kiwis reich an Vitamin C, ideal für gesunde Snacks"
      },
      "dried-coconut": {
        name: "Getrocknete Kokosnuss",
        description: "Natürliche getrocknete Kokosnuss, reich an Geschmack und gesundheitlichen Vorteilen"
      },
      "dried-peaches": {
        name: "Getrocknete Pfirsiche",
        description: "Zarte und leckere getrocknete Pfirsiche, reich an Vitaminen und Ballaststoffen"
      },
      "dried-pears": {
        name: "Getrocknete Birnen",
        description: "Getrocknete Birnen mit süßem Geschmack, ideal für Snacks"
      },
      "dried-apples": {
        name: "Getrocknete Äpfel",
        description: "Knusprige und gesunde getrocknete Äpfel, reich an Ballaststoffen und Vitaminen"
      },

      // Oils & Seeds
      "olive-oil": {
        name: "Olivenöl",
        description: "Natives Olivenöl extra, aus den feinsten Olivensorten gewonnen, reich an Antioxidantien"
      },
      "peppermint-oil": {
        name: "Pfefferminzöl",
        description: "Natürliches Pfefferminzöl, bekannt für seine therapeutischen und aromatischen Vorteile"
      },
      "flax-seeds": {
        name: "Leinsamen",
        description: "Natürliche Leinsamen, reich an Omega-3 und Ballaststoffen, vorteilhaft für die allgemeine Gesundheit"
      },
      "black-cumin": {
        name: "Schwarzer Kümmel",
        description: "Natürlicher schwarzer Kümmel, bekannt für seine gesundheitlichen und therapeutischen Vorteile"
      },

      // Frozen Products
      "frozen-peas": {
        name: "Tiefkühlerbsen",
        description: "Frische tiefgekühlte grüne Erbsen, die ihren gesamten Nährwert und Frische behalten"
      },
      "frozen-corn": {
        name: "Tiefkühlmais",
        description: "Süßer Tiefkühlmais, ideal für die Verwendung in verschiedenen Gerichten und Salaten"
      },
      "frozen-spinach": {
        name: "Tiefkühlspinat",
        description: "Frischer Tiefkühlspinat, reich an Eisen und Vitaminen, gebrauchsfertig"
      },
      "frozen-broccoli": {
        name: "Tiefkühlbrokkoli",
        description: "Frischer Tiefkühlbrokkoli, der alle Nährstoffe und den natürlichen Geschmack behält"
      },
      "frozen-mixed-vegetables": {
        name: "Gefrorenes Gemüsemischung",
        description: "Tiefkühlgemüsemischungen für Pfannengerichte oder Suppen, reich an Nährstoffen"
      },
      "frozen-carrots": {
        name: "Tiefkühlkarotten",
        description: "Frische Tiefkühlkarotten, vorgeschnitten und direkt zum Kochen einsatzbereit"
      },
      "frozen-cauliflower": {
        name: "Tiefkühlblumenkohl",
        description: "Frischer Tiefkühlblumenkohl, der seinen Nährwert und knusprige Textur nach dem Kochen beibehält"
      },
      "frozen-berries": {
        name: "Tiefkühlbeeren",
        description: "Frische Tiefkühlbeeren, ideal für Smoothies, Desserts und direkten Verzehr nach dem Einfrieren"
      },
      "frozen-mango": {
        name: "Tiefkühlmango",
        description: "Frische Tiefkühlmango, süß im Geschmack, perfekt für Smoothies, Salate und Desserts"
      },
      "frozen-banana": {
        name: "Tiefkühlbanane",
        description: "Frische Tiefkühlbanane, ideal für Smoothies, Shakes und Verwendung beim Backen"
      },
      "frozen-pineapple": {
        name: "Tiefkühlananas",
        description: "Frische Tiefkühlananas, süß und erfrischend, behält ihren unverwechselbaren tropischen Geschmack"
      },
      "frozen-fruit-mix": {
        name: "Tiefkühlfruchtmischung",
        description: "Tiefkühlfruchtmischungen (wie Blaubeeren und Erdbeeren), ideal für Smoothies, Salate und Desserts"
      },
      "frozen-peaches": {
        name: "Tiefkühlpfirsiche",
        description: "Frische Tiefkühlpfirsiche, süß im Geschmack, ideal für Smoothies, Desserts und Joghurt"
      }
    }
  },
es: {
  products: {
    // General Terms
    title: "Nuestros Productos Agrícolas",
    subtitle: "Descubre una amplia gama de productos agrícolas frescos y orgánicos",
    allProducts: "Todos los Productos",
    vegetables: "Verduras Frescas",
    fruits: "Frutas Frescas",
    legumes: "Legumbres",
    herbs: "Hierbas Aromáticas",
    dried: "Productos Secos",
    oils: "Aceites & Semillas",
    frozen: "Productos Congelados",
    featured: "Destacado",
    inStock: "Disponible",
    outOfStock: "Agotado",
    searchPlaceholder: "Buscar un producto...",
    sortByName: "Ordenar por Nombre",
    sortByRating: "Ordenar por Calificación",
    sortByFeatured: "Ordenar por Destacado",
    featuredOnly: "Solo Destacados",
    categories: "Categorías",
    viewDetails: "Ver Detalles",
    productCount: "producto",
    noProductsFound: "No se encontraron productos",
    tryDifferentSearch: "Intente utilizar diferentes términos de búsqueda",
    onDemand: "Bajo pedido",

    // Vegetables
    "fresh-onions": {
      name: "Cebollas Rojas",
      description: "Cebollas rojas frescas de alta calidad de nuestras granjas privadas, ricas en vitaminas y minerales esenciales"
    },
    "fresh-onions-white": {
      name: "Cebollas Blancas",
      description: "Cebollas blancas frescas para exportación de las variedades más finas, cultivadas en las mejores tierras agrícolas egipcias"
    },
    "fresh-onions-golden": {
      name: "Cebollas Doradas",
      description: "Cebollas doradas frescas distintivas, perfectas para usar en cocina y diversos platos"
    },
    "fresh-potatoes": {
      name: "Papas Frescas",
      description: "Papas frescas de alta calidad, perfectas para cocinar y freír, de nuestras granjas especializadas"
    },
    "fresh-tomatoes": {
      name: "Tomates Frescos",
      description: "Tomates frescos de alta calidad de nuestras granjas privadas, ricos en vitaminas y minerales esenciales"
    },
    "fresh-garlic": {
      name: "Ajo Fresco",
      description: "Ajo fresco de alta calidad, rico en antioxidantes y compuestos beneficiosos para la salud"
    },
    "fresh-cucumbers": {
      name: "Pepinos Frescos",
      description: "Pepinos frescos y crujientes, perfectos para ensaladas y jugos naturales"
    },
    "fresh-courgette": {
      name: "Calabacín Fresco",
      description: "Calabacín verde fresco, rico en fibra y vitaminas, ideal para asar y cocinar"
    },
    "fresh-peppers": {
      name: "Pimientos de Colores",
      description: "Pimientos coloridos frescos de diferentes variedades, ricos en vitamina C y antioxidantes"
    },
    "fresh-eggplant": {
      name: "Berenjena Romana",
      description: "Berenjena romana fresca, ideal para preparar diversos platos y asar"
    },

    // Fruits
    "fresh-mangoes-butter": {
      name: "Mango Mantequilla",
      description: "Mango mantequilla egipcio original fresco, rico en vitaminas y con maravilloso sabor tropical"
    },
    "fresh-mangoes-kit": {
      name: "Mango Kit",
      description: "Mango Kit de alta calidad, de sabor dulce y rico en jugo"
    },
    "fresh-oranges-navel": {
      name: "Naranja Navel",
      description: "Naranja navel egipcia fresca, rica en vitamina C y fibra natural"
    },
    "fresh-lemons": {
      name: "Limones Frescos",
      description: "Limones frescos ácidos, ideales para jugos y sazonar platos"
    },
    "fresh-pomegranate": {
      name: "Granada Fresca",
      description: "Granada roja fresca, rica en antioxidantes y nutrientes beneficiosos"
    },
    "fresh-grapes": {
      name: "Uvas Frescas",
      description: "Uvas frescas y dulces, ricas en antioxidantes y vitaminas esenciales"
    },
    "fresh-strawberries": {
      name: "Fresas Frescas",
      description: "Fresas frescas y dulces, ricas en vitamina C y antioxidantes"
    },
    "fresh-watermelon": {
      name: "Sandía Fresca",
      description: "Sandía roja dulce y refrescante, ideal para el verano y postres naturales"
    },
    "fresh-oranges-valencia": {
      name: "Naranja Valencia",
      description: "Naranja Valencia egipcia de alta calidad, rica en jugo y vitaminas"
    },
    "fresh-oranges-sweet": {
      name: "Naranja Dulce",
      description: "Naranja azucarada de sabor dulce, ideal para jugos y consumo directo"
    },
    "fresh-oranges-baladi": {
      name: "Naranja Baladi",
      description: "Naranja Baladi egipcia auténtica, conocida por su sabor distintivo y beneficios para la salud"
    },
    "fresh-bananas-local": {
      name: "Plátanos Locales",
      description: "Plátanos locales egipcios frescos y dulces, ricos en potasio y vitaminas"
    },
    "fresh-bananas-tropical": {
      name: "Plátanos Tropicales",
      description: "Plátanos tropicales grandes, de sabor dulce y ricos en nutrientes"
    },
    "fresh-melon-yellow": {
      name: "Melón Amarillo",
      description: "Melón amarillo dulce y refrescante, rico en agua y vitaminas"
    },
    "fresh-melon-green": {
      name: "Melón Verde",
      description: "Melón verde fresco y delicioso, conocido por su sabor dulce y refrescante"
    },
    "fresh-cherries-red": {
      name: "Cerezas Rojas",
      description: "Cerezas rojas frescas y dulces, ricas en antioxidantes"
    },
    "fresh-cherries-black": {
      name: "Cerezas Negras",
      description: "Cerezas negras ricas en antioxidantes, ideales para consumo fresco y postres"
    },

    // Legumes
    "white-beans": {
      name: "Frijoles Blancos",
      description: "Frijoles blancos de alta calidad, ricos en proteínas y fibra, perfectos para comidas saludables"
    },
    "red-lentils": {
      name: "Lentejas",
      description: "Lentejas rojas y amarillas de alta calidad, de cocción rápida y ricas en proteína vegetal"
    },
    "chickpeas": {
      name: "Garbanzos",
      description: "Garbanzos secos de alta calidad, ricos en proteínas y fibra, perfectos para hummus y falafel"
    },
    "rice": {
      name: "Arroz Egipcio",
      description: "Arroz blanco egipcio de alta calidad, ideal para cocina diaria y diversos platos"
    },
    "wheat": {
      name: "Trigo Egipcio",
      description: "Trigo egipcio de alta calidad, rico en fibra y nutrientes esenciales"
    },

    // Herbs
    "fresh-mint": {
      name: "Menta Fresca",
      description: "Menta fresca aromática, rica en vitaminas y minerales, perfecta para té, bebidas y platos árabes"
    },
    "hibiscus": {
      name: "Hibisco",
      description: "Hibisco rojo natural, ideal para preparar bebidas saludables y refrescantes"
    },
    "chamomile": {
      name: "Manzanilla",
      description: "Manzanilla seca natural, conocida por sus beneficios calmantes y terapéuticos"
    },
    "fresh-thyme": {
      name: "Tomillo Fresco",
      description: "Tomillo fresco aromático, rico en antioxidantes, perfecto para cocinar y té de hierbas"
    },

    // Dried Products
    "sun-dried-tomatoes": {
      name: "Tomates Secados al Sol",
      description: "Tomates secados naturalmente al sol, sabor concentrado y perfectos para cocinar y salsas"
    },
    "dried-mangoes": {
      name: "Mangos Secos",
      description: "Mangos secos dulces, que conservan el sabor natural y las vitaminas"
    },
    "dried-onions": {
      name: "Cebollas Secas",
      description: "Cebollas secas molidas, perfectas para cocinar rápido y conservar el sabor por mucho tiempo"
    },
    "dried-figs": {
      name: "Higos Secos",
      description: "Higos secos naturales de sabor dulce, ricos en fibra y minerales, perfectos como snack saludable"
    },
    "dried-strawberries": {
      name: "Fresas Secas",
      description: "Fresas secas que conservan el sabor natural, ideales para snacks y postres"
    },
    "dried-apricots": {
      name: "Albaricoques Secos",
      description: "Albaricoques secos ricos en vitaminas, de sabor dulce y beneficiosos para la salud"
    },
    "dried-dates": {
      name: "Dátiles Secos",
      description: "Dátiles secos de alta calidad, ricos en azúcares naturales y minerales"
    },
    "raisins": {
      name: "Uvas Pasas",
      description: "Uvas pasas naturales dulces, ricas en energía y nutrientes"
    },
    "dried-bananas": {
      name: "Plátanos Secos",
      description: "Plátanos secos crujientes y deliciosos, ideales para snacks"
    },
    "dried-pineapple": {
      name: "Piña Seca",
      description: "Piña seca de sabor tropical, dulce y refrescante"
    },
    "dried-kiwi": {
      name: "Kiwi Seco",
      description: "Kiwi seco rico en vitamina C, ideal para snacks saludables"
    },
    "dried-coconut": {
      name: "Coco Seco",
      description: "Coco seco natural, rico en sabor y beneficios para la salud"
    },
    "dried-peaches": {
      name: "Duraznos Secos",
      description: "Duraznos secos tiernos y deliciosos, ricos en vitaminas y fibra"
    },
    "dried-pears": {
      name: "Peras Secas",
      description: "Peras secas de sabor dulce, ideales para snacks"
    },
    "dried-apples": {
      name: "Manzanas Secas",
      description: "Manzanas secas crujientes y saludables, ricas en fibra y vitaminas"
    },

    // Oils & Seeds
    "olive-oil": {
      name: "Aceite de Oliva",
      description: "Aceite de oliva extra virgen, extraído de las mejores variedades de aceitunas, rico en antioxidantes"
    },
    "peppermint-oil": {
      name: "Aceite de Menta",
      description: "Aceite de menta natural, conocido por sus beneficios terapéuticos y aromáticos"
    },
    "flax-seeds": {
      name: "Semillas de Lino",
      description: "Semillas de lino naturales, ricas en omega-3 y fibra, beneficiosas para la salud general"
    },
    "black-cumin": {
      name: "Comino Negro",
      description: "Comino negro natural, conocido por sus beneficios para la salud y terapéuticos"
    },

    // Frozen Products
    "frozen-peas": {
      name: "Guisantes Congelados",
      description: "Guisantes verdes congelados frescos, que conservan todo su valor nutricional y frescura"
    },
    "frozen-corn": {
      name: "Maíz Congelado",
      description: "Maíz dulce congelado, ideal para usar en diversos platos y ensaladas"
    },
    "frozen-spinach": {
      name: "Espinacas Congeladas",
      description: "Espinacas congeladas frescas, ricas en hierro y vitaminas, listas para usar"
    },
    "frozen-broccoli": {
      name: "Brócoli Congelado",
      description: "Brócoli congelado fresco, que conserva todos los nutrientes y sabor natural"
    },
    "frozen-mixed-vegetables": {
      name: "Mezcla de Verduras Congeladas",
      description: "Mezclas de verduras congeladas para saltear o sopa, ricas en nutrientes"
    },
    "frozen-carrots": {
      name: "Zanahorias Congeladas",
      description: "Zanahorias congeladas frescas, precortadas y listas para uso directo en cocina"
    },
    "frozen-cauliflower": {
      name: "Coliflor Congelada",
      description: "Coliflor congelada fresca, que conserva su valor nutricional y textura crujiente después de cocinar"
    },
    "frozen-berries": {
      name: "Bayas Congeladas",
      description: "Bayas congeladas frescas, ideales para batidos, postres y consumo directo después de congelar"
    },
    "frozen-mango": {
      name: "Mango Congelado",
      description: "Mango congelado fresco, de sabor dulce, perfecto para batidos, ensaladas y postres"
    },
    "frozen-banana": {
      name: "Plátano Congelado",
      description: "Plátano congelado fresco, ideal para batidos, batidos y uso en horneado"
    },
    "frozen-pineapple": {
      name: "Piña Congelada",
      description: "Piña congelada fresca, dulce y refrescante, conserva su distintivo sabor tropical"
    },
    "frozen-fruit-mix": {
      name: "Mezcla de Frutas Congeladas",
      description: "Mezclas de frutas congeladas (como arándanos y fresas), ideales para batidos, ensaladas y postres"
    },
    "frozen-peaches": {
      name: "Duraznos Congelados",
      description: "Duraznos congelados frescos, de sabor dulce, ideales para batidos, postres y yogur"
    }
  }
},
zh: {
  products: {
    // General Terms
    title: "我们的农产品",
    subtitle: "发现各种新鲜有机的农产品",
    allProducts: "所有产品",
    vegetables: "新鲜蔬菜",
    fruits: "新鲜水果",
    legumes: "豆类",
    herbs: "香草",
    dried: "干制品",
    oils: "油和种子",
    frozen: "冷冻产品",
    featured: "特色",
    inStock: "有货",
    outOfStock: "缺货",
    searchPlaceholder: "搜索产品...",
    sortByName: "按名称排序",
    sortByRating: "按评分排序",
    sortByFeatured: "按特色排序",
    featuredOnly: "仅特色",
    categories: "分类",
    viewDetails: "查看详情",
    productCount: "产品",
    noProductsFound: "未找到产品",
    tryDifferentSearch: "尝试使用不同的搜索词",
    onDemand: "按需",

    // Vegetables
    "fresh-onions": {
      name: "红洋葱",
      description: "来自我们私人农场的高品质新鲜红洋葱，富含维生素和必需矿物质"
    },
    "fresh-onions-white": {
      name: "白洋葱",
      description: "最优质的新鲜白洋葱，种植在埃及最好的农田中，用于出口"
    },
    "fresh-onions-golden": {
      name: "金洋葱",
      description: "独特的新鲜金洋葱，非常适合烹饪和各种菜肴"
    },
    "fresh-potatoes": {
      name: "新鲜土豆",
      description: "高品质新鲜土豆，非常适合烹饪和油炸，来自我们的专业农场"
    },
    "fresh-tomatoes": {
      name: "新鲜番茄",
      description: "来自我们私人农场的高品质新鲜番茄，富含维生素和必需矿物质"
    },
    "fresh-garlic": {
      name: "新鲜大蒜",
      description: "高品质新鲜大蒜，富含抗氧化剂和有益健康的化合物"
    },
    "fresh-cucumbers": {
      name: "新鲜黄瓜",
      description: "新鲜脆嫩的黄瓜，非常适合沙拉和天然果汁"
    },
    "fresh-courgette": {
      name: "新鲜西葫芦",
      description: "新鲜绿西葫芦，富含纤维和维生素，非常适合烧烤和烹饪"
    },
    "fresh-peppers": {
      name: "彩色甜椒",
      description: "各种颜色的新鲜甜椒，富含维生素C和抗氧化剂"
    },
    "fresh-eggplant": {
      name: "罗马茄子",
      description: "新鲜罗马茄子，非常适合制作各种菜肴和烧烤"
    },

    // Fruits
    "fresh-mangoes-butter": {
      name: "黄油芒果",
      description: "新鲜的埃及原产黄油芒果，富含维生素，具有美妙的热带风味"
    },
    "fresh-mangoes-kit": {
      name: "凯特芒果",
      description: "高品质凯特芒果，味道甜美，汁液丰富"
    },
    "fresh-oranges-navel": {
      name: "脐橙",
      description: "新鲜的埃及脐橙，富含维生素C和天然纤维"
    },
    "fresh-lemons": {
      name: "新鲜柠檬",
      description: "新鲜酸柠檬，非常适合果汁和调味菜肴"
    },
    "fresh-pomegranate": {
      name: "新鲜石榴",
      description: "新鲜红石榴，富含抗氧化剂和有益营养素"
    },
    "fresh-grapes": {
      name: "新鲜葡萄",
      description: "新鲜甜葡萄，富含抗氧化剂和必需维生素"
    },
    "fresh-strawberries": {
      name: "新鲜草莓",
      description: "新鲜甜草莓，富含维生素C和抗氧化剂"
    },
    "fresh-watermelon": {
      name: "新鲜西瓜",
      description: "甜美清爽的红西瓜，非常适合夏季和天然甜点"
    },
    "fresh-oranges-valencia": {
      name: "瓦伦西亚橙",
      description: "高品质埃及瓦伦西亚橙，汁液丰富，富含维生素"
    },
    "fresh-oranges-sweet": {
      name: "甜橙",
      description: "味道甜美的糖橙，非常适合果汁和直接食用"
    },
    "fresh-oranges-baladi": {
      name: "巴拉迪橙",
      description: "正宗的埃及巴拉迪橙，以其独特风味和健康益处闻名"
    },
    "fresh-bananas-local": {
      name: "本地香蕉",
      description: "新鲜甜美的埃及本地香蕉，富含钾和维生素"
    },
    "fresh-bananas-tropical": {
      name: "热带香蕉",
      description: "大型热带香蕉，味道甜美，营养丰富"
    },
    "fresh-melon-yellow": {
      name: "黄甜瓜",
      description: "甜美清爽的黄甜瓜，富含水分和维生素"
    },
    "fresh-melon-green": {
      name: "绿甜瓜",
      description: "新鲜美味的绿甜瓜，以其甜美清爽的味道闻名"
    },
    "fresh-cherries-red": {
      name: "红樱桃",
      description: "新鲜甜美的红樱桃，富含抗氧化剂"
    },
    "fresh-cherries-black": {
      name: "黑樱桃",
      description: "富含抗氧化剂的黑樱桃，非常适合新鲜食用和甜点"
    },

    // Legumes
    "white-beans": {
      name: "白豆",
      description: "高品质白豆，富含蛋白质和纤维，非常适合健康餐食"
    },
    "red-lentils": {
      name: "扁豆",
      description: "高品质红扁豆和黄扁豆，快速烹饪，富含植物蛋白"
    },
    "chickpeas": {
      name: "鹰嘴豆",
      description: "高品质干鹰嘴豆，富含蛋白质和纤维，非常适合制作鹰嘴豆泥和法拉费"
    },
    "rice": {
      name: "埃及大米",
      description: "高品质埃及白米，非常适合日常烹饪和各种菜肴"
    },
    "wheat": {
      name: "埃及小麦",
      description: "高品质埃及小麦，富含纤维和必需营养素"
    },

    // Herbs
    "fresh-mint": {
      name: "新鲜薄荷",
      description: "新鲜芳香薄荷，富含维生素和矿物质，非常适合茶、饮料和阿拉伯菜肴"
    },
    "hibiscus": {
      name: "木槿",
      description: "天然红木槿，非常适合制作健康清爽的饮料"
    },
    "chamomile": {
      name: "洋甘菊",
      description: "天然干洋甘菊，以其镇静和治疗功效闻名"
    },
    "fresh-thyme": {
      name: "新鲜百里香",
      description: "新鲜芳香百里香，富含抗氧化剂，非常适合烹饪和草药茶"
    },

    // Dried Products
    "sun-dried-tomatoes": {
      name: "晒干番茄",
      description: "天然晒干的番茄，风味浓郁，非常适合烹饪和酱料"
    },
    "dried-mangoes": {
      name: "芒果干",
      description: "甜美芒果干，保留天然风味和维生素"
    },
    "dried-onions": {
      name: "干洋葱",
      description: "干洋葱粉，非常适合快速烹饪和长时间保存风味"
    },
    "dried-figs": {
      name: "无花果干",
      description: "天然无花果干，味道甜美，富含纤维和矿物质，是完美的健康零食"
    },
    "dried-strawberries": {
      name: "草莓干",
      description: "保留天然风味的草莓干，非常适合零食和甜点"
    },
    "dried-apricots": {
      name: "杏干",
      description: "富含维生素的杏干，味道甜美，有益健康"
    },
    "dried-dates": {
      name: "枣干",
      description: "高品质枣干，富含天然糖分和矿物质"
    },
    "raisins": {
      name: "葡萄干",
      description: "天然甜葡萄干，富含能量和营养素"
    },
    "dried-bananas": {
      name: "香蕉干",
      description: "酥脆美味的香蕉干，非常适合零食"
    },
    "dried-pineapple": {
      name: "菠萝干",
      description: "热带风味的菠萝干，甜美清爽"
    },
    "dried-kiwi": {
      name: "猕猴桃干",
      description: "富含维生素C的猕猴桃干，非常适合健康零食"
    },
    "dried-coconut": {
      name: "椰子干",
      description: "天然椰子干，风味丰富，健康益处多"
    },
    "dried-peaches": {
      name: "桃子干",
      description: "柔软美味的桃子干，富含维生素和纤维"
    },
    "dried-pears": {
      name: "梨干",
      description: "味道甜美的梨干，非常适合零食"
    },
    "dried-apples": {
      name: "苹果干",
      description: "酥脆健康的苹果干，富含纤维和维生素"
    },

    // Oils & Seeds
    "olive-oil": {
      name: "橄榄油",
      description: "特级初榨橄榄油，从最优质的橄榄中提取，富含抗氧化剂"
    },
    "peppermint-oil": {
      name: "薄荷油",
      description: "天然薄荷油，以其治疗和芳香功效闻名"
    },
    "flax-seeds": {
      name: "亚麻籽",
      description: "天然亚麻籽，富含omega-3和纤维，有益于整体健康"
    },
    "black-cumin": {
      name: "黑籽",
      description: "天然黑籽，以其健康和治疗功效闻名"
    },

    // Frozen Products
    "frozen-peas": {
      name: "冷冻青豆",
      description: "新鲜冷冻青豆，保留全部营养价值和新鲜度"
    },
    "frozen-corn": {
      name: "冷冻玉米",
      description: "甜冷冻玉米，非常适合用于各种菜肴和沙拉"
    },
    "frozen-spinach": {
      name: "冷冻菠菜",
      description: "新鲜冷冻菠菜，富含铁和维生素，可直接使用"
    },
    "frozen-broccoli": {
      name: "冷冻西兰花",
      description: "新鲜冷冻西兰花，保留所有营养素和天然风味"
    },
    "frozen-mixed-vegetables": {
      name: "混合冷冻蔬菜",
      description: "用于炒菜或汤的混合冷冻蔬菜，营养丰富"
    },
    "frozen-carrots": {
      name: "冷冻胡萝卜",
      description: "新鲜冷冻胡萝卜，预先切好，可直接用于烹饪"
    },
    "frozen-cauliflower": {
      name: "冷冻花椰菜",
      description: "新鲜冷冻花椰菜，烹饪后保持其营养价值和脆嫩质地"
    },
    "frozen-berries": {
      name: "冷冻浆果",
      description: "新鲜冷冻浆果，非常适合冰沙、甜点和解冻后直接食用"
    },
    "frozen-mango": {
      name: "冷冻芒果",
      description: "新鲜冷冻芒果，味道甜美，非常适合冰沙、沙拉和甜点"
    },
    "frozen-banana": {
      name: "冷冻香蕉",
      description: "新鲜冷冻香蕉，非常适合冰沙、奶昔和烘焙"
    },
    "frozen-pineapple": {
      name: "冷冻菠萝",
      description: "新鲜冷冻菠萝，甜美清爽，保留其独特的热带风味"
    },
    "frozen-fruit-mix": {
      name: "混合冷冻水果",
      description: "混合冷冻水果（如蓝莓和草莓），非常适合冰沙、沙拉和甜点"
    },
    "frozen-peaches": {
      name: "冷冻桃子",
      description: "新鲜冷冻桃子，味道甜美，非常适合冰沙、甜点和酸奶"
    }
  }
}
};