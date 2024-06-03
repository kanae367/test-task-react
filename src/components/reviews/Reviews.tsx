import './reviews.scss';

function Reviews(){
    return(
        <section className='reviews'>
            <h2 className='reviews__title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <div className='reviews__container'>
                <div className='reviews__item'>
                    <img className='reviews__item-image' src="/reviews/photo.png" alt="Фото автора" />
                    <div className='reviews__item-content'>
                        <p className='reviews__item-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
 animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi
 expedita, provident excepturi officia!
 Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
                        <span className='reviews__item-author'>Jana Doe</span>
                    </div>
                </div>
                
                <div className='reviews__item'>
                    <img className='reviews__item-image' src="/reviews/photo.png" alt="Фото автора" />
                    <div className='reviews__item-content'>
                        <p className='reviews__item-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
 animi  autem aliquid</p>
                        <span className='reviews__item-author'>Jana Doe</span>
                    </div>
                </div>

                <div className='reviews__item'>
                    <img className='reviews__item-image' src="/reviews/photo.png" alt="Фото автора" />
                    <div className='reviews__item-content'>
                        <p className='reviews__item-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
 animi  autem aliquid</p>
                        <span className='reviews__item-author'>Jana Doe</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;