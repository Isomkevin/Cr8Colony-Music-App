import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LayoutSidebar, ContentDetail } from "../router";



export const Content = () => {
    const { id } = useParams(); // Get the content ID from URL parameters
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);


    // Sample content data array that would typically come from an API or database
    const sampleContents = [
        {
            id: "123",
            title: "Introduction to React Development",
            creator: { name: "Sarah Johnson", id: "creator789" },
            category: "Programming",
            price: 29.99,
            previewUrl:
                "https://cdn.slidesharecdn.com/ss_thumbnails/introduction-to-react-180314085402-thumbnail.jpg?width=640&height=640&fit=bounds",
            type: "image", // Could be "audio", "image", or "text"
            description:
                "Learn the fundamentals of React development in this comprehensive course. Perfect for beginners!",
        },
        {
            id: "124",
            title: "Advanced JavaScript Techniques",
            creator: { name: "Michael Smith", id: "creator456" },
            category: "Programming",
            price: 39.99,
            previewUrl:
                "https://cdn.slidesharecdn.com/ss_thumbnails/advanced-js-thumbnail.jpg",
            type: "text",
            description:
                "Deep dive into advanced JavaScript patterns and performance optimization techniques.",
        },
        {
            id: "125",
            title: "Music Production Essentials",
            creator: { name: "Emily Davis", id: "creator321" },
            category: "Music",
            price: 19.99,
            previewUrl:
                "https://cdn.slidesharecdn.com/ss_thumbnails/music-production-thumbnail.jpg",
            type: "audio",
            description:
                "Master the basics of digital music production using industry-standard tools and techniques.",
        },
    ];

    return (
        <LayoutSidebar>
            {sampleContents.map((content) => (
                <ContentDetail key={content.id} content={content} />
            ))}
        </LayoutSidebar>
    );
};

