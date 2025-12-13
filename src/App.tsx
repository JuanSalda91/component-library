import { useState } from 'react'
import type { User, Product } from './components/types/index.ts'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { AlertBox } from './components/AlertBox/AlertBox'
import './App.css'

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // -- Sample Data --- //
  const currentUser: User = {
    id: '',
    name: '',
    email: '',
    role: '',
    avatarUrl: '',
  };

  return (
  <div>
  </div>
  )
}

export default App
