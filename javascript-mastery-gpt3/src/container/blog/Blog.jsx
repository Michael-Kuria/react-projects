import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <section className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-main">
        <Article
          image={blog01}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt3__blog-next">
        <Article
          image={blog02}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          image={blog03}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          image={blog04}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          image={blog05}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </section>
  );
};

export default Blog;
