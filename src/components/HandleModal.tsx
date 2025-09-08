import { useState, useRef, useEffect } from 'react';
import { X, GripHorizontal } from 'lucide-react';

interface HandleModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const BREAKPOINTS = [0, 0.25, 0.5, 0.75];
const INITIAL_BREAKPOINT = 0.25;

export function HandleModal({ isOpen, onClose, children, title }: HandleModalProps) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(INITIAL_BREAKPOINT);
  const [isDragging, setIsDragging] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startBreakpoint = useRef(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentBreakpoint(INITIAL_BREAKPOINT);
    }
  }, [isOpen]);

  const handleClose = () => {
    setCurrentBreakpoint(0);
    setTimeout(onClose, 300);
  };

  const cycleToNextBreakpoint = () => {
    const currentIndex = BREAKPOINTS.indexOf(currentBreakpoint);
    const nextIndex = (currentIndex + 1) % BREAKPOINTS.length;
    const nextBreakpoint = BREAKPOINTS[nextIndex];
    
    if (nextBreakpoint === 0) {
      handleClose();
    } else {
      setCurrentBreakpoint(nextBreakpoint);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startY.current = e.clientY;
    startBreakpoint.current = currentBreakpoint;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = startY.current - e.clientY;
    const windowHeight = window.innerHeight;
    const breakpointDelta = deltaY / windowHeight;
    const newBreakpoint = Math.max(0, Math.min(0.75, startBreakpoint.current + breakpointDelta));
    
    // Snap to closest breakpoint
    const closest = BREAKPOINTS.reduce((prev, curr) => 
      Math.abs(curr - newBreakpoint) < Math.abs(prev - newBreakpoint) ? curr : prev
    );
    
    setCurrentBreakpoint(closest);
  };

  const handleMouseUp = () => {
    if (currentBreakpoint === 0) {
      handleClose();
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, currentBreakpoint]);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
    startBreakpoint.current = currentBreakpoint;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    
    const deltaY = startY.current - e.touches[0].clientY;
    const windowHeight = window.innerHeight;
    const breakpointDelta = deltaY / windowHeight;
    const newBreakpoint = Math.max(0, Math.min(0.75, startBreakpoint.current + breakpointDelta));
    
    const closest = BREAKPOINTS.reduce((prev, curr) => 
      Math.abs(curr - newBreakpoint) < Math.abs(prev - newBreakpoint) ? curr : prev
    );
    
    setCurrentBreakpoint(closest);
  };

  const handleTouchEnd = () => {
    if (currentBreakpoint === 0) {
      handleClose();
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const touchMove = (e: TouchEvent) => handleTouchMove(e);
      const touchEnd = () => handleTouchEnd();
      
      document.addEventListener('touchmove', touchMove);
      document.addEventListener('touchend', touchEnd);
      return () => {
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('touchend', touchEnd);
      };
    }
  }, [isDragging, currentBreakpoint]);

  if (!isOpen) return null;

  const modalHeight = `${currentBreakpoint * 100}%`;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          currentBreakpoint > 0 ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transform transition-transform duration-300 ${
          currentBreakpoint === 0 ? 'translate-y-full' : 'translate-y-0'
        }`}
        style={{ height: modalHeight }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-4 pb-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-grab active:cursor-grabbing"
            onClick={cycleToNextBreakpoint}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            aria-label="Drag to resize or click to cycle through sizes"
          >
            <GripHorizontal className="w-8 h-2 text-gray-400" />
          </button>
        </div>

        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>

        {/* Helper text */}
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-500 text-center">
            Klikni na handle výše pro přechod na další breakpoint
          </p>
        </div>
      </div>
    </>
  );
}