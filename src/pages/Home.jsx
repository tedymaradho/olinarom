import Blog from '../components/Blog';
import Feature from '../components/Feature';
import Header from '../components/Header';
import Product from '../components/Product';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Feature />
      <Product />
      <Blog />
    </div>
  );
};
export default Home;
