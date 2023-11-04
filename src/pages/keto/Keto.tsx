import styles from './Keto.module.scss';
import Title from '../../components/title/Title';
import ketoData from '../../data/ketoData';
import ItemCard from '../../components/itemCard/ItemCard';

const keto = () => {
	const items = ketoData;

	return (
		<section>
			<Title label={"keto products"} />
			{/* Container for Keto products */}
			<div className={styles.ketoContainer}>
				{/* Map through the items and render ItemCard component */}
				{items?.map((item, i) => {
					return (
						<div className={styles.itemList} key={item.id}>
							<ItemCard item={item} />
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default keto;