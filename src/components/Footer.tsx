import * as React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className="h-8 bg-gray-200 text-center flex items-center justify-center shrink-0">
    <p className="text-gray-600 text-sm">&copy; {currentYear}</p>
    </footer>
}

export default Footer;