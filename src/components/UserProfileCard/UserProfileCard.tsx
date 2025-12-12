import React from 'react';
import type { UserProfileCardProps } from '../types/index.ts';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail,
    showRole,
    onEdit,
    children,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          {user.avatarUrl ? (
            <img 
              src={user.avatarUrl} 
              alt={user.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600">
              {user.name.charAt(0)}
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            
            {showEmail && (
              <p className="text-gray-600 text-sm">
                <a href={`mailto:${user.email}`} className="hover:underline">
                  {user.email}
                </a>
              </p>
            )}
            
            {showRole && (
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mt-1">
                {user.role}
              </span>
            )}
          </div>
        </div>
  
        {children && <div className="mt-4 border-t pt-4">{children}</div>}
  
        {onEdit && (
          <button
            onClick={() => onEdit(user.id)}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Edit Profile
          </button>
        )}
      </div>
    );
};