import { Link, useParams } from "react-router-dom";

import { Helmet } from "react-helmet";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import { useEffect } from "react";
import { blogs } from "../data/blog";
import { ArrowRight, Dot } from "lucide-react";
import BlogCard from "./BlogCard";

export default function  BlogDetails() {

  let  { slug } = useParams();
  let post = blogs.find(p => p.slug === slug);
 useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!post) return <div className="text-center mt-20">Post Not Found</div>;

  
  let relatedPosts = blogs
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
    console.log(post.canonical)
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-32 relative">
    <Helmet>
      <title>{post.metaTitle}</title>
      <meta name="description" content={post.metaDescription}></meta>
      <link rel="canonical" href={post.canonical} />
    </Helmet>
      <div className="text-sm text-gray-500 mb-6 flex">
        <span><Link to={"/"}>Home</Link></span> <ArrowRight size={14} className="mt-1" /> <span><Link to={"/blog"}>blog</Link></span> <ArrowRight size={14} className="mt-1" />
        <span className="text-gray-800 font-medium"> {post.category}</span>
      </div>

      <h1 className="text-4xl font-bold">{post.title}</h1>

      <div className="mt-3 flex items-center gap-4 text-gray-500 text-sm">
        
        <span>{post.author}</span> <Dot size={14} className="mt-1"/> <span>{post.date}</span> 
      </div>

      <div className="grid grid-cols-1  gap-10 mt-10">
          <div className="">
        <img src={post.thumbnail} className="w-full h-full " />
        
      </div>
      
        <div
          className="prose prose-lg max-w-none"
        >
            {post.content}
            </div>

      
      </div>

      {/* Share */}
      <div className="mt-10 flex gap-3">
        <FacebookShareButton url={window.location.href}>
          <FaFacebook size={22} className="text-blue-600" />
        </FacebookShareButton>

        <TwitterShareButton url={window.location.href}>
          <FaTwitter size={22} className="text-sky-500" />
        </TwitterShareButton>

        <LinkedinShareButton url={window.location.href}>
          <FaLinkedin size={22} className="text-blue-800" />
        </LinkedinShareButton>
      </div>

      {/* Related Posts */}
      <h2 className="text-2xl font-bold mt-16 mb-6">Related Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>

    </div>
  );
}

