import { useState, useEffect } from 'react';
import { analyticsService } from '../services/monitoring/analytics';

export function useAnalytics(metricType?: string) {
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    const data = analyticsService.getMetrics(metricType);
    setMetrics(data);
  }, [metricType]);

  const trackMetric = (type: string, value: number, metadata?: Record<string, any>) => {
    analyticsService.trackMetric(type, value, metadata);
  };

  return {
    metrics,
    trackMetric
  };
}