import { useEffect, useState } from 'react';
import reviews from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(reviews[index]);
  const { image, name, job, text } = review;
  const maxIndex = reviews.length - 1;

  useEffect(() => {
    setReview(reviews[index]);
  }, [index]);

  function supriseMe() {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  function prevButton() {
    setIndex((index) => {
      const prevIndex = index - 1;
      return prevIndex < 0 ? index : prevIndex;
    });
  }

  function nextButton() {
    setIndex((index) => {
      const nextIndex = index + 1;
      return nextIndex > maxIndex ? index : nextIndex;
    });
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
        </div>
        <h3 className='author'>{name}</h3>
        <h4 className='job'>{job}</h4>
        <p className='info'>{text}</p>
      </article>
      <div>
        <button onClick={prevButton} className='prev-btn'>
          ←
        </button>
        <button onClick={nextButton} className='next-btn'>
          →
        </button>
      </div>
      <button type='button' className='btn' onClick={supriseMe}>
        Suprise me
      </button>
    </main>
  );
};
export default App;
