import './HomeCarousel.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

const HomeCarousel = () => {
	// Custom hook for handling scroll animation
	const { ref: homeCarouselRef, playAnimation: isHomeCarouselVisible } = useScrollAnimation();

	// Swiper.js for home page carousel
	return (
		<section className={`homeCarousel ${isHomeCarouselVisible ? 'homeCarouselAnimation' : ''}`} ref={homeCarouselRef}>
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide><img className='carouselImage' src={require('../../assets/homeCarouselImg/homeCarousel_1.webp')} alt='Image 1' /></SwiperSlide>
				<SwiperSlide><img className='carouselImage' src={require('../../assets/homeCarouselImg/homeCarousel_2.webp')} alt='Image 2' /></SwiperSlide>
				<SwiperSlide><img className='carouselImage' src={require('../../assets/homeCarouselImg/homeCarousel_3.webp')} alt='Image 3' /></SwiperSlide>
				<SwiperSlide><img className='carouselImage' src={require('../../assets/homeCarouselImg/homeCarousel_4.webp')} alt='Image 4' /></SwiperSlide>
			</Swiper>
		</section >
	)
}

export default HomeCarousel;