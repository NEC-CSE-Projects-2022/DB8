import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Upload, FileImage, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Progress } from '../components/ui/progress';
import { Alert, AlertDescription } from '../components/ui/alert';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Test = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    } else {
      setError('Please select a valid image file (PNG, JPG, JPEG)');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(`${API}/predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Error analyzing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  const getColorForClass = (className) => {
    if (className === 'Normal') return 'text-green-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Test Your CT Scan
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Upload a chest CT scan or X-ray image to analyze for lung cancer detection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="border-slate-200" data-testid="upload-card">
              <CardHeader>
                <CardTitle>Upload Image</CardTitle>
                <CardDescription>Select or drag & drop a CT scan or X-ray image</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                    isDragging
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-slate-300 hover:border-teal-400'
                  }`}
                  data-testid="upload-dropzone"
                >
                  {preview ? (
                    <div className="space-y-4">
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-64 object-contain rounded-lg border border-slate-200"
                        data-testid="image-preview"
                      />
                      <p className="text-sm text-slate-600">{selectedFile.name}</p>
                      <Button
                        variant="outline"
                        onClick={handleReset}
                        data-testid="reset-button"
                        className="w-full"
                      >
                        Choose Different Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium mb-2">
                          Drag & drop your image here
                        </p>
                        <p className="text-sm text-slate-500 mb-4">or</p>
                        <label htmlFor="file-upload">
                          <Button asChild data-testid="browse-button">
                            <span className="cursor-pointer">
                              <FileImage className="w-4 h-4 mr-2" />
                              Browse Files
                            </span>
                          </Button>
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          data-testid="file-input"
                        />
                      </div>
                      <p className="text-xs text-slate-500">
                        Supported formats: PNG, JPG, JPEG
                      </p>
                    </div>
                  )}
                </div>

                {error && (
                  <Alert variant="destructive" className="mt-4" data-testid="error-alert">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {selectedFile && !result && (
                  <Button
                    onClick={handleAnalyze}
                    disabled={loading}
                    data-testid="analyze-button"
                    className="w-full mt-6 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white h-12 text-base font-semibold rounded-lg shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze Image'
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            {result ? (
              <Card className="border-slate-200" data-testid="result-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Analysis Complete
                  </CardTitle>
                  <CardDescription>{result.message}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                    <p className="text-sm text-slate-600 mb-2">Predicted Class</p>
                    <p className={`text-3xl font-bold ${getColorForClass(result.predicted_class)}`} data-testid="predicted-class">
                      {result.predicted_class}
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      Confidence: <span className="font-semibold" data-testid="confidence-score">{result.confidence}%</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">All Predictions</h3>
                    <div className="space-y-3">
                      {Object.entries(result.all_predictions)
                        .sort((a, b) => b[1] - a[1])
                        .map(([className, confidence]) => (
                          <div key={className} data-testid={`prediction-${className.toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-slate-700">{className}</span>
                              <span className="font-semibold text-slate-900">{confidence}%</span>
                            </div>
                            <Progress value={confidence} className="h-2" />
                          </div>
                        ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="w-full"
                    data-testid="analyze-another-button"
                  >
                    Analyze Another Image
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-slate-200 h-full flex items-center justify-center" data-testid="placeholder-card">
                <CardContent className="text-center py-12">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileImage className="w-10 h-10 text-slate-400" />
                  </div>
                  <p className="text-slate-600 mb-2">
                    Upload an image to see results
                  </p>
                  <p className="text-sm text-slate-500">
                    Analysis results will appear here
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <Alert className="mt-8 border-amber-200 bg-amber-50" data-testid="disclaimer-alert">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-900">
            <strong>Educational Disclaimer:</strong> This system is for educational purposes only and not intended for clinical diagnosis. 
            Always consult with qualified healthcare professionals for medical advice.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};