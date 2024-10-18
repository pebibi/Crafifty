import React, { useState } from 'react';
import { FaTh, FaList, FaCalendarAlt, FaProjectDiagram, FaTable, FaPlus, FaEllipsisH, FaFlag, FaCommentDots, FaUserPlus } from 'react-icons/fa';
import NavbarArtist from '../../Navbars/NavbarArtist'; // Import the NavbarArtist component

const TrackProject = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskAssignee, setTaskAssignee] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskPriority, setTaskPriority] = useState('Normal');
  const [taskStatus, setTaskStatus] = useState('To Do');
  const [activeView, setActiveView] = useState('List');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  // Define the necessary state and functions for NavbarArtist
  const toggleChat = () => {};
  const showChat = false;
  const activeChat = null;
  const setShowChat = () => {};
  const toggleNotifications = () => {};
  const showNotifications = false;
  const notifications = [];
  const markAsRead = () => {};
  const onMessageClick = () => {};

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = { name: taskName, assignee: taskAssignee, dueDate: taskDueDate, priority: taskPriority, status: taskStatus, comments: [] };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskAssignee('');
    setTaskDueDate('');
    setTaskPriority('Normal');
    setTaskStatus('To Do');
  };

  const handleStatusChange = (index, status) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => 
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Navbar Section */}
      <NavbarArtist 
        toggleChat={toggleChat} 
        showChat={showChat} 
        activeChat={activeChat} 
        setShowChat={setShowChat} 
        toggleNotifications={toggleNotifications} 
        showNotifications={showNotifications} 
        notifications={notifications} 
        markAsRead={markAsRead} 
        onMessageClick={onMessageClick}
      />

      {/* Project Tracking Section */}
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-2xl font-bold text-center mb-4">Project Tracking</h1>
        
        {/* View Options */}
        <div className="flex justify-center mb-8">
          {[
            { name: 'Board', icon: <FaTh /> },
            { name: 'List', icon: <FaList /> },
            { name: 'Calendar', icon: <FaCalendarAlt /> },
            { name: 'Gantt', icon: <FaProjectDiagram /> },
            { name: 'Table', icon: <FaTable /> },
            { name: '+ View', icon: <FaPlus /> }
          ].map((view) => (
            <button
              key={view.name}
              onClick={() => setActiveView(view.name)}
              className={`flex items-center py-2 px-4 mx-2 font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                activeView === view.name ? 'text-[#5C0601] underline' : 'text-gray-700'
              }`}
            >
              {view.icon}
              <span className="ml-2">{view.name}</span>
            </button>
          ))}
        </div>

        {/* View Content */}
        {activeView === 'Board' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">Task Board</h2>
            <div className="grid grid-cols-4 gap-4">
              {['To Do', 'In Progress', 'Done', 'Failed'].map((status) => (
                <div key={status} className="bg-white p-4 rounded-md shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-[#5C0601]">{status}</span>
                      <span className="ml-2 text-gray-500">({tasks.filter(task => task.status === status).length})</span>
                    </div>
                    <FaEllipsisH className="text-gray-500 cursor-pointer" />
                  </div>
                  {tasks.filter(task => task.status === status).map((task, index) => (
                    <div key={index} className="bg-gray-100 p-2 rounded-md mb-2 cursor-pointer" onClick={() => handleTaskClick(task)}>
                      <p>{task.name}</p>
                      <div className="flex space-x-2 mt-2">
                        {status !== 'To Do' && (
                          <button 
                            onClick={() => handleStatusChange(index, 'To Do')}
                            className="py-1 px-2 bg-blue-500 text-white rounded-md"
                          >
                            To Do
                          </button>
                        )}
                        {status !== 'In Progress' && (
                          <button 
                            onClick={() => handleStatusChange(index, 'In Progress')}
                            className="py-1 px-2 bg-yellow-500 text-white rounded-md"
                          >
                            In Progress
                          </button>
                        )}
                        {status !== 'Done' && (
                          <button 
                            onClick={() => handleStatusChange(index, 'Done')}
                            className="py-1 px-2 bg-green-500 text-white rounded-md"
                          >
                            Done
                          </button>
                        )}
                        {status !== 'Failed' && (
                          <button 
                            onClick={() => handleStatusChange(index, 'Failed')}
                            className="py-1 px-2 bg-red-500 text-white rounded-md"
                          >
                            Failed
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <button className="py-1 px-3 bg-[#5C0601] text-white rounded-md mt-4" onClick={() => setActiveView('Add Task')}>+ Add Task</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'List' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">Task List</h2>

            {/* Search Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
                Search Tasks
              </label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Search tasks"
              />
            </div>

            {/* Task List Table */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-[#5C0601]">TO DO</span>
                  <span className="ml-2 text-gray-500">({filteredTasks.length})</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEllipsisH className="text-gray-500 cursor-pointer" />
                  <button className="py-1 px-3 bg-[#5C0601] text-white rounded-md" onClick={() => setActiveView('Add Task')}>+ Add Task</button>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-700">
                    <th className="py-2">Name</th>
                    <th className="py-2">Assignee</th>
                    <th className="py-2">Due Date</th>
                    <th className="py-2">Priority</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Comments</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.map((task, index) => (
                    <tr key={index} className="border-t cursor-pointer" onClick={() => handleTaskClick(task)}>
                      <td className="py-2 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {task.name}
                      </td>
                      <td className="py-2">
                        {task.assignee ? (
                          <span className="bg-purple-500 text-white rounded-full px-2 py-1">{task.assignee}</span>
                        ) : (
                          <FaUserPlus className="text-gray-500 cursor-pointer" />
                        )}
                      </td>
                      <td className="py-2">{task.dueDate || 'No due date'}</td>
                      <td className="py-2">
                        <FaFlag className="text-gray-500" />
                      </td>
                      <td className="py-2">
                        <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1">{task.status}</span>
                      </td>
                      <td className="py-2">
                        <FaCommentDots className="text-gray-500" />
                        {task.comments.length > 0 && (
                          <span className="ml-1 text-gray-500">({task.comments.length})</span>
                        )}
                      </td>
                      <td className="py-2">
                        <FaEllipsisH className="text-gray-500 cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <button className="py-1 px-3 bg-[#5C0601] text-white rounded-md" onClick={() => setActiveView('Add Task')}>+ Add Task</button>
                <div className="relative">
                  <button className="py-1 px-3 bg-gray-200 text-gray-700 rounded-md">Calculate</button>
                  {/* Dropdown for Calculate options can be added here */}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'Add Task' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">Add Task</h2>
            <form onSubmit={handleAddTask} className="mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter task name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskAssignee">
                  Assignee
                </label>
                <input
                  type="text"
                  id="taskAssignee"
                  value={taskAssignee}
                  onChange={(e) => setTaskAssignee(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter assignee"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDueDate">
                  Due Date
                </label>
                <input
                  type="date"
                  id="taskDueDate"
                  value={taskDueDate}
                  onChange={(e) => setTaskDueDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskPriority">
                  Priority
                </label>
                <select
                  id="taskPriority"
                  value={taskPriority}
                  onChange={(e) => setTaskPriority(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Urgent">Urgent</option>
                  <option value="High">High</option>
                  <option value="Normal">Normal</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskStatus">
                  Status
                </label>
                <select
                  id="taskStatus"
                  value={taskStatus}
                  onChange={(e) => setTaskStatus(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Failed">Failed</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 py-2 px-4 bg-[#5C0601] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601]"
              >
                Add Task
              </button>
            </form>
          </div>
        )}

        {activeView === 'Calendar' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">Calendar</h2>
            <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
              <p>Calendar feature coming soon...</p>
            </div>
          </div>
        )}

        {activeView === 'Gantt' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">Gantt</h2>
            <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
              <p>Gantt chart feature coming soon...</p>
            </div>
          </div>
        )}

        {activeView === 'Table' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">Table</h2>
            <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
              <p>Table view feature coming soon...</p>
            </div>
          </div>
        )}

        {activeView === '+ View' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">+ View</h2>
            <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
              <p>Custom view feature coming soon...</p>
            </div>
          </div>
        )}
      </div>

      {/* Task Modal */}
      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-1/2">
            <h2 className="text-xl font-bold mb-4 text-[#5C0601]">Task Details</h2>
            <p><strong>Name:</strong> {selectedTask.name}</p>
            <p><strong>Assignee:</strong> {selectedTask.assignee || 'Unassigned'}</p>
            <p><strong>Due Date:</strong> {selectedTask.dueDate || 'No due date'}</p>
            <p><strong>Priority:</strong> {selectedTask.priority}</p>
            <p><strong>Status:</strong> {selectedTask.status}</p>
            <p><strong>Comments:</strong> {selectedTask.comments.length > 0 ? selectedTask.comments.join(', ') : 'No comments'}</p>
            <button className="mt-4 py-2 px-4 bg-[#5C0601] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601]" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackProject;