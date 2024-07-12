import { Inter } from 'next/font/google';
import React from 'react';

interface DescriptionProps {
  description: string; // Prop untuk deskripsi resep
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 bg-white mt-2"
         style={{
           width: '324px',
           height: '144px',
           top: '242px',
         }}
    >
      <p style={{
        fontFamily: 'Inter',
        fontSize: '13px',
        fontWeight: 400,
        lineHeight: '15.73px',
        letterSpacing: '0.25px',
        textAlign: 'left',
      }}>
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Description;
