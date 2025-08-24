import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Package, Leaf, Apple, Wheat, Droplets, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Product data with all categories including frozen products
  const products = [
    // Fresh Vegetables
    {
      id: 1,
      name: {
        ar: 'طماطم طازجة',
        en: 'Fresh Tomatoes',
        fr: 'Tomates Fraîches',
        es: 'Tomates Frescos',
        de: 'Frische Tomaten',
        it: 'Pomodori Freschi'
      },
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.8
    },
    {
      id: 2,
      name: {
        ar: 'بصل أحمر',
        en: 'Red Onions',
        fr: 'Oignons Rouges',
        es: 'Cebollas Rojas',
        de: 'Rote Zwiebeln',
        it: 'Cipolle Rosse'
      },
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.5
    },
    {
      id: 3,
      name: {
        ar: 'خيار طازج',
        en: 'Fresh Cucumbers',
        fr: 'Concombres Frais',
        es: 'Pepinos Frescos',
        de: 'Frische Gurken',
        it: 'Cetrioli Freschi'
      },
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.6
    },
    {
      id: 4,
      name: {
        ar: 'فلفل ملون',
        en: 'Colored Bell Peppers',
        fr: 'Poivrons Colorés',
        es: 'Pimientos de Colores',
        de: 'Bunte Paprika',
        it: 'Peperoni Colorati'
      },
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.7
    },

    // Fresh Fruits
    {
      id: 5,
      name: {
        ar: 'برتقال طازج',
        en: 'Fresh Oranges',
        fr: 'Oranges Fraîches',
        es: 'Naranjas Frescas',
        de: 'Frische Orangen',
        it: 'Arance Fresche'
      },
      category: 'fruits',
      image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.9
    },
    {
      id: 6,
      name: {
        ar: 'عنب أحمر',
        en: 'Red Grapes',
        fr: 'Raisins Rouges',
        es: 'Uvas Rojas',
        de: 'Rote Trauben',
        it: 'Uva Rossa'
      },
      category: 'fruits',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.4
    },
    {
      id: 7,
      name: {
        ar: 'تفاح أحمر',
        en: 'Red Apples',
        fr: 'Pommes Rouges',
        es: 'Manzanas Rojas',
        de: 'Rote Äpfel',
        it: 'Mele Rosse'
      },
      category: 'fruits',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.8
    },

    // Legumes
    {
      id: 8,
      name: {
        ar: 'عدس أحمر',
        en: 'Red Lentils',
        fr: 'Lentilles Rouges',
        es: 'Lentejas Rojas',
        de: 'Rote Linsen',
        it: 'Lenticchie Rosse'
      },
      category: 'legumes',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.6
    },
    {
      id: 9,
      name: {
        ar: 'حمص جاف',
        en: 'Dried Chickpeas',
        fr: 'Pois Chiches Secs',
        es: 'Garbanzos Secos',
        de: 'Getrocknete Kichererbsen',
        it: 'Ceci Secchi'
      },
      category: 'legumes',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.7
    },

    // Herbs
    {
      id: 10,
      name: {
        ar: 'ريحان طازج',
        en: 'Fresh Basil',
        fr: 'Basilic Frais',
        es: 'Albahaca Fresca',
        de: 'Frisches Basilikum',
        it: 'Basilico Fresco'
      },
      category: 'herbs',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.5
    },
    {
      id: 11,
      name: {
        ar: 'نعناع طازج',
        en: 'Fresh Mint',
        fr: 'Menthe Fraîche',
        es: 'Menta Fresca',
        de: 'Frische Minze',
        it: 'Menta Fresca'
      },
      category: 'herbs',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.8
    },

    // Dried Products
    {
      id: 12,
      name: {
        ar: 'تمر مجفف',
        en: 'Dried Dates',
        fr: 'Dattes Séchées',
        es: 'Dátiles Secos',
        de: 'Getrocknete Datteln',
        it: 'Datteri Secchi'
      },
      category: 'dried',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.9
    },

    // Oils & Seeds
    {
      id: 13,
      name: {
        ar: 'زيت زيتون بكر',
        en: 'Extra Virgin Olive Oil',
        fr: 'Huile d\'Olive Extra Vierge',
        es: 'Aceite de Oliva Extra Virgen',
        de: 'Natives Olivenöl Extra',
        it: 'Olio Extra Vergine di Oliva'
      },
      category: 'oils',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.9
    },

    // Frozen Vegetables
    {
      id: 14,
      name: {
        ar: 'بازلاء خضراء مجمدة',
        en: 'Frozen Green Peas',
        fr: 'Petits Pois Verts Surgelés',
        es: 'Guisantes Verdes Congelados',
        de: 'Gefrorene Grüne Erbsen',
        it: 'Piselli Verdi Surgelati'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.7
    },
    {
      id: 15,
      name: {
        ar: 'ذرة مجمدة',
        en: 'Frozen Corn',
        fr: 'Maïs Surgelé',
        es: 'Maíz Congelado',
        de: 'Gefrorener Mais',
        it: 'Mais Surgelato'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.6
    },
    {
      id: 16,
      name: {
        ar: 'سبانخ مجمدة',
        en: 'Frozen Spinach',
        fr: 'Épinards Surgelés',
        es: 'Espinacas Congeladas',
        de: 'Gefrorener Spinat',
        it: 'Spinaci Surgelati'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.5
    },
    {
      id: 17,
      name: {
        ar: 'بروكلي مجمد',
        en: 'Frozen Broccoli',
        fr: 'Brocoli Surgelé',
        es: 'Brócoli Congelado',
        de: 'Gefrorener Brokkoli',
        it: 'Broccoli Surgelati'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.8
    },
    {
      id: 18,
      name: {
        ar: 'خلطة خضروات مجمدة للمقلاة',
        en: 'Frozen Stir-Fry Vegetable Mix',
        fr: 'Mélange de Légumes Surgelés pour Sauté',
        es: 'Mezcla de Verduras Congeladas para Saltear',
        de: 'Gefrorene Pfannengemüse-Mischung',
        it: 'Mix di Verdure Surgelate per Saltare'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.6
    },
    {
      id: 19,
      name: {
        ar: 'خلطة خضروات مجمدة للحساء',
        en: 'Frozen Soup Vegetable Mix',
        fr: 'Mélange de Légumes Surgelés pour Soupe',
        es: 'Mezcla de Verduras Congeladas para Sopa',
        de: 'Gefrorene Suppengemüse-Mischung',
        it: 'Mix di Verdure Surgelate per Zuppa'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.5
    },
    {
      id: 20,
      name: {
        ar: 'جزر مجمد',
        en: 'Frozen Carrots',
        fr: 'Carottes Surgelées',
        es: 'Zanahorias Congeladas',
        de: 'Gefrorene Karotten',
        it: 'Carote Surgelate'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.4
    },
    {
      id: 21,
      name: {
        ar: 'قرنبيط مجمد',
        en: 'Frozen Cauliflower',
        fr: 'Chou-fleur Surgelé',
        es: 'Coliflor Congelada',
        de: 'Gefrorener Blumenkohl',
        it: 'Cavolfiore Surgelato'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.3
    },

    // Frozen Fruits
    {
      id: 22,
      name: {
        ar: 'فراولة مجمدة',
        en: 'Frozen Strawberries',
        fr: 'Fraises Surgelées',
        es: 'Fresas Congeladas',
        de: 'Gefrorene Erdbeeren',
        it: 'Fragole Surgelate'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.8
    },
    {
      id: 23,
      name: {
        ar: 'توت أزرق مجمد',
        en: 'Frozen Blueberries',
        fr: 'Myrtilles Surgelées',
        es: 'Arándanos Congelados',
        de: 'Gefrorene Blaubeeren',
        it: 'Mirtilli Surgelati'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.7
    },
    {
      id: 24,
      name: {
        ar: 'مانجو مجمدة',
        en: 'Frozen Mango',
        fr: 'Mangue Surgelée',
        es: 'Mango Congelado',
        de: 'Gefrorene Mango',
        it: 'Mango Surgelato'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.9
    },
    {
      id: 25,
      name: {
        ar: 'موز مجمد',
        en: 'Frozen Banana',
        fr: 'Banane Surgelée',
        es: 'Plátano Congelado',
        de: 'Gefrorene Banane',
        it: 'Banana Surgelata'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.5
    },
    {
      id: 26,
      name: {
        ar: 'أناناس مجمد',
        en: 'Frozen Pineapple',
        fr: 'Ananas Surgelé',
        es: 'Piña Congelada',
        de: 'Gefrorene Ananas',
        it: 'Ananas Surgelato'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.6
    },
    {
      id: 27,
      name: {
        ar: 'خلطة توت مجمدة (فراولة وتوت أزرق)',
        en: 'Frozen Berry Mix (Strawberry & Blueberry)',
        fr: 'Mélange de Baies Surgelées (Fraise & Myrtille)',
        es: 'Mezcla de Bayas Congeladas (Fresa y Arándano)',
        de: 'Gefrorene Beeren-Mischung (Erdbeere & Blaubeere)',
        it: 'Mix di Frutti di Bosco Surgelati (Fragola e Mirtillo)'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      inStock: true,
      rating: 4.8
    },
    {
      id: 28,
      name: {
        ar: 'خوخ مجمد',
        en: 'Frozen Peaches',
        fr: 'Pêches Surgelées',
        es: 'Duraznos Congelados',
        de: 'Gefrorene Pfirsiche',
        it: 'Pesche Surgelate'
      },
      category: 'frozen',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      inStock: true,
      rating: 4.7
    }
  ];

  const categories = [
    { id: 'all', name: t.products.allProducts, icon: Package },
    { id: 'vegetables', name: t.products.vegetables, icon: Leaf },
    { id: 'fruits', name: t.products.fruits, icon: Apple },
    { id: 'legumes', name: t.products.legumes, icon: Wheat },
    { id: 'herbs', name: t.products.herbs, icon: Leaf },
    { id: 'dried', name: t.products.dried, icon: Sun },
    { id: 'oils', name: t.products.oils, icon: Droplets },
    { id: 'frozen', name: t.products.frozen, icon: Package }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name[t.language as keyof typeof product.name]
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesFeatured = !showFeaturedOnly || product.featured;
      
      return matchesSearch && matchesCategory && matchesFeatured;
    });

    // Sort products
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name[t.language as keyof typeof a.name].localeCompare(
          b.name[t.language as keyof typeof b.name]
        );
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'featured') {
        return b.featured ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, showFeaturedOnly, sortBy, t.language]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-gray-800 dark:via-green-800 dark:to-gray-800 text-white py-20 overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fresh vegetables and fruits"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 right-20 animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
            <Apple className="w-8 h-8 text-green-300" />
          </div>
        </div>
        
        <div className="absolute bottom-20 left-20 animate-pulse">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Leaf className="w-6 h-6 text-green-300" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
              <Package className="w-8 h-8 text-orange-400" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400 rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-orange-100 dark:from-gray-100 dark:via-green-200 dark:to-orange-200 bg-clip-text text-transparent transition-colors">
                {t.products.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 dark:text-gray-200/90 max-w-3xl mx-auto leading-relaxed transition-colors">
              {t.products.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t.products.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors appearance-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              >
                <option value="name">{t.products.sortByName}</option>
                <option value="rating">{t.products.sortByRating}</option>
                <option value="featured">{t.products.sortByFeatured}</option>
              </select>
            </div>

            {/* Featured Toggle */}
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="sr-only"
                />
                <div className={`relative w-12 h-6 rounded-full transition-colors ${
                  showFeaturedOnly ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}>
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    showFeaturedOnly ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300 transition-colors">
                  {t.products.featuredOnly}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 transition-colors">
            {filteredProducts.length} {t.products.productCount}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-400"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name[t.language as keyof typeof product.name]}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.featured && (
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {t.products.featured}
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {product.inStock ? t.products.inStock : t.products.outOfStock}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {product.name[t.language as keyof typeof product.name]}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                      {t.products.priceOnRequest}
                    </span>
                    
                    <button className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 hover:from-green-500 hover:to-green-600 dark:hover:from-green-400 dark:hover:to-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105">
                      {t.products.requestQuote}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
              {t.products.noProductsFound}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">
              {t.products.tryDifferentSearch}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;