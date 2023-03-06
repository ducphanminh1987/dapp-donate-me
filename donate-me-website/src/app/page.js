import React, { memo } from "react";
import "./index.css";
// import Metamask from "./components/Metamask";
import Header from "./components/Header";
import SendDonate from "./components/SendDonate";
import Memos from "./components/Memos";

const memos = [
  {
    name: "Carolina",
    time: new Date().getTime(),
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam incidunt eligendi temporibus at! Repudiandae nostrum magnam itaque qui illo! Incidunt assumenda fuga sunt voluptatum, omnis hic consequuntur rerum velit odio quisquam cumque nulla voluptas ut expedita unde maxime quaerat quidem vero iusto fugit nostrum eum asperiores. Distinctio officia ipsum nisi, quod, itaque minima mollitia vitae sequi deleniti, alias illo doloribus quibusdam qui obcaecati minus. Tenetur a laborum unde adipisci asperiores cum ex nam praesentium, omnis harum sequi exercitationem quae doloremque quas? Eaque dolores mollitia tempore suscipit ipsa beatae libero amet vel dignissimos nostrum officiis quos, deleniti quisquam perferendis id commodi.",
    tip: 0.1,
  },
  {
    name: "David",
    time: new Date().getTime(),
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempore. Eaque, necessitatibus perspiciatis iste ut architecto esse adipisci facere soluta velit excepturi laudantium, beatae maiores! Deleniti itaque quaerat soluta iste.",
    tip: 0.1,
  },
  {
    name: "Bill Gates",
    time: new Date().getTime(),
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam incidunt eligendi temporibus at! Repudiandae nostrum magnam itaque qui illo! Incidunt assumenda fuga sunt voluptatum, omnis hic consequuntur rerum velit odio quisquam cumque nulla voluptas ut expedita unde maxime quaerat quidem vero iusto fugit nostrum eum asperiores. Distinctio officia ipsum nisi, quod, itaque minima mollitia vitae sequi deleniti, alias illo doloribus quibusdam qui obcaecati minus. Tenetur a laborum unde adipisci asperiores cum ex nam praesentium, omnis harum sequi exercitationem quae doloremque quas? Eaque dolores mollitia tempore suscipit ipsa beatae libero amet vel dignissimos nostrum officiis quos, deleniti quisquam perferendis id commodi.",
    tip: 0.1,
  },
  {
    name: "Mark ",
    time: new Date().getTime(),
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam incidunt eligendi temporibus at! Repudiandae nostrum magnam itaque qui illo! Incidunt assumenda fuga sunt voluptatum, omnis hic consequuntur rerum velit odio quisquam cumque nulla voluptas ut expedita unde maxime quaerat quidem vero iusto fugit nostrum eum asperiores. Distinctio officia ipsum nisi, quod, itaque minima mollitia vitae sequi deleniti, alias illo doloribus quibusdam qui obcaecati minus. Tenetur a laborum unde adipisci asperiores cum ex nam praesentium, omnis harum sequi exercitationem quae doloremque quas? Eaque dolores mollitia tempore suscipit ipsa beatae libero amet vel dignissimos nostrum officiis quos, deleniti quisquam perferendis id commodi.",
    tip: 0.1,
  },
  {
    name: "Warrent",
    time: new Date().getTime(),
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam incidunt eligendi temporibus at! Repudiandae nostrum magnam itaque qui illo! Incidunt assumenda fuga sunt voluptatum, omnis hic consequuntur rerum velit odio quisquam cumque nulla voluptas ut expedita unde maxime quaerat quidem vero iusto fugit nostrum eum asperiores. Distinctio officia ipsum nisi, quod, itaque minima mollitia vitae sequi deleniti, alias illo doloribus quibusdam qui obcaecati minus. Tenetur a laborum unde adipisci asperiores cum ex nam praesentium, omnis harum sequi exercitationem quae doloremque quas? Eaque dolores mollitia tempore suscipit ipsa beatae libero amet vel dignissimos nostrum officiis quos, deleniti quisquam perferendis id commodi.",
    tip: 0.1,
  },
  {
    name: "Toffer",
    time: new Date().getTime(),
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam incidunt eligendi temporibus at! Repudiandae nostrum magnam itaque qui illo! Incidunt assumenda fuga sunt voluptatum, omnis hic consequuntur rerum velit odio quisquam cumque nulla voluptas ut expedita unde maxime quaerat quidem vero iusto fugit nostrum eum asperiores. Distinctio officia ipsum nisi, quod, itaque minima mollitia vitae sequi deleniti, alias illo doloribus quibusdam qui obcaecati minus. Tenetur a laborum unde adipisci asperiores cum ex nam praesentium, omnis harum sequi exercitationem quae doloremque quas? Eaque dolores mollitia tempore suscipit ipsa beatae libero amet vel dignissimos nostrum officiis quos, deleniti quisquam perferendis id commodi.",
    tip: 0.1,
  },
  {
    name: "Nguyen",
    time: new Date().getTime(),
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam incidunt eligendi temporibus at! Repudiandae nostrum magnam itaque qui illo! Incidunt assumenda fuga sunt voluptatum, omnis hic consequuntur rerum velit odio quisquam cumque nulla voluptas ut expedita unde maxime quaerat quidem vero iusto fugit nostrum eum asperiores. Distinctio officia ipsum nisi, quod, itaque minima mollitia vitae sequi deleniti, alias illo doloribus quibusdam qui obcaecati minus. Tenetur a laborum unde adipisci asperiores cum ex nam praesentium, omnis harum sequi exercitationem quae doloremque quas? Eaque dolores mollitia tempore suscipit ipsa beatae libero amet vel dignissimos nostrum officiis quos, deleniti quisquam perferendis id commodi.",
    tip: 0.1,
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <Header />
        <div className="body">
          <SendDonate />
          <Memos memos={memos} />
        </div>
      </div>
    </div>
  );
}
