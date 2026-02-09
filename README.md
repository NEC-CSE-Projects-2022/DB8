
---

## 📂 Dataset Used

**Chest CT-Scan Images Dataset (Kaggle)**  
🔗 https://www.kaggle.com/datasets/mohamedhanyyy/chest-ctscan-images

### Dataset Details
| Class | Number of Images |
|-------|------------------|
| Adenocarcinoma | 338 |
| Large Cell Carcinoma | 187 |
| Squamous Cell Carcinoma | 260 |
| Normal | 215 |
| **Total** | **1000** |

---

## 🛠 Technologies & Dependencies

- **Python 3.x**
- **TensorFlow / Keras**
- NumPy
- Pandas
- OpenCV
- Matplotlib
- Scikit-learn
- Google Colab

---

## 🔎 EDA & Preprocessing

1. **Image resizing** to 224 × 224
2. **RGB channel formatting**
3. **White balancing** for illumination correction
4. **Contrast Limited Adaptive Histogram Equalization (CLAHE)**
5. **Pixel normalization**
6. **Data augmentation** for improved generalization

---

## 🧪 Model Training

| Component | Description |
|-----------|-------------|
| **Backbone** | MobileNetV2 (ImageNet pretrained) |
| **Attention** | Spatial and channel-wise attention |
| **Activation** | ReLU6 |
| **Optimizer** | Adam |
| **Loss Function** | Categorical Cross-Entropy |
| **Validation** | 5-Fold Cross Validation |
| **Epochs** | 10 |
| **Platform** | Google Colab (GPU) |

---

## 📊 Model Evaluation

### Metrics Used
- Accuracy
- Precision
- Recall
- F1-Score
- Confusion Matrix

### MobileNetV2 Performance
| Metric | Value |
|--------|-------|
| **Accuracy** | **96%** |
| Precision | 0.96 |
| Recall | 0.96 |
| F1-Score | 0.96 |

---

## 🏆 Results

- Achieved **96% accuracy** on CT scan classification
- **Outperformed comparison models**:
  - EfficientNetV2 (95%)
  - DenseNet121 (91%)
  - ResNet50 (84%)
- Stable training with minimal overfitting
- Strong generalization across all four classes

---

## ⚠ Limitations & Future Work

### Limitations
- Limited dataset size
- Uses 2D CT slices only
- Single-dataset evaluation

### Future Enhancements
- Larger and more diverse datasets
- 3D CT volume analysis
- Federated learning integration
- Explainable AI techniques such as Grad-CAM
- Clinical validation studies

---

## 🚀 Deployment

**Suitable for:**
- Computer-aided diagnosis systems
- Clinical decision support tools
- Edge-based medical imaging solutions

---

## 👨‍💻 Developed By

**Akhil Duddi**  
Project Lead & Developer  
🔗 https://www.linkedin.com/in/akhilduddi

---


## 🙏 Acknowledgments

- Kaggle for providing the CT-Scan dataset
- TensorFlow/Keras for deep learning framework
- Google Colab for computational resources
- Research community for inspiration and guidance

---

## 📧 Contact

For questions or collaborations, please contact:
- Akhil Duddi: [LinkedIn](https://www.linkedin.com/in/akhilduddi)
- Project Repository: [GitHub](https://github.com/yourusername/DB8-Lung-Cancer-Detection)

---

**⭐ If you find this project useful, please consider giving it a star on GitHub!**
