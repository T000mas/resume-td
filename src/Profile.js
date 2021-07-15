import React from "react";

export default function Profile() {
  return (
    <div className="container">
      <div className="title">Profile</div>
      <div className="aboutMe">
        <div className="headline">About me</div>
        <p>
          I am fourth-year student of Wrocław University of Science and
          Technology, specialization Applied Computer Science. I'm beginning my
          web development journey and I aim to become senior front-end
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
        I also have many different skills. I have driving license B category
        that is not so amazing but I also have license of a motorboat helmsman
        and I finished windsurfing instructor course and recieved instructor
        certificate. During winter I like to ski and snowboard. I started skiing
        when I was little and later as I became older i tried snowboarding and
        also learned it quiet well. During summer I usually go windsurfing
      </p>
    </div>
  );
}
