## Tarraform

* terraform init
* terraform plan 
* terraform apply
* terraform destroy

## Flux install

export GITHUB_TOKEN=<your-token>
export GITHUB_USER=<your-username>

flux bootstrap github \
--owner=failwin \
--repository=nest-mono-nx-deploy \
--path=clusters/my-cluster \
--private=false \
--personal

flux create source git nest-mono-nx \
--url=https://github.com/failwin/nest-mono-nx \
--branch=main \
--interval=30s \
--export > ./clusters/my-cluster/nest-mono-nx-source.yaml


flux create kustomization nest-mono-nx \
--target-namespace=default \
--source=nest-mono-nx \
--path="./kustomize" \
--prune=true \
--interval=5m \
--export > ./clusters/my-cluster/nest-mono-nx-kustomization.yaml

flux reconcile kustomization nest-mono-nx

## Nginx

kubectl create namespace nginx-ingress

helm repo add nginx-stable https://helm.nginx.com/stable

helm repo update

helm install nginx ingress-nginx/ingress-nginx \
--namespace nginx-ingress \
-f ./terraform/nginx-ingress.yaml

kubectl get services

## SSL

kubectl create namespace cert-manager

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install ssl jetstack/cert-manager  \
--namespace cert-manager \
--version v1.10.1 \
--set startupapicheck.timeout=15m \
--set webhook.timeoutSeconds=30 \
--set installCRDs=true

kubectl get Issuers,ClusterIssuers,Certificates,CertificateRequests,Orders,Challenges --all-namespaces

kubectl delete -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.1/cert-manager.yaml

## Temp

docker build . -t nest-mono-nx:base

docker build . -t nest-mono-nx-api:base
