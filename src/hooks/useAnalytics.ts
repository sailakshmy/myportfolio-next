import { useCallback } from 'react';

interface AnalyticsEvent {
  type: string;
  data?: Record<string, any>;
}

export const useAnalytics = () => {
  const trackInteraction = useCallback(async (type: string, data?: Record<string, any>) => {
    try {
      const event: AnalyticsEvent = {
        type,
        data,
      };

      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }, []);

  return { trackInteraction };
}; 