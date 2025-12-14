import { useState } from 'react'
import type { User, Product } from './components/types/index.ts'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { AlertBox } from './components/AlertBox/AlertBox'
import './App.css'

function App() {
  // --- 1. Type Inference --- //
  const [showAlert, setShowAlert] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // --- 2. Data Definition --- //
  const currentUser: User = {
    id: '',
    name: '',
    email: '',
    role: '',
    avatarUrl: '',
  };

  const currentProduct: Product = {
    id: 'p1',
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
    inStock: true,
  };

  // --- 3. Event Handlers --- //
  const handleAddToCart = (productId: string) => {
    console.log(`Added Product ${productId} to cart.`);
      // - Logic to add product to cart would go here - //
    setCartCount(prev => prev +1);
    setShowAlert(true);
  };

  // - Hide alert after 3 seconds - //
  setTimeout(() => setShowAlert(false), 3000);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Component Library Lab</h1>
          <div className="bg-white px-4 py-2 rounded shadow text-sm font-medium">
            Cart Items: {cartCount}
          </div>
        </div>

        {/* 4. Composition (children) */}
        {showAlert && (
          <AlertBox
            type="success"
            message="Item added to cart successfully!"
            onClose={() => setShowAlert(false)}
          >
            <span className="italic">Checkout now to get free shipping.</span>
          </AlertBox>
        )}

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 5. Passing Data & Functions */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">User Profile</h2>
            <UserProfileCard
              user={currentUser}
              showEmail={true}
              showRole={true}
              onEdit={(id) => alert(`Edit requested for user ID: ${id}`)}
            >
              <div className="flex gap-2 text-xs">
                 <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
                 <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">JS</span>
              </div>
            </UserProfileCard>
          </section>

          {/* Product Display Usage */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Product Display</h2>
            <ProductDisplay
              product={currentProduct}
              showDescription={true}
              showStockStatus={true}
              onAddToCart={handleAddToCart}
            />
          </section>
        </div>

      </div>
    </div>
  );
}

export default App;
