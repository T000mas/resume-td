import React from "react";

export default function Profile() {
  return (
    <div className="container profile">
      <div className="title">Profile</div>
      <div className="aboutMe">
        <div className="headline">About me</div>
        <p>
          I am a fourth-year student of Wrocław University of Science and
          Technology, specialization Applied Computer Science. I'm beginning my
          web development journey and I aim to become a senior front-end
          developer. I love creating websites and solving new problems. I learn
          fast and I am always open to constructive criticism.
        </p>
      </div>

      <div className="details">
        <div className="headline">Details</div>
        <p className="bold">Name:</p>
        <p>Tomasz Dominiczak</p>
        <p className="bold">Age:</p>
        <p>23</p>
        <p className="bold">E-mail</p>
        <a href="mailto:tomek.dominiczak@gmail.com">
          tomek.dominiczak@gmail.com
        </a>
      </div>
      <p>
        I also have many different skills. I have a driving license B category
        that is not so amazing but I also have a license of a motorboat helmsman
        and I finished a windsurfing instructor course and recieved the
        instructor certificate. Also since I was 7 years old I play the piano
        and I think I'm not so bad at it (see here (IN PROGRESS)) During winter
        I like to ski and snowboard. I started skiing when I was little and
        later as I became older i tried snowboarding and also learned it quiet
        well. During summer I prefer the seaside. I usually do some water sports
        or some activities connected with water.
      </p>
    </div>
  );
}
