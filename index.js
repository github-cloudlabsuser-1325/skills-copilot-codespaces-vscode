import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

// As an illustration, pull names out of the data array
const data = [
    { name: 'John Doe', age: 32 },
    { name: 'Jane Doe', age: 30 },
    { name: 'Jack Doe', age: 28 },
];

const names = data.map((item) => item.name);
console.log(names);

// Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
const data = [
    [{ name: 'John', age: 32 }, { name: 'Jane', age: 30 }],
    [{ name: 'Bob', age: 28 }, { name: 'Alice', age: 26 }],
];

const names = data.map((item) => item.map((subItem) => subItem.name));
console.log(names);
