import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Accordion.styl';

const Accordion = ({ children, className, open, transitionDuration }) => {
  const accordion = useRef(null);

  useEffect(() => {
    const height = parseFloat(getComputedStyle(accordion.current).height);
    if (open) {
      if (height !== accordion.current.scrollHeight) {
        accordion.current.style.height = `${accordion.current.scrollHeight}px`;
        requestAnimationFrame(() => {
          setTimeout(() => {
            accordion.current.style.height = 'auto';
          }, transitionDuration);
        });
      }
    } else if (height !== 0) {
      accordion.current.style.height = `${accordion.current.scrollHeight}px`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          accordion.current.style.height = 0;
        }, 50);
      });
    }
  }, [open, transitionDuration]);

  return (
    <div
      ref={accordion}
      className={cn('accordion', className)}
      style={{ transitionDuration: `${transitionDuration}ms` }}
    >
      {children}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func, PropTypes.string]).isRequired,
  open: PropTypes.bool.isRequired,
  className: PropTypes.string,
  transitionDuration: PropTypes.number,
};

Accordion.defaultProps = {
  className: undefined,
  transitionDuration: 300,
};

export default Accordion;
