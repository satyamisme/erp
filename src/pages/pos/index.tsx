import { fetchWithAuth } from "../../lib/api";
import { useState, useEffect } from 'react';

interface Product {
  _id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  imei: string;
}

export function POSCheckout() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<(Product & { qty: number })[]>([]);
  const [category, setCategory] = useState<string>('All Items');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetchWithAuth(`http://localhost:5000/api/products?category=${category}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();

        // Map backend products to the expected POS Product structure
        const mappedProducts = data.map((p: any /* eslint-disable-line */) => ({
          _id: p._id,
          name: p.name,
          sku: p.sku,
          category: p.category,
          price: p.price,
          stock: p.totalStock || p.stockByStore?.reduce((acc: number, curr: any /* eslint-disable-line */) => acc + curr.quantity, 0) || Math.floor(0.5 * 20),
          imei: p.requiresImei ? `35${Math.floor(Math.random() * 1000000000000)}` : 'N/A'
        }));

        setProducts(mappedProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  const addToCart = (product: Product) => {
    if (product.stock <= 0) return alert('Out of stock');
    setCart(prev => {
      const existing = prev.find(p => p._id === product._id);
      if (existing) return prev.map(p => p._id === product._id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(p => p._id === id ? { ...p, qty: p.qty + delta } : p).filter(p => p.qty > 0));
  };

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="h-full flex p-4 gap-4 bg-surface-container-low overflow-hidden">
      {/* Products Grid */}
      <div className="flex-[2.5] bg-surface-container-lowest border border-outline-variant/20 rounded-xl flex flex-col shadow-sm overflow-hidden">
        <div className="p-3 bg-surface-container border-b border-outline-variant/20 flex gap-2 shrink-0">
          <button onClick={() => setCategory('All Items')} className={`px-4 py-1.5 ${category === 'All Items' ? 'bg-primary text-white' : 'bg-surface text-on-surface-variant'} rounded-full text-xs font-bold`}>All Items</button>
          <button onClick={() => setCategory('Smartphones')} className={`px-4 py-1.5 ${category === 'Smartphones' ? 'bg-primary text-white' : 'bg-surface text-on-surface-variant'} rounded-full text-xs font-bold border border-outline-variant/20`}>Smartphones</button>
          <button onClick={() => setCategory('Accessories')} className={`px-4 py-1.5 ${category === 'Accessories' ? 'bg-primary text-white' : 'bg-surface text-on-surface-variant'} rounded-full text-xs font-bold border border-outline-variant/20`}>Accessories</button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
             <div className="col-span-full flex justify-center py-10"><span className="material-symbols-outlined animate-spin">refresh</span></div>
          ) : products.map(p => (
            <div key={p._id} onClick={() => addToCart(p)} className="bg-surface border border-outline-variant/20 p-3 rounded-lg cursor-pointer hover:shadow-md transition-shadow group relative">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-mono text-outline">{p.sku}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded bg-surface-container font-bold ${p.stock < 5 ? 'text-error' : 'text-secondary'}`}>{p.stock}</span>
              </div>
              <p className="text-xs font-bold leading-tight mb-2 h-8">{p.name}</p>
              <p className="text-sm font-black text-primary">${p.price}</p>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl">add_circle</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div className="flex-[1.5] bg-surface-container-lowest border border-outline-variant/20 rounded-xl flex flex-col shadow-sm overflow-hidden">
        <div className="p-4 bg-surface border-b border-outline-variant/20 flex justify-between items-center shrink-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Active Cart</h2>
          <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">{cart.reduce((a,c)=>a+c.qty,0)} ITEMS</span>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-50">
              <span className="material-symbols-outlined text-4xl mb-2">shopping_cart</span>
              <p className="text-sm font-bold">Cart is empty</p>
            </div>
          ) : (
            cart.map(c => (
              <div key={c._id} className="p-2 border border-outline-variant/20 rounded-lg flex items-center bg-surface-container-lowest gap-3 group relative">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate">{c.name}</p>
                  <p className="text-[9px] font-mono text-outline">IMEI: {c.imei}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold">${(c.price * c.qty).toFixed(2)}</p>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    <button className="w-5 h-5 bg-surface-container rounded text-outline hover:text-primary flex items-center justify-center" onClick={() => updateQty(c._id, -1)}>-</button>
                    <span className="text-[10px] font-bold w-4 text-center">{c.qty}</span>
                    <button className="w-5 h-5 bg-surface-container rounded text-outline hover:text-primary flex items-center justify-center" onClick={() => updateQty(c._id, 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => updateQty(c._id, -99)} className="absolute -top-2 -right-2 w-5 h-5 bg-error text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[12px]">close</span></button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 bg-surface-container border-t border-outline-variant/20 shrink-0 space-y-3">
          <div className="flex justify-between text-xs text-outline font-bold"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-xs text-outline font-bold"><span>Tax (5%)</span><span>${tax.toFixed(2)}</span></div>
          <div className="flex justify-between text-lg font-black text-primary pt-2 border-t border-outline-variant/20"><span>Total</span><span>${total.toFixed(2)}</span></div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="py-3 bg-surface-container-highest text-on-surface-variant font-bold text-xs rounded hover:bg-outline-variant transition-colors">HOLD</button>
            <button className="py-3 bg-primary text-white font-bold text-xs rounded hover:bg-primary-container shadow-md transition-colors" onClick={() => { if(cart.length) { alert('Checkout Complete!'); setCart([]); } }}>PAY</button>
          </div>
        </div>
      </div>
    </div>
  );
}
