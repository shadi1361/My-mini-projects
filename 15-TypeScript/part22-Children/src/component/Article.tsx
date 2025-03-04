import React from "react";

type Article = {
  children: React.ReactNode
}

function Article({ children }: Article) {
  return (
  <div>
    ARTICLES:
    {children}
  </div>
  )
}

export default Article;
