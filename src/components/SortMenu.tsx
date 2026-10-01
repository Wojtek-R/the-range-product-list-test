export default function SortMenu({ sortBy, onSortChange }) {
	return (
		<section className="grid-container sort-menu">
			<button className={sortBy === 'price' ? 'active' : ''} onClick={() => onSortChange('price')}>Sort By Price</button>
			<button className={sortBy === 'review' ? 'active' : ''} onClick={() => onSortChange('review')}>Sort By Review</button>
			<button className={sortBy === 'name' ? 'active' : ''} onClick={() => onSortChange('name')}>Sort By Name</button>
			<button className={sortBy === 'savings' ? 'active' : ''} onClick={() => onSortChange('savings')}>Sort By Savings</button>
		</section>
	)
}