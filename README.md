🚀 DB8 – A Lightweight Attention-Enhanced Deep Learning Model
Based on MobileNetV2 for Lung Cancer Detection
👥 Team Information
Project Lead

Akhil Duddi — 23475A0508
🔗 LinkedIn: https://www.linkedin.com/in/akhilduddi

Contribution:

Complete end-to-end project implementation

Dataset selection and preparation

Image preprocessing and enhancement pipeline

MobileNetV2 fine-tuning and optimization

Attention mechanism integration

Model training, validation, and evaluation

Comparative analysis with multiple CNN architectures

Result analysis, documentation, and GitHub setup

Team Members

Shaik Silar — 23475A0512
🔗 LinkedIn: https://www.linkedin.com/in/silar-shaik-5b68552bb/

Contribution:

Literature survey assistance

Dataset understanding and validation support

Result verification and documentation support

Paleti Rahul — 22471A05N6
🔗 LinkedIn: https://www.linkedin.com/in/paleti-rahul/

Contribution:

Model testing assistance

Presentation preparation

Project report formatting

📌 Abstract

Lung cancer is one of the deadliest diseases worldwide due to its high mortality rate and frequent late-stage diagnosis. Early and accurate detection is essential to improve survival outcomes. Computed Tomography (CT) scans play a crucial role in lung cancer diagnosis; however, manual interpretation is time-consuming and prone to variability.

This project presents a lightweight attention-enhanced deep learning framework based on MobileNetV2 for lung cancer detection using CT scan images. Inspired by recent attention-based CNN architectures, the model incorporates an explicit attention mechanism to capture both spatial and channel-wise feature dependencies while maintaining low computational complexity through depthwise separable convolutions.

The framework is trained and evaluated on a Kaggle CT scan dataset consisting of four classes: adenocarcinoma, large cell carcinoma, squamous cell carcinoma, and normal lung tissue. Image enhancement and preprocessing techniques such as resizing, white balancing, CLAHE, and normalization are applied to improve feature visibility and robustness. The proposed approach achieves a classification accuracy of 96%, demonstrating its effectiveness and suitability for real-time and resource-constrained clinical applications.

📖 Reference Paper (Inspiration)

Lung-AttNet: An Attention Mechanism-Based CNN Architecture for Lung Cancer Detection With Federated Learning
Chamak Saha et al., IEEE Access, 2025

This project is inspired by the architectural concepts, attention mechanisms, and preprocessing strategies presented in the Lung-AttNet research paper, while adapting the implementation to a MobileNetV2-based lightweight architecture suitable for academic and practical deployment.

✨ Improvements and Adaptations

Lightweight MobileNetV2 backbone instead of heavier CNNs

Reduced computational cost while maintaining high accuracy

Simplified attention mechanism suitable for single-node training

Strong preprocessing pipeline for CT scan enhancement

Comparative evaluation against EfficientNetV2, DenseNet121, and ResNet50

Designed for easy deployment and academic reproducibility

🧠 About the Project
What the Project Does

Automatically classifies lung CT scan images into:

Adenocarcinoma

Large Cell Carcinoma

Squamous Cell Carcinoma

Normal (Non-cancerous)

Why It Is Useful

Assists radiologists in early lung cancer diagnosis

Reduces diagnostic time and human error

Enables scalable computer-aided diagnosis

Suitable for edge and low-resource environments

System Workflow
CT Scan Image
   ↓
Image Preprocessing
   ↓
Data Augmentation
   ↓
MobileNetV2 Feature Extractor
   ↓
Attention Mechanism
   ↓
Classifier (Softmax)
   ↓
Predicted Lung Cancer Class

📂 Dataset Used

Chest CT-Scan Images Dataset (Kaggle)
🔗 https://www.kaggle.com/datasets/mohamedhanyyy/chest-ctscan-images

Dataset Details
Class	Number of Images
Adenocarcinoma	338
Large Cell Carcinoma	187
Squamous Cell Carcinoma	260
Normal	215
Total	1000
🛠 Technologies & Dependencies

Python 3.x

TensorFlow / Keras

NumPy

Pandas

OpenCV

Matplotlib

Scikit-learn

Google Colab

🔎 EDA & Preprocessing

Image resizing to 224 × 224

RGB channel formatting

White balancing for illumination correction

Contrast Limited Adaptive Histogram Equalization (CLAHE)

Pixel normalization

Data augmentation for improved generalization

🧪 Model Training
Component	Description
Backbone	MobileNetV2 (ImageNet pretrained)
Attention	Spatial and channel-wise attention
Activation	ReLU6
Optimizer	Adam
Loss Function	Categorical Cross-Entropy
Validation	5-Fold Cross Validation
Epochs	10
Platform	Google Colab (GPU)
📊 Model Evaluation
Metrics Used

Accuracy

Precision

Recall

F1-Score

Confusion Matrix

MobileNetV2 Performance
Metric	Value
Accuracy	96%
Precision	0.96
Recall	0.96
F1-Score	0.96
🏆 Results

Achieved 96% accuracy on CT scan classification

Outperformed comparison models:

EfficientNetV2 (95%)

DenseNet121 (91%)

ResNet50 (84%)

Stable training with minimal overfitting

Strong generalization across all four classes

⚠ Limitations & Future Work
Limitations

Limited dataset size

Uses 2D CT slices only

Single-dataset evaluation

Future Enhancements

Larger and more diverse datasets

3D CT volume analysis

Federated learning integration

Explainable AI techniques such as Grad-CAM

Clinical validation studies

🚀 Deployment

Suitable for:

Computer-aided diagnosis systems

Clinical decision support tools

Edge-based medical imaging solutions

👨‍💻 Developed By

Akhil Duddi
Project Lead & Developer
🔗 https://www.linkedin.com/in/akhilduddi
