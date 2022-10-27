import React from "react";
import {
  RecentHeader,
  RecentData,
  RecentStats,
  RecentDataHeader,
} from "../Components/LeftBarComponents";

export default function RecentSection() {
  return (
    <RecentStats>
      <RecentHeader>Recent</RecentHeader>
      <RecentData>
        <RecentDataHeader>
            Messages
        </RecentDataHeader>
        <ul>
          <li>
            <div>John Doe</div>
            <div>Hi dude, what's going on?</div>
          </li>
          <li>
            <div>Alex Alexander</div>
            <div>What are you doing today?</div>
          </li>
          <li>
            <div>Charles Dickens</div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus tenetur ea, voluptas nihil, at, assumenda similique
              debitis voluptatum optio quisquam atque! Illum repudiandae natus
              totam ea sint accusamus placeat laudantium!
            </div>
          </li>
        </ul>
      </RecentData>
      <RecentData>
        <RecentDataHeader>
            Replies
        </RecentDataHeader>
        <ul>
            <li>
                <div>Malvin</div>
                <div>Nice photo really liked it</div>
            </li>
            <li>
                <div>Jeffry</div>
                <div>Liked it! when it was?</div>
            </li>
            <li>
                <div>Ron A.</div>
                <div>Amazing picture such beautiful landscape</div>
            </li>
        </ul>
      </RecentData>
    </RecentStats>
  );
}
