export default function ProductCard({ product }) {
	const imgUrl = new URL(`../assets/images/${product.img}.jpg`, import.meta.url).href;

	return (
		<div className="product-card">
			<img src={imgUrl} alt={product.name} className="product-image" />
			<div>
				<h3>{product.name}</h3>
				<p>£{product.price.toFixed(2)/100}</p>
				<p className="price-was">
					{product.was_price ? (
						<>
							Was £<span>
								{product.was_price.toFixed(2)/100}
							</span>
						</>
					) : (
						"\u00A0"
					)}
				</p>
				<p className="product-reviews">{product.reviews ? `${product.reviews}% Review Score` : "\u00A0"}</p>
				<button>Add To Basket</button>
			</div>
		</div>
	)
}