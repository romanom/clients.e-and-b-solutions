def workId = "workspace\\EandBSolutions\\${env.BRANCH_NAME}"

lock("Lock") {
    node{
        ws(workId) {
            stage("Checkout"){
                deleteDir()
                echo "I am starting checking out"
                checkout scm
                echo "I am done checking out"
            }
        }
    }
}