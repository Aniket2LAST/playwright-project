pipeline {
    agent any

    tools {
        nodejs 'Nodejs'  // Must match the name you added earlier
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Aniket2LAST/playwright-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'  // use 'npm install' if needed
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'
                sh 'npx playwright test'
            }
        }

        stage('Archive Results') {
            steps {
                junit 'test-results/*.xml' // if using JUnit-style reporting
            }
        }
    }
}
