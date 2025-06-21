import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Navigation } from './Navigation';
import './HamburgerMenu.css'

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div>
      <Hamburger
        className="hamburger"
        size={28}
        toggled={open}
        toggle={setOpen}
        direction="right"
        color="var(--dark)"
      />
      {(open || isClosing) && (
        <div className={`mobile-menu ${isClosing ? 'closing' : ''}`}>
          <Navigation onClose={handleClose} />
        </div>
      )}
    </div>
  );
};
