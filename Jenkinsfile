pipeline {
    agent any

    environment {
       VAULT_TOKEN = credentials('vault-token-id')
    }

    tools {
        nodejs 'Node_23'
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Set up Node.js') {
            steps {
                script {
                    def nodeExists = sh(script: 'which node', returnStatus: true) == 0
                    if (!nodeExists) {
                        sh "nvm install ${NODE_VERSION}"
                        sh "nvm use ${NODE_VERSION}"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Build completed. Check archived artifacts for logs and test results.'
            cleanWs() // Clean workspace after build
        }
        success {
            echo "Tests completed successfully!"
        }
        failure {
            echo "Tests failed. Check the Playwright report for details."
        }
    }
}
