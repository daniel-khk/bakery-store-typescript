import styles from './HomeGrid.module.scss';
import ketoData from '../../data/ketoData';
import Title from '../../components/title/Title';
import HomeGridCard from './HomeGridCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const HomeGrid = () => {
	// Define the IDs of items to display and sort them accordingly
	const sortedItemIdsToDisplay = [10, 8, 15, 13, 1, 14, 11]
	const items = ketoData.filter(item => sortedItemIdsToDisplay.includes(item.id));

	// Custom hook for handling scroll animation
	const { ref: homeGridTitleRef, playAnimation: isHomeGridTitleVisible } = useScrollAnimation();

	return (
		<section>
			{/* Title with scroll animation */}
			<div className={`${styles.homeGridTitle} ${isHomeGridTitleVisible ? styles.homeGridTitleAnimation : ''}`} ref={homeGridTitleRef}>
				<Title label={"best sellers"} />
			</div>

			{/* Container for the grid of Best Sellers */}
			<div className={styles.homeGridContainer}>
				{items?.map((item, i) => {
					return (
						<HomeGridCard item={item} key={item.id} />
					)
				})}
			</div>
		</section>
	)
}

export default HomeGrid;