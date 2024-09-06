"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Form from '../../../components/Form';

const EditPostPage = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const response = await axios.get(`/api/posts?id=${id}`);
        setPost(response.data);
      };
      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
        <Form post={post} />
      </div>
    </div>
  );
};

export default EditPostPage;