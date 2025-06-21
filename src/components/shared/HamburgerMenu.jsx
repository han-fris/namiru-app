import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Navigation } from './Navigation';

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

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
      {open && <Navigation />}
    </div>
  );
};
