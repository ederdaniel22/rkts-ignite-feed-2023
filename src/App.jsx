import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

/*
 ** Author: {avatar_url: "", name: "", (trabalho) role: ""}
 ** publishedAt: Date
 ** content: String
 */

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ederdaniel22.png",
      name: "Eder Daniel Domingues",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },

      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          " no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉  jane.design/doctorcare " },
    ],
    publishedAt: new Date("2023-07-30 18:11:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/karolinedd.png",
      name: "Karoline Dambros Domingues",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },

      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          " no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉  jane.design/doctorcare " },
    ],
    publishedAt: new Date("2023-07-30 18:11:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
