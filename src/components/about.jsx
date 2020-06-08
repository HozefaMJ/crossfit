import React, { Component } from "react";
//import ProfileCard from "../components/common/profileCard";
import "../styles/about.css";
import Navbar from "./common/navbar";
//import Carousel from "./common/carousel";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <Navbar />
        <div className="whatCrossfit">
          <h1>What is CrossFit Juniors</h1>
          <p>
            CrossFit juniorz is a unique fitness program designed for
            preschoolers and school kids. It molds simple excercises in such a
            way that makes interesting and fun to learn without being noticed by
            kids how much they have put in. Its not just fitness its a overall
            developement program mixture of functional excercises, mental
            excercises and martial art.
          </p>
        </div>
        <div className="fromFounder">
          <h1>From Our Founder</h1>
          <p>
            Being a professional boxer I understand the importance of explosive
            power and longer endurance, and CrossFit is the thing which suffices
            both needs in a shorter period of time rather than putting hours of
            endurance and weight training. For young kids, it creates physical
            structure in such a way that they can pursue any sport which
            requires physical strength and endurance.
          </p>
        </div>
        <div className="FounderAchievements">
          <h1>Founder's Achievements</h1>
          <p>
            <ol>
              <li>• National level Boxer</li>
              <li>• National level kickboxing Gold medalist</li>
              <li>• All india inter university National quarter finalist</li>
              <li>• All india national participant</li>
              <li>• Maharashtra state kickboxing champion</li>
              <li>• Maharashtra state gold medalist Boxing</li>
              <li>• Maharashtra state silver medalist Boxing</li>
              <li>• Mumbai university Gold medalist 2 times Boxing</li>
              <li>• MIT ADT State university Boxing championship Gold.</li>
              <li>• Mumbai university silver and bronze Boxing</li>
              <li>• Mumbai Mayor's cup kick boxing Gold </li>
              <li>• Thane district undefeated all time gold boxing.</li>
            </ol>
          </p>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <p>
            <ol>
              <li>• 6 years of personal and group training.</li>
              <li>• Yeda fitness founder 2018</li>
              <li>
                • Kickboxing club owner in sri ma school thane from 2018 till
                date
              </li>
              <li>• Fitness trainer in Wadhwa (Ghatkopar)</li>
              <li>• Boxing guide in Decathlon 2018</li>
              <li>
                • Talwalkars gym and pro fitness as personal and kickboxing
                trainer.2015
              </li>
              <li>• Fitness trainer in Mahavir universe society 2015</li>
              <li>• Boxing trainer in RJ college from 2014</li>
              <li>• MMA Trainer Somaiya college 2015</li>
            </ol>
          </p>
        </div>
        <div className="clientServed">
          <h1>Clients Served</h1>
          <p>
            <ol>
              <li>• Gym more than 50</li>
              <li>• Personal 16</li>
              <li>• Kids more than 50</li>
              <li>• In group sessions more than 60 M/F</li>
            </ol>
          </p>
        </div>
        <div className="currentlyWorking">
          <h1>Currently Working</h1>
          <p>
            <ol>
              <li>• Cross fit juniorz operations</li>
              <li>• Fitness guide Decathlon</li>
              <li>• Fitness trainer in Wadhwa society</li>
              <li>• Personal trainer</li>
              <li>• Yeda fitness operations</li>
              <li>• Kickboxing coach in sri ma school</li>
              <li>
                • Boxing trainer Rj college Certified crossfit coach from
                xtream9 combat
              </li>
              <li>Activities from our club. Strength games</li>
            </ol>
          </p>
        </div>
        {/*
        <div className="coaches">
          <h1>Our Coaches</h1>

          <div className="coachesProfileCard">
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
        */}
        {/*<div className="reviews">
          <h1>What they say about us</h1>
          <div>
            <Carousel />
          </div>
        </div>*/}
      </div>
    );
  }
}

export default About;
