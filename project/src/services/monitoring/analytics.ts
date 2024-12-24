import { keystore } from '../../config/keystore';
import { validateApiKey } from '../../utils/security';

interface MetricData {
  timestamp: number;
  type: string;
  value: number;
  metadata?: Record<string, any>;
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private metrics: MetricData[] = [];

  private constructor() {}

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  public trackMetric(type: string, value: number, metadata?: Record<string, any>) {
    this.metrics.push({
      timestamp: Date.now(),
      type,
      value,
      metadata
    });
  }

  public getMetrics(type?: string): MetricData[] {
    return type 
      ? this.metrics.filter(m => m.type === type)
      : this.metrics;
  }
}

export const analyticsService = AnalyticsService.getInstance();