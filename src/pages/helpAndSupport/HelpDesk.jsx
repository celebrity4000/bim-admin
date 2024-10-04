import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const HelpDesk = () => {
  const [query, setQuery] = useState('');
  const [issues, setIssues] = useState([
    { id: 1, type: 'Technical', description: 'Unable to access course materials', status: 'Open' },
    { id: 2, type: 'Content', description: 'Clarification needed on Module 3', status: 'In Progress' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIssues([...issues, {
        id: issues.length + 1,
        type: 'New',
        description: query,
        status: 'Open'
      }]);
      setQuery('');
    }
  };

  return (
    <div className="p-4 max-w-[95%] mx-auto bg-white m-10">
      <h1 className="text-2xl font-bold mb-4">Help Desk</h1>
      
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2 ">
        <Input
          type="text"
          placeholder="Enter your query or issue..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" className = "bg-pink text-white">
          <Send className="mr-2 h-4 w-4 " /> Submit
        </Button>
      </form>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Current Issues</h2>
        {issues.map((issue) => (
          <Card key={issue.id} className="mb-3">
            <CardHeader>
              <CardTitle className="text-lg">
                {issue.type} Issue - {issue.status}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{issue.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>How do I reset my password?</li>
            <li>Where can I find the course schedule?</li>
            <li>How do I submit assignments?</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpDesk;