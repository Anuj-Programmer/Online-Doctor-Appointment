
 
import React from "react";
import Nav from "../Components/Nav.jsx"
import styles from"../Styles/AboutPage.module.css";
import Footer from "../Components/Footer.jsx";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Nav/>

      <div className={styles.heroSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b08cdf6700e1fd3bfda14a9848ef67ed7bcb0aca"
          alt=""
          className={styles.heroBgLeft}
        />
        <div className={styles.heroTitle}>About Us</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6e6788e0e2f9bd884c7f51344f95f41687f965"
          alt=""
          className={styles.heroBgRight}
        />
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.imageColumn}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e50a34ca329528e102bd89e05c8b42077768f0"
              alt="About"
              className={styles.aboutImage}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c902b67dbc6bba551a252ca1486e725013884096"
              alt="About"
              className={styles.aboutImage}
            />
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.experienceBox}>
              <span>Trusted and</span>
              <br />
              <span>Experienced</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47f9f7db5bdb866b20006f92a3d6e4c33f831cd5"
              alt="About"
              className={styles.aboutImage}
            />
          </div>

          <div className={styles.textColumn}>
            <div className={styles.sectionLabel}>About Our Company</div>
            <div className={styles.sectionTitle}>
              <span>We Are Always Ensure Best Medical</span>
              <br />
              <span>Treatment For Your Health</span>
            </div>
            <div className={styles.sectionText}>
              At Curely, we understand the importance of accessible and
              convenient healthcare. Our mission is to simplify the process of
              finding and booking appointments with qualified healthcare
              professionals, ensuring that you receive the care you need when
              you need it.
            </div>
            <div className={styles.sectionText}>
              We envision a world where healthcare is easily accessible to
              everyone. Whether you're seeking routine check-ups, specialized
              consultations, or emergency care, we strive to connect you with
              the right medical professionals effortlessly.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whyChooseSection}>
        <div className={`${styles.sectionTitle} text-center`}>Why Choose Us</div>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
              <img 
                src="https://i.imgur.com/fOKLKVh.png" 
                className={styles.featureImg} // Use styles from CSS module
                alt="Icon"
              />
            </div>
            <div className={styles.featureTitle}>
              Qualified Staff of Doctors
            </div>
            <div className={styles.featureText}>
              Our platform exclusively partners with highly qualified doctors
              who bring expertise &amp; commitment to delivering top-notch
              healthcare.
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img src="https://i.imgur.com/ElHSHkQ.png" className={styles.featureImg} // Use styles from CSS module
                alt="Icon"/>
            </div>
            <div className={styles.featureTitle}>24 Hours Service</div>
            <div className={styles.featureText}>
              Experience the healthcare access with our 24/7 service. Whether
              it's day or night, you can find &amp; book appointments.
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img src="https://i.imgur.com/WFUQC9r.png" className={styles.featureImg} // Use styles from CSS module
                alt="Icon"/>
            </div>
            <div className={styles.featureTitle}>Patient-Centered Approach</div>
            <div className={styles.featureText}>
              We prioritize your comfort and preferences, tailoring our services
              to meet your individual needs and Care from Our Experts
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img src="https://i.imgur.com/WFUQC9r.png"className={styles.featureImg} // Use styles from CSS module
                alt="Icon"/>
            </div>
            <div className={styles.featureTitle}>Follow-Up Care</div>
            <div className={styles.featureText}>
              We ensure continuity of care through regular follow-ups and
              communication, helping you stay on track with health goals.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.testimonialSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/815a58cb05839b25d2b71d914bedb8f0b84b69bd"
          alt=""
          className={styles.testimonialBgLeft}
        />
        <div className={styles.testimonialContent}>
          <div className={styles.testimonialProfile}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9fe380e7c5d8b2b5648029060277d496d8d0cb1"
              alt="John Doe"
              className={styles.testimonialImage}
            />
            <div className={styles.testimonialName}>Ankit Tamrakar</div>
            <div className={styles.testimonialLocation}>Kathmandu</div>
          </div>
          <div className={styles.testimonialText}>
            <div className={styles.sectionLabel}>Testimonials</div>
            <div className={styles.sectionTitle}>What Our Client Says</div>
            <div className={styles.sectionText}>
              Curely exceeded my expectations in healthcare. The seamless
              booking process, coupled with the expertise of the doctors, made
              my experience exceptional. Their commitment to quality care and
              convenience truly sets them apart. I highly recommend Curely for
              anyone seeking reliable and accessible healthcare services.
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3240da11791bf606195f2cffdf5be87701f9b1a0"
          alt=""
          className={styles.testimonialBgRight}
        />
      </div>

      <Footer/>
    </div>
  );
};

export default AboutPage;
