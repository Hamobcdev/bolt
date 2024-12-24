import { useState } from 'react';
import { analyzeTransactionPattern } from '../services/ai/transactionAnalysis';
import { analyzeComplianceRisk } from '../services/ai/complianceAssistant';

export function useAIAnalytics() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const analyzeUserActivity = async (userData: any) => {
    setIsAnalyzing(true);
    try {
      const [transactionAnalysis, complianceAnalysis] = await Promise.all([
        analyzeTransactionPattern(userData.transactions),
        analyzeComplianceRisk(userData)
      ]);

      setAnalysisResults({
        transactionAnalysis,
        complianceAnalysis
      });
    } catch (error) {
      console.error('AI analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    isAnalyzing,
    analysisResults,
    analyzeUserActivity
  };
}