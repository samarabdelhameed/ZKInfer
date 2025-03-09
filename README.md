# ZKInfer

## Introduction
ZKInfer is an advanced **Zero-Knowledge Machine Learning (ZKML)** framework designed to enable verifiable and privacy-preserving machine learning computations. By leveraging **Zero-Knowledge Proofs (ZKPs)** and **Recursive GKR Compression**, ZKInfer ensures that machine learning models can be executed in a decentralized environment while maintaining security, transparency, and computational efficiency.

## Problem Statement
Traditional machine learning execution presents several challenges:
- **Lack of Transparency:** Users cannot verify if ML computations were executed correctly.
- **High Computational Costs:** Running ML models on blockchain is impractical due to resource limitations.
- **Privacy Risks:** Sensitive data can be exposed when executing ML inferences on centralized platforms.
- **Limited On-Chain Verification:** Current blockchain-based AI solutions struggle with efficiently verifying ML model executions.

## Solution: ZKInfer
ZKInfer introduces a novel approach to **trustless, decentralized ML inference verification** by combining:
- **Zero-Knowledge Proofs (ZKPs):** Enables cryptographic verification of ML inferences without revealing private data.
- **GKR-based Proof Compression:** Reduces computational overhead for scalable proof generation.
- **Blockchain Integration:** Allows smart contracts to verify ML computations on-chain efficiently.
- **Secure and Efficient Execution:** Provides a streamlined method for running and verifying ML models without centralized intermediaries.

## Key Features
✅ **Zero-Knowledge Proofs for ML Execution**  
✅ **Recursive GKR Compression for Optimized Proof Generation**  
✅ **Supports ONNX-Based Machine Learning Models**  
✅ **Blockchain-Compatible Smart Contract Verifier**  
✅ **Efficient Finite Field Representation for Floating-Point Computations**  
✅ **Scalability for Large-Scale ML Inference Verification**  

## Use Cases
- **Decentralized Finance (DeFi):** Verifiable ML-based financial risk modeling.
- **Privacy-Preserving AI:** Secure machine learning inference in healthcare and finance.
- **Blockchain-Based AI Services:** Trustless ML verification for decentralized applications.
- **Fraud Detection:** Secure verification of fraud detection algorithms.
- **On-Chain Computation Verification:** Smart contracts validating ML inferences on Ethereum or Layer 2 solutions.

---
## How It Works
ZKInfer follows a structured pipeline to ensure secure and efficient ML inference verification.

### 1. Model Execution
- Load an **ONNX model** and preprocess input data.
- Execute inference using **NumPy & ONNX Runtime**.
- Convert computational graph into a proof-compatible format.

### 2. Proof Generation
- Apply **Recursive GKR Compression** to generate a minimal proof.
- Map floating-point numbers into finite-field representations.
- Generate a **Zero-Knowledge Proof (ZKP)** for ML execution.

### 3. On-Chain Verification
- Submit the **ZKP proof** to a blockchain smart contract.
- Verify the proof within the smart contract without executing the full ML model on-chain.
- If the proof is valid, the blockchain confirms the correctness of the ML inference.

## Installation
ZKInfer requires **Python 3.8+** and **Poetry** for dependency management.

```sh
# Install Poetry
pip install poetry

# Clone the repository
git clone https://github.com/your-repo/zkinfer.git
cd zkinfer

# Install dependencies
poetry install

# Activate virtual environment
poetry shell
```

## Running ZKInfer
To test the framework with a sample ONNX model:
```sh
python main.py
```

To enable **Recursive GKR Compression**, run:
```sh
USE_PCS=1 python main.py
```

To generate an **on-chain verifier proof**, run:
```sh
USE_NOIR=1 python main.py
```

## Architecture Workflow
Below is the high-level overview of the ZKInfer process:

1️⃣ **User provides ML input data**  
2️⃣ **ML model processes the input (ONNX)**  
3️⃣ **Recursive GKR Compression generates a proof**  
4️⃣ **ZK-SNARK Proof is created**  
5️⃣ **Smart contract verifies the proof on blockchain**  
6️⃣ **Result is validated as a correct ML inference**  

## Technical Details
### Proof System
ZKInfer leverages **ZK-SNARKs & Recursive GKR Compression** to provide an efficient, scalable approach to ML inference verification.

### Finite Field Representation
Floating-point numbers are converted into finite fields using **modular arithmetic (BLS12-381 curve)** for cryptographic consistency.

### On-Chain Verifier
The Solidity-based smart contract ensures that ML inferences are validated on **Ethereum, Layer 2 chains, or BEAM Chain** without requiring full model execution on-chain.

### Performance Enhancements
- **Optimized proof size with Recursive GKR Compression.**
- **Parallel computation support for large-scale ML models.**
- **Noir DSL integration for efficient verifiable computations.**

## License
ZKInfer is licensed under the **MIT License**.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

```sh
git checkout -b feature-branch
git commit -m "Add new feature"
git push origin feature-branch
```

## Contact
For inquiries, reach out via:
- **Email:** 
- **Twitter:** [@your_handle]()
- **GitHub Issues**

---
🚀 **Join us in shaping the future of verifiable AI and blockchain!**