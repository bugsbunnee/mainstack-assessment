import React from 'react';

interface ConditionalProps {
    isVisible: boolean;
    children: React.ReactNode | React.ReactNode[]
}

const Conditional: React.FC<ConditionalProps> = ({ children, isVisible }) => {
    if (isVisible) return children;
    return null;
}
 
export default Conditional;