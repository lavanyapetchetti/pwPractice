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

        stage('Publish Test Results') {
            steps {
                junit 'test-results/*.xml'  // Ensure your Playwright test results are exported as JUnit XML
            }
        }

        stage('Publish Playwright Report') {
            steps {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
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
