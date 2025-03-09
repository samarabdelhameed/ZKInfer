# ZKInfer Backend Application

## Table of Contents
- [Overview](#overview)
- [Python Version](#python-version)
- [Installation](#installation)
- [Virtual Environment](#virtual-environment)
- [Installing Dependencies](#installing-dependencies)
- [Running the Application](#running-the-application)

## Overview
The **ZKInfer Backend Application** provides a robust and scalable backend infrastructure designed for high-performance API handling. This backend is built using **FastAPI** and ensures efficiency, security, and maintainability through best practices in modern backend development.

## Python Version
This project requires **Python 3.12** or later. Ensure that your system has the correct Python version installed by running:

```bash
python --version
```

If you need to install Python, download it from the [official Python website](https://www.python.org/downloads/).

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/zkinfer.git
    cd zkinfer
    ```

2. **Install Poetry:**
   Poetry is used for dependency management. Install it via:
    ```bash
    curl -sSL https://install.python-poetry.org | python3 -
    ```
   Or using pip:
    ```bash
    pip install poetry
    ```

## Virtual Environment
Poetry handles virtual environments automatically. To create and activate the environment, run:

```bash
poetry shell
```
To exit the virtual environment, simply type `exit`.

## Installing Dependencies
To install all required dependencies specified in `pyproject.toml`, run:

```bash
poetry install
```
This will ensure that all necessary packages and libraries are installed correctly.

## Running the Application
To start the FastAPI backend server, navigate to the backend directory and run:

```bash
cd backend
uvicorn main:app --reload --port=8000
```

This command will launch the application in **development mode**, enabling automatic reloading for changes.

### Accessing the API
Once the server is running, you can access the interactive API documentation at:
- **Swagger UI:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc:** [http://localhost:8000/redoc](http://localhost:8000/redoc)

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and open a pull request.

```bash
git checkout -b feature-branch
git commit -m "Added new feature"
git push origin feature-branch
```

## License
This project is licensed under the **MIT License**.

## Contact
For inquiries or support, reach out via:
- **Email:** your@email.com
- **GitHub Issues:** [https://github.com/your-repo/zkinfer/issues](https://github.com/your-repo/zkinfer/issues)

---
🚀 **Start building with the ZKInfer Backend Application today!**

