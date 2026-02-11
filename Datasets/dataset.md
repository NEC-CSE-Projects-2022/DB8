# 🫁 Lightweight Attention-Enhanced Lung Cancer Detection  
### MobileNetV2-Based Multiclass Classification Using CT Scan Images

![Python](https://img.shields.io/badge/Python-3.x-blue)
![TensorFlow](https://img.shields.io/badge/Framework-TensorFlow/Keras-orange)
![Model](https://img.shields.io/badge/Model-MobileNetV2-green)
![Accuracy](https://img.shields.io/badge/Accuracy-96%25-brightgreen)

---

## 📌 Overview

This project presents a lightweight deep learning framework for **multiclass lung cancer classification** using CT scan images.

The proposed system is built on **MobileNetV2 enhanced with attention mechanisms**, designed to provide:

- High classification accuracy  
- Low computational cost  
- Strong generalization  
- Clinical interpretability using Explainable AI  

The model classifies CT scan images into four categories:

- 🧬 Adenocarcinoma (ADC)  
- 🧬 Large Cell Carcinoma (LCC)  
- 🧬 Squamous Cell Carcinoma (SCC)  
- ✅ Normal (NML)  

Final achieved accuracy: **96%**

---

## 👨‍💻 Authors

- Dodda Venkatreddy  
- Akhil Duddi  
- Silar Shaik  
- Paleti Rahul  
- Jajimoggala Sravanthi  
- Vippalapalli Vikas  
- K.V. Narasimha Reddy  

Department of CSE  
Narasaraopeta Engineering College, India  

---

## 📂 Dataset

### 📊 Chest CT-Scan Images Dataset

**Source:** Kaggle  
🔗 https://www.kaggle.com/datasets/mohamedhanyyy/chest-ctscan-images  

### Dataset Statistics

| Class | Number of Images |
|--------|------------------|
| Adenocarcinoma | 338 |
| Large Cell Carcinoma | 187 |
| Squamous Cell Carcinoma | 260 |
| Normal | 215 |
| **Total** | **1000** |

---

## 🧠 Model Architecture

### 🔹 Backbone: MobileNetV2

- Pretrained on ImageNet  
- Lightweight and efficient  
- Depthwise Separable Convolutions  
- Inverted Residual Blocks  

### 🔹 Model Pipeline

Input Image (224x224x3)
↓
Preprocessing
↓
MobileNetV2 (Feature Extraction)
↓
Global Average Pooling
↓
Dropout (0.3)
↓
Dense Layer (Softmax - 4 Classes)


---

## 🛠 Preprocessing Steps

- Resize to 224 × 224  
- Convert grayscale to RGB  
- White Balancing  
- CLAHE (Clip Limit: 2.0, Grid: 16x16)  
- Pixel Normalization [0,1]  

These steps enhance contrast, improve feature visibility, and stabilize training.

---

## 📊 Model Performance

### 🔥 Proposed Model (MobileNetV2)

| Metric | Score |
|--------|-------|
| Accuracy | 96% |
| Precision | 0.96 |
| Recall | 0.96 |
| F1-Score | 0.96 |

### 📈 Model Comparison

| Model | Accuracy |
|--------|----------|
| MobileNetV2 | 96% |
| EfficientNetV2 | 95% |
| DenseNet121 | 91% |
| ResNet50 | 84% |

MobileNetV2 achieved the best balance of accuracy and computational efficiency.

---

## 🔍 Explainable AI (XAI)

To improve clinical trust and transparency:

- Grad-CAM  
- LIME  

These techniques highlight important regions in CT scans responsible for predictions.

---

## 🚀 How to Run the Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
