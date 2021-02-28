import { Divider } from "antd";
import React from "react";

interface Props {}

export const Plugins = (props: Props) => {
  return (
    <div className="m-6 md:m-24 pb-24">
      <article className="prose lg:prose-md">
        <h1>With Typography Plugins</h1>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.
        </p>
        <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
      </article>
      <Divider />
      <article>
        <h1>WithoutTypography Plugins</h1>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.
        </p>
        <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
      </article>
      <div className="prose lg:prose-md">
        <h1>With aspect ratio plugins</h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <Divider />
      <div className="prose lg:prose-md">
        <h1>Without aspect ratio plugins</h1>
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
};
