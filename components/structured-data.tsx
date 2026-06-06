import React from 'react';

interface StructuredDataProps {
  json?: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ json = {} }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
  />
);

