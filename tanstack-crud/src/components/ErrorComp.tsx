import React from "react";

type ErrorCompProps = {
    error: Error;
    reset?: () => void;
};

const ErrorComp: React.FC<ErrorCompProps> = ({ error, reset }) => (
    <div
        className="bg-red-100 text-red-800 border border-red-300 rounded p-4 my-4 font-sans max-w-1/2"
        role="alert"
    >
        <strong>OOPS! Something went wrong:</strong>
        <div className="mt-2">{error.message}</div>
        {reset && (
            <button
                onClick={reset}
                className="mt-4 bg-red-700 text-white rounded px-4 py-2 hover:bg-red-800 transition-colors"
            >
                Try Again
            </button>
        )}
    </div>
);

export default ErrorComp;
