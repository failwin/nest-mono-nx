docker build . -t nest-mono-nx:base

docker build . -t nest-mono-nx-api:base


aws eks update-kubeconfig --name test


1. EKS Cluster AIM role 
2. EKS EC2 nodes role
	https://ostechnix.com/add-worker-nodes-to-amazon-eks-cluster/
	We need to have 3 policies selected for provisioning worker nodes from Amazon EC2.

	AmazonEKSWorkerNodePolicy
	AmazonEKS_CNI_Policy
	AmazonEC2ContainerRegistryReadOnly


kubectl create namespace nginx-ingress

helm install test ingress-nginx/ingress-nginx \
-f nginx-ingress.yaml \
--namespace nginx-ingress

kubectl get services
