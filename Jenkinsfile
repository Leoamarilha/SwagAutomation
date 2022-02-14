pipeline{

    agent any

    parameters{
        string(name: 'SPEC',defaultValue: "cypress/integration/**/**") , description: "Execução"
        choice(name: 'BROWSER', choices:  ['chrome', 'edge', 'firefox']) , description: "Navegador"
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building the application"
        }

        stage('Testing'){

            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            echo "Deploy the application"
        }
    }
}