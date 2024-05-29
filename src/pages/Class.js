import React from "react";
import TaskPart from "../components/classComponents/TaskPart";
import { useState } from "react";
import axios from "axios";

const Class = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const ids = [
    "6655bfa88a88ff8116e18a59",
    "6655c03a8a88ff8116e18a5a",
    "6655c07a8a88ff8116e18a5b",
    "6655c0ac8a88ff8116e18a5c",
    "6655c0df8a88ff8116e18a5d",
    "6655c1188a88ff8116e18a5e",
    "6655c16c8a88ff8116e18a5f",
    "6655c19e8a88ff8116e18a60",
    "6655c1f28a88ff8116e18a61",
    "6655c2328a88ff8116e18a62",
    "6655c5af8a88ff8116e18a67",
    "6655c6798a88ff8116e18a68",
    "6655c7338a88ff8116e18a69",
    "6655c7608a88ff8116e18a6a",
    "6655c7b78a88ff8116e18a6c",
    "6655c7ff8a88ff8116e18a6d",
    "6655c82b8a88ff8116e18a6e",
    "6655c85e8a88ff8116e18a6f",
    "6655c88d8a88ff8116e18a70",
    "6655c8c28a88ff8116e18a71",
    "6655c8e48a88ff8116e18a72",
    "6655c92f8a88ff8116e18a73",
    "6655c96e8a88ff8116e18a74",
    "6655c9aa8a88ff8116e18a75",
    "6655c9e18a88ff8116e18a76",
    "6655ca0a8a88ff8116e18a77",
    "6655ca3c8a88ff8116e18a78",
    "6655ca6f8a88ff8116e18a79",
    "6655cc5d8a88ff8116e18a7a",
    "6655cc918a88ff8116e18a7b",
    "6655ccc68a88ff8116e18a7c",
    "6655ccef8a88ff8116e18a7d",
    "6655cd198a88ff8116e18a7e",
    "6655cd4a8a88ff8116e18a7f",
    "6655cd838a88ff8116e18a80",
    "6655cdb68a88ff8116e18a82",
    "6655cdf38a88ff8116e18a83",
    "6655ce268a88ff8116e18a84",
    "6655ce5d8a88ff8116e18a85",
    "6655cea28a88ff8116e18a86",
    "6655cece8a88ff8116e18a87",
    "6655cf1a8a88ff8116e18a88"
  ]
  function handle1(index) {
    console.log(index)
    setClick(true);
    axios
      .get(`http://localhost:8800/api/class/6655cece8a88ff8116e18a87`)
      .then((response) => {
        //   console.log(response.data);
        setData(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }
  console.log(data);
  const roadmapData = [
    { number: 1, stepPath: "right" },
    { number: 2, stepPath: "right" },
    { number: 3, stepPath: "right" },
    { number: 4, stepPath: "right" },
    { number: 5, stepPath: "bottom" },
    { number: 10, stepPath: "bottom" },
    { number: 9, stepPath: "left" },
    { number: 8, stepPath: "left" },
    { number: 7, stepPath: "left" },
    { number: 6, stepPath: "left" },
    { number: 11, stepPath: "right" },
    { number: 12, stepPath: "right" },
    { number: 13, stepPath: "right" },
    { number: 14, stepPath: "right" },
    { number: 15, stepPath: "bottom" },
    { number: 20, stepPath: "bottom" },
    { number: 19, stepPath: "left" },
    { number: 18, stepPath: "left" },
    { number: 17, stepPath: "left" },
    { number: 16, stepPath: "left" },
    { number: 21, stepPath: "right" },
    { number: 22, stepPath: "right" },
    { number: 23, stepPath: "right" },
    { number: 24, stepPath: "right" },
    { number: 25, stepPath: "bottom" },
    { number: 30, stepPath: "bottom" },
    { number: 29, stepPath: "left" },
    { number: 28, stepPath: "left" },
    { number: 27, stepPath: "left" },
    { number: 26, stepPath: "left" },
    { number: 31, stepPath: "right" },
    { number: 32, stepPath: "right" },
    { number: 33, stepPath: "right" },
    { number: 34, stepPath: "right" },
    { number: 35, stepPath: "bottom" },
    { number: 40, stepPath: "bottom" },
    { number: 39, stepPath: "left" },
    { number: 38, stepPath: "left" },
    { number: 37, stepPath: "left" },
    { number: 36, stepPath: "left" },
    { number: 41, stepPath: "right" },
    { number: 42, stepPath: null },
  ];

  const RoadmapIconContainer = ({ number, stepPath }) => (
    <div className="roadmap_icon_container RICompleted" onClick={handle1}>
      <h6>{number}</h6>
      {stepPath && (
        <div
          className={`step_path_${stepPath}`}
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );

  return (
    <div class="Body_body__box__Y49P-">
      <div class="Body_body__wrapper__6cj6C">
        <div class="Body_body__content__full__1L5Pm">
          <div class="row-container">
            <div class="class-content">
              <div
                class="class-head d-flex px-3"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 class="classhead m-0 text-white">
                  Join the class on time!
                </h3>
                <div></div>
              </div>
              {click ? (
                <TaskPart data={data} />
              ) : (
                <div class="session-container">
                  <div class="session-area">
                    <span style={{ fontSize: 24, fontWeight: 500 }}>
                      No session title available
                    </span>
                    <br />
                    Class schedule is not updated
                    <hr />
                    <div class="preread-head">Contents:</div>
                    <div class="ml-3">
                      <span class="preread" style={{ whiteSpace: "pre-wrap" }}>
                        No content available
                      </span>
                    </div>
                    <div class="preread-head mt-3">Pre-read:</div>
                    <div class="ml-3">
                      <span class="preread" style={{ whiteSpace: "pre-wrap" }}>
                        No preread available
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div class="mb-4"></div>
            </div>
            <div class="sideContainer">
              <div class="roadmap-container justify-self-center">
                <div class="roadmap-area">
                  <div class="progress-head">
                    <span class="progress-header">Sessions Roadmap</span>
                  </div>
                  <div>
                    <div class="sessionsContainer">
                      {roadmapData.map((item, index) => (
                        <RoadmapIconContainer key={index} {...item} />
                      ))}
                      {/* <div
                        class="roadmap_icon_container RICompleted"
                        onClick={handle1}
                      >
                        <h6>42</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="roadmap-container mt-2">
                <div class="roadmap-area">
                  <div class="progress-head d-flex justify-content-between">
                    <span class="progress-header">Additional Sessions</span>
                  </div>
                  <div class="addSessionContainer">
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>System Design Day 2</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        15/10/2023 - Sunday - 2:00 PM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>System Design Day 1</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        14/10/2023 - Saturday - 2:00 PM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        System Design Recordings Day 2
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        Class Schedule Not Updated
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        System Design Recordings Day 1
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        Class Schedule Not Updated
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>DS Day 5</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        25/08/2023 - Friday - 7:30 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>DS Day 4</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        24/08/2023 - Thursday - 7:30 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>DS Day 3</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        23/08/2023 - Wednesday - 7:30 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>DS Day 2</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        22/08/2023 - Tuesday - 7:30 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>DS Day 1</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        21/08/2023 - Monday - 7:30 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>AWS Day 5</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        17/08/2023 - Thursday - 4:30 PM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>AWS Day 4</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        16/08/2023 - Wednesday - 4:30 PM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>AWS Day 3</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        11/08/2023 - Friday - 11:30 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>AWS Day 2</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        10/08/2023 - Thursday - 4:30 PM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>AWS Day 1</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        09/08/2023 - Wednesday - 4:30 PM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>FSD Demo Day 2</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        03/08/2023 - Thursday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>FSD Demo Day 1</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        02/08/2023 - Wednesday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Recap &amp; Doubt Clarification
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        21/07/2023 - Friday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Recap &amp; Doubt Clarification
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        14/07/2023 - Friday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>Redux Day 2</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        13/07/2023 - Thursday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>React Recap</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        07/07/2023 - Friday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>React Day 2 cont</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        23/06/2023 - Friday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Recap &amp; Doubt Clarification
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        13/06/2023 - Tuesday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>JS Recap</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        24/05/2023 - Wednesday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Github Session - 11/05/2023 @8 AM
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        11/05/2023 - Thursday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Codekata Day 5 - 10/05/2023 @8 AM
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        10/05/2023 - Wednesday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Codekata Day 4 - 09/05/2023 @8 AM
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        09/05/2023 - Tuesday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Codekata Day 3 - 08/05/2023 @8 AM
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        08/05/2023 - Monday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Codekata Day 2 - 05/05/2023 @8 AM
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        05/05/2023 - Friday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>
                        Codekata Day 1 - 04/05/2023 @8 AM
                      </h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        04/05/2023 - Thursday - 8:00 AM
                      </p>
                    </div>
                    <div class="addSession">
                      <h5 style={{ fontWeight: 450 }}>Day 0 Demo</h5>
                      <p style={{ fontWeight: 200, margin: 0 }}>
                        Class Schedule Not Updated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="" bis_skin_checked="1"></div>
          <div
            class="modal fade WelcomeModal "
            id="WelcomeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modal-height radius">
                <div class="modal-heading-area px-4 py-2">
                  <div class="d-flex justify-content-between">
                    <span class="modal-heading">Class Link </span>
                    <span class="close m-4" style={{ cursor: "pointer" }}>
                      ×
                    </span>
                  </div>
                </div>
                <div class="row m-4">
                  <div class="col">
                    <div class="row">
                      <div class="col-3">Class Link : </div>
                      <a class="" target="_blank" rel="noreferrer">
                        <div class="col word-wrap"></div>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-3">Passcode : </div>
                      <div class="col"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="" bis_skin_checked="1"></div>
          <div
            class="modal fade WelcomeModal "
            id="WelcomeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modal-height radius">
                <div class="modal-heading-area px-4 py-2">
                  <div class="d-flex justify-content-between">
                    <span class="modal-heading">Recording Link</span>
                    <span class="close m-4" style={{ cursor: "pointer" }}>
                      ×
                    </span>
                  </div>
                </div>
                <div class="row m-4">
                  <div class="col">
                    <div class="row">
                      <div class="col-4">Recording Link : </div>
                      <a class="" target="_blank" rel="noreferrer">
                        <div class="col word-wrap"></div>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-3">Passcode : </div>
                      <div class="col"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="" bis_skin_checked="1"></div>
          <div
            class="modal fade WelcomeModal "
            id="WelcomeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modal-height radius">
                <div class="modal-heading-area px-4 py-2">
                  <div class="d-flex justify-content-between">
                    <span class="modal-heading font-weight-bold"></span>
                  </div>
                </div>
                <div class="modal-body">
                  <br />
                  <p class="font-weight-bold" style={{ fontSize: 18 }}>
                    hh
                  </p>
                  <p
                    class="text-success font-weight-bold"
                    style={{ fontSize: 21 }}
                  >
                    hfh
                  </p>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-success">Got It</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
