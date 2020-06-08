import React, { Component } from "react";
//import smallGirl from "../img/kettle-bg.jpg";
import "../../src/styles/home.css";
import Navbar from "./common/navbar";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="landing small-girl">
          <div className="tagline">
            <h3>Todays</h3>
            <h2>Training is</h2>
            <h2>Tomorrows</h2>
            <h1>Gold...</h1>
          </div>
          {/* <img className="small-girl" src={smallGirl} alt="" /> */}
        </div>
        <div className="mission">
          <h1>Our Mission:</h1>
          <p>
            Cross fit juniorz is founded with a mission to give budding kids a
            healthier and fitter lifestyle and prepare them for future course in
            mental and physical developement.
          </p>
        </div>
        <div className="vision">
          <h1>Our Vision:</h1>
          <p>
            Its shares the same vision as the initiative of Indian government
            like Fit india movement, hum fit toh india fit, khelo india games.
          </p>
        </div>
        <div className="Inspiration">
          <h1>Inspiration</h1>
          <p>
            We draw our inspiration from fit india movement, Hon’ble Prime
            Minister of India has launched the Fit India Movement on 29 Aug 2019
            with a view to make Physical Fitness a way of life. Fit India
            Movement aims at behavioural changes – from sedentary lifestyle to
            physically active way of day-to-day living. Fit India would be a
            success only when it becomes a people’s movement. We have to play
            the role of a catalyst. ‘How to Live’ ought to be the first pillar
            of formal education. This involves teaching and practicing the art
            of taking care of one’s body and health daily. Schools have to be
            the first formal institution after home where physical fitness is
            taught and practiced. In the above background, the Fit India Mission
            encourages Schools to Organize a Fit India School Week in month of
            November/December. It has also prepared a set of Fit India School
            Certification with simple and easy parameters.
          </p>
        </div>
        <div className="howDifferent">
          <h1>How are we different</h1>
          <p>
            For thousands of people across the country, going to a regular gym
            just doesn't cut it. Instead, they prefer CrossFit routines: like
            swinging kettlebells, flipping tires, and doing squats and dead
            lifts until they drop. Now kids as young as 4 are taking part in
            such activities because it is complex and provides a wide variety of
            excercises crossfit juniorz stays on these parameters but
            differently by making it more fun and enjoyable by combination which
            is more than just crossfit.
          </p>
        </div>
        <div className="IdeaCrossfit">
          <h1>Idea behind crossfit juniors</h1>
          <p>
            As a parent, you want to encourage your child to be fit, healthy and
            active, however there are so many types of sports and activities
            your child could take part in – so how do you know which will
            benefit the most? CrossFit gives the platform for all the needs and
            comes up with number of benefits such as:
          </p>
          <ol>
            <li>1. Foundation for sports.</li>
            <li>2. Improved athleticism</li>
            <li>3. Discipline</li>
            <li>4. Increased knowledge of healthy habits</li>
            <li>5. Boost to social skills</li>
            <li>6. Improved school performance</li>
            <li>7. Improved confidence</li>
          </ol>
        </div>
        <div className="csr">
          <h1>CSR</h1>
          <p>
            As a social responsibility crossfit juniorz had taken an initiative
            to educate children and parents about the importance of crossfit
            through our website and social media pages.
          </p>
          <ol>
            <li>
              -Conducted quarantine camps during lockdown period through online
              coaching, Free for all kids between the age of 6-14.
            </li>
            <li>
              -Many self defense workshop has been conducted under our associate
              clubs and all around mumbai and Thane.
            </li>
            <li>
              -Free coaching in our associate clubs for under privileged kids.
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
