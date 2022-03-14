pipeline {
    agent any 
    stages {
        stage('Publishing'){
            steps {
                sh "sudo cp -r /var/lib/jenkins/workspace/field-app/* /var/www/field-app/"
            }
        }
        stage('Restart Service'){
            steps{
                sh 'sudo systemctl restart field-app'
            }
        }
        stage('Restart Mongodb Service'){
            steps{
                sh 'sudo systemctl restart mongod'
            }
        }
    }
}