import React, { useState } from 'react';
import { FaHeart, FaEnvelope, FaUser, FaSearch, FaFilter, FaComment, FaBell, FaTrash, FaEdit, FaCheck, FaEllipsisH, FaTimes } from 'react-icons/fa';
import logo from '../src/assets/logo.png'; // Adjust the path as necessary
import userProfilePic from '../src/assets/ca-1.png'; // Example user profile picture

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newCommentContent, setNewCommentContent] = useState({});
  const [editingComment, setEditingComment] = useState({});
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [activeChat, setActiveChat] = useState(null);

  const handlePostSubmit = () => {
    if (newPostContent.trim() !== "") {
      const newPost = {
        id: Date.now(),
        content: newPostContent,
        comments: [],
        likes: 0
      };
      setPosts([newPost, ...posts]);
      setNewPostContent("");
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleCommentSubmit = (postId) => {
    if (newCommentContent[postId]?.trim() !== "") {
      const newComment = {
        id: Date.now(),
        text: newCommentContent[postId]
      };
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
      ));
      setNewCommentContent({ ...newCommentContent, [postId]: "" });
    }
  };

  const handleDeleteComment = (postId, commentId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: post.comments.filter(comment => comment.id !== commentId) } : post
    ));
  };

  const handleEditComment = (postId, commentId) => {
    setEditingComment({ postId, commentId });
    const comment = posts.find(post => post.id === postId).comments.find(comment => comment.id === commentId);
    setNewCommentContent({ ...newCommentContent, [commentId]: comment.text });
  };

  const handleEditCommentSubmit = (postId, commentId) => {
    if (newCommentContent[commentId]?.trim() !== "") {
      setPosts(posts.map(post => 
        post.id === postId ? { 
          ...post, 
          comments: post.comments.map(comment => 
            comment.id === commentId ? { ...comment, text: newCommentContent[commentId] } : comment
          ) 
        } : post
      ));
      setEditingComment({});
      setNewCommentContent({ ...newCommentContent, [commentId]: "" });
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAsRead = (index) => {
    setNotifications(notifications.map((notification, i) => 
      i === index ? { ...notification, read: true } : notification
    ));
  };

  const addNotification = (message) => {
    setNotifications([{ message, read: false }, ...notifications]);
  };

  const markMessageAsRead = (index) => {
    setMessages(messages.map((message, i) => 
      i === index ? { ...message, read: true } : message
    ));
  };

  const addMessage = (sender, content) => {
    setMessages([...messages, { sender, content, read: false }]);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const onMessageClick = (chat) => {
    setActiveChat(chat);
  };

  const ChatInterface = ({ onClose }) => {
    return (
      <div className="absolute right-0 top-16 w-80 bg-[#FBD3A7] text-black border rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Messages</h3>
          <div className="flex space-x-2">
            <FaEllipsisH className="cursor-pointer" />
          </div>
        </div>
        <div className="relative mb-4">
          <input type="text" placeholder="Search Messages" className="w-full px-4 py-2 bg-white-700 text-black rounded-md focus:outline-none" />
          <FaSearch className="absolute top-2 right-3 text-gray-400" />
        </div>
        <div className="flex space-x-4 mb-4">
          <button className="flex-1 bg-[#5C0601] text-white py-2 rounded-md">Inbox</button>
          <button className="flex-1 bg-white text-black py-2 rounded-md">Communities</button>
        </div>
        <div className="overflow-y-auto h-64">
          {messages.map((message, index) => (
            <div key={index} className="flex items-center mb-4 cursor-pointer" onClick={() => onMessageClick({
              sender: message.sender, content: message.content, profilePic: userProfilePic, status: "Active now", messages: [
                { text: message.content, timestamp: "Just now", isUser: false }
              ]})}>
              <img src={userProfilePic} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold">{message.sender}</h4>
                <p className={`text-sm ${message.read ? 'text-gray-500' : 'text-black'}`}>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full text-[#5C0601] mt-4">See all in Messages</button>
      </div>
    );
  };

  const ChatInterface1 = ({ chat, onClose }) => {
    return (
        <div className="fixed right-8 bottom-0 mb-2 w-80 h-120 bg-white text-black border border-gray-300 rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={chat.profilePic} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{chat.sender}</h3>
              <p className="text-gray-600 text-sm">{chat.status}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <FaTimes className="cursor-pointer text-gray-600" onClick={onClose} />
          </div>
        </div>
        <div className="overflow-y-auto h-64  p-4 rounded-lg">
          {chat.messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-orange-400 text-white' : 'text-black'}`}>
                {message.text}
              </div>  
              <p className="text-gray-500 text-xs mt-1">{message.timestamp}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <input type="text" placeholder="Aa" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
       {/* Navigation Bar */}
       <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={logo} alt="Craftify Logo" className="h-12" />
        <nav className="space-x-4">
          <a href="/DashboardArtist" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Home</a>
          <a href="/track-project" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Track Project</a>
          <a href="/community" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Community</a>
          <a href="/opportunity" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Opportunity</a>
        </nav>
        <div className="flex space-x-4 relative">
          <FaHeart className="text-[#5C0601] hover:text-gray-900" />
          <div className="relative">
            <FaEnvelope className="text-[#5C0601] hover:text-gray-900 cursor-pointer" onClick={toggleChat} />
            {showChat && !activeChat && <ChatInterface onClose={() => setShowChat(false)} />}
          </div>
          <div className="relative">
            <FaBell className="text-[#5C0601] hover:text-gray-900 cursor-pointer" onClick={toggleNotifications} />
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                <ul>
                  {notifications.length === 0 ? (
                    <li>No notifications</li>
                  ) : (
                    notifications.map((notification, index) => (
                      <li 
                        key={index} 
                        className={`mb-2 ${notification.read ? 'text-gray-500' : 'text-black'}`}
                        onClick={() => markAsRead(index)}
                      >
                        {notification.message}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>
          <FaUser className="text-[#5C0601] hover:text-gray-900" />
        </div>
      </header>

      {/* Header Section */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-[#5C0601] text-center mb-8">Crafti Community</h1>
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-full max-w-lg">
            <input type="text" placeholder="Search……." className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5C0601] focus:border-[#5C0601]" />
            <FaSearch className="absolute top-2 right-3 text-[#5C0601]" />
          </div>
          <div className="relative ml-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5C0601] focus:border-[#5C0601]">
              <option>Latest</option>
              <option>Most Popular</option>
              <option>Trending</option>
            </select>
            <FaFilter className="absolute top-2 right-3 text-[#5C0601]" />
          </div>
        </div>

        {/* Post Creation Box */}
        <div className="flex items-center mb-8 bg-[#FBD3A7] p-4 rounded-lg shadow-md">
          <img src={userProfilePic} alt="User Profile" className="w-10 h-10 rounded-full mr-4" />
          <input 
            type="text" 
            placeholder="Write a community post..." 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C0601] focus:border-[#5C0601]" 
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <button 
            className="bg-[#5C0601] text-white py-2 px-4 rounded-md ml-4"
            onClick={handlePostSubmit}
          >
            POST
          </button>
        </div>

        {/* Post Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#FBD3A7] p-4 rounded-lg shadow-md flex flex-col">
              <div className="flex items-start">
                <img src={userProfilePic} alt="User Profile" className="w-10 h-10 rounded-full mr-4" />
                <div className="flex-1">
                  <p className="text-[#5C0601]">{post.content}</p>
                  <div className="flex space-x-4 mt-4">
                    <div className="flex items-center text-[#5C0601]">
                      <FaComment className="mr-1" /> {post.comments.length} comments
                    </div>
                    <div className="flex items-center text-[#5C0601] cursor-pointer" onClick={() => handleLike(post.id)}>
                      <FaHeart className="mr-1 text-red-500" /> {post.likes} likes
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex items-start mb-2">
                    <img src={userProfilePic} alt="User Profile" className="w-8 h-8 rounded-full mr-2" />
                    <div className="bg-white p-2 rounded-md shadow-sm flex-1">
                      {editingComment.postId === post.id && editingComment.commentId === comment.id ? (
                        <input 
                          type="text" 
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C0601] focus:border-[#5C0601]" 
                          value={newCommentContent[comment.id] || ""}
                          onChange={(e) => setNewCommentContent({ ...newCommentContent, [comment.id]: e.target.value })}
                        />
                      ) : (
                        <p className="text-[#5C0601]">{comment.text}</p>
                      )}
                    </div>
                    {editingComment.postId === post.id && editingComment.commentId === comment.id ? (
                      <FaCheck 
                        className="text-[#5C0601] hover:text-green-500 cursor-pointer ml-2"
                        onClick={() => handleEditCommentSubmit(post.id, comment.id)}
                      />
                    ) : (
                      <>
                        <FaEdit 
                          className="text-[#5C0601] hover:text-blue-500 cursor-pointer ml-2"
                          onClick={() => handleEditComment(post.id, comment.id)}
                        />
                        <FaTrash 
                          className="text-[#5C0601] hover:text-red-500 cursor-pointer ml-2"
                          onClick={() => handleDeleteComment(post.id, comment.id)}
                        />
                      </>
                    )}
                  </div>
                ))}
                <div className="flex items-center mt-2">
                  <input 
                    type="text" 
                    placeholder="Write a comment..." 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C0601] focus:border-[#5C0601]" 
                    value={newCommentContent[post.id] || ""}
                    onChange={(e) => setNewCommentContent({ ...newCommentContent, [post.id]: e.target.value })}
                  />
                  <button 
                    className="bg-[#5C0601] text-white py-2 px-4 rounded-md ml-2"
                    onClick={() => handleCommentSubmit(post.id)}
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;