import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="author-quotes">
        <div className="quote-card">
          <div className="animated-border-quote">
            <blockquote>
              <div className="card-header flex items-center">
                <div className="skeleton-avatar h-10 w-10 rounded-full mr-4"></div>
                <div className="skeleton-text h-4 w-24 bg-gray-300"></div>
              </div>
              <div className="skeleton-text h-4 w-full bg-gray-300"></div>
              <div className="skeleton-text h-4 w-full bg-gray-300"></div>
              <div className="social">
                {/* Skeleton for social share */}
                <div className="flex items-center">
                  <div className="skeleton-text h-4 w-12 bg-gray-300"></div>
                  <div className="skeleton-text h-4 w-12 bg-gray-300 ml-2"></div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Skeleton;