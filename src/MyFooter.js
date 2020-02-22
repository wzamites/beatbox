import React from 'react';

function MyFooter() {
  return (
    <footer className="text-center py-3 greyBackground">
      © {new Date().getFullYear()} <a href="#" >beatbox co</a>
    </footer>
  );
}

export default MyFooter;
