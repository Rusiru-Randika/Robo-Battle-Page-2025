import React from "react";

// StartCap Component
export function StartCap() {
    return (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <svg width="30" height="50" viewBox="0 0 30 50">
                <circle cx="15" cy="25" r="10" fill="blue" />
                <line x1="15" y1="35" x2="15" y2="50" stroke="black" strokeWidth="2" />
            </svg>
        </div>
    );
}

// MiddleComponent (Repeatable)
export function MiddleComponent() {
    return (
        <div className="relative w-[200px] flex justify-center">
            <svg width="200" height="50" viewBox="0 0 200 50">
                <line x1="100" y1="0" x2="100" y2="50" stroke="black" strokeWidth="2" />
                <circle cx="100" cy="25" r="8" fill="yellow" />
            </svg>
        </div>
    );
}

// EndCap Component
export function EndCap() {
    return (
        <div className="relative w-[100px] flex justify-end">
            <svg width="100" height="50" viewBox="0 0 100 50">
                <line x1="50" y1="0" x2="50" y2="15" stroke="black" strokeWidth="2" />
                <circle cx="50" cy="25" r="10" fill="red" />
            </svg>
        </div>
    );
}

// Timeline Component (Default Export)
export default function Timeline() {
    return (
        <div className="relative flex flex-col items-center space-y-2">
            <StartCap />
            <MiddleComponent />
            <MiddleComponent />
            <MiddleComponent />
            <EndCap />
        </div>
    );
}
