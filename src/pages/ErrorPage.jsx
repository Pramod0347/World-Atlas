import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Error Icon */}
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                </div>

                {/* Error Content */}
                <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
                <h2 className="text-3xl font-semibold text-gray-300 mb-6">Something went wrong</h2>
                
                <div className="bg-gray-800/50 rounded-2xl p-6 mb-8 border border-gray-700">
                    <p className="text-gray-400 mb-4">
                        We're sorry, but something unexpected happened. Don't worry, it's not your fault!
                    </p>
                    
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
                            <p className="text-red-400 font-mono text-sm">
                                {error.statusText || error.message || 'An unknown error occurred'}
                            </p>
                        </div>
                    )}
                    
                    <p className="text-gray-500 text-sm">
                        Error Code: {error?.status || 'Unknown'}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <NavLink 
                        to="/" 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Go Home
                    </NavLink>
                    
                    <button 
                        onClick={() => window.location.reload()} 
                        className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Try Again
                    </button>
                </div>

                {/* Help Text */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        If this problem persists, please contact our support team.
                    </p>
                    <NavLink 
                        to="/contact" 
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                        Contact Support →
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;
