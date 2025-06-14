import React from 'react';
import Button from '@/components/common/Button';

const About: React.FC = () => {
    return (
        <section>
            <h1 className="font-bold">About us page</h1>
            <div>
                <Button label="Learn More" onClick={() => alert('boom')} size="small" shape='rounded-sm' />
                <Button label="Learn More" onClick={() => alert('boom')} size="medium" shape="rounded-md" />
                <Button label="Learn More" onClick={() => alert('boom')} size="large" shape="rounded-full" />
            </div>
            
        </section>
    );
}

export default About;
