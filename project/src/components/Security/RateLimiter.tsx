import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

interface RateLimiterProps {
  maxRequests: number;
  windowMs: number;
}

const RateLimiter: React.FC<RateLimiterProps> = ({ maxRequests, windowMs }) => {
  const [requests, setRequests] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  useEffect(() => {
    const resetWindow = () => {
      setRequests(0);
      setIsBlocked(false);
    };

    const interval = setInterval(resetWindow, windowMs);
    return () => clearInterval(interval);
  }, [windowMs]);

  const handleRequest = () => {
    if (requests >= maxRequests) {
      setIsBlocked(true);
      return false;
    }
    
    setRequests(prev => prev + 1);
    return true;
  };

  return (
    <div className="p-4 rounded-lg bg-gray-50">
      {isBlocked && (
        <div className="flex items-center gap-2 text-red-600">
          <AlertTriangle size={20} />
          <span>Rate limit exceeded. Please try again later.</span>
        </div>
      )}
      <div className="mt-2">
        <span className="text-sm text-gray-600">
          Requests: {requests}/{maxRequests}
        </span>
      </div>
    </div>
  );
};

export default RateLimiter;