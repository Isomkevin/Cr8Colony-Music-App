import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LayoutSidebar, ContentDetail } from "../router";

export const Content = () => {
  const { id } = useParams(); // Get the content ID from URL parameters
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch content details based on ID
    const fetchContent = async () => {
      try {
        // Replace this with an actual API call
        const response = await fetch(`https://api.example.com/content/${id}`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchContent();
  }, [id]);

  if (loading) return <p>Loading content...</p>;
  if (!content) return <p>Content not found</p>;

  return (
    <LayoutSidebar>
      <ContentDetail content={content} />
    </LayoutSidebar>
  );
};
