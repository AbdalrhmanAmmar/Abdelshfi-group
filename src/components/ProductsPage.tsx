import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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

const products: Product[] = [
  // الخضروات الطازجة
  { id: '1', name: 'بصل أحمر', category: 'vegetables', image: 'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بصل أحمر طازج عالي الجودة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '2', name: 'بصل أبيض', category: 'vegetables', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بصل أبيض طازج للتصدير', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '3', name: 'بصل ذهبي', category: 'vegetables', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بصل ذهبي مميز', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '4', name: 'بطاطس', category: 'vegetables', image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بطاطس طازجة عالية الجودة', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '5', name: 'طماطم', category: 'vegetables', image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'طماطم طازجة حمراء', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '6', name: 'ثوم', category: 'vegetables', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'ثوم طازج عالي الجودة', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '7', name: 'خيار', category: 'vegetables', image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'خيار طازج أخضر', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '8', name: 'كوسة', category: 'vegetables', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'كوسة طازجة خضراء', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '9', name: 'فلفل ألوان', category: 'vegetables', image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'فلفل ملون طازج', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '10', name: 'باذنجان رومي', category: 'vegetables', image: 'https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'باذنجان رومي طازج', rating: 4.4, price: 'حسب الطلب', inStock: true, featured: false },

  // الفواكه الطازجة
  { id: '11', name: 'مانجو زبدية', category: 'fruits', image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'مانجو زبدية مصرية أصلية', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '12', name: 'مانجو كيت', category: 'fruits', image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'مانجو كيت عالية الجودة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '13', name: 'برتقال بسرة', category: 'fruits', image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'برتقال بسرة مصري طازج', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '14', name: 'ليمون', category: 'fruits', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'ليمون طازج حامض', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '15', name: 'رمان', category: 'fruits', image: 'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-65256.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'رمان أحمر طازج', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '16', name: 'عنب', category: 'fruits', image: 'https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400', description: 'عنب طازج حلو', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '17', name: 'فراولة', category: 'fruits', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'فراولة طازجة حمراء', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '18', name: 'بطيخ', category: 'fruits', image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بطيخ أحمر حلو', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '47', name: 'برتقال فالنسيا', category: 'fruits', image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'برتقال فالنسيا مصري عالي الجودة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '48', name: 'برتقال سكري', category: 'fruits', image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'برتقال سكري حلو المذاق', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '49', name: 'برتقال بلدي', category: 'fruits', image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'برتقال بلدي مصري أصيل', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '50', name: 'موز بلدي', category: 'fruits', image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'موز بلدي مصري طازج وحلو', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '51', name: 'موز استوائي', category: 'fruits', image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'موز استوائي كبير الحجم', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '52', name: 'شمام أصفر', category: 'fruits', image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'شمام أصفر حلو ومنعش', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '53', name: 'شمام أخضر', category: 'fruits', image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'شمام أخضر طازج ولذيذ', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '54', name: 'كرز أحمر', category: 'fruits', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'كرز أحمر طازج حلو المذاق', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '55', name: 'كرز أسود', category: 'fruits', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'كرز أسود غني بمضادات الأكسدة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },

  // البقوليات
  { id: '19', name: 'فاصوليا بيضاء', category: 'legumes', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'فاصوليا بيضاء عالية الجودة', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '20', name: 'عدس', category: 'legumes', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'عدس أحمر وأصفر', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '21', name: 'حمص', category: 'legumes', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'حمص جاف عالي الجودة', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '22', name: 'أرز', category: 'legumes', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'أرز مصري أبيض', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '23', name: 'قمح', category: 'legumes', image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'قمح مصري عالي الجودة', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },

  // الأعشاب العطرية
  { id: '24', name: 'نعناع', category: 'herbs', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'نعناع طازج عطري', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '25', name: 'كركديه', category: 'herbs', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'كركديه أحمر طبيعي', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '26', name: 'بابونج', category: 'herbs', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بابونج طبيعي مجفف', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '27', name: 'زعتر', category: 'herbs', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'زعتر طبيعي عطري', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },

  // المجففات
  { id: '28', name: 'طماطم مجففة', category: 'dried', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'طماطم مجففة طبيعياً', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '29', name: 'مانجو مجففة', category: 'dried', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'مانجو مجففة حلوة', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '30', name: 'بصل مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بصل مجفف مطحون', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '31', name: 'تين مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'تين مجفف طبيعي حلو المذاق', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '32', name: 'فراولة مجففة', category: 'dried', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'فراولة مجففة محتفظة بالطعم الطبيعي', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '33', name: 'مشمش مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'مشمش مجفف غني بالفيتامينات', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '34', name: 'تمر مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'تمر مجفف عالي الجودة', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '35', name: 'عنب مجفف (زبيب)', category: 'dried', image: 'https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400', description: 'زبيب طبيعي حلو المذاق', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '36', name: 'موز مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'موز مجفف مقرمش ولذيذ', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '37', name: 'أناناس مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'أناناس مجفف استوائي الطعم', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '38', name: 'كيوي مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'كيوي مجفف غني بفيتامين سي', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '39', name: 'جوز الهند مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'جوز الهند المجفف الطبيعي', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '40', name: 'خوخ مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'خوخ مجفف طري ولذيذ', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '41', name: 'كمثرى مجففة', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'كمثرى مجففة حلوة المذاق', rating: 4.5, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '42', name: 'تفاح مجفف', category: 'dried', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'تفاح مجفف مقرمش وصحي', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },

  // الزيوت والبذور
  { id: '43', name: 'زيت زيتون', category: 'oils', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'زيت زيتون بكر ممتاز', rating: 4.9, price: 'حسب الطلب', inStock: true, featured: true },
  { id: '44', name: 'زيت نعناع', category: 'oils', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'زيت نعناع طبيعي', rating: 4.7, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '45', name: 'بذور الكتان', category: 'oils', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'بذور كتان طبيعية', rating: 4.6, price: 'حسب الطلب', inStock: true, featured: false },
  { id: '46', name: 'حبة البركة', category: 'oils', image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'حبة البركة الطبيعية', rating: 4.8, price: 'حسب الطلب', inStock: true, featured: true },
];

const categories = [
  { id: 'all', name: 'جميع المنتجات', icon: '🌾', count: products.length },
  { id: 'vegetables', name: 'الخضروات الطازجة', icon: '🥬', count: products.filter(p => p.category === 'vegetables').length },
  { id: 'fruits', name: 'الفواكه الطازجة', icon: '🍊', count: products.filter(p => p.category === 'fruits').length },
  { id: 'legumes', name: 'البقوليات', icon: '🫘', count: products.filter(p => p.category === 'legumes').length },
  { id: 'herbs', name: 'الأعشاب العطرية', icon: '🌿', count: products.filter(p => p.category === 'herbs').length },
  { id: 'dried', name: 'المجففات', icon: '🌞', count: products.filter(p => p.category === 'dried').length },
  { id: 'oils', name: 'الزيوت والبذور', icon: '🧴', count: products.filter(p => p.category === 'oils').length },
];

const ProductsPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const categories = [
    { id: 'all', name: t.products.allProducts, icon: '🌾', count: products.length },
    { id: 'vegetables', name: t.products.vegetables, icon: '🥬', count: products.filter(p => p.category === 'vegetables').length },
    { id: 'fruits', name: t.products.fruits, icon: '🍊', count: products.filter(p => p.category === 'fruits').length },
    { id: 'legumes', name: t.products.legumes, icon: '🫘', count: products.filter(p => p.category === 'legumes').length },
    { id: 'herbs', name: t.products.herbs, icon: '🌿', count: products.filter(p => p.category === 'herbs').length },
    { id: 'dried', name: t.products.dried, icon: '🌞', count: products.filter(p => p.category === 'dried').length },
    { id: 'oils', name: t.products.oils, icon: '🧴', count: products.filter(p => p.category === 'oils').length },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by featured
    if (showFeaturedOnly) {
      filtered = filtered.filter(product => product.featured);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name, 'ar');
        case 'rating':
          return b.rating - a.rating;
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy, showFeaturedOnly]);

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-400">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {product.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {t.products.featured}
          </div>
        )}
        
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              {t.products.requestQuote}
            </button>
            <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors">
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 transition-colors">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600 dark:text-green-400 transition-colors">
            {product.price}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            product.inStock 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' 
              : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
          }`}>
            {product.inStock ? t.products.inStock : t.products.outOfStock}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-gray-800 dark:via-green-800 dark:to-gray-800 text-white py-16 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.products.title}
            </h1>
            <p className="text-xl text-green-100 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              {t.products.subtitle}
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
                placeholder={t.products.searchPlaceholder}
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
                <option value="name">{t.products.sortByName}</option>
                <option value="rating">{t.products.sortByRating}</option>
                <option value="featured">{t.products.sortByFeatured}</option>
              </select>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="w-4 h-4 text-green-600 rounded focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors">{t.products.featuredOnly}</span>
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
                {t.products.categories}
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
                {categories.find(c => c.id === selectedCategory)?.name || 'جميع المنتجات'}
              </h2>
              <span className="text-gray-600 dark:text-gray-400 transition-colors">
                {filteredProducts.length} {t.products.productCount}
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  {t.products.noProductsFound}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  {t.products.tryDifferentSearch}
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