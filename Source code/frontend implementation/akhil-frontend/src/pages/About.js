import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, Database, Cpu, BarChart3 } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-white pt-4 pb-20 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            About the Project
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Understanding the technology and research behind our lung cancer detection system
          </p>
        </div>

        <Card className="mb-8 border-slate-200" data-testid="problem-statement-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Problem Statement
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600 space-y-4">
            <p>
              Lung cancer remains one of the leading causes of cancer-related deaths worldwide, primarily due to late diagnosis. Traditional CT scan analysis is time-consuming, expensive, and prone to human error, especially in resource-limited settings.
            </p>
            <p>
              There is a critical need for an automated, accurate, and computationally efficient system that can detect lung cancer early and assist healthcare professionals in making informed decisions.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-slate-200" data-testid="solution-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-teal-600" />
              Our Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600 space-y-4">
            <p>
              This project integrates a <strong>MobileNetV2-based deep learning model enhanced with attention mechanisms</strong> to detect lung cancer from CT scan or X-ray images. The solution focuses on being lightweight, interpretable, and fast, making it suitable for deployment on limited-resource systems or educational projects.
            </p>
            
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h3 className="font-bold text-teal-900 mb-2">Classification Accuracy</h3>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-teal-600" />
                <span className="text-3xl font-bold text-teal-700">96%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-slate-200" data-testid="architecture-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              MobileNetV2 Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600 space-y-4">
            <p>
              <strong>MobileNetV2</strong> is a lightweight convolutional neural network designed for mobile and embedded vision applications. Our enhanced version includes:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Attention Mechanisms:</strong> Focus on relevant features in CT/X-ray images for improved accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Inverted Residuals:</strong> Efficient feature extraction with reduced parameters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Linear Bottlenecks:</strong> Preserve information while reducing computational cost</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-slate-200" data-testid="dataset-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Database className="w-6 h-6 text-teal-600" />
              Dataset & Classification
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600 space-y-4">
            <p>
              The model is trained on the <strong>Kaggle Chest CT-Scan Images dataset</strong>, containing thousands of labeled medical images across four distinct classes:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Adenocarcinoma</h4>
                <p className="text-sm">Most common type of lung cancer</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Large Cell Carcinoma</h4>
                <p className="text-sm">Aggressive form of non-small cell lung cancer</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Squamous Cell Carcinoma</h4>
                <p className="text-sm">Develops in the airways of the lungs</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Normal</h4>
                <p className="text-sm">Healthy lung tissue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-slate-200" data-testid="preprocessing-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Preprocessing Techniques
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600">
            <p className="mb-4">To ensure optimal model performance, several preprocessing techniques are applied:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>White Balancing:</strong> Corrects color cast and ensures consistent image appearance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>CLAHE (Contrast Limited Adaptive Histogram Equalization):</strong> Enhances local contrast to reveal subtle features</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Normalization:</strong> Scales pixel values to improve training stability and convergence</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-slate-200" data-testid="explainable-ai-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Explainable AI (XAI)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600 space-y-4">
            <p>
              Understanding how AI makes decisions is crucial in medical applications. Our system incorporates:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Grad-CAM (Gradient-weighted Class Activation Mapping):</strong> Visualizes which regions of the image the model focuses on when making predictions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>LIME (Local Interpretable Model-agnostic Explanations):</strong> Provides local explanations for individual predictions</span>
              </li>
            </ul>
            <p className="text-sm italic">
              These techniques help build trust and enable medical professionals to understand the AI's reasoning process.
            </p>
          </CardContent>
        </Card>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center mb-8">
          <p className="text-amber-900 font-semibold">
            Educational Purpose Only
          </p>
          <p className="text-amber-800 text-sm mt-2">
            This project is developed for academic and learning purposes only. It is not a medical diagnostic tool and should not be used for clinical decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};