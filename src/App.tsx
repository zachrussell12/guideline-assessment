import './App.css';
import ProductCard from './components/ProductCard';

const sample_data = {
  name: "Shampoo Bottle",
  desc: "Try out the latest line of Shampoo from our fake company now in over 5 different fake scents.",
  price: 35.00,
  imageURL: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg'
}

function App() {
  return (
    <div className='cards-container'>
      <ProductCard name={sample_data.name} desc={sample_data.desc} price={sample_data.price} imageURL={sample_data.imageURL}/>
    </div>
  );
}

export default App;
