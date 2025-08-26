import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star,  Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import products from '../data';
import { dataproductTranslations } from '../locales/dataproduct'; 

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  inStock: boolean;
  featured: boolean;
}

const ProductsPage: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const productsTranslations = dataproductTranslations[language]?.products || {};

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // تعريف الفئات مع إضافة قسم المجمدات
  const categories = [
    { id: 'all', name: productsTranslations.allProducts || 'All Products', icon: '🌾', count: products.length },
    { id: 'vegetables', name: productsTranslations.vegetables || 'Vegetables', icon: '🥬', count: products.filter(p => p.category === 'vegetables').length },
    { id: 'fruits', name: productsTranslations.fruits || 'Fruits', icon: '🍊', count: products.filter(p => p.category === 'fruits').length },
    { id: 'legumes', name: productsTranslations.legumes || 'Legumes', icon: '🫘', count: products.filter(p => p.category === 'legumes').length },
    { id: 'herbs', name: productsTranslations.herbs || 'Herbs', icon: '🌿', count: products.filter(p => p.category === 'herbs').length },
    { id: 'dried', name: productsTranslations.dried || 'Dried', icon: '🌞', count: products.filter(p => p.category === 'dried').length },
    { id: 'oils', name: productsTranslations.oils || 'Oils', icon: '🧴', count: products.filter(p => p.category === 'oils').length },
    { id: 'frozen', name: productsTranslations.frozen || 'Frozen', icon: '🧊', count: products.filter(p => p.category === 'frozen').length },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => {
        const productKey = product.id;
        const translatedName = productsTranslations[productKey]?.name || product.name;
        const translatedDesc = productsTranslations[productKey]?.description || product.description;
        
        return (
          translatedName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          translatedDesc.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    // Filter by featured
    if (showFeaturedOnly) {
      filtered = filtered.filter(product => product.featured);
    }

    // Sort products
    filtered.sort((a, b) => {
      const aName = productsTranslations[a.id]?.name || a.name;
      const bName = productsTranslations[b.id]?.name || b.name;
      
      switch (sortBy) {
        case 'name':
          return isRTL ? 
            bName.localeCompare(aName, language) : 
            aName.localeCompare(bName, language);
        case 'rating':
          return b.rating - a.rating;
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy, showFeaturedOnly, language, isRTL, productsTranslations]);

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const translatedName = productsTranslations[product.id]?.name || product.name;
    const translatedDesc = productsTranslations[product.id]?.description || product.description;
    
    return (
      <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-400">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={translatedName}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {product.featured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {productsTranslations.featured || 'Featured'}
            </div>
          )}
          
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       
          </div>
          
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
         
           
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              {translatedName}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 transition-colors">
            {translatedDesc}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-600 dark:text-green-400 transition-colors">
              {productsTranslations.onDemand}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              product.inStock 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
            }`}>
              {product.inStock ? (productsTranslations.inStock || 'In Stock') : (productsTranslations.outOfStock || 'Out of Stock')}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-gray-800 dark:via-green-800 dark:to-gray-800 text-white py-16 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {productsTranslations.title || 'Our Agricultural Products'}
            </h1>
            <p className="text-xl text-green-100 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              {productsTranslations.subtitle || 'Discover a wide range of fresh and organic agricultural products'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={productsTranslations.searchPlaceholder || 'Search for a product...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              >
                <option value="name">{productsTranslations.sortByName || 'Sort by Name'}</option>
                <option value="rating">{productsTranslations.sortByRating || 'Sort by Rating'}</option>
                <option value="featured">{productsTranslations.sortByFeatured || 'Sort by Featured'}</option>
              </select>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="w-4 h-4 text-green-600 rounded focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  {productsTranslations.featuredOnly || 'Featured Only'}
                </span>
              </label>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white dark:bg-gray-600 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white dark:bg-gray-600 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 transition-colors">
                <Filter className="w-5 h-5" />
                {productsTranslations.categories || 'Categories'}
              </h3>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-right p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white shadow-lg'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedCategory === category.id
                        ? 'bg-white/20 dark:bg-gray-800/30 text-white'
                        : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-500'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                {categories.find(c => c.id === selectedCategory)?.name || productsTranslations.allProducts || 'All Products'}
              </h2>
              <span className="text-gray-600 dark:text-gray-400 transition-colors">
                {filteredProducts.length} {productsTranslations.productCount || 'product'}
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  {productsTranslations.noProductsFound || 'No products found'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  {productsTranslations.tryDifferentSearch || 'Try using different search terms'}
                </p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;