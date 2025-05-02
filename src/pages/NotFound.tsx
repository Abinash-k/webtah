
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-webtah-gray p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-webtah-blue to-webtah-blue-dark bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-3xl font-semibold mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          We're sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="btn-gradient">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
