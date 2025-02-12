// src/components/Quote/index.tsx
import React from 'react'

interface QuoteProps {
  children: React.ReactNode
  className?: string
}

const Quote: React.FC<QuoteProps> = ({ children, className = '' }) => {
  return (
    <blockquote className={`quote ${className}`}>
      {children}
      <style jsx>{`
        .quote {
          font-size: 1.5rem;
          line-height: 1.4;
          font-style: italic;
          color: #374151;
          margin: 2rem 0;
          padding: 1rem 2rem;
          border-left: 4px solid #4b5563;
          background: #f3f4f6;
          border-radius: 0 8px 8px 0;
        }
      `}</style>
    </blockquote>
  )
}

export default Quote
