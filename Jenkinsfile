def workId = "workspace\\EandBSolutions\\${env.BRANCH_NAME}"
def projectName = "EandBSolutions"

node{
    ws(workId) {
        stage("Checkout"){
            deleteDir()
            checkout scm
        }
        stage("Build for Publishing"){
            bat "msbuild ${projectName}.csproj /p:VisualStudioVersion=14.0 /p:Configuration=Release /p:OutDir=&quot;PublishedSite&quot;"
            bat "dir PublishedSite\_PublishedWebsites\${projectName}"
        }
    }
}