Getting Started with docker
1. Install docker from hub.docker.com make sure that you signup before installing docker
2. Now create your express server and create Dockerfile
3. Dockerfile contains all the dependencies,modules of your application to build/create the image
4. import any docker image, in our case we are using express so we are using node
5. Specify all the commands as what done in Dockerfile by me
6. Then to build the image using --> docker build -tag <name_of_your_image> <your_base_directory>
7. To list all the images use --> docker images
8. To remove the image use --> docker rmi <image_name> OR docker image rm <image_name OR image_id>
9. Now run docker image as a container use --> docker run -p [localhost_port_no,container_port_no] -d --name <give_container_name> <image_name>
10. To list all the containers use --> docker ps -a
11. To list all the running container use --> docker ps
12. To start the container use --> docker start         and to stop use --> docker stop
13. To remove the container use --> docker rm <container_name> -f
13. To create a copy of image to new image use --> docker tag <existing_image_name> <new_image_name>
14. To push the image to the docker hub create a repository on docker platform and from your CLI type --> docker push <your-create-repo_name>
15. To pull the image from the docker hub use --> docker pull <your-create-repo_name>