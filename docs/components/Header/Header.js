import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import Logo from '../Logo';

const defaultProps = {
  menuOpened: false,
  showMenuControls: true,
  onMenuOpen: () => {},
  onMenuClose: () => {},
};

const propTypes = {
  menuOpened: PropTypes.bool,
  showMenuControls: PropTypes.bool,
  onMenuOpen: PropTypes.func,
  onMenuClose: PropTypes.func,
};

const Header = ({
  menuOpened,
  showMenuControls,
  onMenuOpen,
  onMenuClose,
}) => (
  <header className="w-full relative border-b border-gray-200 lg:py-6">
    <div className="container max-w-screen-lg mx-auto px-6 md:px-10">
      <div className="flex items-center -mx-6 md:mx-0">
        <div className="flex-1">
          <Link href="/">
            <a title="Home" className="block pl-6 md:pl-0">
              <Logo />
            </a>
          </Link>
        </div>
        {showMenuControls && (
          <div className="flex">
            {!menuOpened && (
              <button onClick={onMenuOpen} className="text-gray-500 focus:outline-none focus:text-gray-700 flex p-6 items-center lg:hidden" type="button">
                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            )}
            {menuOpened && (
              <button onClick={onMenuClose} className="text-gray-500 focus:outline-none focus:text-gray-700 flex p-6 items-center lg:hidden" type="button">
                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  </header>
);

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
