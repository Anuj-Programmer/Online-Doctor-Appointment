"use client";
import React from "react";
import styles from "./Reviews.module.css";

function Reviews() {
  const reviews = [
    {
      id: 1,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/15b88f19f2bb6c5e4091b07a5e56e9ce4964cfe2?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      name: "kadajsalamander",
      rating: 5,
      time: "2 days ago",
      recommended: true,
      content:
        "Thank you for this informative article! I've had a couple of hit-and-miss experiences with freelancers in the past, and I realize now that I wasn't vetting them properly. Your checklist for choosing the right freelancer is going to be my go-to from now on",
    },
    {
      id: 2,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9929e3a545e63f5dfad393d2764fb104ae4c600?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      name: "Dane jose",
      rating: 5,
      time: "1 Months ago",
      recommended: true,
      content:
        "As a freelancer myself, I find this article spot on! It's important for clients to understand what to look for in a freelancer and how to foster a good working relationship. The point about mutual respect and clear communication is key in my experience. Well done",
    },
    {
      id: 3,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/13e7750cff611a56b324f0419a2f7e8ea9b86ce2?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
      name: "Dane jose",
      rating: 5,
      time: "15 days ago",
      recommended: true,
      content:
        "Great article! I've bookmarked it for future reference. I'd love to read more about managing long-term relationships with freelancers, if you have any tips on that.",
      reply: {
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/3cc3b4d46045bac7c98bfe4445ce7d2e139d9018?placeholderIfAbsent=true&apiKey=0c9f87006edd49d39a191498253e568d",
        name: "Robert Hollenbeck",
        content:
          "Thank you for your comment and I will try to make a another post on that topic.",
      },
    },
  ];

  return (
    <section className={styles.reviewsSection}>
      <h3 className={styles.sectionTitle}>Reviews (200)</h3>

      {reviews.map((review) => (
        <div key={review.id} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.reviewerInfo}>
              <div className={styles.avatarContainer}>
                <img
                  src={review.avatar}
                  className={styles.avatar}
                  alt={review.name}
                />
              </div>
              <div className={styles.nameRating}>
                <h4 className={styles.reviewerName}>{review.name}</h4>
                <div className={styles.ratingInfo}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={styles.star}></span>
                    ))}
                  </div>
                  <span className={styles.ratingTime}>
                    {review.rating}.0 | {review.time}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.recommendation}>
              <span className={styles.recommendIcon}></span>
              <span className={styles.recommendText}>
                Yes,Recommend for Appointment
              </span>
            </div>
          </div>

          <p className={styles.reviewContent}>{review.content}</p>

          <div className={styles.replyAction}>
            <span className={styles.replyIcon}></span>
            <span className={styles.replyText}>Reply</span>
          </div>

          {review.reply && (
            <div className={styles.replyContainer}>
              <div className={styles.replyHeader}>
                <div className={styles.replyAvatar}>
                  <img
                    src={review.reply.avatar}
                    className={styles.avatar}
                    alt={review.reply.name}
                  />
                </div>
                <h5 className={styles.replyName}>{review.reply.name}</h5>
              </div>
              <p className={styles.replyContent}>{review.reply.content}</p>
              <div className={styles.replyAction}>
                <span className={styles.replyIcon}></span>
                <span className={styles.replyText}>Reply</span>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className={styles.pagination}>
        <button className={styles.prevButton}>
          <span className={styles.prevIcon}></span>
          <span className={styles.prevText}>Prev</span>
        </button>

        {[1, 2, 3, 4, 5, 6].map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              page === 1 ? styles.activePage : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button className={styles.nextButton}>
          <span className={styles.nextText}>Next</span>
          <span className={styles.nextIcon}></span>
        </button>
      </div>
    </section>
  );
}

export default Reviews;
