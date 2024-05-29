import React from "react";

const TaskPart = (props) => {
  return (
    <div>
      <div class="session-area">
        <span
          const
          style={{
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          {props.data.title}
        </span>
        <br />
        {props.data.date_and_time}
        <hr />
        <div class="preread-head">Contents:</div>
        <div class="ml-3">
          <span class="preread" style={{ "white-space": "pre-wrap" }}>
            {props.data.content}
          </span>
        </div>
        <div class="preread-head mt-3">Pre-read:</div>
        <div class="ml-3">
          <span class="preread" style={{ "white-space": "pre-wrap" }}>
            {props.data.pre_read}
          </span>
        </div>
      </div>
      <div class="activity ml-1 mt-3 mb-2">Activities</div>
      <div class="mb-4">
        <div class="session-container">
          <div class="session-area">
            <div class="accordion">
              <div class="d-flex justify-content-between">
                <div style={{ "font-weight": "500", "font-size": "1rem" }}>
                  https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/preview
                </div>
                <div>
                  <div class="row d-flex justify-content-between flex-nowrap mr-2">
                    <div class="task">Task</div>
                    <div class="ml-4 mt-1" type="button">
                      <div color="" class="sc-beqWaB ehMBSb">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          class="injected-svg"
                          data-src="/Icons/downArrow.svg"
                          // xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <path
                            d="M2 2L8 8L14 2"
                            stroke="#93A4B7"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse">
                <div class="card-body" style={{ "padding-bottom": "0px" }}>
                  <div class="tagsList">
                    <div class="tagTitle">Tags:</div>
                    <div class="tagItem">html</div>
                  </div>
                  <div class="p-0">
                    <form autocomplete="off">
                      <div class="task-area" style={{ padding: "16px" }}>
                        <div class="submission">
                          <div class="">
                            <div class="form-group mt-2">
                              <label
                                for="6451f72c969c730074f26685_sourceCodeFrontEnd"
                                class="label-style mb-0"
                              >
                                Front-end Source code
                              </label>
                              <div>
                                <input
                                  class="formInputs"
                                  name="6451f72c969c730074f26685_sourceCodeFrontEnd"
                                  placeholder="Enter Front-end Source code link"
                                  type="text"
                                  value="https://docs.google.com/document/d/1AsPxp8wH3nbA-b8hKD3vvjFEwtpAUNGPF88DzwE9qIE/edit"
                                />
                              </div>
                            </div>
                          </div>
                          <label for="comments" class="label-style mb-0">
                            Comments
                          </label>
                          <div>
                            <input
                              class="formInputs"
                              name="comments"
                              placeholder="leave your comments here"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn submit-btn mb-3" type="submit" disabled="">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPart;
