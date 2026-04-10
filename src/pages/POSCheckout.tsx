import { useState, useEffect } from 'react';

interface Product {
  _id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  imageUrl?: string;
  stock: number;
  pinned: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const CATEGORIES = ['All Items', 'Smartphones', 'Accessories', 'Wearables', 'Tablets'];

export function POSCheckout() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [activeCategory]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const url = activeCategory === 'All Items'
        ? 'http://localhost:5000/api/products'
        : `http://localhost:5000/api/products?category=${activeCategory}`;

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        if (existing.quantity >= product.stock) return prev; // check stock
        return prev.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item._id === id) {
        const newQty = item.quantity + delta;
        if (newQty > item.stock || newQty < 1) return item;
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item._id !== id));
  };

  const handleCheckout = async (paymentMethod: string) => {
    if (cart.length === 0) return;

    try {
      const token = localStorage.getItem('terminal_token');
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cart.map(i => ({ productId: i._id, quantity: i.quantity })),
          paymentMethod
        })
      });

      if (response.ok) {
        setCart([]);
        fetchProducts(); // Refresh stock
        alert('Order completed successfully!');
      } else {
        const err = await response.json();
        alert(`Checkout failed: ${err.message}`);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error connecting to server.');
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="p-4 flex gap-4 h-full">
      {/* Left Side: Product Grid */}
      <div className="flex-[3] flex flex-col gap-4 overflow-hidden">
        {/* Categories Bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Grid */}
        {isLoading ? (
          <div className="flex-1 flex justify-center items-center text-slate-400">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
            {products.map(product => (
              <div key={product._id} className="group relative bg-surface-container-lowest border border-slate-100 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
                {product.pinned && (
                  <span className="absolute top-2 right-2 material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
                )}
                <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center text-slate-300">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                  ) : (
                    <span className="material-symbols-outlined text-4xl">inventory_2</span>
                  )}
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface line-clamp-1">{product.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">SKU: {product.sku}</p>
                  <p className="text-[10px] text-secondary font-medium">Stock: {product.stock}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm font-black text-sky-900">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className="p-1.5 bg-primary text-white rounded-lg transition-transform active:scale-90 disabled:opacity-50 disabled:active:scale-100"
                  >
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Side: Order Summary & Cart */}
      <div className="flex-[1.5] flex flex-col gap-4 bg-surface-container-lowest border-l border-slate-100 p-4 shadow-2xl relative">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-black text-sky-900 uppercase tracking-tight">Active Cart</h2>
          <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full font-bold text-slate-500">
            {cart.reduce((sum, item) => sum + item.quantity, 0)} ITEMS
          </span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex items-center justify-center text-slate-400 text-xs font-medium">
              Cart is empty
            </div>
          ) : (
            cart.map(item => (
              <div key={item._id} className="group flex flex-col gap-2 p-3 bg-surface-container-low rounded-xl relative">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center text-slate-300">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined">inventory_2</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-sky-900 truncate">{item.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono">SKU: {item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center bg-white rounded-lg border border-slate-200">
                    <button onClick={() => updateQuantity(item._id, -1)} className="px-2 py-1 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xs">remove</span>
                    </button>
                    <span className="px-2 text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, 1)} disabled={item.quantity >= item.stock} className="px-2 py-1 text-slate-400 hover:text-primary transition-colors disabled:opacity-50">
                      <span className="material-symbols-outlined text-xs">add</span>
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="flex items-center gap-1 px-2 py-1 text-error text-[10px] font-bold uppercase hover:bg-error-container/20 rounded-md transition-colors">
                    <span className="material-symbols-outlined text-xs">delete</span>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary & Payment */}
        <div className="mt-auto border-t border-slate-100 pt-4 space-y-4">
          <div className="space-y-1 px-2">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-black text-sky-900 pt-2 border-t border-slate-100 mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => handleCheckout('Cash')} disabled={cart.length === 0} className="flex flex-col items-center gap-2 p-3 bg-surface-container-high rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-[10px] font-black uppercase">Cash</span>
            </button>
            <button onClick={() => handleCheckout('Card')} disabled={cart.length === 0} className="flex flex-col items-center gap-2 p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="material-symbols-outlined">credit_card</span>
              <span className="text-[10px] font-black uppercase">Card</span>
            </button>
            <button onClick={() => handleCheckout('BNPL')} disabled={cart.length === 0} className="flex flex-col items-center gap-2 p-3 bg-surface-container-high rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="material-symbols-outlined">account_balance</span>
              <span className="text-[10px] font-black uppercase">BNPL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
