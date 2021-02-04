import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

import CommentDetails from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:50PM"
          comment="Bad Blog content bro ! dislike"
          profilePic={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Today at 2:00AM"
          comment="Nice Post man :) "
          profilePic={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Jani"
          timeAgo="Today at 6:00PM"
          comment="I think I should also start blogging, thanks for inspiration!"
          profilePic={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
