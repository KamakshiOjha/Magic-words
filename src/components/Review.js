import React, { useState } from 'react';

function ReviewBlock() {
  const [customerName, setCustomerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      name: customerName,
      text: reviewText,
      rating: rating,
    };
    setReviews([...reviews, newReview]);
    setCustomerName('');
    setReviewText('');
    setRating(0);
  };

  return (
    <div className="review-block">
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="rating">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
              </div>
              <p>{review.text}</p>
              <p>By: {review.name}</p>
            </li>
          ))}
        </ul>
      )}
      <h3>Add Your Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerName">Your Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={handleCustomerNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reviewText">Review:</label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={handleReviewTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" value={rating} onChange={handleRatingChange} required>
            <option value="0">Select rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewBlock;
