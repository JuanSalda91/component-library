import React from 'react';
import type { AlertBoxProps } from '../types/index.ts';

export const AlertBox: React.FC<AlertBoxProps> = ({
    type,
    message,
    onClose,
    children,
}) => {
    const alertStyles = {
        success: 'bg-green-100 border-green-500 text-green-700',
        error: 'bg-red-100 border-red-500 text-red-700',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        info: 'bg-blue-100 border-blue-500 text-blue-700' 
    };
    return (
        <div className={`p-4 mb-4 border-l-4 rounded ${alertStyles[type]}`} role="alert">
          <div className="flex justify-between items-start">
            <div className="font-medium">{message}</div>
            {onClose && (
              <button
                onClick={onClose}
                className="ml-4 text-xl font-bold leading-none hover:opacity-75"
                aria-label="Close"
              >
                ×
              </button>
            )}
          </div>
          {/* Only render children container if children exist */}
          {children && <div className="mt-2 text-sm">{children}</div>}
        </div>
      );
};

// ### --- Type Importation --- ### //

/** Types has to be imported like this:
 * import type { AlertBoxProps } from '../types/index.ts';
 * This way, TypeScript knows that we are only importing types,
 * which helps with performance and avoids potential circular dependencies.
 */