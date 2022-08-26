import '@styles/reset.scss';
import '@styles/App.scss';
import Products from '@/components/Products';
import Cart from '@/components/Cart';

function App() {
  return (
    <main>
      <section>
        <h2>Shopping Cart</h2>
        <hr />
        <Products />
      </section>
      <section className='order'>
        <h2>Order Summary</h2>
        <hr />
        <Cart />
      </section>
    </main>
  );
}

export default App;
