import './App.css'
import { useState, useEffect } from 'react';
import SortMenu from './components/SortMenu';
import ProductGrid from './components/ProductGrid';

const sorters = {
	price: (a, b) => a.price - b.price,
	review: (a, b) => (a.reviews || 0) - (b.reviews || 0),
	name: (a, b) => a.name.localeCompare(b.name),
	savings: (a, b) => (a.was_price ? a.was_price - a.price : 0) -
		(b.was_price ? b.was_price - b.price : 0),
};

function App() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sortBy, setSortBy] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8000/src/api/products.php')
			.then((response) => response.json())
			.then((data) => setProducts(data.product_arr))
			.catch((error) => console.error('Error fetching products:', error))
			.finally(() => setLoading(false));
	}, []);

	const sortedProducts = sortBy
		? [...products].sort(sorters[sortBy])
		: products;

	return (
		<>
			<main className="container">
				<h1>Office Essentials</h1>
				<SortMenu sortBy={sortBy} onSortChange={setSortBy} />
				{loading ? <p>Loading products...</p> : <ProductGrid products={sortedProducts} />}
			</main>
		</>
	)
}

export default App
