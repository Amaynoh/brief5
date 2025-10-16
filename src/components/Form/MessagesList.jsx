import React from 'react';

export default function MessagesList({ messages }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages récents</h2>
      
      <div className="space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className="border-l-4 pl-4 py-3 hover:bg-gray-50 transition-colors"
            style={{ borderLeftColor: '#6B8E23' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-800">{msg.author}</span>
              <span className="text-sm text-gray-500">· {msg.time}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
