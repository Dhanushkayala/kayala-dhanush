import { useEffect, useRef, useCallback, useState } from 'react';

interface UseAdminEntryOptions {
  clickWindow?: number;
  requiredClicks?: number;
  onTrigger: () => void;
}

export function useAdminEntry({
  clickWindow = 1500,
  requiredClicks = 3,
  onTrigger
}: UseAdminEntryOptions) {
  const clickCount = useRef(0);
  const lastClickTime = useRef(0);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const resetCounter = useCallback(() => {
    clickCount.current = 0;
    lastClickTime.current = 0;
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
  }, []);

  const handleClick = useCallback(() => {
    const now = Date.now();

    if (now - lastClickTime.current > clickWindow) {
      clickCount.current = 1;
    } else {
      clickCount.current += 1;
    }

    lastClickTime.current = now;

    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }

    clickTimeout.current = setTimeout(() => {
      resetCounter();
    }, clickWindow);

    if (clickCount.current >= requiredClicks) {
      onTrigger();
      resetCounter();
    }
  }, [clickWindow, requiredClicks, onTrigger, resetCounter]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  useEffect(() => {
    return () => {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
    };
  }, []);

  const handleBrandClick = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    if (e.type === 'click') {
      handleClick();
    } else if (e.type === 'keydown') {
      handleKeyDown(e as React.KeyboardEvent);
    }
  }, [handleClick, handleKeyDown]);

  return { handleBrandClick, isAdminMode, setIsAdminMode };
}