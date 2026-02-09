# 🚀 DB8 – A Lightweight Attention-Enhanced Deep Learning Model Based on MobileNetV2 for Lung Cancer Detection

---

## 👥 Team Information

### Project Lead  
**Akhil Duddi — 23475A0508**  
🔗 https://www.linkedin.com/in/akhilduddi  

**Contribution**
- Complete end-to-end project implementation  
- Dataset selection and preparation  
- Image preprocessing and enhancement  
- MobileNetV2 fine-tuning and optimization  
- Attention mechanism integration  
- Model training, validation, and evaluation  
- Comparative analysis with multiple CNN architectures  
- Result analysis, documentation, and GitHub setup  

### Team Members

**Shaik Silar — 23475A0512**  
🔗 https://www.linkedin.com/in/silar-shaik-5b68552bb/  
Contribution: Literature survey assistance, dataset validation, documentation support  

**Paleti Rahul — 22471A05N6**  
🔗 https://www.linkedin.com/in/paleti-rahul/  
Contribution: Model testing assistance, presentation preparation, report formatting  

---

## 📌 Abstract

Lung cancer is one of the most fatal diseases worldwide due to its high mortality rate and frequent late-stage diagnosis. Early and accurate detection plays a vital role in improving patient survival. Computed Tomography (CT) scans are widely used for lung cancer diagnosis, but manual analysis is time-consuming and prone to inconsistencies.

This project proposes a lightweight attention-enhanced deep learning framework based on MobileNetV2 for lung cancer detection using CT scan images. Inspired by recent attention-based CNN architectures, the model integrates an explicit attention mechanism to capture spatial and channel-wise feature dependencies while maintaining low computational complexity through depthwise separable convolutions.

The framework is trained and evaluated on a Kaggle CT scan dataset containing four classes: adenocarcinoma, large cell carcinoma, squamous cell carcinoma, and normal lung tissue. Image preprocessing techniques such as resizing, white balancing, CLAHE, and normalization improve robustness and feature visibility. The proposed model achieves a classification accuracy of 96%, demonstrating its effectiveness for real-time and resource-constrained clinical applications.

---

## 📖 Reference Paper (Inspiration)

**Lung-AttNet: An Attention Mechanism-Based CNN Architecture for Lung Cancer Detection With Federated Learning**  
Chamak Saha et al., IEEE Access, 2025

This project is inspired by the architectural concepts, attention mechanisms, and preprocessing strategies introduced in the Lung-AttNet research paper, while adapting the implementation to a MobileNetV2-based lightweight architecture suitable for academic and practical deployment.

---

## ✨ Improvements and Adaptations

- Lightweight MobileNetV2 backbone instead of heavy CNN models  
- Reduced computational cost with high classification accuracy  
- Simplified attention mechanism for single-node training  
- Robust CT scan preprocessing pipeline  
- Comparative evaluation against EfficientNetV2, DenseNet121, and ResNet50  
- Easy to deploy and reproduce  

---

## 🧠 About the Project

### What It Does
- Classifies lung CT scan images into:
  - Adenocarcinoma  
  - Large Cell Carcinoma  
  - Squamous Cell Carcinoma  
  - Normal (Non-cancerous)

### Why It Matters
- Assists radiologists in early diagnosis  
- Reduces diagnostic time and human error  
- Enables automated computer-aided diagnosis  
- Suitable for edge and low-resource environments  

### Workflow

