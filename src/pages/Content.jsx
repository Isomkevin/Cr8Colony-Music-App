import React, { useEffect, useState } from "react";
import { LayoutSidebar, ContentDetail } from "../router";

export const Content = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("https://cr8colony-backend.onrender.com/api/contents") // Change URL if deployed
      .then((response) => response.json())
      .then((data) => setContents(data))
      .catch((error) => console.error("Error fetching contents:", error));
  }, []);

  return (
    <LayoutSidebar>
      {contents.length > 0 ? (
        contents.map((content) => <ContentDetail key={content.id} content={content} />)
      ) : (
        <p>Loading content...</p>
      )}
    </LayoutSidebar>
  );
};
