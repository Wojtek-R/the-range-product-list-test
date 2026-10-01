import ProductCard from './ProductCard';

export default function ProductGrid({ products }){

	return (
		<section className="grid-container">
			{products.map((product) => (
				<ProductCard key={product.img} product={product} />
			))}
		</section>
	)
}