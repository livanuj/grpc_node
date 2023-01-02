# gRPC in Node

## Install yarn in local machine

Please follow the link to install yarn in your machine

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-the-yarn-package-manager-for-node-js

Once yarn is installed, you need to install some grpc packages. You don't need to download the protoc files manually.

```
yarn add --dev @grpc/grpc-js @grpc/proto-loader typescript ts-node
```

## Script
The bash script that we need to run is stored in `proto-gen.sh` file in root folder.

You just need to run following command to run the script

```
yarn proto:gen
```

## Start Server
To start the server -
```
yarn server
```
you should see `Your server has started on port 3030`
the server is up and is ready to communicate with client.

to stop the server press 'ctrl + c'

## Clients
To start the client,

```
yarn client "your_name"
```
will sent the your_name value to the server
server will print out the received params
client will print out the greeting message received from the server
