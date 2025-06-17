import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className='cards-container'>
      <ProductCard name={"Test"} desc={"Test desc"} price={40.00} imageURL={'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg'}/>
    </div>
  );
}

export default App;
